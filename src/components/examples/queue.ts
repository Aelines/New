export default class Queue<T> {
  private readonly items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): T | string {
    if (this.items.length === 0) {
      return 'queue is empty';
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.items.shift()!;
  }

  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}
