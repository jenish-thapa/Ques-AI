import { axiosInstance } from ".";
// import { cookieParser } from "cookie-parser";

function getToken() {
  const token = localStorage.getItem("token");
  if (token) return token;
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
      localStorage.setItem("token", response.data.token);
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
