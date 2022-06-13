import axios from 'axios';
import { getUrlBuilder } from 'helpers/buildUrl';

const BASE_URL = 'https://opentdb.com/';

const axiosInstance = axios.create({
  baseURL: 'BASE_URL',
});

const buildUrl = getUrlBuilder(BASE_URL);

export const QuestionService = {
  getQuestions: async () => {
    const resp = await axiosInstance.get(
      buildUrl('api.php', {
        amount: '10',
        difficulty: 'hard',
        type: 'boolean',
      })
    );
    return resp.data.results;
  },
};
