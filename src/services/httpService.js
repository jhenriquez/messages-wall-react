import * as popsicle from 'popsicle';

export default class HttpService {
  get(url: string): Promise<any> {
    return popsicle.get(url);
  }

  post(url: string, data: any): Promise<any> {
    return popsicle.post(url, data).use(popsicle.plugins.parse('json'));
  }
}