type ObserverFunction<T> = (data: T) => void;

class Observable<T> {
  private observers: ObserverFunction<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(func: ObserverFunction<T>) {
    this.observers.push(func);
  }

  unsubscribe(func: ObserverFunction<T>) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: T) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default new Observable<string>();
