import { axiosInstance } from ".";
import Cookies from "js-cookie";

function getToken() {
  if (document.cookie) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === "token") {
        return value;
      }
    }
  }
  return null;
}

// signup
export const RegisterUser = async (value) => {
  try {
    const response = await axiosInstance.post("/api/users/signup", value);
    return response.data;
  } catch (error) {
    return { success: false, message: "An error occurred" };
  }
};

// login
export const LogInUser = async (value) => {
  try {
    const response = await axiosInstance.post("/api/users/signin", value);
    console.log(response.data);
    if (response.data.success) {
      Cookies.set("token", response.data.token, {
        expires: 1,
      });
    }

    return response.data;
  } catch (error) {
    return { success: false, message: "An error occurred" };
  }
};

// Get current user from the backend
export const GetCurrentUser = async () => {
  try {
    const token = getToken();
    console.log(token);

    if (!token) {
      return;
    }

    const response = await axiosInstance.get("api/users/get-current-user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
