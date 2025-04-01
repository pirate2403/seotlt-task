export class LocalStorageApi {
  constructor(private _storageKey: string) {}

  async create<T>(data: T): Promise<T> {
    await this._delay();
    const storedData = this._getData<T>();
    this._setData([...storedData, data]);
    return data;
  }

  async read<T>(): Promise<T[]> {
    await this._delay();
    return this._getData<T>();
  }

  async readById<T extends { id: string }>(id: string): Promise<T> {
    await this._delay();
    const storedData = this._getData<T>();
    const filteredData = storedData.find((item) => item.id === id);
    if (!filteredData) throw new Error('Not found');
    return filteredData;
  }

  async update<T extends { id: string }>(id: string, updatedData: Partial<T>): Promise<T> {
    await this._delay();
    const storedData = this._getData<T>();
    const index = storedData.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('Not found');
    storedData[index] = { ...storedData[index], ...updatedData };
    this._setData(storedData);
    return storedData[index];
  }

  async delete<T extends { id: string }>(id: string): Promise<void> {
    await this._delay();
    const storedData = this._getData<T>();
    const filteredData = storedData.filter((item) => item.id !== id);
    this._setData(filteredData);
  }

  private _delay(): Promise<void> {
    const randomDelay = Math.floor(Math.random() * 500) + 100;
    return new Promise((resolve) => setTimeout(resolve, randomDelay));
  }

  private _getData<T>(): T[] {
    const data = localStorage.getItem(this._storageKey);
    if (!data) return [];
    return JSON.parse(data);
  }

  private _setData<T>(data: T): void {
    localStorage.setItem(this._storageKey, JSON.stringify(data));
  }
}
