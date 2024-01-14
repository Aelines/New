export default class HashTable<T> {
  private readonly table: { [key: string]: T };

  constructor() {
    this.table = {};
  }

  private generateHash(key: string): string {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) + key.charCodeAt(i);
      hash = hash & hash;
      hash = Math.abs(hash);
    }
    return hash.toString();
  }

  set(key: string, value: T): void {
    const hashKey = this.generateHash(key);
    this.table[hashKey] = value;
  }

  get(key: string): T | undefined {
    const hashKey = this.generateHash(key);
    return this.table[hashKey];
  }
  delete(key: string): void {
    const hashKey = this.generateHash(key);
    delete this.table[hashKey];
  }
  has(key: string): boolean {
    const hashKey = this.generateHash(key);
    return this.table.hasOwnProperty(hashKey);
  }
}
