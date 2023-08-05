// components/ProtectedRoute.js

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
//import jwtDecode from "jwt-decode"; // Example library for decoding JWT

const AuthRoute = ({ children }) => {
  const router = useRouter();
  const { loading, error, userInfo } = useSelector((state) => state.auth);

  // Check authentication status here, e.g. by decoding JWT from localStorage

  useEffect(() => {
    if (!userInfo) {
      // Redirect to login page or any other appropriate action
      router.push("/Auth/Login");
    }
  }, [userInfo]);

  return <>{children}</>;
};

export default AuthRoute;
