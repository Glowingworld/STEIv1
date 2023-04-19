// components/ProtectedRoute.js

import { useRouter } from "next/router";
import { useEffect } from "react";
//import jwtDecode from "jwt-decode"; // Example library for decoding JWT

const AuthRoute = ({ children }) => {
  const router = useRouter();

  // Check authentication status here, e.g. by decoding JWT from localStorage
  const token =
    typeof window !== "undefined"
      ? window.localStorage.getItem("access")
      : false;
  const isAuthenticated = token ? true : false;

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login page or any other appropriate action
      router.push("/Auth/Login");
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};

export default AuthRoute;
