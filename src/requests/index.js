import axios from "axios";

const TasksAPI = {
  getTasks: async () => {
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

const QuestionnairesAPI = {
  getQuestionnaires: async () => {
    try {
      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_DELPHI_AUTH_TOKEN}`,
        "Ocp-Apim-Subscription-Key": process.env.REACT_APP_DELPHI_API_KEY,
      };

      const response = await axios.get(
        `${process.env.REACT_APP_DELPHI_API_GATEWAY}/questionnaire/questionnaireresponses/state`,
        { headers }
      );

      return response.data;
    } catch (e) {
      console.error("oops", e);
    }
  },
};

export const API = {
  ...TasksAPI,
  ...QuestionnairesAPI,
};
