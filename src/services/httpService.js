import * as popsicle from 'popsicle';
import status from 'popsicle-status';

export default class HttpService {
  get(url: string): Promise<any> {
    return popsicle.get(url).use(status());
  }

  post(url: string, data: any): Promise<any> {
    return popsicle.post(url, data).use(popsicle.plugins.parse('json')).use(status());
  }
}