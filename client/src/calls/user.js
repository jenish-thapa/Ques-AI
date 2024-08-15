import { axiosInstance } from ".";

// register new user

export const RegisterUser = async (value) => {
  console.log(value);

  try {
    const response = await axiosInstance.post(
      "http://localhost:8000/api/users/signup",
      value
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
