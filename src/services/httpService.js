import * as popsicle from 'popsicle';

export default class HttpService {
  get(url) {
    return popsicle.get(url);
  }

  post(url, data) {
    return popsicle.post(url, data).use(popsicle.plugins.parse('json'));
  }
}