import { useColorThemeStyle } from "@hooks/useColorThemeStyle";
import SnackBar from "@widgets/snackBar/SnackBar";
import { Tooltip } from "minus-test";
import { useLayoutEffect, useState } from "react";
import logo from "../../assets/minus.png";
import "./login.scss";

interface Props {
  handleLogin: (email, password) => Promise<{ data; error }>;
}
export default function Login({ handleLogin }: Props) {
  const colorScheme = useColorThemeStyle();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useLayoutEffect(() => {
    return () => {
      SnackBar.unmount();
    };
  }, []);

  return (
    <div className="loginBox">
      <img style={{ ...colorScheme.logo }} src={logo} alt="" />
      <p>ID</p>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <p>PASSWORD</p>
      <Tooltip contents={"hi"} bubbleContents={"hello"} isDraggable={true} />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLogin(email, password);
          }
        }}
      />
      <button
        onClick={() => {
          handleLogin(email, password);
        }}
      >
        로그인
      </button>
      <button
        onClick={async () => {
          await SnackBar.error({
            message: <span>It's snackbar!</span>,
            maxCount: Infinity,
            autoCloseTime: "2000ms",
            fontSize: 10,
          });
        }}
      >
        snackbar!
      </button>
    </div>
  );
}
