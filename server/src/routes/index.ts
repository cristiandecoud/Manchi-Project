import { Router } from 'express';
import { homeRoute } from './home';
import { contactRoute } from './contact';
const router = Router();

router.get('/', (req, res) => {
  res.send("Default route");
});

router.use('/home', homeRoute);
router.use('/contact', contactRoute);

export default router;