import Advertiser from '@/core/models/Advertiser';

class AdvertisersService {
  private static advertisers:Advertiser[] = [
    { name: 'PagSeguro', id: 1 },
    { name: 'UOL Ads', id: 2 },
    { name: 'UOL HOST', id: 3 },
  ];

  static async getAdvertisers():Promise<Advertiser[]> {
    return this.advertisers;
  }
}

export default AdvertisersService;
