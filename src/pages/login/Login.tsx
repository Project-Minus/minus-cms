import { useColorThemeStyle } from "@hooks/useColorThemeStyle";
import { useState } from "react";
import "./login.scss";
import logo from "../../assets/minus.png";

interface Props {
  handleLogin: (email, password) => Promise<{ data; error }>;
}
export default function Login({ handleLogin }: Props) {
  const colorScheme = useColorThemeStyle();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
    </div>
  );
}
