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

// post transcript
export const AddTranscript = async (value) => {
  try {
    const response = await axiosInstance.post("/api/transcripts", value);
    return response.data;
  } catch (error) {
    return { success: false, message: "An error occurred" };
  }
};

// delete transcript
export const DeleteTranscript = async (transcriptId) => {
  try {
    const response = await axiosInstance.delete(
      `/api/transcripts/${transcriptId}`
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while deleting the transcript.",
    };
  }
};

// patch transcript
export const PatchTranscript = async (transcriptId, newContent) => {
  try {
    const response = await axiosInstance.patch(
      `/api/transcripts/${transcriptId}`,
      {
        content: newContent,
      }
    );

    return response.data;
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while updating the transcript.",
    };
  }
};
