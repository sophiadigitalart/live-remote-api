
declare var require: (string) => any;

interface Action {(): void}
interface NodeCallback {(err: string, value: any): void}
interface ValueCallback {(value: any): void}
