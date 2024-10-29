import AssetsCell from 'src/components/Asset/AssetsCell'
import {useAuth} from "src/auth";
import {useEffect} from "react";
import {navigate, routes} from "@redwoodjs/router";

const AssetsPage = () => {
  const { isAuthenticated, logIn } = useAuth()

 if (!isAuthenticated) {
      setTimeout(() => {
        navigate(routes.home())
      }, 2000)
    }

  return (
    <>
      {isAuthenticated ? (
      <AssetsCell />
      ) : (
      <div className="m-10 h-64 bg-red-200 rounded-2xl text-2xl text-center">Oops! You need to be logged in to view this page. Redirecting</div>
      )}
    </>
  )
}

export default AssetsPage
