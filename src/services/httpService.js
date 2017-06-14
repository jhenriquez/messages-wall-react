import * as popsicle from 'popsicle';

export default class HttpService {
  get(url: string) {
    return popsicle.get(url);
  }

  post(url: string, data: any) {
    return popsicle.post(url, data).use(popsicle.plugins.parse('json'));
  }
}