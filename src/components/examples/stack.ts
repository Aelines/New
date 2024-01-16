export default class Stack<T> {
  private readonly items: T[];

  constructor() {
    this.items = [];
  }

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | string {
    if (this.items.length === 0) {
      return 'stack is empty';
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.items.pop()!;
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}
