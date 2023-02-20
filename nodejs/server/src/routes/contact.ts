import { Router } from 'express';

export const contactRoute = Router();

contactRoute.get('/', (req, res) => {
  res.send("Default contact route");
});

contactRoute.get('/detail', (req, res) => {
  res.send("Contact detail route");
});