import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
  const { currentUser, isAuthenticated, logOut } = useAuth()

  return (
    <>
      <header className="relative flex items-center justify-between bg-green-400 px-8 py-4 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-white transition duration-100 hover:text-green-900"
            to={routes.home()}
          >
            SunScore
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:bg-green-900"
                to={routes.assets()}
              >
                Assets
              </Link>
            </li>
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:bg-green-900 "
                to={routes.home()}
              >
                Contact
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div>
                  <button
                    type="button"
                    onClick={logOut}
                    className="m-4 rounded bg-white px-4 py-2 font-bold text-slate-800 shadow-lg shadow-green-800 hover:bg-green-800 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              ) : (
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
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-slate-100">
              Logged in as:{' '}
              <span className="font-semibold text-slate-300">
                {currentUser.email}
              </span>
            </div>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NavLayout
