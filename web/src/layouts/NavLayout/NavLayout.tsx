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
    <div className="min-h-screen flex flex-col">
      <header className="h-32 relative flex items-center justify-between bg-green-400 px-8 py-4 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-slate-900 transition duration-100 hover:text-green-700"
            to={routes.home()}
          >
            SunScore
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <NavLink
                className="text-slate-900 font-bold rounded px-4 py-2 transition duration-100 hover:bg-green-900"
                to={routes.assets()}
                activeClassName="bg-green-900 font-bold rounded px-4 py-2 text-white"
              >
                Assets
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
                  <Link
                    to={routes.login()}
                    className="m-4 rounded bg-white px-4 py-2 font-bold text-slate-800 shadow-lg shadow-green-800 hover:bg-green-800 hover:text-white"
                  >
                    Login
                  </Link>
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
      <main className="flex-grow bg-yellow-100">{children}</main>
      <footer className="bg-green-400 text-slate-900 font-bold p-4 text-center">
        <p>&copy; 2025 SunScore</p>
        <a href="https://philminielly.com" className="hover:underline" rel="noopener">by: Philip Minielly</a>
      </footer>
    </div>
  );
};

export default NavLayout;
