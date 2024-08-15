import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentUser } from "../calls/user";
import { setUser } from "../redux/userSlice";

const ProtectedRoutes = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await GetCurrentUser();
        if (response.success) {
          dispatch(setUser(response.data));
        } else {
          dispatch(setUser(null));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        dispatch(setUser(null));
      } finally {
        setAuthChecked(true);
      }
    };

    getUserData();
  }, [dispatch]);

  if (!authChecked) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
