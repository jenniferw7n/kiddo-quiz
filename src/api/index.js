import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import randomAddition from './services/addition';
import randomAddSubtraction from './services/mixSubtraction';

const baseUrl = import.meta.env.VITE_BASE_URL;

//Creates a base axios instance
const api = axios.create({
    baseURL: baseUrl,
  });
  
//Creates a mock adapter for axios
const adapter = new MockAdapter(api, { delayResponse: 1000 });

// Gets all questions
adapter.onGet('/api/questions').reply(
    (async (config) => {
        const {type, level, numOfQuestions}  = config.params;
        let questions = [];
        if(type==="addition"){
            for(let i=0; i<numOfQuestions; i++){
                let singleQuestion = {...randomAddition(level), id: i};
                questions.push(singleQuestion);
            }
        }
        if(type==="add-sub"){
          for(let i=0; i<numOfQuestions; i++){
            let singleQuestion = {...randomAddSubtraction(level), id: i};
            questions.push(singleQuestion);
        }
        }
      return [200, questions];
    })
  );

export default api;