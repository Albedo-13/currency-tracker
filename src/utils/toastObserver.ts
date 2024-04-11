class Observable {
  private observers: ((data?: string) => unknown)[];

  constructor() {
    this.observers = [];
  }

  subscribe(func: (...args: any[]) => unknown) {
    this.observers.push(func);
  }

  unsubscribe(func: (...args: any[]) => unknown) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: string) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default new Observable();
