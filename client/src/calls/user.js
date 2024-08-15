import { axiosInstance } from ".";

// signup
export const RegisterUser = async (value) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:8000/api/users/signup",
      value
    );
    return response.data;
  } catch (error) {
    return { success: false, message: "An error occurred" };
  }
};

// login
export const LogInUser = async (value) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:8000/api/users/signin",
      value
    );
    return response.data;
  } catch (error) {
    return { success: false, message: "An error occurred" };
  }
};
