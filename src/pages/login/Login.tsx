import { useColorThemeStyle } from "@hooks/useColorThemeStyle";
import { ImageViewer } from "@minus-ui/core";
import SnackBar from "@widgets/snackBar/SnackBar";
import { useLayoutEffect, useState } from "react";
import logo from "../../assets/minus.png";
import "./login.scss";
import "@minus-ui/core/imageViewer";

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
    <div className="loginBox" style={{ marginTop: 500, height: "150vh" }}>
      <img
        style={{ ...colorScheme.logo }}
        src={logo}
        alt=""
        onClick={() => {
          ImageViewer.open({ url: logo });
        }}
      />
      <p>ID</p>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <p>PASSWORD</p>
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
