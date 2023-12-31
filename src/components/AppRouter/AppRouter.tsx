import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { openRoutes, privateRoutes } from "src/components/AppRouter/routes";
import { LoginPage } from "src/pages";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { isAuthSelector, setUser } from "src/redux/slices/authSlice";
import { getUserTokenData } from "src/utils";

import { Header } from "..";

interface RouteType {
  component: () => JSX.Element;
  path: string;
}

const renderRoutes = (routes: RouteType[]) => {
  return routes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));
};

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = getUserTokenData(token);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const isAuth = useAppSelector(isAuthSelector);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(isAuth ? "/main": "/login");
    }
  }, [isAuth, navigate])
  return (
    <Routes>
      {renderRoutes(openRoutes)}

      <Route path="/" element={<Header />}>
        {/* {isAuth && renderRoutes(privateRoutes)} */}
        {renderRoutes(privateRoutes)}
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
