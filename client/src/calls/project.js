import { axiosInstance } from ".";

// add project
export const AddProject = async (value) => {
  try {
    const response = await axiosInstance.post("/api/projects", value);
    return response.data;
  } catch (error) {
    return { success: false, message: "An error occurred" };
  }
};

// get projects
export const GetProject = async (value) => {
  try {
    const response = await axiosInstance.get("/api/projects", {
      params: { createdBy: value },
    });
    return response.data;
  } catch (error) {
    return { success: false, message: "An error occurred" };
  }
};
