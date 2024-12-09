import { queryClient } from "@App";
import { deleteRows } from "@app/supabase/init";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { alpha } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";
import { HeadCell } from "@pages/tables/constants/columns";
import { Database } from "@shared/types/tableType";
import {
  ChangeEvent,
  MouseEvent,
  useDeferredValue,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof Database>(
  order: Order,
  orderBy: Key,
): (a: Database, b: Database) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface EnhancedTableProps {
  columns: Array<HeadCell>;
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: string) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    columns,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: string) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {columns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
interface EnhancedTableToolbarProps {
  tableName: string;
  numSelected: number;
  handleDelete: () => void;
}
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { tableName, numSelected, handleDelete } = props;

  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {tableName}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon onClick={handleDelete} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

interface Props {
  tableName: string;
  rows: Array<Database>;
  columns: Array<HeadCell>;
  selected: Array<string>;
  setSelected: (values: Array<string>) => void;
}
export default function PaginatedTable(props: Props) {
  const { tableName, rows, columns, selected, setSelected } = props;

  const [order, setOrder] = useState<Order>("desc");
  const [orderBy, setOrderBy] = useState<string>("id");
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  const handleRequestSort = (event: MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === "asc";

    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);

      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClickId = (e: MouseEvent, id: string) => {
    e.preventDefault();
    navigate(`columns/${tableName}/${id}`);
  };

  const handleClick = (event: MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected?.indexOf(id);

    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleDelete = () => {
    deleteRows(tableName, "id", selected)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["table", tableName] });
      })
      .catch(console.error);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const visibleRows = useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy as keyof Database))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, order, orderBy, page, rowsPerPage],
  );

  const defferdRows = useDeferredValue(visibleRows);
  const defferdColumns = useDeferredValue(columns);

  return (
    <Box sx={{ width: "100%", height: "80%" }}>
      <Paper sx={{ width: "100%", height: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          tableName={tableName}
          numSelected={selected?.length}
          handleDelete={handleDelete}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750, height: "100%" }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              columns={defferdColumns}
              numSelected={selected?.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {defferdRows.map((row, index) => {
                const isItemSelected = selected?.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        onClick={(event) => handleClick(event, row.id)}
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    {defferdColumns.map((column) => {
                      const convertRow = Array.isArray(row[column.id])
                        ? row[column.id].join(", ")
                        : row[column.id];

                      if (column.id === "id") {
                        return (
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            onClick={(e) => {
                              handleClickId(e, row.id);
                            }}
                          >
                            {row[column.id]}
                          </TableCell>
                        );
                      }
                      return <TableCell padding="none">{convertRow}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
              {defferdRows.length <= 0 && (
                <TableRow
                  style={{
                    height: 600,
                  }}
                >
                  <TableCell style={{ textAlign: "center" }} colSpan={6}>
                    no records found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
