import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}
// generic constraint 'T extends HasId' to ensure whatever data is passed to save() has an id property.
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}
  // fetch returns a promise that will eventually resolve with date
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
