import * as Methods from './methods';

/**
 * AsyncArray Class
 *
 * @class AsyncArray
 * @extends {Array<T>}
 * @template T
 */
export class AsyncArray<T> extends Array<T> {
  /**
   * Creates an instance of AsyncArray
   * @param {...T[]} args
   * @memberof AsyncArray
   */
  constructor(...args: T[]) {
    super(...args);
  }

  /**
   * Async Every method
   *
   * @param {Methods.CallBackFilter<T>} cb
   * @returns {Promise<boolean>}
   * @memberof AsyncArray
   */
  async aEvery(cb: Methods.CallBackFilter<T>): Promise<boolean> {
    return Methods.every<T>(this, cb);
  }

  /**
   * Async Filter method
   *
   * @param {Methods.CallBackFilter<T>} cb
   * @returns {Promise<T[]>}
   * @memberof AsyncArray
   */
  async aFilter(cb: Methods.CallBackFilter<T>): Promise<AsyncArray<T>> {
    return new AsyncArray(...(await Methods.filter<T>(this, cb)));
  }

  /**
   * Async find method
   *
   * @param {Methods.CallBackFind<T>} cb
   * @returns {Promise<T | undefined>}
   * @memberof AsyncArray
   */
  async aFind(cb: Methods.CallBackFind<T>): Promise<T | undefined> {
    return Methods.find<T>(this, cb);
  }

  /**
   * Async findIndex method
   *
   * @param {Methods.CallBackFindIndex<T>} cb
   * @returns {Promise<number>}
   * @memberof AsyncArray
   */
  async aFindIndex(cb: Methods.CallBackFindIndex<T>): Promise<number> {
    return Methods.findIndex<T>(this, cb);
  }

  /**
   * Async ForEach method
   *
   * @param {Methods.CallBackForEach<T>} cb
   * @returns {Promise<void>}
   * @memberof AsyncArray
   */
  async aForEach(cb: Methods.CallBackForEach<T>): Promise<void> {
    await Methods.forEach<T>(this, cb);
  }

  /**
   * Async Map method
   *
   * @template R
   * @param {Methods.CallBackMap<T, R>} cb
   * @returns {Promise<R[]>}
   * @memberof AsyncArray
   */
  async aMap<R>(cb: Methods.CallBackMap<T, R>): Promise<AsyncArray<R>> {
    return new AsyncArray(...(await Methods.map<T, R>(this, cb)));
  }

  /**
   * Async Reduce method
   *
   * @template R
   * @param {Methods.CallBackReduce<T, R>} cb
   * @param {R} [initialValue]
   * @returns {Promise<T | R>}
   * @memberof AsyncArray
   */
  async aReduce<R>(
    cb: Methods.CallBackReduce<T, R>,
    initialValue?: R
  ): Promise<T | R> {
    return Methods.reduce(this, cb, initialValue);
  }

  /**
   * Async ReduceRight method
   *
   * @template R
   * @param {Methods.CallBackReduceRight<T, R>} cb
   * @param {R} [initialValue]
   * @returns {Promise<T | R>}
   * @memberof AsyncArray
   */
  async aReduceRight<R>(
    cb: Methods.CallBackReduceRight<T, R>,
    initialValue?: R
  ): Promise<T | R> {
    return Methods.reduceRight(this, cb, initialValue);
  }

  /**
   * Async Some method
   *
   * @param {Methods.CallBackFilter<T>} cb
   * @returns {Promise<boolean>}
   * @memberof AsyncArray
   */
  async aSome(cb: Methods.CallBackFilter<T>): Promise<boolean> {
    return Methods.some<T>(this, cb);
  }
}
