import AdvertisersService from "../../src/services/advertisers";

const { any } = expect;

describe('AdvertisersService', () => {
  describe('getAdvertisers', () => {
    it('returns a list of advertisers', async () => {
      const advertisers = await AdvertisersService.getAdvertisers();
      expect(advertisers.length).toBeGreaterThan(0);
      expect(advertisers[0].name).toEqual(any(String));
    });
  });
});
