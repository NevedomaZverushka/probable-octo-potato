import axios from "axios";

const TasksAPI = {
  getTasks: async () => {
    // console.log(process.env.REACT_APP_DELPHI_API_KEY);
    try {
      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_DELPHI_AUTH_TOKEN}`,
        "Ocp-Apim-Subscription-Key": process.env.REACT_APP_DELPHI_API_KEY,
      };

      const response = await axios.get(`${process.env.REACT_APP_DELPHI_API_GATEWAY}/notification/tasks`, { headers });

      return response.data;
    } catch (e) {
      console.error("oops", e);
    }
  },
};

export const API = {
  ...TasksAPI,
};
