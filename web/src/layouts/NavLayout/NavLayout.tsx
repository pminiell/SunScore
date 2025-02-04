import { Link, navigate, NavLink, routes } from "@redwoodjs/router";

import { useAuth } from "src/auth";

type NavLayoutProps = {
  children?: React.ReactNode;
};

const NavLayout = ({ children }: NavLayoutProps) => {
  const { currentUser, isAuthenticated, logOut } = useAuth();

  const logOutAndRedirect = async () => {
    await logOut();
    navigate(routes.home());
  };

  return (
    <>
      <header className="h-32 relative flex items-center justify-between bg-green-400 px-8 py-4 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <NavLink
            className="text-white transition duration-100 hover:text-green-900"
            to={routes.home()}
            activeClassName="text-slate-900"
          >
            SunScore
          </NavLink>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <NavLink
                className="rounded px-4 py-2 transition duration-100 hover:bg-green-900"
                to={routes.assets()}
                activeClassName="bg-green-900 rounded px-4 py-2"
              >
                Assets
              </NavLink>
            </li>
            <li>
              <NavLink
                className="rounded px-4 py-2 transition duration-100 hover:bg-green-900 "
                to={routes.home()}
                activeClassName="rounded bg-green-900 px-4 py-2"
              >
                Contact
              </NavLink>
            </li>
            <li>
              {isAuthenticated
                ? (
                  <div>
                    <button
                      type="button"
                      onClick={logOutAndRedirect}
                      className="m-4 rounded bg-white px-4 py-2 font-bold text-slate-800 shadow-lg shadow-green-800 hover:bg-green-800 hover:text-white"
                    >
                      Logout
                    </button>
                  </div>
                )
                : (
                  <NavLink
                    to={routes.login()}
                    className="m-4 rounded bg-white px-4 py-2 font-bold text-slate-800 shadow-lg shadow-green-800 hover:bg-green-800 hover:text-white"
                    activeClassName="bg-green-800"
                  >
                    Login
                  </NavLink>
                )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-slate-900">
              Logged in as:{" "}
              <span className="font-semibold text-slate-900">
                {currentUser.email}
              </span>
            </div>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default NavLayout;
