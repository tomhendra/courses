export class Attributes<T> {
  constructor(private data: T) {}

  // generic constraint on method
  // type of K an only ever be one of the keys of T
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
