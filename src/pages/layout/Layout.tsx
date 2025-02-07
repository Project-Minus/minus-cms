import { supabase } from "@app/supabase/init";
import "./layout.scss";
import Login from "@pages/login/Login";
import { DashboardLayout } from "@toolpad/core";
import { useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const handleLogin = async (email: string, password: string) => {
    const authKey = import.meta.env.VITE_SUPABASE_STORAGE_KEY;
    //로그인
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data?.user) {
      setIsLogin(true);
      window.sessionStorage.setItem(authKey, JSON.stringify(data.session));
    } else {
      alert("로그인 실패, 아이디 / 비밀번호 확인 요망");
    }
    return { data, error };
  };

  const handleLogout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate("/", { replace: true });
      setIsLogin(false);
    }
  }, [navigate]);

  useEffect(() => {
    const authKey = import.meta.env.VITE_SUPABASE_STORAGE_KEY;
    const hasKey = window.sessionStorage.getItem(authKey);
    if (hasKey) {
      setIsLogin(true);
    }
  }, [handleLogout]);

  useEffect(() => {
    const authKey = import.meta.env.VITE_SUPABASE_STORAGE_KEY;
    const sesstionData = window.sessionStorage.getItem(authKey);
    if (!sesstionData) {
      handleLogout();
    }
  }, [handleLogout]);

  return (
    <>
      {isLogin ? (
        <DashboardLayout>
          <button
            style={{ position: "fixed", top: 12, right: 80, zIndex: "10000" }}
            onClick={() => {
              handleLogout();
            }}
          >
            로그아웃
          </button>
          <Outlet />
        </DashboardLayout>
      ) : (
        <Login handleLogin={handleLogin}></Login>
      )}
    </>
  );
}
