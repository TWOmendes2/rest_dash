import css from "./Layout.module.css";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {

  const { pathname } = useLocation()


  return (
    <div className={css.container}>
      <Sidebar />


      {/* making the dashboard as the default route */}
      {pathname === "/" && <Navigate to="/dashboard" replace />}


      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>

          <span>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(new Date())}</span>

          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Busca indisponível nesta demonstração" disabled aria-label="Busca indisponível" />
          </div>

          <div className={css.profile}>
            <img src="./profile.jpeg" alt="person image" />
            <div className={css.details}>
              <span>Usuário Demo</span>
              <span>demo@example.invalid</span>
            </div>
          </div>


        </div>


        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
