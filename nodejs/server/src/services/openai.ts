import { Configuration, OpenAIApi } from 'openai';
import {AxiosResponse} from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const getCode = (prompt: string, temperature: string = '0.5'): Promise<AxiosResponse> => {
  const completion = openai.createCompletion({
    model: "code-davinci-002",
    prompt: prompt,
    temperature: parseInt(temperature),
  });
  return completion 
}

export const getText = (prompt: string, temperature: string = '0.5') => {
  const completion = openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: parseInt(temperature),
  });
  return completion 
}

