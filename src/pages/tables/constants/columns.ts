export interface HeadCell {
  id: string;
  label: string;
  numeric: boolean;
  disablePadding: boolean;
}
export const dataColumn: { [key: string]: Array<HeadCell> } = {
  article: [
    { id: "id", label: "ID", numeric: false, disablePadding: true },
    { id: "title", label: "Title", numeric: false, disablePadding: true },
    {
      id: "description",
      label: "Description",
      numeric: false,
      disablePadding: true,
    },
    {
      id: "created_at",
      label: "Created At",
      numeric: false,
      disablePadding: true,
    },
    {
      id: "category",
      label: "Category",
      numeric: false,
      disablePadding: true,
    },
  ],
  category: [
    { id: "id", label: "ID", numeric: false, disablePadding: true },
    { id: "name", label: "Name", numeric: false, disablePadding: true },
    {
      id: "description",
      label: "Description",
      numeric: false,
      disablePadding: true,
    },
    {
      id: "sub_category",
      label: "Sub Category",
      numeric: false,
      disablePadding: true,
    },
    {
      id: "created_at",
      label: "Created At",
      numeric: false,
      disablePadding: true,
    },
  ],
  user: [
    { id: "id", label: "ID", numeric: false, disablePadding: true },
    { id: "name", label: "Name", numeric: false, disablePadding: true },
    { id: "age", label: "Age", numeric: false, disablePadding: true },
    {
      id: "email",
      label: "Email",
      numeric: false,
      disablePadding: true,
    },
    {
      id: "created_at",
      label: "Created At",
      numeric: false,
      disablePadding: true,
    },
  ],
};
