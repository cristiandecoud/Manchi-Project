import { Router } from 'express';
import { getCode } from '../services/openai';

export const homeRoute = Router();

homeRoute.get('/', (req, res) => {
  res.send("Default home route");
});


homeRoute.get('/code', async (req, res) => {
  const prompt = req.query.prompt as string;
  const temperature = req.query.temperature as string;
  try {
    const resp = await getCode(prompt, temperature);
    res.status(200).json(resp.data.choices[0].text);
  } catch (error) {
    console.log(error);
  }
});

homeRoute.get('/text', async (req, res) => {
  const prompt = req.query.prompt as string;
  const temperature = req.query.temperature as string;
  try {
    const resp = await getCode(prompt, temperature);
    res.status(200).json(resp.data.choices[0].text);
  } catch (error) {
    console.log(error);
  }
});

