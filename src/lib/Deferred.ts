/**
 * Deferred  ，对 Promise 对一次封装
 *
 * @export
 * @class Deferred
 */
export default class Deferred<T> {
    public resolve!: (value: T) => void;

    public reject!: (reason: any) => void;

    public then: Promise<T>['then'];

    public catch: Promise<T>['catch'];

    public promise: Promise<T>;

    constructor() {
        const pro = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        // 提供 then,catch 2个接口去绑定方法
        this.then = pro.then.bind(pro) as any;
        this.catch = pro.catch.bind(pro);
        // 提供 promise 属性，暴露原始 promise 对象
        this.promise = pro as any;
    }
}
