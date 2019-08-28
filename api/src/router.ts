import { Router } from 'express';
import AdvertisersService from './services/advertisers';

const router = Router();

router.get('/', (req, res ) => {
  res.send('okay');
});

router.get('/lista', async (req, res) => {
  try {
    const advertisers = await AdvertisersService.getAdvertisers();
    res.send(advertisers);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
