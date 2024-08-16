import { axiosInstance } from ".";

// get transcript
export const GetTranscript = async (value) => {
  try {
    const response = await axiosInstance.get("/api/transcripts", {
      params: { projectId: value },
    });
    return response.data;
  } catch (error) {
    return { success: false, message: "An error occurred" };
  }
};
