import { Router } from 'express';

const router = Router();

router.get('/', (req, res ) => {
  res.send('okay');
});

router.get('/lista', (req, res) => {
  try {
    throw new Error('deu pau');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
