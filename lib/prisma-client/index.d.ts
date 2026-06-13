
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model Benchmark
 * 
 */
export type Benchmark = $Result.DefaultSelection<Prisma.$BenchmarkPayload>
/**
 * Model ProgressUpdate
 * 
 */
export type ProgressUpdate = $Result.DefaultSelection<Prisma.$ProgressUpdatePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model PaymentRequest
 * 
 */
export type PaymentRequest = $Result.DefaultSelection<Prisma.$PaymentRequestPayload>
/**
 * Model PaymentRecord
 * 
 */
export type PaymentRecord = $Result.DefaultSelection<Prisma.$PaymentRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  OWNER: 'OWNER',
  SUPERVISOR: 'SUPERVISOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ProjectStatus: {
  CREATED: 'CREATED',
  ACTIVE: 'ACTIVE'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const MilestoneStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  AWAITING_REVIEW: 'AWAITING_REVIEW',
  APPROVED: 'APPROVED',
  REVISION_REQUESTED: 'REVISION_REQUESTED',
  PAID: 'PAID'
};

export type MilestoneStatus = (typeof MilestoneStatus)[keyof typeof MilestoneStatus]


export const ProcessingStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ProcessingStatus = (typeof ProcessingStatus)[keyof typeof ProcessingStatus]


export const ReviewStatus: {
  PENDING_REVIEW: 'PENDING_REVIEW',
  APPROVED: 'APPROVED',
  REVISION_REQUESTED: 'REVISION_REQUESTED'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type MilestoneStatus = $Enums.MilestoneStatus

export const MilestoneStatus: typeof $Enums.MilestoneStatus

export type ProcessingStatus = $Enums.ProcessingStatus

export const ProcessingStatus: typeof $Enums.ProcessingStatus

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.benchmark`: Exposes CRUD operations for the **Benchmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benchmarks
    * const benchmarks = await prisma.benchmark.findMany()
    * ```
    */
  get benchmark(): Prisma.BenchmarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressUpdate`: Exposes CRUD operations for the **ProgressUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressUpdates
    * const progressUpdates = await prisma.progressUpdate.findMany()
    * ```
    */
  get progressUpdate(): Prisma.ProgressUpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentRequest`: Exposes CRUD operations for the **PaymentRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentRequests
    * const paymentRequests = await prisma.paymentRequest.findMany()
    * ```
    */
  get paymentRequest(): Prisma.PaymentRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentRecord`: Exposes CRUD operations for the **PaymentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentRecords
    * const paymentRecords = await prisma.paymentRecord.findMany()
    * ```
    */
  get paymentRecord(): Prisma.PaymentRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Project: 'Project',
    Milestone: 'Milestone',
    Benchmark: 'Benchmark',
    ProgressUpdate: 'ProgressUpdate',
    Notification: 'Notification',
    PaymentRequest: 'PaymentRequest',
    PaymentRecord: 'PaymentRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "project" | "milestone" | "benchmark" | "progressUpdate" | "notification" | "paymentRequest" | "paymentRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilestoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      Benchmark: {
        payload: Prisma.$BenchmarkPayload<ExtArgs>
        fields: Prisma.BenchmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BenchmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BenchmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload>
          }
          findFirst: {
            args: Prisma.BenchmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BenchmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload>
          }
          findMany: {
            args: Prisma.BenchmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload>[]
          }
          create: {
            args: Prisma.BenchmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload>
          }
          createMany: {
            args: Prisma.BenchmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BenchmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload>[]
          }
          delete: {
            args: Prisma.BenchmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload>
          }
          update: {
            args: Prisma.BenchmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload>
          }
          deleteMany: {
            args: Prisma.BenchmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BenchmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BenchmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload>[]
          }
          upsert: {
            args: Prisma.BenchmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenchmarkPayload>
          }
          aggregate: {
            args: Prisma.BenchmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenchmark>
          }
          groupBy: {
            args: Prisma.BenchmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenchmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BenchmarkCountArgs<ExtArgs>
            result: $Utils.Optional<BenchmarkCountAggregateOutputType> | number
          }
        }
      }
      ProgressUpdate: {
        payload: Prisma.$ProgressUpdatePayload<ExtArgs>
        fields: Prisma.ProgressUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          findFirst: {
            args: Prisma.ProgressUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          findMany: {
            args: Prisma.ProgressUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>[]
          }
          create: {
            args: Prisma.ProgressUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          createMany: {
            args: Prisma.ProgressUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>[]
          }
          delete: {
            args: Prisma.ProgressUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          update: {
            args: Prisma.ProgressUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          deleteMany: {
            args: Prisma.ProgressUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>[]
          }
          upsert: {
            args: Prisma.ProgressUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          aggregate: {
            args: Prisma.ProgressUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressUpdate>
          }
          groupBy: {
            args: Prisma.ProgressUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressUpdateCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      PaymentRequest: {
        payload: Prisma.$PaymentRequestPayload<ExtArgs>
        fields: Prisma.PaymentRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          findFirst: {
            args: Prisma.PaymentRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          findMany: {
            args: Prisma.PaymentRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>[]
          }
          create: {
            args: Prisma.PaymentRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          createMany: {
            args: Prisma.PaymentRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>[]
          }
          delete: {
            args: Prisma.PaymentRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          update: {
            args: Prisma.PaymentRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          deleteMany: {
            args: Prisma.PaymentRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>[]
          }
          upsert: {
            args: Prisma.PaymentRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          aggregate: {
            args: Prisma.PaymentRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentRequest>
          }
          groupBy: {
            args: Prisma.PaymentRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentRequestCountAggregateOutputType> | number
          }
        }
      }
      PaymentRecord: {
        payload: Prisma.$PaymentRecordPayload<ExtArgs>
        fields: Prisma.PaymentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findFirst: {
            args: Prisma.PaymentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findMany: {
            args: Prisma.PaymentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          create: {
            args: Prisma.PaymentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          createMany: {
            args: Prisma.PaymentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          delete: {
            args: Prisma.PaymentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          update: {
            args: Prisma.PaymentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          deleteMany: {
            args: Prisma.PaymentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          upsert: {
            args: Prisma.PaymentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          aggregate: {
            args: Prisma.PaymentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentRecord>
          }
          groupBy: {
            args: Prisma.PaymentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    project?: ProjectOmit
    milestone?: MilestoneOmit
    benchmark?: BenchmarkOmit
    progressUpdate?: ProgressUpdateOmit
    notification?: NotificationOmit
    paymentRequest?: PaymentRequestOmit
    paymentRecord?: PaymentRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedProjects: number
    supervisedProjects: number
    progressUpdates: number
    notifications: number
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedProjects?: boolean | UserCountOutputTypeCountOwnedProjectsArgs
    supervisedProjects?: boolean | UserCountOutputTypeCountSupervisedProjectsArgs
    progressUpdates?: boolean | UserCountOutputTypeCountProgressUpdatesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupervisedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressUpdateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    milestones: number
    benchmarks: number
    progressUpdates: number
    paymentRecords: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestones?: boolean | ProjectCountOutputTypeCountMilestonesArgs
    benchmarks?: boolean | ProjectCountOutputTypeCountBenchmarksArgs
    progressUpdates?: boolean | ProjectCountOutputTypeCountProgressUpdatesArgs
    paymentRecords?: boolean | ProjectCountOutputTypeCountPaymentRecordsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountBenchmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenchmarkWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProgressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressUpdateWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPaymentRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
  }


  /**
   * Count Type MilestoneCountOutputType
   */

  export type MilestoneCountOutputType = {
    progressUpdates: number
    paymentRequests: number
  }

  export type MilestoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressUpdates?: boolean | MilestoneCountOutputTypeCountProgressUpdatesArgs
    paymentRequests?: boolean | MilestoneCountOutputTypeCountPaymentRequestsArgs
  }

  // Custom InputTypes
  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneCountOutputType
     */
    select?: MilestoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountProgressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressUpdateWhereInput
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountPaymentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRequestWhereInput
  }


  /**
   * Count Type PaymentRequestCountOutputType
   */

  export type PaymentRequestCountOutputType = {
    paymentRecords: number
  }

  export type PaymentRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentRecords?: boolean | PaymentRequestCountOutputTypeCountPaymentRecordsArgs
  }

  // Custom InputTypes
  /**
   * PaymentRequestCountOutputType without action
   */
  export type PaymentRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequestCountOutputType
     */
    select?: PaymentRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentRequestCountOutputType without action
   */
  export type PaymentRequestCountOutputTypeCountPaymentRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    emailVerified: Date | null
    image: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    emailVerified: Date | null
    image: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    emailVerified: number
    image: number
    resetToken: number
    resetTokenExpiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    emailVerified?: true
    image?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    emailVerified?: true
    image?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    emailVerified?: true
    image?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    passwordHash: string | null
    role: $Enums.UserRole
    emailVerified: Date | null
    image: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownedProjects?: boolean | User$ownedProjectsArgs<ExtArgs>
    supervisedProjects?: boolean | User$supervisedProjectsArgs<ExtArgs>
    progressUpdates?: boolean | User$progressUpdatesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "emailVerified" | "image" | "resetToken" | "resetTokenExpiry" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedProjects?: boolean | User$ownedProjectsArgs<ExtArgs>
    supervisedProjects?: boolean | User$supervisedProjectsArgs<ExtArgs>
    progressUpdates?: boolean | User$progressUpdatesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedProjects: Prisma.$ProjectPayload<ExtArgs>[]
      supervisedProjects: Prisma.$ProjectPayload<ExtArgs>[]
      progressUpdates: Prisma.$ProgressUpdatePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      passwordHash: string | null
      role: $Enums.UserRole
      emailVerified: Date | null
      image: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedProjects<T extends User$ownedProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supervisedProjects<T extends User$supervisedProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$supervisedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressUpdates<T extends User$progressUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, User$progressUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedProjects
   */
  export type User$ownedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.supervisedProjects
   */
  export type User$supervisedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.progressUpdates
   */
  export type User$progressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    where?: ProgressUpdateWhereInput
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    cursor?: ProgressUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    status: $Enums.ProjectStatus | null
    ownerId: string | null
    supervisorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    status: $Enums.ProjectStatus | null
    ownerId: string | null
    supervisorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    address: number
    status: number
    geofence: number
    ownerId: number
    supervisorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    status?: true
    ownerId?: true
    supervisorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    status?: true
    ownerId?: true
    supervisorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    status?: true
    geofence?: true
    ownerId?: true
    supervisorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    address: string | null
    status: $Enums.ProjectStatus
    geofence: JsonValue | null
    ownerId: string
    supervisorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    status?: boolean
    geofence?: boolean
    ownerId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Project$supervisorArgs<ExtArgs>
    milestones?: boolean | Project$milestonesArgs<ExtArgs>
    benchmarks?: boolean | Project$benchmarksArgs<ExtArgs>
    progressUpdates?: boolean | Project$progressUpdatesArgs<ExtArgs>
    paymentRecords?: boolean | Project$paymentRecordsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    status?: boolean
    geofence?: boolean
    ownerId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Project$supervisorArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    status?: boolean
    geofence?: boolean
    ownerId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Project$supervisorArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    status?: boolean
    geofence?: boolean
    ownerId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "status" | "geofence" | "ownerId" | "supervisorId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Project$supervisorArgs<ExtArgs>
    milestones?: boolean | Project$milestonesArgs<ExtArgs>
    benchmarks?: boolean | Project$benchmarksArgs<ExtArgs>
    progressUpdates?: boolean | Project$progressUpdatesArgs<ExtArgs>
    paymentRecords?: boolean | Project$paymentRecordsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Project$supervisorArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    supervisor?: boolean | Project$supervisorArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      supervisor: Prisma.$UserPayload<ExtArgs> | null
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
      benchmarks: Prisma.$BenchmarkPayload<ExtArgs>[]
      progressUpdates: Prisma.$ProgressUpdatePayload<ExtArgs>[]
      paymentRecords: Prisma.$PaymentRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      status: $Enums.ProjectStatus
      geofence: Prisma.JsonValue | null
      ownerId: string
      supervisorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends Project$supervisorArgs<ExtArgs> = {}>(args?: Subset<T, Project$supervisorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    milestones<T extends Project$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, Project$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    benchmarks<T extends Project$benchmarksArgs<ExtArgs> = {}>(args?: Subset<T, Project$benchmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressUpdates<T extends Project$progressUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, Project$progressUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentRecords<T extends Project$paymentRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Project$paymentRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly address: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly geofence: FieldRef<"Project", 'Json'>
    readonly ownerId: FieldRef<"Project", 'String'>
    readonly supervisorId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.supervisor
   */
  export type Project$supervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Project.milestones
   */
  export type Project$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Project.benchmarks
   */
  export type Project$benchmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
    where?: BenchmarkWhereInput
    orderBy?: BenchmarkOrderByWithRelationInput | BenchmarkOrderByWithRelationInput[]
    cursor?: BenchmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BenchmarkScalarFieldEnum | BenchmarkScalarFieldEnum[]
  }

  /**
   * Project.progressUpdates
   */
  export type Project$progressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    where?: ProgressUpdateWhereInput
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    cursor?: ProgressUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * Project.paymentRecords
   */
  export type Project$paymentRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    cursor?: PaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneAvgAggregateOutputType = {
    order: number | null
    budgetNgN: number | null
  }

  export type MilestoneSumAggregateOutputType = {
    order: number | null
    budgetNgN: number | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    status: $Enums.MilestoneStatus | null
    order: number | null
    budgetNgN: number | null
    invoiceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    status: $Enums.MilestoneStatus | null
    order: number | null
    budgetNgN: number | null
    invoiceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    projectId: number
    title: number
    description: number
    dueDate: number
    status: number
    order: number
    budgetNgN: number
    invoiceUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MilestoneAvgAggregateInputType = {
    order?: true
    budgetNgN?: true
  }

  export type MilestoneSumAggregateInputType = {
    order?: true
    budgetNgN?: true
  }

  export type MilestoneMinAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    dueDate?: true
    status?: true
    order?: true
    budgetNgN?: true
    invoiceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    dueDate?: true
    status?: true
    order?: true
    budgetNgN?: true
    invoiceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    dueDate?: true
    status?: true
    order?: true
    budgetNgN?: true
    invoiceUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _avg?: MilestoneAvgAggregateInputType
    _sum?: MilestoneSumAggregateInputType
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: string
    projectId: string
    title: string
    description: string | null
    dueDate: Date | null
    status: $Enums.MilestoneStatus
    order: number
    budgetNgN: number | null
    invoiceUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    status?: boolean
    order?: boolean
    budgetNgN?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    progressUpdates?: boolean | Milestone$progressUpdatesArgs<ExtArgs>
    paymentRequests?: boolean | Milestone$paymentRequestsArgs<ExtArgs>
    _count?: boolean | MilestoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    status?: boolean
    order?: boolean
    budgetNgN?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    status?: boolean
    order?: boolean
    budgetNgN?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectScalar = {
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    status?: boolean
    order?: boolean
    budgetNgN?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MilestoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "title" | "description" | "dueDate" | "status" | "order" | "budgetNgN" | "invoiceUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["milestone"]>
  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    progressUpdates?: boolean | Milestone$progressUpdatesArgs<ExtArgs>
    paymentRequests?: boolean | Milestone$paymentRequestsArgs<ExtArgs>
    _count?: boolean | MilestoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      progressUpdates: Prisma.$ProgressUpdatePayload<ExtArgs>[]
      paymentRequests: Prisma.$PaymentRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      title: string
      description: string | null
      dueDate: Date | null
      status: $Enums.MilestoneStatus
      order: number
      budgetNgN: number | null
      invoiceUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }

  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneFindUniqueArgs>(args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneFindFirstArgs>(args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneFindManyArgs>(args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
     */
    create<T extends MilestoneCreateArgs>(args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneCreateManyArgs>(args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {MilestoneCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDeleteArgs>(args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneUpdateArgs>(args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneUpdateManyArgs>(args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones and returns the data updated in the database.
     * @param {MilestoneUpdateManyAndReturnArgs} args - Arguments to update many Milestones.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MilestoneUpdateManyAndReturnArgs>(args: SelectSubset<T, MilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneUpsertArgs>(args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progressUpdates<T extends Milestone$progressUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$progressUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentRequests<T extends Milestone$paymentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$paymentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Milestone model
   */
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'String'>
    readonly projectId: FieldRef<"Milestone", 'String'>
    readonly title: FieldRef<"Milestone", 'String'>
    readonly description: FieldRef<"Milestone", 'String'>
    readonly dueDate: FieldRef<"Milestone", 'DateTime'>
    readonly status: FieldRef<"Milestone", 'MilestoneStatus'>
    readonly order: FieldRef<"Milestone", 'Int'>
    readonly budgetNgN: FieldRef<"Milestone", 'Int'>
    readonly invoiceUrl: FieldRef<"Milestone", 'String'>
    readonly createdAt: FieldRef<"Milestone", 'DateTime'>
    readonly updatedAt: FieldRef<"Milestone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone createManyAndReturn
   */
  export type MilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
  }

  /**
   * Milestone updateManyAndReturn
   */
  export type MilestoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to delete.
     */
    limit?: number
  }

  /**
   * Milestone.progressUpdates
   */
  export type Milestone$progressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    where?: ProgressUpdateWhereInput
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    cursor?: ProgressUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * Milestone.paymentRequests
   */
  export type Milestone$paymentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    where?: PaymentRequestWhereInput
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    cursor?: PaymentRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model Benchmark
   */

  export type AggregateBenchmark = {
    _count: BenchmarkCountAggregateOutputType | null
    _min: BenchmarkMinAggregateOutputType | null
    _max: BenchmarkMaxAggregateOutputType | null
  }

  export type BenchmarkMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    milestoneId: string | null
    title: string | null
    notes: string | null
    mediaUrl: string | null
    mediaType: string | null
    category: string | null
    createdAt: Date | null
  }

  export type BenchmarkMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    milestoneId: string | null
    title: string | null
    notes: string | null
    mediaUrl: string | null
    mediaType: string | null
    category: string | null
    createdAt: Date | null
  }

  export type BenchmarkCountAggregateOutputType = {
    id: number
    projectId: number
    milestoneId: number
    title: number
    notes: number
    mediaUrl: number
    mediaType: number
    category: number
    createdAt: number
    _all: number
  }


  export type BenchmarkMinAggregateInputType = {
    id?: true
    projectId?: true
    milestoneId?: true
    title?: true
    notes?: true
    mediaUrl?: true
    mediaType?: true
    category?: true
    createdAt?: true
  }

  export type BenchmarkMaxAggregateInputType = {
    id?: true
    projectId?: true
    milestoneId?: true
    title?: true
    notes?: true
    mediaUrl?: true
    mediaType?: true
    category?: true
    createdAt?: true
  }

  export type BenchmarkCountAggregateInputType = {
    id?: true
    projectId?: true
    milestoneId?: true
    title?: true
    notes?: true
    mediaUrl?: true
    mediaType?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type BenchmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benchmark to aggregate.
     */
    where?: BenchmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benchmarks to fetch.
     */
    orderBy?: BenchmarkOrderByWithRelationInput | BenchmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BenchmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benchmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benchmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Benchmarks
    **/
    _count?: true | BenchmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenchmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenchmarkMaxAggregateInputType
  }

  export type GetBenchmarkAggregateType<T extends BenchmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBenchmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenchmark[P]>
      : GetScalarType<T[P], AggregateBenchmark[P]>
  }




  export type BenchmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenchmarkWhereInput
    orderBy?: BenchmarkOrderByWithAggregationInput | BenchmarkOrderByWithAggregationInput[]
    by: BenchmarkScalarFieldEnum[] | BenchmarkScalarFieldEnum
    having?: BenchmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenchmarkCountAggregateInputType | true
    _min?: BenchmarkMinAggregateInputType
    _max?: BenchmarkMaxAggregateInputType
  }

  export type BenchmarkGroupByOutputType = {
    id: string
    projectId: string
    milestoneId: string | null
    title: string
    notes: string | null
    mediaUrl: string
    mediaType: string
    category: string
    createdAt: Date
    _count: BenchmarkCountAggregateOutputType | null
    _min: BenchmarkMinAggregateOutputType | null
    _max: BenchmarkMaxAggregateOutputType | null
  }

  type GetBenchmarkGroupByPayload<T extends BenchmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenchmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenchmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenchmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BenchmarkGroupByOutputType[P]>
        }
      >
    >


  export type BenchmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    milestoneId?: boolean
    title?: boolean
    notes?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    category?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benchmark"]>

  export type BenchmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    milestoneId?: boolean
    title?: boolean
    notes?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    category?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benchmark"]>

  export type BenchmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    milestoneId?: boolean
    title?: boolean
    notes?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    category?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benchmark"]>

  export type BenchmarkSelectScalar = {
    id?: boolean
    projectId?: boolean
    milestoneId?: boolean
    title?: boolean
    notes?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type BenchmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "milestoneId" | "title" | "notes" | "mediaUrl" | "mediaType" | "category" | "createdAt", ExtArgs["result"]["benchmark"]>
  export type BenchmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type BenchmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type BenchmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $BenchmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Benchmark"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      milestoneId: string | null
      title: string
      notes: string | null
      mediaUrl: string
      mediaType: string
      category: string
      createdAt: Date
    }, ExtArgs["result"]["benchmark"]>
    composites: {}
  }

  type BenchmarkGetPayload<S extends boolean | null | undefined | BenchmarkDefaultArgs> = $Result.GetResult<Prisma.$BenchmarkPayload, S>

  type BenchmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BenchmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BenchmarkCountAggregateInputType | true
    }

  export interface BenchmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Benchmark'], meta: { name: 'Benchmark' } }
    /**
     * Find zero or one Benchmark that matches the filter.
     * @param {BenchmarkFindUniqueArgs} args - Arguments to find a Benchmark
     * @example
     * // Get one Benchmark
     * const benchmark = await prisma.benchmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BenchmarkFindUniqueArgs>(args: SelectSubset<T, BenchmarkFindUniqueArgs<ExtArgs>>): Prisma__BenchmarkClient<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Benchmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BenchmarkFindUniqueOrThrowArgs} args - Arguments to find a Benchmark
     * @example
     * // Get one Benchmark
     * const benchmark = await prisma.benchmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BenchmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BenchmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BenchmarkClient<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benchmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkFindFirstArgs} args - Arguments to find a Benchmark
     * @example
     * // Get one Benchmark
     * const benchmark = await prisma.benchmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BenchmarkFindFirstArgs>(args?: SelectSubset<T, BenchmarkFindFirstArgs<ExtArgs>>): Prisma__BenchmarkClient<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benchmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkFindFirstOrThrowArgs} args - Arguments to find a Benchmark
     * @example
     * // Get one Benchmark
     * const benchmark = await prisma.benchmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BenchmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BenchmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BenchmarkClient<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Benchmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benchmarks
     * const benchmarks = await prisma.benchmark.findMany()
     * 
     * // Get first 10 Benchmarks
     * const benchmarks = await prisma.benchmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benchmarkWithIdOnly = await prisma.benchmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BenchmarkFindManyArgs>(args?: SelectSubset<T, BenchmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Benchmark.
     * @param {BenchmarkCreateArgs} args - Arguments to create a Benchmark.
     * @example
     * // Create one Benchmark
     * const Benchmark = await prisma.benchmark.create({
     *   data: {
     *     // ... data to create a Benchmark
     *   }
     * })
     * 
     */
    create<T extends BenchmarkCreateArgs>(args: SelectSubset<T, BenchmarkCreateArgs<ExtArgs>>): Prisma__BenchmarkClient<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Benchmarks.
     * @param {BenchmarkCreateManyArgs} args - Arguments to create many Benchmarks.
     * @example
     * // Create many Benchmarks
     * const benchmark = await prisma.benchmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BenchmarkCreateManyArgs>(args?: SelectSubset<T, BenchmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Benchmarks and returns the data saved in the database.
     * @param {BenchmarkCreateManyAndReturnArgs} args - Arguments to create many Benchmarks.
     * @example
     * // Create many Benchmarks
     * const benchmark = await prisma.benchmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Benchmarks and only return the `id`
     * const benchmarkWithIdOnly = await prisma.benchmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BenchmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, BenchmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Benchmark.
     * @param {BenchmarkDeleteArgs} args - Arguments to delete one Benchmark.
     * @example
     * // Delete one Benchmark
     * const Benchmark = await prisma.benchmark.delete({
     *   where: {
     *     // ... filter to delete one Benchmark
     *   }
     * })
     * 
     */
    delete<T extends BenchmarkDeleteArgs>(args: SelectSubset<T, BenchmarkDeleteArgs<ExtArgs>>): Prisma__BenchmarkClient<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Benchmark.
     * @param {BenchmarkUpdateArgs} args - Arguments to update one Benchmark.
     * @example
     * // Update one Benchmark
     * const benchmark = await prisma.benchmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BenchmarkUpdateArgs>(args: SelectSubset<T, BenchmarkUpdateArgs<ExtArgs>>): Prisma__BenchmarkClient<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Benchmarks.
     * @param {BenchmarkDeleteManyArgs} args - Arguments to filter Benchmarks to delete.
     * @example
     * // Delete a few Benchmarks
     * const { count } = await prisma.benchmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BenchmarkDeleteManyArgs>(args?: SelectSubset<T, BenchmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benchmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benchmarks
     * const benchmark = await prisma.benchmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BenchmarkUpdateManyArgs>(args: SelectSubset<T, BenchmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benchmarks and returns the data updated in the database.
     * @param {BenchmarkUpdateManyAndReturnArgs} args - Arguments to update many Benchmarks.
     * @example
     * // Update many Benchmarks
     * const benchmark = await prisma.benchmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Benchmarks and only return the `id`
     * const benchmarkWithIdOnly = await prisma.benchmark.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BenchmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, BenchmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Benchmark.
     * @param {BenchmarkUpsertArgs} args - Arguments to update or create a Benchmark.
     * @example
     * // Update or create a Benchmark
     * const benchmark = await prisma.benchmark.upsert({
     *   create: {
     *     // ... data to create a Benchmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benchmark we want to update
     *   }
     * })
     */
    upsert<T extends BenchmarkUpsertArgs>(args: SelectSubset<T, BenchmarkUpsertArgs<ExtArgs>>): Prisma__BenchmarkClient<$Result.GetResult<Prisma.$BenchmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Benchmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkCountArgs} args - Arguments to filter Benchmarks to count.
     * @example
     * // Count the number of Benchmarks
     * const count = await prisma.benchmark.count({
     *   where: {
     *     // ... the filter for the Benchmarks we want to count
     *   }
     * })
    **/
    count<T extends BenchmarkCountArgs>(
      args?: Subset<T, BenchmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenchmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benchmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BenchmarkAggregateArgs>(args: Subset<T, BenchmarkAggregateArgs>): Prisma.PrismaPromise<GetBenchmarkAggregateType<T>>

    /**
     * Group by Benchmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BenchmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenchmarkGroupByArgs['orderBy'] }
        : { orderBy?: BenchmarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BenchmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenchmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Benchmark model
   */
  readonly fields: BenchmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Benchmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BenchmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Benchmark model
   */
  interface BenchmarkFieldRefs {
    readonly id: FieldRef<"Benchmark", 'String'>
    readonly projectId: FieldRef<"Benchmark", 'String'>
    readonly milestoneId: FieldRef<"Benchmark", 'String'>
    readonly title: FieldRef<"Benchmark", 'String'>
    readonly notes: FieldRef<"Benchmark", 'String'>
    readonly mediaUrl: FieldRef<"Benchmark", 'String'>
    readonly mediaType: FieldRef<"Benchmark", 'String'>
    readonly category: FieldRef<"Benchmark", 'String'>
    readonly createdAt: FieldRef<"Benchmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Benchmark findUnique
   */
  export type BenchmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
    /**
     * Filter, which Benchmark to fetch.
     */
    where: BenchmarkWhereUniqueInput
  }

  /**
   * Benchmark findUniqueOrThrow
   */
  export type BenchmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
    /**
     * Filter, which Benchmark to fetch.
     */
    where: BenchmarkWhereUniqueInput
  }

  /**
   * Benchmark findFirst
   */
  export type BenchmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
    /**
     * Filter, which Benchmark to fetch.
     */
    where?: BenchmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benchmarks to fetch.
     */
    orderBy?: BenchmarkOrderByWithRelationInput | BenchmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benchmarks.
     */
    cursor?: BenchmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benchmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benchmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benchmarks.
     */
    distinct?: BenchmarkScalarFieldEnum | BenchmarkScalarFieldEnum[]
  }

  /**
   * Benchmark findFirstOrThrow
   */
  export type BenchmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
    /**
     * Filter, which Benchmark to fetch.
     */
    where?: BenchmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benchmarks to fetch.
     */
    orderBy?: BenchmarkOrderByWithRelationInput | BenchmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benchmarks.
     */
    cursor?: BenchmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benchmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benchmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benchmarks.
     */
    distinct?: BenchmarkScalarFieldEnum | BenchmarkScalarFieldEnum[]
  }

  /**
   * Benchmark findMany
   */
  export type BenchmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
    /**
     * Filter, which Benchmarks to fetch.
     */
    where?: BenchmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benchmarks to fetch.
     */
    orderBy?: BenchmarkOrderByWithRelationInput | BenchmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Benchmarks.
     */
    cursor?: BenchmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benchmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benchmarks.
     */
    skip?: number
    distinct?: BenchmarkScalarFieldEnum | BenchmarkScalarFieldEnum[]
  }

  /**
   * Benchmark create
   */
  export type BenchmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Benchmark.
     */
    data: XOR<BenchmarkCreateInput, BenchmarkUncheckedCreateInput>
  }

  /**
   * Benchmark createMany
   */
  export type BenchmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Benchmarks.
     */
    data: BenchmarkCreateManyInput | BenchmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benchmark createManyAndReturn
   */
  export type BenchmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * The data used to create many Benchmarks.
     */
    data: BenchmarkCreateManyInput | BenchmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Benchmark update
   */
  export type BenchmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Benchmark.
     */
    data: XOR<BenchmarkUpdateInput, BenchmarkUncheckedUpdateInput>
    /**
     * Choose, which Benchmark to update.
     */
    where: BenchmarkWhereUniqueInput
  }

  /**
   * Benchmark updateMany
   */
  export type BenchmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Benchmarks.
     */
    data: XOR<BenchmarkUpdateManyMutationInput, BenchmarkUncheckedUpdateManyInput>
    /**
     * Filter which Benchmarks to update
     */
    where?: BenchmarkWhereInput
    /**
     * Limit how many Benchmarks to update.
     */
    limit?: number
  }

  /**
   * Benchmark updateManyAndReturn
   */
  export type BenchmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * The data used to update Benchmarks.
     */
    data: XOR<BenchmarkUpdateManyMutationInput, BenchmarkUncheckedUpdateManyInput>
    /**
     * Filter which Benchmarks to update
     */
    where?: BenchmarkWhereInput
    /**
     * Limit how many Benchmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Benchmark upsert
   */
  export type BenchmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Benchmark to update in case it exists.
     */
    where: BenchmarkWhereUniqueInput
    /**
     * In case the Benchmark found by the `where` argument doesn't exist, create a new Benchmark with this data.
     */
    create: XOR<BenchmarkCreateInput, BenchmarkUncheckedCreateInput>
    /**
     * In case the Benchmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BenchmarkUpdateInput, BenchmarkUncheckedUpdateInput>
  }

  /**
   * Benchmark delete
   */
  export type BenchmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
    /**
     * Filter which Benchmark to delete.
     */
    where: BenchmarkWhereUniqueInput
  }

  /**
   * Benchmark deleteMany
   */
  export type BenchmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benchmarks to delete
     */
    where?: BenchmarkWhereInput
    /**
     * Limit how many Benchmarks to delete.
     */
    limit?: number
  }

  /**
   * Benchmark without action
   */
  export type BenchmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benchmark
     */
    select?: BenchmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benchmark
     */
    omit?: BenchmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenchmarkInclude<ExtArgs> | null
  }


  /**
   * Model ProgressUpdate
   */

  export type AggregateProgressUpdate = {
    _count: ProgressUpdateCountAggregateOutputType | null
    _avg: ProgressUpdateAvgAggregateOutputType | null
    _sum: ProgressUpdateSumAggregateOutputType | null
    _min: ProgressUpdateMinAggregateOutputType | null
    _max: ProgressUpdateMaxAggregateOutputType | null
  }

  export type ProgressUpdateAvgAggregateOutputType = {
    aiCompletionEstimate: number | null
    retryCount: number | null
    gpsLat: number | null
    gpsLng: number | null
  }

  export type ProgressUpdateSumAggregateOutputType = {
    aiCompletionEstimate: number | null
    retryCount: number | null
    gpsLat: number | null
    gpsLng: number | null
  }

  export type ProgressUpdateMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    milestoneId: string | null
    supervisorId: string | null
    aiDescription: string | null
    aiCompletionEstimate: number | null
    processingStatus: $Enums.ProcessingStatus | null
    reviewStatus: $Enums.ReviewStatus | null
    supervisorNote: string | null
    failureReason: string | null
    retryCount: number | null
    gpsLat: number | null
    gpsLng: number | null
    gpsManual: boolean | null
    deviceTimestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgressUpdateMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    milestoneId: string | null
    supervisorId: string | null
    aiDescription: string | null
    aiCompletionEstimate: number | null
    processingStatus: $Enums.ProcessingStatus | null
    reviewStatus: $Enums.ReviewStatus | null
    supervisorNote: string | null
    failureReason: string | null
    retryCount: number | null
    gpsLat: number | null
    gpsLng: number | null
    gpsManual: boolean | null
    deviceTimestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgressUpdateCountAggregateOutputType = {
    id: number
    projectId: number
    milestoneId: number
    supervisorId: number
    rawMediaUrls: number
    aiDescription: number
    aiMarkupData: number
    aiCompletionEstimate: number
    processingStatus: number
    reviewStatus: number
    supervisorNote: number
    failureReason: number
    retryCount: number
    gpsLat: number
    gpsLng: number
    gpsManual: number
    deviceTimestamp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgressUpdateAvgAggregateInputType = {
    aiCompletionEstimate?: true
    retryCount?: true
    gpsLat?: true
    gpsLng?: true
  }

  export type ProgressUpdateSumAggregateInputType = {
    aiCompletionEstimate?: true
    retryCount?: true
    gpsLat?: true
    gpsLng?: true
  }

  export type ProgressUpdateMinAggregateInputType = {
    id?: true
    projectId?: true
    milestoneId?: true
    supervisorId?: true
    aiDescription?: true
    aiCompletionEstimate?: true
    processingStatus?: true
    reviewStatus?: true
    supervisorNote?: true
    failureReason?: true
    retryCount?: true
    gpsLat?: true
    gpsLng?: true
    gpsManual?: true
    deviceTimestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgressUpdateMaxAggregateInputType = {
    id?: true
    projectId?: true
    milestoneId?: true
    supervisorId?: true
    aiDescription?: true
    aiCompletionEstimate?: true
    processingStatus?: true
    reviewStatus?: true
    supervisorNote?: true
    failureReason?: true
    retryCount?: true
    gpsLat?: true
    gpsLng?: true
    gpsManual?: true
    deviceTimestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgressUpdateCountAggregateInputType = {
    id?: true
    projectId?: true
    milestoneId?: true
    supervisorId?: true
    rawMediaUrls?: true
    aiDescription?: true
    aiMarkupData?: true
    aiCompletionEstimate?: true
    processingStatus?: true
    reviewStatus?: true
    supervisorNote?: true
    failureReason?: true
    retryCount?: true
    gpsLat?: true
    gpsLng?: true
    gpsManual?: true
    deviceTimestamp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgressUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressUpdate to aggregate.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressUpdates
    **/
    _count?: true | ProgressUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressUpdateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressUpdateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressUpdateMaxAggregateInputType
  }

  export type GetProgressUpdateAggregateType<T extends ProgressUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressUpdate[P]>
      : GetScalarType<T[P], AggregateProgressUpdate[P]>
  }




  export type ProgressUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressUpdateWhereInput
    orderBy?: ProgressUpdateOrderByWithAggregationInput | ProgressUpdateOrderByWithAggregationInput[]
    by: ProgressUpdateScalarFieldEnum[] | ProgressUpdateScalarFieldEnum
    having?: ProgressUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressUpdateCountAggregateInputType | true
    _avg?: ProgressUpdateAvgAggregateInputType
    _sum?: ProgressUpdateSumAggregateInputType
    _min?: ProgressUpdateMinAggregateInputType
    _max?: ProgressUpdateMaxAggregateInputType
  }

  export type ProgressUpdateGroupByOutputType = {
    id: string
    projectId: string
    milestoneId: string
    supervisorId: string
    rawMediaUrls: string[]
    aiDescription: string | null
    aiMarkupData: JsonValue | null
    aiCompletionEstimate: number | null
    processingStatus: $Enums.ProcessingStatus
    reviewStatus: $Enums.ReviewStatus
    supervisorNote: string | null
    failureReason: string | null
    retryCount: number
    gpsLat: number | null
    gpsLng: number | null
    gpsManual: boolean
    deviceTimestamp: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProgressUpdateCountAggregateOutputType | null
    _avg: ProgressUpdateAvgAggregateOutputType | null
    _sum: ProgressUpdateSumAggregateOutputType | null
    _min: ProgressUpdateMinAggregateOutputType | null
    _max: ProgressUpdateMaxAggregateOutputType | null
  }

  type GetProgressUpdateGroupByPayload<T extends ProgressUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressUpdateGroupByOutputType[P]>
        }
      >
    >


  export type ProgressUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    milestoneId?: boolean
    supervisorId?: boolean
    rawMediaUrls?: boolean
    aiDescription?: boolean
    aiMarkupData?: boolean
    aiCompletionEstimate?: boolean
    processingStatus?: boolean
    reviewStatus?: boolean
    supervisorNote?: boolean
    failureReason?: boolean
    retryCount?: boolean
    gpsLat?: boolean
    gpsLng?: boolean
    gpsManual?: boolean
    deviceTimestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressUpdate"]>

  export type ProgressUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    milestoneId?: boolean
    supervisorId?: boolean
    rawMediaUrls?: boolean
    aiDescription?: boolean
    aiMarkupData?: boolean
    aiCompletionEstimate?: boolean
    processingStatus?: boolean
    reviewStatus?: boolean
    supervisorNote?: boolean
    failureReason?: boolean
    retryCount?: boolean
    gpsLat?: boolean
    gpsLng?: boolean
    gpsManual?: boolean
    deviceTimestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressUpdate"]>

  export type ProgressUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    milestoneId?: boolean
    supervisorId?: boolean
    rawMediaUrls?: boolean
    aiDescription?: boolean
    aiMarkupData?: boolean
    aiCompletionEstimate?: boolean
    processingStatus?: boolean
    reviewStatus?: boolean
    supervisorNote?: boolean
    failureReason?: boolean
    retryCount?: boolean
    gpsLat?: boolean
    gpsLng?: boolean
    gpsManual?: boolean
    deviceTimestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressUpdate"]>

  export type ProgressUpdateSelectScalar = {
    id?: boolean
    projectId?: boolean
    milestoneId?: boolean
    supervisorId?: boolean
    rawMediaUrls?: boolean
    aiDescription?: boolean
    aiMarkupData?: boolean
    aiCompletionEstimate?: boolean
    processingStatus?: boolean
    reviewStatus?: boolean
    supervisorNote?: boolean
    failureReason?: boolean
    retryCount?: boolean
    gpsLat?: boolean
    gpsLng?: boolean
    gpsManual?: boolean
    deviceTimestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgressUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "milestoneId" | "supervisorId" | "rawMediaUrls" | "aiDescription" | "aiMarkupData" | "aiCompletionEstimate" | "processingStatus" | "reviewStatus" | "supervisorNote" | "failureReason" | "retryCount" | "gpsLat" | "gpsLng" | "gpsManual" | "deviceTimestamp" | "createdAt" | "updatedAt", ExtArgs["result"]["progressUpdate"]>
  export type ProgressUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProgressUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressUpdate"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      milestone: Prisma.$MilestonePayload<ExtArgs>
      supervisor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      milestoneId: string
      supervisorId: string
      rawMediaUrls: string[]
      aiDescription: string | null
      aiMarkupData: Prisma.JsonValue | null
      aiCompletionEstimate: number | null
      processingStatus: $Enums.ProcessingStatus
      reviewStatus: $Enums.ReviewStatus
      supervisorNote: string | null
      failureReason: string | null
      retryCount: number
      gpsLat: number | null
      gpsLng: number | null
      gpsManual: boolean
      deviceTimestamp: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["progressUpdate"]>
    composites: {}
  }

  type ProgressUpdateGetPayload<S extends boolean | null | undefined | ProgressUpdateDefaultArgs> = $Result.GetResult<Prisma.$ProgressUpdatePayload, S>

  type ProgressUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressUpdateCountAggregateInputType | true
    }

  export interface ProgressUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressUpdate'], meta: { name: 'ProgressUpdate' } }
    /**
     * Find zero or one ProgressUpdate that matches the filter.
     * @param {ProgressUpdateFindUniqueArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressUpdateFindUniqueArgs>(args: SelectSubset<T, ProgressUpdateFindUniqueArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressUpdateFindUniqueOrThrowArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateFindFirstArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressUpdateFindFirstArgs>(args?: SelectSubset<T, ProgressUpdateFindFirstArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateFindFirstOrThrowArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressUpdates
     * const progressUpdates = await prisma.progressUpdate.findMany()
     * 
     * // Get first 10 ProgressUpdates
     * const progressUpdates = await prisma.progressUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressUpdateWithIdOnly = await prisma.progressUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressUpdateFindManyArgs>(args?: SelectSubset<T, ProgressUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressUpdate.
     * @param {ProgressUpdateCreateArgs} args - Arguments to create a ProgressUpdate.
     * @example
     * // Create one ProgressUpdate
     * const ProgressUpdate = await prisma.progressUpdate.create({
     *   data: {
     *     // ... data to create a ProgressUpdate
     *   }
     * })
     * 
     */
    create<T extends ProgressUpdateCreateArgs>(args: SelectSubset<T, ProgressUpdateCreateArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressUpdates.
     * @param {ProgressUpdateCreateManyArgs} args - Arguments to create many ProgressUpdates.
     * @example
     * // Create many ProgressUpdates
     * const progressUpdate = await prisma.progressUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressUpdateCreateManyArgs>(args?: SelectSubset<T, ProgressUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressUpdates and returns the data saved in the database.
     * @param {ProgressUpdateCreateManyAndReturnArgs} args - Arguments to create many ProgressUpdates.
     * @example
     * // Create many ProgressUpdates
     * const progressUpdate = await prisma.progressUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressUpdates and only return the `id`
     * const progressUpdateWithIdOnly = await prisma.progressUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressUpdate.
     * @param {ProgressUpdateDeleteArgs} args - Arguments to delete one ProgressUpdate.
     * @example
     * // Delete one ProgressUpdate
     * const ProgressUpdate = await prisma.progressUpdate.delete({
     *   where: {
     *     // ... filter to delete one ProgressUpdate
     *   }
     * })
     * 
     */
    delete<T extends ProgressUpdateDeleteArgs>(args: SelectSubset<T, ProgressUpdateDeleteArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressUpdate.
     * @param {ProgressUpdateUpdateArgs} args - Arguments to update one ProgressUpdate.
     * @example
     * // Update one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressUpdateUpdateArgs>(args: SelectSubset<T, ProgressUpdateUpdateArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressUpdates.
     * @param {ProgressUpdateDeleteManyArgs} args - Arguments to filter ProgressUpdates to delete.
     * @example
     * // Delete a few ProgressUpdates
     * const { count } = await prisma.progressUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressUpdateDeleteManyArgs>(args?: SelectSubset<T, ProgressUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressUpdates
     * const progressUpdate = await prisma.progressUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressUpdateUpdateManyArgs>(args: SelectSubset<T, ProgressUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressUpdates and returns the data updated in the database.
     * @param {ProgressUpdateUpdateManyAndReturnArgs} args - Arguments to update many ProgressUpdates.
     * @example
     * // Update many ProgressUpdates
     * const progressUpdate = await prisma.progressUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressUpdates and only return the `id`
     * const progressUpdateWithIdOnly = await prisma.progressUpdate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgressUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressUpdate.
     * @param {ProgressUpdateUpsertArgs} args - Arguments to update or create a ProgressUpdate.
     * @example
     * // Update or create a ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.upsert({
     *   create: {
     *     // ... data to create a ProgressUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressUpdate we want to update
     *   }
     * })
     */
    upsert<T extends ProgressUpdateUpsertArgs>(args: SelectSubset<T, ProgressUpdateUpsertArgs<ExtArgs>>): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateCountArgs} args - Arguments to filter ProgressUpdates to count.
     * @example
     * // Count the number of ProgressUpdates
     * const count = await prisma.progressUpdate.count({
     *   where: {
     *     // ... the filter for the ProgressUpdates we want to count
     *   }
     * })
    **/
    count<T extends ProgressUpdateCountArgs>(
      args?: Subset<T, ProgressUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgressUpdateAggregateArgs>(args: Subset<T, ProgressUpdateAggregateArgs>): Prisma.PrismaPromise<GetProgressUpdateAggregateType<T>>

    /**
     * Group by ProgressUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgressUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressUpdateGroupByArgs['orderBy'] }
        : { orderBy?: ProgressUpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgressUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressUpdate model
   */
  readonly fields: ProgressUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    milestone<T extends MilestoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MilestoneDefaultArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgressUpdate model
   */
  interface ProgressUpdateFieldRefs {
    readonly id: FieldRef<"ProgressUpdate", 'String'>
    readonly projectId: FieldRef<"ProgressUpdate", 'String'>
    readonly milestoneId: FieldRef<"ProgressUpdate", 'String'>
    readonly supervisorId: FieldRef<"ProgressUpdate", 'String'>
    readonly rawMediaUrls: FieldRef<"ProgressUpdate", 'String[]'>
    readonly aiDescription: FieldRef<"ProgressUpdate", 'String'>
    readonly aiMarkupData: FieldRef<"ProgressUpdate", 'Json'>
    readonly aiCompletionEstimate: FieldRef<"ProgressUpdate", 'Int'>
    readonly processingStatus: FieldRef<"ProgressUpdate", 'ProcessingStatus'>
    readonly reviewStatus: FieldRef<"ProgressUpdate", 'ReviewStatus'>
    readonly supervisorNote: FieldRef<"ProgressUpdate", 'String'>
    readonly failureReason: FieldRef<"ProgressUpdate", 'String'>
    readonly retryCount: FieldRef<"ProgressUpdate", 'Int'>
    readonly gpsLat: FieldRef<"ProgressUpdate", 'Float'>
    readonly gpsLng: FieldRef<"ProgressUpdate", 'Float'>
    readonly gpsManual: FieldRef<"ProgressUpdate", 'Boolean'>
    readonly deviceTimestamp: FieldRef<"ProgressUpdate", 'DateTime'>
    readonly createdAt: FieldRef<"ProgressUpdate", 'DateTime'>
    readonly updatedAt: FieldRef<"ProgressUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgressUpdate findUnique
   */
  export type ProgressUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where: ProgressUpdateWhereUniqueInput
  }

  /**
   * ProgressUpdate findUniqueOrThrow
   */
  export type ProgressUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where: ProgressUpdateWhereUniqueInput
  }

  /**
   * ProgressUpdate findFirst
   */
  export type ProgressUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressUpdates.
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressUpdates.
     */
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * ProgressUpdate findFirstOrThrow
   */
  export type ProgressUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressUpdates.
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressUpdates.
     */
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * ProgressUpdate findMany
   */
  export type ProgressUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdates to fetch.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressUpdates.
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }

  /**
   * ProgressUpdate create
   */
  export type ProgressUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressUpdate.
     */
    data: XOR<ProgressUpdateCreateInput, ProgressUpdateUncheckedCreateInput>
  }

  /**
   * ProgressUpdate createMany
   */
  export type ProgressUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressUpdates.
     */
    data: ProgressUpdateCreateManyInput | ProgressUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressUpdate createManyAndReturn
   */
  export type ProgressUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressUpdates.
     */
    data: ProgressUpdateCreateManyInput | ProgressUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressUpdate update
   */
  export type ProgressUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressUpdate.
     */
    data: XOR<ProgressUpdateUpdateInput, ProgressUpdateUncheckedUpdateInput>
    /**
     * Choose, which ProgressUpdate to update.
     */
    where: ProgressUpdateWhereUniqueInput
  }

  /**
   * ProgressUpdate updateMany
   */
  export type ProgressUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressUpdates.
     */
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyInput>
    /**
     * Filter which ProgressUpdates to update
     */
    where?: ProgressUpdateWhereInput
    /**
     * Limit how many ProgressUpdates to update.
     */
    limit?: number
  }

  /**
   * ProgressUpdate updateManyAndReturn
   */
  export type ProgressUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * The data used to update ProgressUpdates.
     */
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyInput>
    /**
     * Filter which ProgressUpdates to update
     */
    where?: ProgressUpdateWhereInput
    /**
     * Limit how many ProgressUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressUpdate upsert
   */
  export type ProgressUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressUpdate to update in case it exists.
     */
    where: ProgressUpdateWhereUniqueInput
    /**
     * In case the ProgressUpdate found by the `where` argument doesn't exist, create a new ProgressUpdate with this data.
     */
    create: XOR<ProgressUpdateCreateInput, ProgressUpdateUncheckedCreateInput>
    /**
     * In case the ProgressUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressUpdateUpdateInput, ProgressUpdateUncheckedUpdateInput>
  }

  /**
   * ProgressUpdate delete
   */
  export type ProgressUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter which ProgressUpdate to delete.
     */
    where: ProgressUpdateWhereUniqueInput
  }

  /**
   * ProgressUpdate deleteMany
   */
  export type ProgressUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressUpdates to delete
     */
    where?: ProgressUpdateWhereInput
    /**
     * Limit how many ProgressUpdates to delete.
     */
    limit?: number
  }

  /**
   * ProgressUpdate without action
   */
  export type ProgressUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressUpdate
     */
    omit?: ProgressUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    link: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    link: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    link: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    link?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    link?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    link?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    message: string
    link: string | null
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "message" | "link" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      message: string
      link: string | null
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model PaymentRequest
   */

  export type AggregatePaymentRequest = {
    _count: PaymentRequestCountAggregateOutputType | null
    _avg: PaymentRequestAvgAggregateOutputType | null
    _sum: PaymentRequestSumAggregateOutputType | null
    _min: PaymentRequestMinAggregateOutputType | null
    _max: PaymentRequestMaxAggregateOutputType | null
  }

  export type PaymentRequestAvgAggregateOutputType = {
    amountNgN: number | null
  }

  export type PaymentRequestSumAggregateOutputType = {
    amountNgN: number | null
  }

  export type PaymentRequestMinAggregateOutputType = {
    id: string | null
    milestoneId: string | null
    amountNgN: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentRequestMaxAggregateOutputType = {
    id: string | null
    milestoneId: string | null
    amountNgN: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentRequestCountAggregateOutputType = {
    id: number
    milestoneId: number
    amountNgN: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentRequestAvgAggregateInputType = {
    amountNgN?: true
  }

  export type PaymentRequestSumAggregateInputType = {
    amountNgN?: true
  }

  export type PaymentRequestMinAggregateInputType = {
    id?: true
    milestoneId?: true
    amountNgN?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentRequestMaxAggregateInputType = {
    id?: true
    milestoneId?: true
    amountNgN?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentRequestCountAggregateInputType = {
    id?: true
    milestoneId?: true
    amountNgN?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRequest to aggregate.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentRequests
    **/
    _count?: true | PaymentRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentRequestMaxAggregateInputType
  }

  export type GetPaymentRequestAggregateType<T extends PaymentRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentRequest[P]>
      : GetScalarType<T[P], AggregatePaymentRequest[P]>
  }




  export type PaymentRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRequestWhereInput
    orderBy?: PaymentRequestOrderByWithAggregationInput | PaymentRequestOrderByWithAggregationInput[]
    by: PaymentRequestScalarFieldEnum[] | PaymentRequestScalarFieldEnum
    having?: PaymentRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentRequestCountAggregateInputType | true
    _avg?: PaymentRequestAvgAggregateInputType
    _sum?: PaymentRequestSumAggregateInputType
    _min?: PaymentRequestMinAggregateInputType
    _max?: PaymentRequestMaxAggregateInputType
  }

  export type PaymentRequestGroupByOutputType = {
    id: string
    milestoneId: string
    amountNgN: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentRequestCountAggregateOutputType | null
    _avg: PaymentRequestAvgAggregateOutputType | null
    _sum: PaymentRequestSumAggregateOutputType | null
    _min: PaymentRequestMinAggregateOutputType | null
    _max: PaymentRequestMaxAggregateOutputType | null
  }

  type GetPaymentRequestGroupByPayload<T extends PaymentRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentRequestGroupByOutputType[P]>
        }
      >
    >


  export type PaymentRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    milestoneId?: boolean
    amountNgN?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    paymentRecords?: boolean | PaymentRequest$paymentRecordsArgs<ExtArgs>
    _count?: boolean | PaymentRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRequest"]>

  export type PaymentRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    milestoneId?: boolean
    amountNgN?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRequest"]>

  export type PaymentRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    milestoneId?: boolean
    amountNgN?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRequest"]>

  export type PaymentRequestSelectScalar = {
    id?: boolean
    milestoneId?: boolean
    amountNgN?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "milestoneId" | "amountNgN" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentRequest"]>
  export type PaymentRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
    paymentRecords?: boolean | PaymentRequest$paymentRecordsArgs<ExtArgs>
    _count?: boolean | PaymentRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }
  export type PaymentRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }

  export type $PaymentRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentRequest"
    objects: {
      milestone: Prisma.$MilestonePayload<ExtArgs>
      paymentRecords: Prisma.$PaymentRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      milestoneId: string
      amountNgN: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentRequest"]>
    composites: {}
  }

  type PaymentRequestGetPayload<S extends boolean | null | undefined | PaymentRequestDefaultArgs> = $Result.GetResult<Prisma.$PaymentRequestPayload, S>

  type PaymentRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentRequestCountAggregateInputType | true
    }

  export interface PaymentRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentRequest'], meta: { name: 'PaymentRequest' } }
    /**
     * Find zero or one PaymentRequest that matches the filter.
     * @param {PaymentRequestFindUniqueArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentRequestFindUniqueArgs>(args: SelectSubset<T, PaymentRequestFindUniqueArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentRequestFindUniqueOrThrowArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestFindFirstArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentRequestFindFirstArgs>(args?: SelectSubset<T, PaymentRequestFindFirstArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestFindFirstOrThrowArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentRequests
     * const paymentRequests = await prisma.paymentRequest.findMany()
     * 
     * // Get first 10 PaymentRequests
     * const paymentRequests = await prisma.paymentRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentRequestWithIdOnly = await prisma.paymentRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentRequestFindManyArgs>(args?: SelectSubset<T, PaymentRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentRequest.
     * @param {PaymentRequestCreateArgs} args - Arguments to create a PaymentRequest.
     * @example
     * // Create one PaymentRequest
     * const PaymentRequest = await prisma.paymentRequest.create({
     *   data: {
     *     // ... data to create a PaymentRequest
     *   }
     * })
     * 
     */
    create<T extends PaymentRequestCreateArgs>(args: SelectSubset<T, PaymentRequestCreateArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentRequests.
     * @param {PaymentRequestCreateManyArgs} args - Arguments to create many PaymentRequests.
     * @example
     * // Create many PaymentRequests
     * const paymentRequest = await prisma.paymentRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentRequestCreateManyArgs>(args?: SelectSubset<T, PaymentRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentRequests and returns the data saved in the database.
     * @param {PaymentRequestCreateManyAndReturnArgs} args - Arguments to create many PaymentRequests.
     * @example
     * // Create many PaymentRequests
     * const paymentRequest = await prisma.paymentRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentRequests and only return the `id`
     * const paymentRequestWithIdOnly = await prisma.paymentRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentRequest.
     * @param {PaymentRequestDeleteArgs} args - Arguments to delete one PaymentRequest.
     * @example
     * // Delete one PaymentRequest
     * const PaymentRequest = await prisma.paymentRequest.delete({
     *   where: {
     *     // ... filter to delete one PaymentRequest
     *   }
     * })
     * 
     */
    delete<T extends PaymentRequestDeleteArgs>(args: SelectSubset<T, PaymentRequestDeleteArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentRequest.
     * @param {PaymentRequestUpdateArgs} args - Arguments to update one PaymentRequest.
     * @example
     * // Update one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentRequestUpdateArgs>(args: SelectSubset<T, PaymentRequestUpdateArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentRequests.
     * @param {PaymentRequestDeleteManyArgs} args - Arguments to filter PaymentRequests to delete.
     * @example
     * // Delete a few PaymentRequests
     * const { count } = await prisma.paymentRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentRequestDeleteManyArgs>(args?: SelectSubset<T, PaymentRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentRequests
     * const paymentRequest = await prisma.paymentRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentRequestUpdateManyArgs>(args: SelectSubset<T, PaymentRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRequests and returns the data updated in the database.
     * @param {PaymentRequestUpdateManyAndReturnArgs} args - Arguments to update many PaymentRequests.
     * @example
     * // Update many PaymentRequests
     * const paymentRequest = await prisma.paymentRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentRequests and only return the `id`
     * const paymentRequestWithIdOnly = await prisma.paymentRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentRequest.
     * @param {PaymentRequestUpsertArgs} args - Arguments to update or create a PaymentRequest.
     * @example
     * // Update or create a PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.upsert({
     *   create: {
     *     // ... data to create a PaymentRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentRequest we want to update
     *   }
     * })
     */
    upsert<T extends PaymentRequestUpsertArgs>(args: SelectSubset<T, PaymentRequestUpsertArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestCountArgs} args - Arguments to filter PaymentRequests to count.
     * @example
     * // Count the number of PaymentRequests
     * const count = await prisma.paymentRequest.count({
     *   where: {
     *     // ... the filter for the PaymentRequests we want to count
     *   }
     * })
    **/
    count<T extends PaymentRequestCountArgs>(
      args?: Subset<T, PaymentRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentRequestAggregateArgs>(args: Subset<T, PaymentRequestAggregateArgs>): Prisma.PrismaPromise<GetPaymentRequestAggregateType<T>>

    /**
     * Group by PaymentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentRequestGroupByArgs['orderBy'] }
        : { orderBy?: PaymentRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentRequest model
   */
  readonly fields: PaymentRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    milestone<T extends MilestoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MilestoneDefaultArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentRecords<T extends PaymentRequest$paymentRecordsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentRequest$paymentRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentRequest model
   */
  interface PaymentRequestFieldRefs {
    readonly id: FieldRef<"PaymentRequest", 'String'>
    readonly milestoneId: FieldRef<"PaymentRequest", 'String'>
    readonly amountNgN: FieldRef<"PaymentRequest", 'Int'>
    readonly status: FieldRef<"PaymentRequest", 'String'>
    readonly createdAt: FieldRef<"PaymentRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentRequest findUnique
   */
  export type PaymentRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where: PaymentRequestWhereUniqueInput
  }

  /**
   * PaymentRequest findUniqueOrThrow
   */
  export type PaymentRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where: PaymentRequestWhereUniqueInput
  }

  /**
   * PaymentRequest findFirst
   */
  export type PaymentRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRequests.
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRequests.
     */
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }

  /**
   * PaymentRequest findFirstOrThrow
   */
  export type PaymentRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRequests.
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRequests.
     */
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }

  /**
   * PaymentRequest findMany
   */
  export type PaymentRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequests to fetch.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentRequests.
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }

  /**
   * PaymentRequest create
   */
  export type PaymentRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentRequest.
     */
    data: XOR<PaymentRequestCreateInput, PaymentRequestUncheckedCreateInput>
  }

  /**
   * PaymentRequest createMany
   */
  export type PaymentRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentRequests.
     */
    data: PaymentRequestCreateManyInput | PaymentRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentRequest createManyAndReturn
   */
  export type PaymentRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentRequests.
     */
    data: PaymentRequestCreateManyInput | PaymentRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRequest update
   */
  export type PaymentRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentRequest.
     */
    data: XOR<PaymentRequestUpdateInput, PaymentRequestUncheckedUpdateInput>
    /**
     * Choose, which PaymentRequest to update.
     */
    where: PaymentRequestWhereUniqueInput
  }

  /**
   * PaymentRequest updateMany
   */
  export type PaymentRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentRequests.
     */
    data: XOR<PaymentRequestUpdateManyMutationInput, PaymentRequestUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRequests to update
     */
    where?: PaymentRequestWhereInput
    /**
     * Limit how many PaymentRequests to update.
     */
    limit?: number
  }

  /**
   * PaymentRequest updateManyAndReturn
   */
  export type PaymentRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * The data used to update PaymentRequests.
     */
    data: XOR<PaymentRequestUpdateManyMutationInput, PaymentRequestUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRequests to update
     */
    where?: PaymentRequestWhereInput
    /**
     * Limit how many PaymentRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRequest upsert
   */
  export type PaymentRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentRequest to update in case it exists.
     */
    where: PaymentRequestWhereUniqueInput
    /**
     * In case the PaymentRequest found by the `where` argument doesn't exist, create a new PaymentRequest with this data.
     */
    create: XOR<PaymentRequestCreateInput, PaymentRequestUncheckedCreateInput>
    /**
     * In case the PaymentRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentRequestUpdateInput, PaymentRequestUncheckedUpdateInput>
  }

  /**
   * PaymentRequest delete
   */
  export type PaymentRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter which PaymentRequest to delete.
     */
    where: PaymentRequestWhereUniqueInput
  }

  /**
   * PaymentRequest deleteMany
   */
  export type PaymentRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRequests to delete
     */
    where?: PaymentRequestWhereInput
    /**
     * Limit how many PaymentRequests to delete.
     */
    limit?: number
  }

  /**
   * PaymentRequest.paymentRecords
   */
  export type PaymentRequest$paymentRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    cursor?: PaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRequest without action
   */
  export type PaymentRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
  }


  /**
   * Model PaymentRecord
   */

  export type AggregatePaymentRecord = {
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  export type PaymentRecordAvgAggregateOutputType = {
    paidAmountNgN: number | null
  }

  export type PaymentRecordSumAggregateOutputType = {
    paidAmountNgN: number | null
  }

  export type PaymentRecordMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    paymentRequestId: string | null
    paidAmountNgN: number | null
    receiptUrl: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentRecordMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    paymentRequestId: string | null
    paidAmountNgN: number | null
    receiptUrl: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentRecordCountAggregateOutputType = {
    id: number
    projectId: number
    paymentRequestId: number
    paidAmountNgN: number
    receiptUrl: number
    paidAt: number
    createdAt: number
    _all: number
  }


  export type PaymentRecordAvgAggregateInputType = {
    paidAmountNgN?: true
  }

  export type PaymentRecordSumAggregateInputType = {
    paidAmountNgN?: true
  }

  export type PaymentRecordMinAggregateInputType = {
    id?: true
    projectId?: true
    paymentRequestId?: true
    paidAmountNgN?: true
    receiptUrl?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentRecordMaxAggregateInputType = {
    id?: true
    projectId?: true
    paymentRequestId?: true
    paidAmountNgN?: true
    receiptUrl?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentRecordCountAggregateInputType = {
    id?: true
    projectId?: true
    paymentRequestId?: true
    paidAmountNgN?: true
    receiptUrl?: true
    paidAt?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecord to aggregate.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentRecords
    **/
    _count?: true | PaymentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type GetPaymentRecordAggregateType<T extends PaymentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentRecord[P]>
      : GetScalarType<T[P], AggregatePaymentRecord[P]>
  }




  export type PaymentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithAggregationInput | PaymentRecordOrderByWithAggregationInput[]
    by: PaymentRecordScalarFieldEnum[] | PaymentRecordScalarFieldEnum
    having?: PaymentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentRecordCountAggregateInputType | true
    _avg?: PaymentRecordAvgAggregateInputType
    _sum?: PaymentRecordSumAggregateInputType
    _min?: PaymentRecordMinAggregateInputType
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type PaymentRecordGroupByOutputType = {
    id: string
    projectId: string
    paymentRequestId: string | null
    paidAmountNgN: number
    receiptUrl: string
    paidAt: Date
    createdAt: Date
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  type GetPaymentRecordGroupByPayload<T extends PaymentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
        }
      >
    >


  export type PaymentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    paymentRequestId?: boolean
    paidAmountNgN?: boolean
    receiptUrl?: boolean
    paidAt?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    paymentRequest?: boolean | PaymentRecord$paymentRequestArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    paymentRequestId?: boolean
    paidAmountNgN?: boolean
    receiptUrl?: boolean
    paidAt?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    paymentRequest?: boolean | PaymentRecord$paymentRequestArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    paymentRequestId?: boolean
    paidAmountNgN?: boolean
    receiptUrl?: boolean
    paidAt?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    paymentRequest?: boolean | PaymentRecord$paymentRequestArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectScalar = {
    id?: boolean
    projectId?: boolean
    paymentRequestId?: boolean
    paidAmountNgN?: boolean
    receiptUrl?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }

  export type PaymentRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "paymentRequestId" | "paidAmountNgN" | "receiptUrl" | "paidAt" | "createdAt", ExtArgs["result"]["paymentRecord"]>
  export type PaymentRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    paymentRequest?: boolean | PaymentRecord$paymentRequestArgs<ExtArgs>
  }
  export type PaymentRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    paymentRequest?: boolean | PaymentRecord$paymentRequestArgs<ExtArgs>
  }
  export type PaymentRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    paymentRequest?: boolean | PaymentRecord$paymentRequestArgs<ExtArgs>
  }

  export type $PaymentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentRecord"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      paymentRequest: Prisma.$PaymentRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      paymentRequestId: string | null
      paidAmountNgN: number
      receiptUrl: string
      paidAt: Date
      createdAt: Date
    }, ExtArgs["result"]["paymentRecord"]>
    composites: {}
  }

  type PaymentRecordGetPayload<S extends boolean | null | undefined | PaymentRecordDefaultArgs> = $Result.GetResult<Prisma.$PaymentRecordPayload, S>

  type PaymentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentRecordCountAggregateInputType | true
    }

  export interface PaymentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentRecord'], meta: { name: 'PaymentRecord' } }
    /**
     * Find zero or one PaymentRecord that matches the filter.
     * @param {PaymentRecordFindUniqueArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentRecordFindUniqueArgs>(args: SelectSubset<T, PaymentRecordFindUniqueArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentRecordFindUniqueOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentRecordFindFirstArgs>(args?: SelectSubset<T, PaymentRecordFindFirstArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany()
     * 
     * // Get first 10 PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentRecordFindManyArgs>(args?: SelectSubset<T, PaymentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentRecord.
     * @param {PaymentRecordCreateArgs} args - Arguments to create a PaymentRecord.
     * @example
     * // Create one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.create({
     *   data: {
     *     // ... data to create a PaymentRecord
     *   }
     * })
     * 
     */
    create<T extends PaymentRecordCreateArgs>(args: SelectSubset<T, PaymentRecordCreateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentRecords.
     * @param {PaymentRecordCreateManyArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentRecordCreateManyArgs>(args?: SelectSubset<T, PaymentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentRecords and returns the data saved in the database.
     * @param {PaymentRecordCreateManyAndReturnArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentRecords and only return the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentRecord.
     * @param {PaymentRecordDeleteArgs} args - Arguments to delete one PaymentRecord.
     * @example
     * // Delete one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.delete({
     *   where: {
     *     // ... filter to delete one PaymentRecord
     *   }
     * })
     * 
     */
    delete<T extends PaymentRecordDeleteArgs>(args: SelectSubset<T, PaymentRecordDeleteArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentRecord.
     * @param {PaymentRecordUpdateArgs} args - Arguments to update one PaymentRecord.
     * @example
     * // Update one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentRecordUpdateArgs>(args: SelectSubset<T, PaymentRecordUpdateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentRecords.
     * @param {PaymentRecordDeleteManyArgs} args - Arguments to filter PaymentRecords to delete.
     * @example
     * // Delete a few PaymentRecords
     * const { count } = await prisma.paymentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentRecordDeleteManyArgs>(args?: SelectSubset<T, PaymentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentRecordUpdateManyArgs>(args: SelectSubset<T, PaymentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRecords and returns the data updated in the database.
     * @param {PaymentRecordUpdateManyAndReturnArgs} args - Arguments to update many PaymentRecords.
     * @example
     * // Update many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentRecords and only return the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentRecord.
     * @param {PaymentRecordUpsertArgs} args - Arguments to update or create a PaymentRecord.
     * @example
     * // Update or create a PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.upsert({
     *   create: {
     *     // ... data to create a PaymentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentRecord we want to update
     *   }
     * })
     */
    upsert<T extends PaymentRecordUpsertArgs>(args: SelectSubset<T, PaymentRecordUpsertArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordCountArgs} args - Arguments to filter PaymentRecords to count.
     * @example
     * // Count the number of PaymentRecords
     * const count = await prisma.paymentRecord.count({
     *   where: {
     *     // ... the filter for the PaymentRecords we want to count
     *   }
     * })
    **/
    count<T extends PaymentRecordCountArgs>(
      args?: Subset<T, PaymentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentRecordAggregateArgs>(args: Subset<T, PaymentRecordAggregateArgs>): Prisma.PrismaPromise<GetPaymentRecordAggregateType<T>>

    /**
     * Group by PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentRecordGroupByArgs['orderBy'] }
        : { orderBy?: PaymentRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentRecord model
   */
  readonly fields: PaymentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentRequest<T extends PaymentRecord$paymentRequestArgs<ExtArgs> = {}>(args?: Subset<T, PaymentRecord$paymentRequestArgs<ExtArgs>>): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentRecord model
   */
  interface PaymentRecordFieldRefs {
    readonly id: FieldRef<"PaymentRecord", 'String'>
    readonly projectId: FieldRef<"PaymentRecord", 'String'>
    readonly paymentRequestId: FieldRef<"PaymentRecord", 'String'>
    readonly paidAmountNgN: FieldRef<"PaymentRecord", 'Int'>
    readonly receiptUrl: FieldRef<"PaymentRecord", 'String'>
    readonly paidAt: FieldRef<"PaymentRecord", 'DateTime'>
    readonly createdAt: FieldRef<"PaymentRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentRecord findUnique
   */
  export type PaymentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findUniqueOrThrow
   */
  export type PaymentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findFirst
   */
  export type PaymentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findFirstOrThrow
   */
  export type PaymentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findMany
   */
  export type PaymentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecords to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord create
   */
  export type PaymentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentRecord.
     */
    data: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
  }

  /**
   * PaymentRecord createMany
   */
  export type PaymentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentRecord createManyAndReturn
   */
  export type PaymentRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRecord update
   */
  export type PaymentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentRecord.
     */
    data: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
    /**
     * Choose, which PaymentRecord to update.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord updateMany
   */
  export type PaymentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentRecords.
     */
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRecords to update
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to update.
     */
    limit?: number
  }

  /**
   * PaymentRecord updateManyAndReturn
   */
  export type PaymentRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * The data used to update PaymentRecords.
     */
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRecords to update
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRecord upsert
   */
  export type PaymentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentRecord to update in case it exists.
     */
    where: PaymentRecordWhereUniqueInput
    /**
     * In case the PaymentRecord found by the `where` argument doesn't exist, create a new PaymentRecord with this data.
     */
    create: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
    /**
     * In case the PaymentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
  }

  /**
   * PaymentRecord delete
   */
  export type PaymentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter which PaymentRecord to delete.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord deleteMany
   */
  export type PaymentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecords to delete
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to delete.
     */
    limit?: number
  }

  /**
   * PaymentRecord.paymentRequest
   */
  export type PaymentRecord$paymentRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRequest
     */
    omit?: PaymentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    where?: PaymentRequestWhereInput
  }

  /**
   * PaymentRecord without action
   */
  export type PaymentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    emailVerified: 'emailVerified',
    image: 'image',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    status: 'status',
    geofence: 'geofence',
    ownerId: 'ownerId',
    supervisorId: 'supervisorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    status: 'status',
    order: 'order',
    budgetNgN: 'budgetNgN',
    invoiceUrl: 'invoiceUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const BenchmarkScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    milestoneId: 'milestoneId',
    title: 'title',
    notes: 'notes',
    mediaUrl: 'mediaUrl',
    mediaType: 'mediaType',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type BenchmarkScalarFieldEnum = (typeof BenchmarkScalarFieldEnum)[keyof typeof BenchmarkScalarFieldEnum]


  export const ProgressUpdateScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    milestoneId: 'milestoneId',
    supervisorId: 'supervisorId',
    rawMediaUrls: 'rawMediaUrls',
    aiDescription: 'aiDescription',
    aiMarkupData: 'aiMarkupData',
    aiCompletionEstimate: 'aiCompletionEstimate',
    processingStatus: 'processingStatus',
    reviewStatus: 'reviewStatus',
    supervisorNote: 'supervisorNote',
    failureReason: 'failureReason',
    retryCount: 'retryCount',
    gpsLat: 'gpsLat',
    gpsLng: 'gpsLng',
    gpsManual: 'gpsManual',
    deviceTimestamp: 'deviceTimestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgressUpdateScalarFieldEnum = (typeof ProgressUpdateScalarFieldEnum)[keyof typeof ProgressUpdateScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    link: 'link',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PaymentRequestScalarFieldEnum: {
    id: 'id',
    milestoneId: 'milestoneId',
    amountNgN: 'amountNgN',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentRequestScalarFieldEnum = (typeof PaymentRequestScalarFieldEnum)[keyof typeof PaymentRequestScalarFieldEnum]


  export const PaymentRecordScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    paymentRequestId: 'paymentRequestId',
    paidAmountNgN: 'paidAmountNgN',
    receiptUrl: 'receiptUrl',
    paidAt: 'paidAt',
    createdAt: 'createdAt'
  };

  export type PaymentRecordScalarFieldEnum = (typeof PaymentRecordScalarFieldEnum)[keyof typeof PaymentRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'MilestoneStatus'
   */
  export type EnumMilestoneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneStatus'>
    


  /**
   * Reference to a field of type 'MilestoneStatus[]'
   */
  export type ListEnumMilestoneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneStatus[]'>
    


  /**
   * Reference to a field of type 'ProcessingStatus'
   */
  export type EnumProcessingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessingStatus'>
    


  /**
   * Reference to a field of type 'ProcessingStatus[]'
   */
  export type ListEnumProcessingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessingStatus[]'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'ReviewStatus[]'
   */
  export type ListEnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedProjects?: ProjectListRelationFilter
    supervisedProjects?: ProjectListRelationFilter
    progressUpdates?: ProgressUpdateListRelationFilter
    notifications?: NotificationListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownedProjects?: ProjectOrderByRelationAggregateInput
    supervisedProjects?: ProjectOrderByRelationAggregateInput
    progressUpdates?: ProgressUpdateOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    resetToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedProjects?: ProjectListRelationFilter
    supervisedProjects?: ProjectListRelationFilter
    progressUpdates?: ProgressUpdateListRelationFilter
    notifications?: NotificationListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email" | "resetToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    address?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    geofence?: JsonNullableFilter<"Project">
    ownerId?: StringFilter<"Project"> | string
    supervisorId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    supervisor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    milestones?: MilestoneListRelationFilter
    benchmarks?: BenchmarkListRelationFilter
    progressUpdates?: ProgressUpdateListRelationFilter
    paymentRecords?: PaymentRecordListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrder
    geofence?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    supervisorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    supervisor?: UserOrderByWithRelationInput
    milestones?: MilestoneOrderByRelationAggregateInput
    benchmarks?: BenchmarkOrderByRelationAggregateInput
    progressUpdates?: ProgressUpdateOrderByRelationAggregateInput
    paymentRecords?: PaymentRecordOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    address?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    geofence?: JsonNullableFilter<"Project">
    ownerId?: StringFilter<"Project"> | string
    supervisorId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    supervisor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    milestones?: MilestoneListRelationFilter
    benchmarks?: BenchmarkListRelationFilter
    progressUpdates?: ProgressUpdateListRelationFilter
    paymentRecords?: PaymentRecordListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrder
    geofence?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    supervisorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    address?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    geofence?: JsonNullableWithAggregatesFilter<"Project">
    ownerId?: StringWithAggregatesFilter<"Project"> | string
    supervisorId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: StringFilter<"Milestone"> | string
    projectId?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    dueDate?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    order?: IntFilter<"Milestone"> | number
    budgetNgN?: IntNullableFilter<"Milestone"> | number | null
    invoiceUrl?: StringNullableFilter<"Milestone"> | string | null
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    progressUpdates?: ProgressUpdateListRelationFilter
    paymentRequests?: PaymentRequestListRelationFilter
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    order?: SortOrder
    budgetNgN?: SortOrderInput | SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    progressUpdates?: ProgressUpdateOrderByRelationAggregateInput
    paymentRequests?: PaymentRequestOrderByRelationAggregateInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    projectId?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    dueDate?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    order?: IntFilter<"Milestone"> | number
    budgetNgN?: IntNullableFilter<"Milestone"> | number | null
    invoiceUrl?: StringNullableFilter<"Milestone"> | string | null
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    progressUpdates?: ProgressUpdateListRelationFilter
    paymentRequests?: PaymentRequestListRelationFilter
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    order?: SortOrder
    budgetNgN?: SortOrderInput | SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _avg?: MilestoneAvgOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
    _sum?: MilestoneSumOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Milestone"> | string
    projectId?: StringWithAggregatesFilter<"Milestone"> | string
    title?: StringWithAggregatesFilter<"Milestone"> | string
    description?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Milestone"> | Date | string | null
    status?: EnumMilestoneStatusWithAggregatesFilter<"Milestone"> | $Enums.MilestoneStatus
    order?: IntWithAggregatesFilter<"Milestone"> | number
    budgetNgN?: IntNullableWithAggregatesFilter<"Milestone"> | number | null
    invoiceUrl?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
  }

  export type BenchmarkWhereInput = {
    AND?: BenchmarkWhereInput | BenchmarkWhereInput[]
    OR?: BenchmarkWhereInput[]
    NOT?: BenchmarkWhereInput | BenchmarkWhereInput[]
    id?: StringFilter<"Benchmark"> | string
    projectId?: StringFilter<"Benchmark"> | string
    milestoneId?: StringNullableFilter<"Benchmark"> | string | null
    title?: StringFilter<"Benchmark"> | string
    notes?: StringNullableFilter<"Benchmark"> | string | null
    mediaUrl?: StringFilter<"Benchmark"> | string
    mediaType?: StringFilter<"Benchmark"> | string
    category?: StringFilter<"Benchmark"> | string
    createdAt?: DateTimeFilter<"Benchmark"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type BenchmarkOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    milestoneId?: SortOrderInput | SortOrder
    title?: SortOrder
    notes?: SortOrderInput | SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type BenchmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BenchmarkWhereInput | BenchmarkWhereInput[]
    OR?: BenchmarkWhereInput[]
    NOT?: BenchmarkWhereInput | BenchmarkWhereInput[]
    projectId?: StringFilter<"Benchmark"> | string
    milestoneId?: StringNullableFilter<"Benchmark"> | string | null
    title?: StringFilter<"Benchmark"> | string
    notes?: StringNullableFilter<"Benchmark"> | string | null
    mediaUrl?: StringFilter<"Benchmark"> | string
    mediaType?: StringFilter<"Benchmark"> | string
    category?: StringFilter<"Benchmark"> | string
    createdAt?: DateTimeFilter<"Benchmark"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type BenchmarkOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    milestoneId?: SortOrderInput | SortOrder
    title?: SortOrder
    notes?: SortOrderInput | SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    _count?: BenchmarkCountOrderByAggregateInput
    _max?: BenchmarkMaxOrderByAggregateInput
    _min?: BenchmarkMinOrderByAggregateInput
  }

  export type BenchmarkScalarWhereWithAggregatesInput = {
    AND?: BenchmarkScalarWhereWithAggregatesInput | BenchmarkScalarWhereWithAggregatesInput[]
    OR?: BenchmarkScalarWhereWithAggregatesInput[]
    NOT?: BenchmarkScalarWhereWithAggregatesInput | BenchmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Benchmark"> | string
    projectId?: StringWithAggregatesFilter<"Benchmark"> | string
    milestoneId?: StringNullableWithAggregatesFilter<"Benchmark"> | string | null
    title?: StringWithAggregatesFilter<"Benchmark"> | string
    notes?: StringNullableWithAggregatesFilter<"Benchmark"> | string | null
    mediaUrl?: StringWithAggregatesFilter<"Benchmark"> | string
    mediaType?: StringWithAggregatesFilter<"Benchmark"> | string
    category?: StringWithAggregatesFilter<"Benchmark"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Benchmark"> | Date | string
  }

  export type ProgressUpdateWhereInput = {
    AND?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    OR?: ProgressUpdateWhereInput[]
    NOT?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    id?: StringFilter<"ProgressUpdate"> | string
    projectId?: StringFilter<"ProgressUpdate"> | string
    milestoneId?: StringFilter<"ProgressUpdate"> | string
    supervisorId?: StringFilter<"ProgressUpdate"> | string
    rawMediaUrls?: StringNullableListFilter<"ProgressUpdate">
    aiDescription?: StringNullableFilter<"ProgressUpdate"> | string | null
    aiMarkupData?: JsonNullableFilter<"ProgressUpdate">
    aiCompletionEstimate?: IntNullableFilter<"ProgressUpdate"> | number | null
    processingStatus?: EnumProcessingStatusFilter<"ProgressUpdate"> | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFilter<"ProgressUpdate"> | $Enums.ReviewStatus
    supervisorNote?: StringNullableFilter<"ProgressUpdate"> | string | null
    failureReason?: StringNullableFilter<"ProgressUpdate"> | string | null
    retryCount?: IntFilter<"ProgressUpdate"> | number
    gpsLat?: FloatNullableFilter<"ProgressUpdate"> | number | null
    gpsLng?: FloatNullableFilter<"ProgressUpdate"> | number | null
    gpsManual?: BoolFilter<"ProgressUpdate"> | boolean
    deviceTimestamp?: DateTimeNullableFilter<"ProgressUpdate"> | Date | string | null
    createdAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
    supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProgressUpdateOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    milestoneId?: SortOrder
    supervisorId?: SortOrder
    rawMediaUrls?: SortOrder
    aiDescription?: SortOrderInput | SortOrder
    aiMarkupData?: SortOrderInput | SortOrder
    aiCompletionEstimate?: SortOrderInput | SortOrder
    processingStatus?: SortOrder
    reviewStatus?: SortOrder
    supervisorNote?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    gpsLat?: SortOrderInput | SortOrder
    gpsLng?: SortOrderInput | SortOrder
    gpsManual?: SortOrder
    deviceTimestamp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    milestone?: MilestoneOrderByWithRelationInput
    supervisor?: UserOrderByWithRelationInput
  }

  export type ProgressUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    OR?: ProgressUpdateWhereInput[]
    NOT?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    projectId?: StringFilter<"ProgressUpdate"> | string
    milestoneId?: StringFilter<"ProgressUpdate"> | string
    supervisorId?: StringFilter<"ProgressUpdate"> | string
    rawMediaUrls?: StringNullableListFilter<"ProgressUpdate">
    aiDescription?: StringNullableFilter<"ProgressUpdate"> | string | null
    aiMarkupData?: JsonNullableFilter<"ProgressUpdate">
    aiCompletionEstimate?: IntNullableFilter<"ProgressUpdate"> | number | null
    processingStatus?: EnumProcessingStatusFilter<"ProgressUpdate"> | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFilter<"ProgressUpdate"> | $Enums.ReviewStatus
    supervisorNote?: StringNullableFilter<"ProgressUpdate"> | string | null
    failureReason?: StringNullableFilter<"ProgressUpdate"> | string | null
    retryCount?: IntFilter<"ProgressUpdate"> | number
    gpsLat?: FloatNullableFilter<"ProgressUpdate"> | number | null
    gpsLng?: FloatNullableFilter<"ProgressUpdate"> | number | null
    gpsManual?: BoolFilter<"ProgressUpdate"> | boolean
    deviceTimestamp?: DateTimeNullableFilter<"ProgressUpdate"> | Date | string | null
    createdAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
    supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProgressUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    milestoneId?: SortOrder
    supervisorId?: SortOrder
    rawMediaUrls?: SortOrder
    aiDescription?: SortOrderInput | SortOrder
    aiMarkupData?: SortOrderInput | SortOrder
    aiCompletionEstimate?: SortOrderInput | SortOrder
    processingStatus?: SortOrder
    reviewStatus?: SortOrder
    supervisorNote?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    gpsLat?: SortOrderInput | SortOrder
    gpsLng?: SortOrderInput | SortOrder
    gpsManual?: SortOrder
    deviceTimestamp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgressUpdateCountOrderByAggregateInput
    _avg?: ProgressUpdateAvgOrderByAggregateInput
    _max?: ProgressUpdateMaxOrderByAggregateInput
    _min?: ProgressUpdateMinOrderByAggregateInput
    _sum?: ProgressUpdateSumOrderByAggregateInput
  }

  export type ProgressUpdateScalarWhereWithAggregatesInput = {
    AND?: ProgressUpdateScalarWhereWithAggregatesInput | ProgressUpdateScalarWhereWithAggregatesInput[]
    OR?: ProgressUpdateScalarWhereWithAggregatesInput[]
    NOT?: ProgressUpdateScalarWhereWithAggregatesInput | ProgressUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressUpdate"> | string
    projectId?: StringWithAggregatesFilter<"ProgressUpdate"> | string
    milestoneId?: StringWithAggregatesFilter<"ProgressUpdate"> | string
    supervisorId?: StringWithAggregatesFilter<"ProgressUpdate"> | string
    rawMediaUrls?: StringNullableListFilter<"ProgressUpdate">
    aiDescription?: StringNullableWithAggregatesFilter<"ProgressUpdate"> | string | null
    aiMarkupData?: JsonNullableWithAggregatesFilter<"ProgressUpdate">
    aiCompletionEstimate?: IntNullableWithAggregatesFilter<"ProgressUpdate"> | number | null
    processingStatus?: EnumProcessingStatusWithAggregatesFilter<"ProgressUpdate"> | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusWithAggregatesFilter<"ProgressUpdate"> | $Enums.ReviewStatus
    supervisorNote?: StringNullableWithAggregatesFilter<"ProgressUpdate"> | string | null
    failureReason?: StringNullableWithAggregatesFilter<"ProgressUpdate"> | string | null
    retryCount?: IntWithAggregatesFilter<"ProgressUpdate"> | number
    gpsLat?: FloatNullableWithAggregatesFilter<"ProgressUpdate"> | number | null
    gpsLng?: FloatNullableWithAggregatesFilter<"ProgressUpdate"> | number | null
    gpsManual?: BoolWithAggregatesFilter<"ProgressUpdate"> | boolean
    deviceTimestamp?: DateTimeNullableWithAggregatesFilter<"ProgressUpdate"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProgressUpdate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProgressUpdate"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type PaymentRequestWhereInput = {
    AND?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    OR?: PaymentRequestWhereInput[]
    NOT?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    id?: StringFilter<"PaymentRequest"> | string
    milestoneId?: StringFilter<"PaymentRequest"> | string
    amountNgN?: IntFilter<"PaymentRequest"> | number
    status?: StringFilter<"PaymentRequest"> | string
    createdAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
    paymentRecords?: PaymentRecordListRelationFilter
  }

  export type PaymentRequestOrderByWithRelationInput = {
    id?: SortOrder
    milestoneId?: SortOrder
    amountNgN?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    milestone?: MilestoneOrderByWithRelationInput
    paymentRecords?: PaymentRecordOrderByRelationAggregateInput
  }

  export type PaymentRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    OR?: PaymentRequestWhereInput[]
    NOT?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    milestoneId?: StringFilter<"PaymentRequest"> | string
    amountNgN?: IntFilter<"PaymentRequest"> | number
    status?: StringFilter<"PaymentRequest"> | string
    createdAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
    paymentRecords?: PaymentRecordListRelationFilter
  }, "id">

  export type PaymentRequestOrderByWithAggregationInput = {
    id?: SortOrder
    milestoneId?: SortOrder
    amountNgN?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentRequestCountOrderByAggregateInput
    _avg?: PaymentRequestAvgOrderByAggregateInput
    _max?: PaymentRequestMaxOrderByAggregateInput
    _min?: PaymentRequestMinOrderByAggregateInput
    _sum?: PaymentRequestSumOrderByAggregateInput
  }

  export type PaymentRequestScalarWhereWithAggregatesInput = {
    AND?: PaymentRequestScalarWhereWithAggregatesInput | PaymentRequestScalarWhereWithAggregatesInput[]
    OR?: PaymentRequestScalarWhereWithAggregatesInput[]
    NOT?: PaymentRequestScalarWhereWithAggregatesInput | PaymentRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentRequest"> | string
    milestoneId?: StringWithAggregatesFilter<"PaymentRequest"> | string
    amountNgN?: IntWithAggregatesFilter<"PaymentRequest"> | number
    status?: StringWithAggregatesFilter<"PaymentRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentRequest"> | Date | string
  }

  export type PaymentRecordWhereInput = {
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    id?: StringFilter<"PaymentRecord"> | string
    projectId?: StringFilter<"PaymentRecord"> | string
    paymentRequestId?: StringNullableFilter<"PaymentRecord"> | string | null
    paidAmountNgN?: IntFilter<"PaymentRecord"> | number
    receiptUrl?: StringFilter<"PaymentRecord"> | string
    paidAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    paymentRequest?: XOR<PaymentRequestNullableScalarRelationFilter, PaymentRequestWhereInput> | null
  }

  export type PaymentRecordOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    paymentRequestId?: SortOrderInput | SortOrder
    paidAmountNgN?: SortOrder
    receiptUrl?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    paymentRequest?: PaymentRequestOrderByWithRelationInput
  }

  export type PaymentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    projectId?: StringFilter<"PaymentRecord"> | string
    paymentRequestId?: StringNullableFilter<"PaymentRecord"> | string | null
    paidAmountNgN?: IntFilter<"PaymentRecord"> | number
    receiptUrl?: StringFilter<"PaymentRecord"> | string
    paidAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    paymentRequest?: XOR<PaymentRequestNullableScalarRelationFilter, PaymentRequestWhereInput> | null
  }, "id">

  export type PaymentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    paymentRequestId?: SortOrderInput | SortOrder
    paidAmountNgN?: SortOrder
    receiptUrl?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentRecordCountOrderByAggregateInput
    _avg?: PaymentRecordAvgOrderByAggregateInput
    _max?: PaymentRecordMaxOrderByAggregateInput
    _min?: PaymentRecordMinOrderByAggregateInput
    _sum?: PaymentRecordSumOrderByAggregateInput
  }

  export type PaymentRecordScalarWhereWithAggregatesInput = {
    AND?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    OR?: PaymentRecordScalarWhereWithAggregatesInput[]
    NOT?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentRecord"> | string
    projectId?: StringWithAggregatesFilter<"PaymentRecord"> | string
    paymentRequestId?: StringNullableWithAggregatesFilter<"PaymentRecord"> | string | null
    paidAmountNgN?: IntWithAggregatesFilter<"PaymentRecord"> | number
    receiptUrl?: StringWithAggregatesFilter<"PaymentRecord"> | string
    paidAt?: DateTimeWithAggregatesFilter<"PaymentRecord"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentRecord"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    supervisedProjects?: ProjectCreateNestedManyWithoutSupervisorInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    supervisedProjects?: ProjectUncheckedCreateNestedManyWithoutSupervisorInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    supervisedProjects?: ProjectUpdateManyWithoutSupervisorNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    supervisedProjects?: ProjectUncheckedUpdateManyWithoutSupervisorNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    supervisor?: UserCreateNestedOneWithoutSupervisedProjectsInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    benchmarks?: BenchmarkCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    benchmarks?: BenchmarkUncheckedCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    supervisor?: UserUpdateOneWithoutSupervisedProjectsNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    benchmarks?: BenchmarkUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    benchmarks?: BenchmarkUncheckedUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.MilestoneStatus
    order?: number
    budgetNgN?: number | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMilestonesInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutMilestoneInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: string
    projectId: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.MilestoneStatus
    order?: number
    budgetNgN?: number | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutMilestoneInput
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMilestonesNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutMilestoneNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutMilestoneNestedInput
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneCreateManyInput = {
    id?: string
    projectId: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.MilestoneStatus
    order?: number
    budgetNgN?: number | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenchmarkCreateInput = {
    id?: string
    milestoneId?: string | null
    title?: string
    notes?: string | null
    mediaUrl: string
    mediaType?: string
    category?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutBenchmarksInput
  }

  export type BenchmarkUncheckedCreateInput = {
    id?: string
    projectId: string
    milestoneId?: string | null
    title?: string
    notes?: string | null
    mediaUrl: string
    mediaType?: string
    category?: string
    createdAt?: Date | string
  }

  export type BenchmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutBenchmarksNestedInput
  }

  export type BenchmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenchmarkCreateManyInput = {
    id?: string
    projectId: string
    milestoneId?: string | null
    title?: string
    notes?: string | null
    mediaUrl: string
    mediaType?: string
    category?: string
    createdAt?: Date | string
  }

  export type BenchmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenchmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateCreateInput = {
    id?: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProgressUpdatesInput
    milestone: MilestoneCreateNestedOneWithoutProgressUpdatesInput
    supervisor: UserCreateNestedOneWithoutProgressUpdatesInput
  }

  export type ProgressUpdateUncheckedCreateInput = {
    id?: string
    projectId: string
    milestoneId: string
    supervisorId: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProgressUpdatesNestedInput
    milestone?: MilestoneUpdateOneRequiredWithoutProgressUpdatesNestedInput
    supervisor?: UserUpdateOneRequiredWithoutProgressUpdatesNestedInput
  }

  export type ProgressUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateCreateManyInput = {
    id?: string
    projectId: string
    milestoneId: string
    supervisorId: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    title: string
    message: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRequestCreateInput = {
    id?: string
    amountNgN: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    milestone: MilestoneCreateNestedOneWithoutPaymentRequestsInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutPaymentRequestInput
  }

  export type PaymentRequestUncheckedCreateInput = {
    id?: string
    milestoneId: string
    amountNgN: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutPaymentRequestInput
  }

  export type PaymentRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNgN?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUpdateOneRequiredWithoutPaymentRequestsNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutPaymentRequestNestedInput
  }

  export type PaymentRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    amountNgN?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutPaymentRequestNestedInput
  }

  export type PaymentRequestCreateManyInput = {
    id?: string
    milestoneId: string
    amountNgN: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNgN?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    amountNgN?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordCreateInput = {
    id?: string
    paidAmountNgN: number
    receiptUrl: string
    paidAt?: Date | string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutPaymentRecordsInput
    paymentRequest?: PaymentRequestCreateNestedOneWithoutPaymentRecordsInput
  }

  export type PaymentRecordUncheckedCreateInput = {
    id?: string
    projectId: string
    paymentRequestId?: string | null
    paidAmountNgN: number
    receiptUrl: string
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidAmountNgN?: IntFieldUpdateOperationsInput | number
    receiptUrl?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPaymentRecordsNestedInput
    paymentRequest?: PaymentRequestUpdateOneWithoutPaymentRecordsNestedInput
  }

  export type PaymentRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    paymentRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAmountNgN?: IntFieldUpdateOperationsInput | number
    receiptUrl?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordCreateManyInput = {
    id?: string
    projectId: string
    paymentRequestId?: string | null
    paidAmountNgN: number
    receiptUrl: string
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidAmountNgN?: IntFieldUpdateOperationsInput | number
    receiptUrl?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    paymentRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAmountNgN?: IntFieldUpdateOperationsInput | number
    receiptUrl?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProgressUpdateListRelationFilter = {
    every?: ProgressUpdateWhereInput
    some?: ProgressUpdateWhereInput
    none?: ProgressUpdateWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type BenchmarkListRelationFilter = {
    every?: BenchmarkWhereInput
    some?: BenchmarkWhereInput
    none?: BenchmarkWhereInput
  }

  export type PaymentRecordListRelationFilter = {
    every?: PaymentRecordWhereInput
    some?: PaymentRecordWhereInput
    none?: PaymentRecordWhereInput
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BenchmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    status?: SortOrder
    geofence?: SortOrder
    ownerId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumMilestoneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusFilter<$PrismaModel> | $Enums.MilestoneStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type PaymentRequestListRelationFilter = {
    every?: PaymentRequestWhereInput
    some?: PaymentRequestWhereInput
    none?: PaymentRequestWhereInput
  }

  export type PaymentRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    order?: SortOrder
    budgetNgN?: SortOrder
    invoiceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneAvgOrderByAggregateInput = {
    order?: SortOrder
    budgetNgN?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    order?: SortOrder
    budgetNgN?: SortOrder
    invoiceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    order?: SortOrder
    budgetNgN?: SortOrder
    invoiceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneSumOrderByAggregateInput = {
    order?: SortOrder
    budgetNgN?: SortOrder
  }

  export type EnumMilestoneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMilestoneStatusFilter<$PrismaModel>
    _max?: NestedEnumMilestoneStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BenchmarkCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    milestoneId?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type BenchmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    milestoneId?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type BenchmarkMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    milestoneId?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumProcessingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusFilter<$PrismaModel> | $Enums.ProcessingStatus
  }

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MilestoneScalarRelationFilter = {
    is?: MilestoneWhereInput
    isNot?: MilestoneWhereInput
  }

  export type ProgressUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    milestoneId?: SortOrder
    supervisorId?: SortOrder
    rawMediaUrls?: SortOrder
    aiDescription?: SortOrder
    aiMarkupData?: SortOrder
    aiCompletionEstimate?: SortOrder
    processingStatus?: SortOrder
    reviewStatus?: SortOrder
    supervisorNote?: SortOrder
    failureReason?: SortOrder
    retryCount?: SortOrder
    gpsLat?: SortOrder
    gpsLng?: SortOrder
    gpsManual?: SortOrder
    deviceTimestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressUpdateAvgOrderByAggregateInput = {
    aiCompletionEstimate?: SortOrder
    retryCount?: SortOrder
    gpsLat?: SortOrder
    gpsLng?: SortOrder
  }

  export type ProgressUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    milestoneId?: SortOrder
    supervisorId?: SortOrder
    aiDescription?: SortOrder
    aiCompletionEstimate?: SortOrder
    processingStatus?: SortOrder
    reviewStatus?: SortOrder
    supervisorNote?: SortOrder
    failureReason?: SortOrder
    retryCount?: SortOrder
    gpsLat?: SortOrder
    gpsLng?: SortOrder
    gpsManual?: SortOrder
    deviceTimestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    milestoneId?: SortOrder
    supervisorId?: SortOrder
    aiDescription?: SortOrder
    aiCompletionEstimate?: SortOrder
    processingStatus?: SortOrder
    reviewStatus?: SortOrder
    supervisorNote?: SortOrder
    failureReason?: SortOrder
    retryCount?: SortOrder
    gpsLat?: SortOrder
    gpsLng?: SortOrder
    gpsManual?: SortOrder
    deviceTimestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressUpdateSumOrderByAggregateInput = {
    aiCompletionEstimate?: SortOrder
    retryCount?: SortOrder
    gpsLat?: SortOrder
    gpsLng?: SortOrder
  }

  export type EnumProcessingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessingStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessingStatusFilter<$PrismaModel>
  }

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentRequestCountOrderByAggregateInput = {
    id?: SortOrder
    milestoneId?: SortOrder
    amountNgN?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentRequestAvgOrderByAggregateInput = {
    amountNgN?: SortOrder
  }

  export type PaymentRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    milestoneId?: SortOrder
    amountNgN?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentRequestMinOrderByAggregateInput = {
    id?: SortOrder
    milestoneId?: SortOrder
    amountNgN?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentRequestSumOrderByAggregateInput = {
    amountNgN?: SortOrder
  }

  export type PaymentRequestNullableScalarRelationFilter = {
    is?: PaymentRequestWhereInput | null
    isNot?: PaymentRequestWhereInput | null
  }

  export type PaymentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    paymentRequestId?: SortOrder
    paidAmountNgN?: SortOrder
    receiptUrl?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentRecordAvgOrderByAggregateInput = {
    paidAmountNgN?: SortOrder
  }

  export type PaymentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    paymentRequestId?: SortOrder
    paidAmountNgN?: SortOrder
    receiptUrl?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    paymentRequestId?: SortOrder
    paidAmountNgN?: SortOrder
    receiptUrl?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentRecordSumOrderByAggregateInput = {
    paidAmountNgN?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<ProjectCreateWithoutSupervisorInput, ProjectUncheckedCreateWithoutSupervisorInput> | ProjectCreateWithoutSupervisorInput[] | ProjectUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutSupervisorInput | ProjectCreateOrConnectWithoutSupervisorInput[]
    createMany?: ProjectCreateManySupervisorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProgressUpdateCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<ProgressUpdateCreateWithoutSupervisorInput, ProgressUpdateUncheckedCreateWithoutSupervisorInput> | ProgressUpdateCreateWithoutSupervisorInput[] | ProgressUpdateUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutSupervisorInput | ProgressUpdateCreateOrConnectWithoutSupervisorInput[]
    createMany?: ProgressUpdateCreateManySupervisorInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<ProjectCreateWithoutSupervisorInput, ProjectUncheckedCreateWithoutSupervisorInput> | ProjectCreateWithoutSupervisorInput[] | ProjectUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutSupervisorInput | ProjectCreateOrConnectWithoutSupervisorInput[]
    createMany?: ProjectCreateManySupervisorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProgressUpdateUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<ProgressUpdateCreateWithoutSupervisorInput, ProgressUpdateUncheckedCreateWithoutSupervisorInput> | ProgressUpdateCreateWithoutSupervisorInput[] | ProgressUpdateUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutSupervisorInput | ProgressUpdateCreateOrConnectWithoutSupervisorInput[]
    createMany?: ProgressUpdateCreateManySupervisorInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<ProjectCreateWithoutSupervisorInput, ProjectUncheckedCreateWithoutSupervisorInput> | ProjectCreateWithoutSupervisorInput[] | ProjectUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutSupervisorInput | ProjectCreateOrConnectWithoutSupervisorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutSupervisorInput | ProjectUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: ProjectCreateManySupervisorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutSupervisorInput | ProjectUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutSupervisorInput | ProjectUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProgressUpdateUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutSupervisorInput, ProgressUpdateUncheckedCreateWithoutSupervisorInput> | ProgressUpdateCreateWithoutSupervisorInput[] | ProgressUpdateUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutSupervisorInput | ProgressUpdateCreateOrConnectWithoutSupervisorInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutSupervisorInput | ProgressUpdateUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: ProgressUpdateCreateManySupervisorInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutSupervisorInput | ProgressUpdateUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutSupervisorInput | ProgressUpdateUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<ProjectCreateWithoutSupervisorInput, ProjectUncheckedCreateWithoutSupervisorInput> | ProjectCreateWithoutSupervisorInput[] | ProjectUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutSupervisorInput | ProjectCreateOrConnectWithoutSupervisorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutSupervisorInput | ProjectUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: ProjectCreateManySupervisorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutSupervisorInput | ProjectUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutSupervisorInput | ProjectUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutSupervisorInput, ProgressUpdateUncheckedCreateWithoutSupervisorInput> | ProgressUpdateCreateWithoutSupervisorInput[] | ProgressUpdateUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutSupervisorInput | ProgressUpdateCreateOrConnectWithoutSupervisorInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutSupervisorInput | ProgressUpdateUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: ProgressUpdateCreateManySupervisorInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutSupervisorInput | ProgressUpdateUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutSupervisorInput | ProgressUpdateUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutOwnedProjectsInput = {
    create?: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSupervisedProjectsInput = {
    create?: XOR<UserCreateWithoutSupervisedProjectsInput, UserUncheckedCreateWithoutSupervisedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupervisedProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type MilestoneCreateNestedManyWithoutProjectInput = {
    create?: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput> | MilestoneCreateWithoutProjectInput[] | MilestoneUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutProjectInput | MilestoneCreateOrConnectWithoutProjectInput[]
    createMany?: MilestoneCreateManyProjectInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type BenchmarkCreateNestedManyWithoutProjectInput = {
    create?: XOR<BenchmarkCreateWithoutProjectInput, BenchmarkUncheckedCreateWithoutProjectInput> | BenchmarkCreateWithoutProjectInput[] | BenchmarkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BenchmarkCreateOrConnectWithoutProjectInput | BenchmarkCreateOrConnectWithoutProjectInput[]
    createMany?: BenchmarkCreateManyProjectInputEnvelope
    connect?: BenchmarkWhereUniqueInput | BenchmarkWhereUniqueInput[]
  }

  export type ProgressUpdateCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProgressUpdateCreateWithoutProjectInput, ProgressUpdateUncheckedCreateWithoutProjectInput> | ProgressUpdateCreateWithoutProjectInput[] | ProgressUpdateUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutProjectInput | ProgressUpdateCreateOrConnectWithoutProjectInput[]
    createMany?: ProgressUpdateCreateManyProjectInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type PaymentRecordCreateNestedManyWithoutProjectInput = {
    create?: XOR<PaymentRecordCreateWithoutProjectInput, PaymentRecordUncheckedCreateWithoutProjectInput> | PaymentRecordCreateWithoutProjectInput[] | PaymentRecordUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutProjectInput | PaymentRecordCreateOrConnectWithoutProjectInput[]
    createMany?: PaymentRecordCreateManyProjectInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type MilestoneUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput> | MilestoneCreateWithoutProjectInput[] | MilestoneUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutProjectInput | MilestoneCreateOrConnectWithoutProjectInput[]
    createMany?: MilestoneCreateManyProjectInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type BenchmarkUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<BenchmarkCreateWithoutProjectInput, BenchmarkUncheckedCreateWithoutProjectInput> | BenchmarkCreateWithoutProjectInput[] | BenchmarkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BenchmarkCreateOrConnectWithoutProjectInput | BenchmarkCreateOrConnectWithoutProjectInput[]
    createMany?: BenchmarkCreateManyProjectInputEnvelope
    connect?: BenchmarkWhereUniqueInput | BenchmarkWhereUniqueInput[]
  }

  export type ProgressUpdateUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProgressUpdateCreateWithoutProjectInput, ProgressUpdateUncheckedCreateWithoutProjectInput> | ProgressUpdateCreateWithoutProjectInput[] | ProgressUpdateUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutProjectInput | ProgressUpdateCreateOrConnectWithoutProjectInput[]
    createMany?: ProgressUpdateCreateManyProjectInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type PaymentRecordUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PaymentRecordCreateWithoutProjectInput, PaymentRecordUncheckedCreateWithoutProjectInput> | PaymentRecordCreateWithoutProjectInput[] | PaymentRecordUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutProjectInput | PaymentRecordCreateOrConnectWithoutProjectInput[]
    createMany?: PaymentRecordCreateManyProjectInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type UserUpdateOneRequiredWithoutOwnedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput
    upsert?: UserUpsertWithoutOwnedProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedProjectsInput, UserUpdateWithoutOwnedProjectsInput>, UserUncheckedUpdateWithoutOwnedProjectsInput>
  }

  export type UserUpdateOneWithoutSupervisedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutSupervisedProjectsInput, UserUncheckedCreateWithoutSupervisedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupervisedProjectsInput
    upsert?: UserUpsertWithoutSupervisedProjectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSupervisedProjectsInput, UserUpdateWithoutSupervisedProjectsInput>, UserUncheckedUpdateWithoutSupervisedProjectsInput>
  }

  export type MilestoneUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput> | MilestoneCreateWithoutProjectInput[] | MilestoneUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutProjectInput | MilestoneCreateOrConnectWithoutProjectInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutProjectInput | MilestoneUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MilestoneCreateManyProjectInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutProjectInput | MilestoneUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutProjectInput | MilestoneUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type BenchmarkUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BenchmarkCreateWithoutProjectInput, BenchmarkUncheckedCreateWithoutProjectInput> | BenchmarkCreateWithoutProjectInput[] | BenchmarkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BenchmarkCreateOrConnectWithoutProjectInput | BenchmarkCreateOrConnectWithoutProjectInput[]
    upsert?: BenchmarkUpsertWithWhereUniqueWithoutProjectInput | BenchmarkUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BenchmarkCreateManyProjectInputEnvelope
    set?: BenchmarkWhereUniqueInput | BenchmarkWhereUniqueInput[]
    disconnect?: BenchmarkWhereUniqueInput | BenchmarkWhereUniqueInput[]
    delete?: BenchmarkWhereUniqueInput | BenchmarkWhereUniqueInput[]
    connect?: BenchmarkWhereUniqueInput | BenchmarkWhereUniqueInput[]
    update?: BenchmarkUpdateWithWhereUniqueWithoutProjectInput | BenchmarkUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BenchmarkUpdateManyWithWhereWithoutProjectInput | BenchmarkUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BenchmarkScalarWhereInput | BenchmarkScalarWhereInput[]
  }

  export type ProgressUpdateUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutProjectInput, ProgressUpdateUncheckedCreateWithoutProjectInput> | ProgressUpdateCreateWithoutProjectInput[] | ProgressUpdateUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutProjectInput | ProgressUpdateCreateOrConnectWithoutProjectInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutProjectInput | ProgressUpdateUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProgressUpdateCreateManyProjectInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutProjectInput | ProgressUpdateUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutProjectInput | ProgressUpdateUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type PaymentRecordUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutProjectInput, PaymentRecordUncheckedCreateWithoutProjectInput> | PaymentRecordCreateWithoutProjectInput[] | PaymentRecordUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutProjectInput | PaymentRecordCreateOrConnectWithoutProjectInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutProjectInput | PaymentRecordUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PaymentRecordCreateManyProjectInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutProjectInput | PaymentRecordUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutProjectInput | PaymentRecordUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type MilestoneUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput> | MilestoneCreateWithoutProjectInput[] | MilestoneUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutProjectInput | MilestoneCreateOrConnectWithoutProjectInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutProjectInput | MilestoneUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MilestoneCreateManyProjectInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutProjectInput | MilestoneUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutProjectInput | MilestoneUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type BenchmarkUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BenchmarkCreateWithoutProjectInput, BenchmarkUncheckedCreateWithoutProjectInput> | BenchmarkCreateWithoutProjectInput[] | BenchmarkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BenchmarkCreateOrConnectWithoutProjectInput | BenchmarkCreateOrConnectWithoutProjectInput[]
    upsert?: BenchmarkUpsertWithWhereUniqueWithoutProjectInput | BenchmarkUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BenchmarkCreateManyProjectInputEnvelope
    set?: BenchmarkWhereUniqueInput | BenchmarkWhereUniqueInput[]
    disconnect?: BenchmarkWhereUniqueInput | BenchmarkWhereUniqueInput[]
    delete?: BenchmarkWhereUniqueInput | BenchmarkWhereUniqueInput[]
    connect?: BenchmarkWhereUniqueInput | BenchmarkWhereUniqueInput[]
    update?: BenchmarkUpdateWithWhereUniqueWithoutProjectInput | BenchmarkUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BenchmarkUpdateManyWithWhereWithoutProjectInput | BenchmarkUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BenchmarkScalarWhereInput | BenchmarkScalarWhereInput[]
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutProjectInput, ProgressUpdateUncheckedCreateWithoutProjectInput> | ProgressUpdateCreateWithoutProjectInput[] | ProgressUpdateUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutProjectInput | ProgressUpdateCreateOrConnectWithoutProjectInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutProjectInput | ProgressUpdateUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProgressUpdateCreateManyProjectInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutProjectInput | ProgressUpdateUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutProjectInput | ProgressUpdateUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type PaymentRecordUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutProjectInput, PaymentRecordUncheckedCreateWithoutProjectInput> | PaymentRecordCreateWithoutProjectInput[] | PaymentRecordUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutProjectInput | PaymentRecordCreateOrConnectWithoutProjectInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutProjectInput | PaymentRecordUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PaymentRecordCreateManyProjectInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutProjectInput | PaymentRecordUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutProjectInput | PaymentRecordUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<ProjectCreateWithoutMilestonesInput, ProjectUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMilestonesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProgressUpdateCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<ProgressUpdateCreateWithoutMilestoneInput, ProgressUpdateUncheckedCreateWithoutMilestoneInput> | ProgressUpdateCreateWithoutMilestoneInput[] | ProgressUpdateUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutMilestoneInput | ProgressUpdateCreateOrConnectWithoutMilestoneInput[]
    createMany?: ProgressUpdateCreateManyMilestoneInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type PaymentRequestCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<PaymentRequestCreateWithoutMilestoneInput, PaymentRequestUncheckedCreateWithoutMilestoneInput> | PaymentRequestCreateWithoutMilestoneInput[] | PaymentRequestUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutMilestoneInput | PaymentRequestCreateOrConnectWithoutMilestoneInput[]
    createMany?: PaymentRequestCreateManyMilestoneInputEnvelope
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
  }

  export type ProgressUpdateUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<ProgressUpdateCreateWithoutMilestoneInput, ProgressUpdateUncheckedCreateWithoutMilestoneInput> | ProgressUpdateCreateWithoutMilestoneInput[] | ProgressUpdateUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutMilestoneInput | ProgressUpdateCreateOrConnectWithoutMilestoneInput[]
    createMany?: ProgressUpdateCreateManyMilestoneInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type PaymentRequestUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<PaymentRequestCreateWithoutMilestoneInput, PaymentRequestUncheckedCreateWithoutMilestoneInput> | PaymentRequestCreateWithoutMilestoneInput[] | PaymentRequestUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutMilestoneInput | PaymentRequestCreateOrConnectWithoutMilestoneInput[]
    createMany?: PaymentRequestCreateManyMilestoneInputEnvelope
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
  }

  export type EnumMilestoneStatusFieldUpdateOperationsInput = {
    set?: $Enums.MilestoneStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<ProjectCreateWithoutMilestonesInput, ProjectUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMilestonesInput
    upsert?: ProjectUpsertWithoutMilestonesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMilestonesInput, ProjectUpdateWithoutMilestonesInput>, ProjectUncheckedUpdateWithoutMilestonesInput>
  }

  export type ProgressUpdateUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutMilestoneInput, ProgressUpdateUncheckedCreateWithoutMilestoneInput> | ProgressUpdateCreateWithoutMilestoneInput[] | ProgressUpdateUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutMilestoneInput | ProgressUpdateCreateOrConnectWithoutMilestoneInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutMilestoneInput | ProgressUpdateUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: ProgressUpdateCreateManyMilestoneInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutMilestoneInput | ProgressUpdateUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutMilestoneInput | ProgressUpdateUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type PaymentRequestUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<PaymentRequestCreateWithoutMilestoneInput, PaymentRequestUncheckedCreateWithoutMilestoneInput> | PaymentRequestCreateWithoutMilestoneInput[] | PaymentRequestUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutMilestoneInput | PaymentRequestCreateOrConnectWithoutMilestoneInput[]
    upsert?: PaymentRequestUpsertWithWhereUniqueWithoutMilestoneInput | PaymentRequestUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: PaymentRequestCreateManyMilestoneInputEnvelope
    set?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    disconnect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    delete?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    update?: PaymentRequestUpdateWithWhereUniqueWithoutMilestoneInput | PaymentRequestUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: PaymentRequestUpdateManyWithWhereWithoutMilestoneInput | PaymentRequestUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutMilestoneInput, ProgressUpdateUncheckedCreateWithoutMilestoneInput> | ProgressUpdateCreateWithoutMilestoneInput[] | ProgressUpdateUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutMilestoneInput | ProgressUpdateCreateOrConnectWithoutMilestoneInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutMilestoneInput | ProgressUpdateUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: ProgressUpdateCreateManyMilestoneInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutMilestoneInput | ProgressUpdateUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutMilestoneInput | ProgressUpdateUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type PaymentRequestUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<PaymentRequestCreateWithoutMilestoneInput, PaymentRequestUncheckedCreateWithoutMilestoneInput> | PaymentRequestCreateWithoutMilestoneInput[] | PaymentRequestUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutMilestoneInput | PaymentRequestCreateOrConnectWithoutMilestoneInput[]
    upsert?: PaymentRequestUpsertWithWhereUniqueWithoutMilestoneInput | PaymentRequestUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: PaymentRequestCreateManyMilestoneInputEnvelope
    set?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    disconnect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    delete?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    update?: PaymentRequestUpdateWithWhereUniqueWithoutMilestoneInput | PaymentRequestUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: PaymentRequestUpdateManyWithWhereWithoutMilestoneInput | PaymentRequestUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutBenchmarksInput = {
    create?: XOR<ProjectCreateWithoutBenchmarksInput, ProjectUncheckedCreateWithoutBenchmarksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBenchmarksInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutBenchmarksNestedInput = {
    create?: XOR<ProjectCreateWithoutBenchmarksInput, ProjectUncheckedCreateWithoutBenchmarksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBenchmarksInput
    upsert?: ProjectUpsertWithoutBenchmarksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBenchmarksInput, ProjectUpdateWithoutBenchmarksInput>, ProjectUncheckedUpdateWithoutBenchmarksInput>
  }

  export type ProgressUpdateCreaterawMediaUrlsInput = {
    set: string[]
  }

  export type ProjectCreateNestedOneWithoutProgressUpdatesInput = {
    create?: XOR<ProjectCreateWithoutProgressUpdatesInput, ProjectUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProgressUpdatesInput
    connect?: ProjectWhereUniqueInput
  }

  export type MilestoneCreateNestedOneWithoutProgressUpdatesInput = {
    create?: XOR<MilestoneCreateWithoutProgressUpdatesInput, MilestoneUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutProgressUpdatesInput
    connect?: MilestoneWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProgressUpdatesInput = {
    create?: XOR<UserCreateWithoutProgressUpdatesInput, UserUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressUpdatesInput
    connect?: UserWhereUniqueInput
  }

  export type ProgressUpdateUpdaterawMediaUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumProcessingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProcessingStatus
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateOneRequiredWithoutProgressUpdatesNestedInput = {
    create?: XOR<ProjectCreateWithoutProgressUpdatesInput, ProjectUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProgressUpdatesInput
    upsert?: ProjectUpsertWithoutProgressUpdatesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProgressUpdatesInput, ProjectUpdateWithoutProgressUpdatesInput>, ProjectUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type MilestoneUpdateOneRequiredWithoutProgressUpdatesNestedInput = {
    create?: XOR<MilestoneCreateWithoutProgressUpdatesInput, MilestoneUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutProgressUpdatesInput
    upsert?: MilestoneUpsertWithoutProgressUpdatesInput
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutProgressUpdatesInput, MilestoneUpdateWithoutProgressUpdatesInput>, MilestoneUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type UserUpdateOneRequiredWithoutProgressUpdatesNestedInput = {
    create?: XOR<UserCreateWithoutProgressUpdatesInput, UserUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressUpdatesInput
    upsert?: UserUpsertWithoutProgressUpdatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressUpdatesInput, UserUpdateWithoutProgressUpdatesInput>, UserUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type MilestoneCreateNestedOneWithoutPaymentRequestsInput = {
    create?: XOR<MilestoneCreateWithoutPaymentRequestsInput, MilestoneUncheckedCreateWithoutPaymentRequestsInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutPaymentRequestsInput
    connect?: MilestoneWhereUniqueInput
  }

  export type PaymentRecordCreateNestedManyWithoutPaymentRequestInput = {
    create?: XOR<PaymentRecordCreateWithoutPaymentRequestInput, PaymentRecordUncheckedCreateWithoutPaymentRequestInput> | PaymentRecordCreateWithoutPaymentRequestInput[] | PaymentRecordUncheckedCreateWithoutPaymentRequestInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutPaymentRequestInput | PaymentRecordCreateOrConnectWithoutPaymentRequestInput[]
    createMany?: PaymentRecordCreateManyPaymentRequestInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type PaymentRecordUncheckedCreateNestedManyWithoutPaymentRequestInput = {
    create?: XOR<PaymentRecordCreateWithoutPaymentRequestInput, PaymentRecordUncheckedCreateWithoutPaymentRequestInput> | PaymentRecordCreateWithoutPaymentRequestInput[] | PaymentRecordUncheckedCreateWithoutPaymentRequestInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutPaymentRequestInput | PaymentRecordCreateOrConnectWithoutPaymentRequestInput[]
    createMany?: PaymentRecordCreateManyPaymentRequestInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type MilestoneUpdateOneRequiredWithoutPaymentRequestsNestedInput = {
    create?: XOR<MilestoneCreateWithoutPaymentRequestsInput, MilestoneUncheckedCreateWithoutPaymentRequestsInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutPaymentRequestsInput
    upsert?: MilestoneUpsertWithoutPaymentRequestsInput
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutPaymentRequestsInput, MilestoneUpdateWithoutPaymentRequestsInput>, MilestoneUncheckedUpdateWithoutPaymentRequestsInput>
  }

  export type PaymentRecordUpdateManyWithoutPaymentRequestNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutPaymentRequestInput, PaymentRecordUncheckedCreateWithoutPaymentRequestInput> | PaymentRecordCreateWithoutPaymentRequestInput[] | PaymentRecordUncheckedCreateWithoutPaymentRequestInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutPaymentRequestInput | PaymentRecordCreateOrConnectWithoutPaymentRequestInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutPaymentRequestInput | PaymentRecordUpsertWithWhereUniqueWithoutPaymentRequestInput[]
    createMany?: PaymentRecordCreateManyPaymentRequestInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutPaymentRequestInput | PaymentRecordUpdateWithWhereUniqueWithoutPaymentRequestInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutPaymentRequestInput | PaymentRecordUpdateManyWithWhereWithoutPaymentRequestInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type PaymentRecordUncheckedUpdateManyWithoutPaymentRequestNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutPaymentRequestInput, PaymentRecordUncheckedCreateWithoutPaymentRequestInput> | PaymentRecordCreateWithoutPaymentRequestInput[] | PaymentRecordUncheckedCreateWithoutPaymentRequestInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutPaymentRequestInput | PaymentRecordCreateOrConnectWithoutPaymentRequestInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutPaymentRequestInput | PaymentRecordUpsertWithWhereUniqueWithoutPaymentRequestInput[]
    createMany?: PaymentRecordCreateManyPaymentRequestInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutPaymentRequestInput | PaymentRecordUpdateWithWhereUniqueWithoutPaymentRequestInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutPaymentRequestInput | PaymentRecordUpdateManyWithWhereWithoutPaymentRequestInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutPaymentRecordsInput = {
    create?: XOR<ProjectCreateWithoutPaymentRecordsInput, ProjectUncheckedCreateWithoutPaymentRecordsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPaymentRecordsInput
    connect?: ProjectWhereUniqueInput
  }

  export type PaymentRequestCreateNestedOneWithoutPaymentRecordsInput = {
    create?: XOR<PaymentRequestCreateWithoutPaymentRecordsInput, PaymentRequestUncheckedCreateWithoutPaymentRecordsInput>
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutPaymentRecordsInput
    connect?: PaymentRequestWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutPaymentRecordsNestedInput = {
    create?: XOR<ProjectCreateWithoutPaymentRecordsInput, ProjectUncheckedCreateWithoutPaymentRecordsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPaymentRecordsInput
    upsert?: ProjectUpsertWithoutPaymentRecordsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPaymentRecordsInput, ProjectUpdateWithoutPaymentRecordsInput>, ProjectUncheckedUpdateWithoutPaymentRecordsInput>
  }

  export type PaymentRequestUpdateOneWithoutPaymentRecordsNestedInput = {
    create?: XOR<PaymentRequestCreateWithoutPaymentRecordsInput, PaymentRequestUncheckedCreateWithoutPaymentRecordsInput>
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutPaymentRecordsInput
    upsert?: PaymentRequestUpsertWithoutPaymentRecordsInput
    disconnect?: PaymentRequestWhereInput | boolean
    delete?: PaymentRequestWhereInput | boolean
    connect?: PaymentRequestWhereUniqueInput
    update?: XOR<XOR<PaymentRequestUpdateToOneWithWhereWithoutPaymentRecordsInput, PaymentRequestUpdateWithoutPaymentRecordsInput>, PaymentRequestUncheckedUpdateWithoutPaymentRecordsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumMilestoneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusFilter<$PrismaModel> | $Enums.MilestoneStatus
  }

  export type NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMilestoneStatusFilter<$PrismaModel>
    _max?: NestedEnumMilestoneStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProcessingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusFilter<$PrismaModel> | $Enums.ProcessingStatus
  }

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumProcessingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessingStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessingStatusFilter<$PrismaModel>
  }

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisor?: UserCreateNestedOneWithoutSupervisedProjectsInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    benchmarks?: BenchmarkCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    benchmarks?: BenchmarkUncheckedCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutSupervisorInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    benchmarks?: BenchmarkCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSupervisorInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    benchmarks?: BenchmarkUncheckedCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSupervisorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSupervisorInput, ProjectUncheckedCreateWithoutSupervisorInput>
  }

  export type ProjectCreateManySupervisorInputEnvelope = {
    data: ProjectCreateManySupervisorInput | ProjectCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type ProgressUpdateCreateWithoutSupervisorInput = {
    id?: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProgressUpdatesInput
    milestone: MilestoneCreateNestedOneWithoutProgressUpdatesInput
  }

  export type ProgressUpdateUncheckedCreateWithoutSupervisorInput = {
    id?: string
    projectId: string
    milestoneId: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateCreateOrConnectWithoutSupervisorInput = {
    where: ProgressUpdateWhereUniqueInput
    create: XOR<ProgressUpdateCreateWithoutSupervisorInput, ProgressUpdateUncheckedCreateWithoutSupervisorInput>
  }

  export type ProgressUpdateCreateManySupervisorInputEnvelope = {
    data: ProgressUpdateCreateManySupervisorInput | ProgressUpdateCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    address?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    geofence?: JsonNullableFilter<"Project">
    ownerId?: StringFilter<"Project"> | string
    supervisorId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutSupervisorInput, ProjectUncheckedUpdateWithoutSupervisorInput>
    create: XOR<ProjectCreateWithoutSupervisorInput, ProjectUncheckedCreateWithoutSupervisorInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutSupervisorInput, ProjectUncheckedUpdateWithoutSupervisorInput>
  }

  export type ProjectUpdateManyWithWhereWithoutSupervisorInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type ProgressUpdateUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: ProgressUpdateWhereUniqueInput
    update: XOR<ProgressUpdateUpdateWithoutSupervisorInput, ProgressUpdateUncheckedUpdateWithoutSupervisorInput>
    create: XOR<ProgressUpdateCreateWithoutSupervisorInput, ProgressUpdateUncheckedCreateWithoutSupervisorInput>
  }

  export type ProgressUpdateUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: ProgressUpdateWhereUniqueInput
    data: XOR<ProgressUpdateUpdateWithoutSupervisorInput, ProgressUpdateUncheckedUpdateWithoutSupervisorInput>
  }

  export type ProgressUpdateUpdateManyWithWhereWithoutSupervisorInput = {
    where: ProgressUpdateScalarWhereInput
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type ProgressUpdateScalarWhereInput = {
    AND?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
    OR?: ProgressUpdateScalarWhereInput[]
    NOT?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
    id?: StringFilter<"ProgressUpdate"> | string
    projectId?: StringFilter<"ProgressUpdate"> | string
    milestoneId?: StringFilter<"ProgressUpdate"> | string
    supervisorId?: StringFilter<"ProgressUpdate"> | string
    rawMediaUrls?: StringNullableListFilter<"ProgressUpdate">
    aiDescription?: StringNullableFilter<"ProgressUpdate"> | string | null
    aiMarkupData?: JsonNullableFilter<"ProgressUpdate">
    aiCompletionEstimate?: IntNullableFilter<"ProgressUpdate"> | number | null
    processingStatus?: EnumProcessingStatusFilter<"ProgressUpdate"> | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFilter<"ProgressUpdate"> | $Enums.ReviewStatus
    supervisorNote?: StringNullableFilter<"ProgressUpdate"> | string | null
    failureReason?: StringNullableFilter<"ProgressUpdate"> | string | null
    retryCount?: IntFilter<"ProgressUpdate"> | number
    gpsLat?: FloatNullableFilter<"ProgressUpdate"> | number | null
    gpsLng?: FloatNullableFilter<"ProgressUpdate"> | number | null
    gpsManual?: BoolFilter<"ProgressUpdate"> | boolean
    deviceTimestamp?: DateTimeNullableFilter<"ProgressUpdate"> | Date | string | null
    createdAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    supervisedProjects?: ProjectCreateNestedManyWithoutSupervisorInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    supervisedProjects?: ProjectUncheckedCreateNestedManyWithoutSupervisorInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    supervisedProjects?: ProjectUpdateManyWithoutSupervisorNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    supervisedProjects?: ProjectUncheckedUpdateManyWithoutSupervisorNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    supervisedProjects?: ProjectCreateNestedManyWithoutSupervisorInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    supervisedProjects?: ProjectUncheckedCreateNestedManyWithoutSupervisorInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    supervisedProjects?: ProjectUpdateManyWithoutSupervisorNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    supervisedProjects?: ProjectUncheckedUpdateManyWithoutSupervisorNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOwnedProjectsInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisedProjects?: ProjectCreateNestedManyWithoutSupervisorInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedProjectsInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisedProjects?: ProjectUncheckedCreateNestedManyWithoutSupervisorInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
  }

  export type UserCreateWithoutSupervisedProjectsInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSupervisedProjectsInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSupervisedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSupervisedProjectsInput, UserUncheckedCreateWithoutSupervisedProjectsInput>
  }

  export type MilestoneCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.MilestoneStatus
    order?: number
    budgetNgN?: number | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutMilestoneInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.MilestoneStatus
    order?: number
    budgetNgN?: number | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutMilestoneInput
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutProjectInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput>
  }

  export type MilestoneCreateManyProjectInputEnvelope = {
    data: MilestoneCreateManyProjectInput | MilestoneCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type BenchmarkCreateWithoutProjectInput = {
    id?: string
    milestoneId?: string | null
    title?: string
    notes?: string | null
    mediaUrl: string
    mediaType?: string
    category?: string
    createdAt?: Date | string
  }

  export type BenchmarkUncheckedCreateWithoutProjectInput = {
    id?: string
    milestoneId?: string | null
    title?: string
    notes?: string | null
    mediaUrl: string
    mediaType?: string
    category?: string
    createdAt?: Date | string
  }

  export type BenchmarkCreateOrConnectWithoutProjectInput = {
    where: BenchmarkWhereUniqueInput
    create: XOR<BenchmarkCreateWithoutProjectInput, BenchmarkUncheckedCreateWithoutProjectInput>
  }

  export type BenchmarkCreateManyProjectInputEnvelope = {
    data: BenchmarkCreateManyProjectInput | BenchmarkCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProgressUpdateCreateWithoutProjectInput = {
    id?: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestone: MilestoneCreateNestedOneWithoutProgressUpdatesInput
    supervisor: UserCreateNestedOneWithoutProgressUpdatesInput
  }

  export type ProgressUpdateUncheckedCreateWithoutProjectInput = {
    id?: string
    milestoneId: string
    supervisorId: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateCreateOrConnectWithoutProjectInput = {
    where: ProgressUpdateWhereUniqueInput
    create: XOR<ProgressUpdateCreateWithoutProjectInput, ProgressUpdateUncheckedCreateWithoutProjectInput>
  }

  export type ProgressUpdateCreateManyProjectInputEnvelope = {
    data: ProgressUpdateCreateManyProjectInput | ProgressUpdateCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PaymentRecordCreateWithoutProjectInput = {
    id?: string
    paidAmountNgN: number
    receiptUrl: string
    paidAt?: Date | string
    createdAt?: Date | string
    paymentRequest?: PaymentRequestCreateNestedOneWithoutPaymentRecordsInput
  }

  export type PaymentRecordUncheckedCreateWithoutProjectInput = {
    id?: string
    paymentRequestId?: string | null
    paidAmountNgN: number
    receiptUrl: string
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentRecordCreateOrConnectWithoutProjectInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutProjectInput, PaymentRecordUncheckedCreateWithoutProjectInput>
  }

  export type PaymentRecordCreateManyProjectInputEnvelope = {
    data: PaymentRecordCreateManyProjectInput | PaymentRecordCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedProjectsInput = {
    update: XOR<UserUpdateWithoutOwnedProjectsInput, UserUncheckedUpdateWithoutOwnedProjectsInput>
    create: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedProjectsInput, UserUncheckedUpdateWithoutOwnedProjectsInput>
  }

  export type UserUpdateWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisedProjects?: ProjectUpdateManyWithoutSupervisorNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisedProjects?: ProjectUncheckedUpdateManyWithoutSupervisorNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSupervisedProjectsInput = {
    update: XOR<UserUpdateWithoutSupervisedProjectsInput, UserUncheckedUpdateWithoutSupervisedProjectsInput>
    create: XOR<UserCreateWithoutSupervisedProjectsInput, UserUncheckedCreateWithoutSupervisedProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSupervisedProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSupervisedProjectsInput, UserUncheckedUpdateWithoutSupervisedProjectsInput>
  }

  export type UserUpdateWithoutSupervisedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSupervisedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MilestoneUpsertWithWhereUniqueWithoutProjectInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutProjectInput, MilestoneUncheckedUpdateWithoutProjectInput>
    create: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutProjectInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutProjectInput, MilestoneUncheckedUpdateWithoutProjectInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutProjectInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutProjectInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    OR?: MilestoneScalarWhereInput[]
    NOT?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    id?: StringFilter<"Milestone"> | string
    projectId?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    dueDate?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    order?: IntFilter<"Milestone"> | number
    budgetNgN?: IntNullableFilter<"Milestone"> | number | null
    invoiceUrl?: StringNullableFilter<"Milestone"> | string | null
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
  }

  export type BenchmarkUpsertWithWhereUniqueWithoutProjectInput = {
    where: BenchmarkWhereUniqueInput
    update: XOR<BenchmarkUpdateWithoutProjectInput, BenchmarkUncheckedUpdateWithoutProjectInput>
    create: XOR<BenchmarkCreateWithoutProjectInput, BenchmarkUncheckedCreateWithoutProjectInput>
  }

  export type BenchmarkUpdateWithWhereUniqueWithoutProjectInput = {
    where: BenchmarkWhereUniqueInput
    data: XOR<BenchmarkUpdateWithoutProjectInput, BenchmarkUncheckedUpdateWithoutProjectInput>
  }

  export type BenchmarkUpdateManyWithWhereWithoutProjectInput = {
    where: BenchmarkScalarWhereInput
    data: XOR<BenchmarkUpdateManyMutationInput, BenchmarkUncheckedUpdateManyWithoutProjectInput>
  }

  export type BenchmarkScalarWhereInput = {
    AND?: BenchmarkScalarWhereInput | BenchmarkScalarWhereInput[]
    OR?: BenchmarkScalarWhereInput[]
    NOT?: BenchmarkScalarWhereInput | BenchmarkScalarWhereInput[]
    id?: StringFilter<"Benchmark"> | string
    projectId?: StringFilter<"Benchmark"> | string
    milestoneId?: StringNullableFilter<"Benchmark"> | string | null
    title?: StringFilter<"Benchmark"> | string
    notes?: StringNullableFilter<"Benchmark"> | string | null
    mediaUrl?: StringFilter<"Benchmark"> | string
    mediaType?: StringFilter<"Benchmark"> | string
    category?: StringFilter<"Benchmark"> | string
    createdAt?: DateTimeFilter<"Benchmark"> | Date | string
  }

  export type ProgressUpdateUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProgressUpdateWhereUniqueInput
    update: XOR<ProgressUpdateUpdateWithoutProjectInput, ProgressUpdateUncheckedUpdateWithoutProjectInput>
    create: XOR<ProgressUpdateCreateWithoutProjectInput, ProgressUpdateUncheckedCreateWithoutProjectInput>
  }

  export type ProgressUpdateUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProgressUpdateWhereUniqueInput
    data: XOR<ProgressUpdateUpdateWithoutProjectInput, ProgressUpdateUncheckedUpdateWithoutProjectInput>
  }

  export type ProgressUpdateUpdateManyWithWhereWithoutProjectInput = {
    where: ProgressUpdateScalarWhereInput
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyWithoutProjectInput>
  }

  export type PaymentRecordUpsertWithWhereUniqueWithoutProjectInput = {
    where: PaymentRecordWhereUniqueInput
    update: XOR<PaymentRecordUpdateWithoutProjectInput, PaymentRecordUncheckedUpdateWithoutProjectInput>
    create: XOR<PaymentRecordCreateWithoutProjectInput, PaymentRecordUncheckedCreateWithoutProjectInput>
  }

  export type PaymentRecordUpdateWithWhereUniqueWithoutProjectInput = {
    where: PaymentRecordWhereUniqueInput
    data: XOR<PaymentRecordUpdateWithoutProjectInput, PaymentRecordUncheckedUpdateWithoutProjectInput>
  }

  export type PaymentRecordUpdateManyWithWhereWithoutProjectInput = {
    where: PaymentRecordScalarWhereInput
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyWithoutProjectInput>
  }

  export type PaymentRecordScalarWhereInput = {
    AND?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    OR?: PaymentRecordScalarWhereInput[]
    NOT?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    id?: StringFilter<"PaymentRecord"> | string
    projectId?: StringFilter<"PaymentRecord"> | string
    paymentRequestId?: StringNullableFilter<"PaymentRecord"> | string | null
    paidAmountNgN?: IntFilter<"PaymentRecord"> | number
    receiptUrl?: StringFilter<"PaymentRecord"> | string
    paidAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
  }

  export type ProjectCreateWithoutMilestonesInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    supervisor?: UserCreateNestedOneWithoutSupervisedProjectsInput
    benchmarks?: BenchmarkCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMilestonesInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benchmarks?: BenchmarkUncheckedCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMilestonesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMilestonesInput, ProjectUncheckedCreateWithoutMilestonesInput>
  }

  export type ProgressUpdateCreateWithoutMilestoneInput = {
    id?: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProgressUpdatesInput
    supervisor: UserCreateNestedOneWithoutProgressUpdatesInput
  }

  export type ProgressUpdateUncheckedCreateWithoutMilestoneInput = {
    id?: string
    projectId: string
    supervisorId: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateCreateOrConnectWithoutMilestoneInput = {
    where: ProgressUpdateWhereUniqueInput
    create: XOR<ProgressUpdateCreateWithoutMilestoneInput, ProgressUpdateUncheckedCreateWithoutMilestoneInput>
  }

  export type ProgressUpdateCreateManyMilestoneInputEnvelope = {
    data: ProgressUpdateCreateManyMilestoneInput | ProgressUpdateCreateManyMilestoneInput[]
    skipDuplicates?: boolean
  }

  export type PaymentRequestCreateWithoutMilestoneInput = {
    id?: string
    amountNgN: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecords?: PaymentRecordCreateNestedManyWithoutPaymentRequestInput
  }

  export type PaymentRequestUncheckedCreateWithoutMilestoneInput = {
    id?: string
    amountNgN: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutPaymentRequestInput
  }

  export type PaymentRequestCreateOrConnectWithoutMilestoneInput = {
    where: PaymentRequestWhereUniqueInput
    create: XOR<PaymentRequestCreateWithoutMilestoneInput, PaymentRequestUncheckedCreateWithoutMilestoneInput>
  }

  export type PaymentRequestCreateManyMilestoneInputEnvelope = {
    data: PaymentRequestCreateManyMilestoneInput | PaymentRequestCreateManyMilestoneInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutMilestonesInput = {
    update: XOR<ProjectUpdateWithoutMilestonesInput, ProjectUncheckedUpdateWithoutMilestonesInput>
    create: XOR<ProjectCreateWithoutMilestonesInput, ProjectUncheckedCreateWithoutMilestonesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMilestonesInput, ProjectUncheckedUpdateWithoutMilestonesInput>
  }

  export type ProjectUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    supervisor?: UserUpdateOneWithoutSupervisedProjectsNestedInput
    benchmarks?: BenchmarkUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benchmarks?: BenchmarkUncheckedUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProgressUpdateUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: ProgressUpdateWhereUniqueInput
    update: XOR<ProgressUpdateUpdateWithoutMilestoneInput, ProgressUpdateUncheckedUpdateWithoutMilestoneInput>
    create: XOR<ProgressUpdateCreateWithoutMilestoneInput, ProgressUpdateUncheckedCreateWithoutMilestoneInput>
  }

  export type ProgressUpdateUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: ProgressUpdateWhereUniqueInput
    data: XOR<ProgressUpdateUpdateWithoutMilestoneInput, ProgressUpdateUncheckedUpdateWithoutMilestoneInput>
  }

  export type ProgressUpdateUpdateManyWithWhereWithoutMilestoneInput = {
    where: ProgressUpdateScalarWhereInput
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type PaymentRequestUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: PaymentRequestWhereUniqueInput
    update: XOR<PaymentRequestUpdateWithoutMilestoneInput, PaymentRequestUncheckedUpdateWithoutMilestoneInput>
    create: XOR<PaymentRequestCreateWithoutMilestoneInput, PaymentRequestUncheckedCreateWithoutMilestoneInput>
  }

  export type PaymentRequestUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: PaymentRequestWhereUniqueInput
    data: XOR<PaymentRequestUpdateWithoutMilestoneInput, PaymentRequestUncheckedUpdateWithoutMilestoneInput>
  }

  export type PaymentRequestUpdateManyWithWhereWithoutMilestoneInput = {
    where: PaymentRequestScalarWhereInput
    data: XOR<PaymentRequestUpdateManyMutationInput, PaymentRequestUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type PaymentRequestScalarWhereInput = {
    AND?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
    OR?: PaymentRequestScalarWhereInput[]
    NOT?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
    id?: StringFilter<"PaymentRequest"> | string
    milestoneId?: StringFilter<"PaymentRequest"> | string
    amountNgN?: IntFilter<"PaymentRequest"> | number
    status?: StringFilter<"PaymentRequest"> | string
    createdAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRequest"> | Date | string
  }

  export type ProjectCreateWithoutBenchmarksInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    supervisor?: UserCreateNestedOneWithoutSupervisedProjectsInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBenchmarksInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutBenchmarksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBenchmarksInput, ProjectUncheckedCreateWithoutBenchmarksInput>
  }

  export type ProjectUpsertWithoutBenchmarksInput = {
    update: XOR<ProjectUpdateWithoutBenchmarksInput, ProjectUncheckedUpdateWithoutBenchmarksInput>
    create: XOR<ProjectCreateWithoutBenchmarksInput, ProjectUncheckedCreateWithoutBenchmarksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutBenchmarksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutBenchmarksInput, ProjectUncheckedUpdateWithoutBenchmarksInput>
  }

  export type ProjectUpdateWithoutBenchmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    supervisor?: UserUpdateOneWithoutSupervisedProjectsNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBenchmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutProgressUpdatesInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    supervisor?: UserCreateNestedOneWithoutSupervisedProjectsInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    benchmarks?: BenchmarkCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProgressUpdatesInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    benchmarks?: BenchmarkUncheckedCreateNestedManyWithoutProjectInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProgressUpdatesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProgressUpdatesInput, ProjectUncheckedCreateWithoutProgressUpdatesInput>
  }

  export type MilestoneCreateWithoutProgressUpdatesInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.MilestoneStatus
    order?: number
    budgetNgN?: number | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMilestonesInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutProgressUpdatesInput = {
    id?: string
    projectId: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.MilestoneStatus
    order?: number
    budgetNgN?: number | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutProgressUpdatesInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutProgressUpdatesInput, MilestoneUncheckedCreateWithoutProgressUpdatesInput>
  }

  export type UserCreateWithoutProgressUpdatesInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    supervisedProjects?: ProjectCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressUpdatesInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    supervisedProjects?: ProjectUncheckedCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressUpdatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressUpdatesInput, UserUncheckedCreateWithoutProgressUpdatesInput>
  }

  export type ProjectUpsertWithoutProgressUpdatesInput = {
    update: XOR<ProjectUpdateWithoutProgressUpdatesInput, ProjectUncheckedUpdateWithoutProgressUpdatesInput>
    create: XOR<ProjectCreateWithoutProgressUpdatesInput, ProjectUncheckedCreateWithoutProgressUpdatesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProgressUpdatesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProgressUpdatesInput, ProjectUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type ProjectUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    supervisor?: UserUpdateOneWithoutSupervisedProjectsNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    benchmarks?: BenchmarkUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    benchmarks?: BenchmarkUncheckedUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type MilestoneUpsertWithoutProgressUpdatesInput = {
    update: XOR<MilestoneUpdateWithoutProgressUpdatesInput, MilestoneUncheckedUpdateWithoutProgressUpdatesInput>
    create: XOR<MilestoneCreateWithoutProgressUpdatesInput, MilestoneUncheckedCreateWithoutProgressUpdatesInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutProgressUpdatesInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutProgressUpdatesInput, MilestoneUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type MilestoneUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMilestonesNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type UserUpsertWithoutProgressUpdatesInput = {
    update: XOR<UserUpdateWithoutProgressUpdatesInput, UserUncheckedUpdateWithoutProgressUpdatesInput>
    create: XOR<UserCreateWithoutProgressUpdatesInput, UserUncheckedCreateWithoutProgressUpdatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressUpdatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressUpdatesInput, UserUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type UserUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    supervisedProjects?: ProjectUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    supervisedProjects?: ProjectUncheckedUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    supervisedProjects?: ProjectCreateNestedManyWithoutSupervisorInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutSupervisorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    emailVerified?: Date | string | null
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    supervisedProjects?: ProjectUncheckedCreateNestedManyWithoutSupervisorInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutSupervisorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    supervisedProjects?: ProjectUpdateManyWithoutSupervisorNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutSupervisorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    supervisedProjects?: ProjectUncheckedUpdateManyWithoutSupervisorNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutSupervisorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MilestoneCreateWithoutPaymentRequestsInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.MilestoneStatus
    order?: number
    budgetNgN?: number | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMilestonesInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutPaymentRequestsInput = {
    id?: string
    projectId: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.MilestoneStatus
    order?: number
    budgetNgN?: number | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutPaymentRequestsInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutPaymentRequestsInput, MilestoneUncheckedCreateWithoutPaymentRequestsInput>
  }

  export type PaymentRecordCreateWithoutPaymentRequestInput = {
    id?: string
    paidAmountNgN: number
    receiptUrl: string
    paidAt?: Date | string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutPaymentRecordsInput
  }

  export type PaymentRecordUncheckedCreateWithoutPaymentRequestInput = {
    id?: string
    projectId: string
    paidAmountNgN: number
    receiptUrl: string
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentRecordCreateOrConnectWithoutPaymentRequestInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutPaymentRequestInput, PaymentRecordUncheckedCreateWithoutPaymentRequestInput>
  }

  export type PaymentRecordCreateManyPaymentRequestInputEnvelope = {
    data: PaymentRecordCreateManyPaymentRequestInput | PaymentRecordCreateManyPaymentRequestInput[]
    skipDuplicates?: boolean
  }

  export type MilestoneUpsertWithoutPaymentRequestsInput = {
    update: XOR<MilestoneUpdateWithoutPaymentRequestsInput, MilestoneUncheckedUpdateWithoutPaymentRequestsInput>
    create: XOR<MilestoneCreateWithoutPaymentRequestsInput, MilestoneUncheckedCreateWithoutPaymentRequestsInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutPaymentRequestsInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutPaymentRequestsInput, MilestoneUncheckedUpdateWithoutPaymentRequestsInput>
  }

  export type MilestoneUpdateWithoutPaymentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMilestonesNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutPaymentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type PaymentRecordUpsertWithWhereUniqueWithoutPaymentRequestInput = {
    where: PaymentRecordWhereUniqueInput
    update: XOR<PaymentRecordUpdateWithoutPaymentRequestInput, PaymentRecordUncheckedUpdateWithoutPaymentRequestInput>
    create: XOR<PaymentRecordCreateWithoutPaymentRequestInput, PaymentRecordUncheckedCreateWithoutPaymentRequestInput>
  }

  export type PaymentRecordUpdateWithWhereUniqueWithoutPaymentRequestInput = {
    where: PaymentRecordWhereUniqueInput
    data: XOR<PaymentRecordUpdateWithoutPaymentRequestInput, PaymentRecordUncheckedUpdateWithoutPaymentRequestInput>
  }

  export type PaymentRecordUpdateManyWithWhereWithoutPaymentRequestInput = {
    where: PaymentRecordScalarWhereInput
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyWithoutPaymentRequestInput>
  }

  export type ProjectCreateWithoutPaymentRecordsInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    supervisor?: UserCreateNestedOneWithoutSupervisedProjectsInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    benchmarks?: BenchmarkCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPaymentRecordsInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    benchmarks?: BenchmarkUncheckedCreateNestedManyWithoutProjectInput
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPaymentRecordsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPaymentRecordsInput, ProjectUncheckedCreateWithoutPaymentRecordsInput>
  }

  export type PaymentRequestCreateWithoutPaymentRecordsInput = {
    id?: string
    amountNgN: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    milestone: MilestoneCreateNestedOneWithoutPaymentRequestsInput
  }

  export type PaymentRequestUncheckedCreateWithoutPaymentRecordsInput = {
    id?: string
    milestoneId: string
    amountNgN: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentRequestCreateOrConnectWithoutPaymentRecordsInput = {
    where: PaymentRequestWhereUniqueInput
    create: XOR<PaymentRequestCreateWithoutPaymentRecordsInput, PaymentRequestUncheckedCreateWithoutPaymentRecordsInput>
  }

  export type ProjectUpsertWithoutPaymentRecordsInput = {
    update: XOR<ProjectUpdateWithoutPaymentRecordsInput, ProjectUncheckedUpdateWithoutPaymentRecordsInput>
    create: XOR<ProjectCreateWithoutPaymentRecordsInput, ProjectUncheckedCreateWithoutPaymentRecordsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPaymentRecordsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPaymentRecordsInput, ProjectUncheckedUpdateWithoutPaymentRecordsInput>
  }

  export type ProjectUpdateWithoutPaymentRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    supervisor?: UserUpdateOneWithoutSupervisedProjectsNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    benchmarks?: BenchmarkUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPaymentRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    benchmarks?: BenchmarkUncheckedUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type PaymentRequestUpsertWithoutPaymentRecordsInput = {
    update: XOR<PaymentRequestUpdateWithoutPaymentRecordsInput, PaymentRequestUncheckedUpdateWithoutPaymentRecordsInput>
    create: XOR<PaymentRequestCreateWithoutPaymentRecordsInput, PaymentRequestUncheckedCreateWithoutPaymentRecordsInput>
    where?: PaymentRequestWhereInput
  }

  export type PaymentRequestUpdateToOneWithWhereWithoutPaymentRecordsInput = {
    where?: PaymentRequestWhereInput
    data: XOR<PaymentRequestUpdateWithoutPaymentRecordsInput, PaymentRequestUncheckedUpdateWithoutPaymentRecordsInput>
  }

  export type PaymentRequestUpdateWithoutPaymentRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNgN?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUpdateOneRequiredWithoutPaymentRequestsNestedInput
  }

  export type PaymentRequestUncheckedUpdateWithoutPaymentRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    amountNgN?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManySupervisorInput = {
    id?: string
    name: string
    address?: string | null
    status?: $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateCreateManySupervisorInput = {
    id?: string
    projectId: string
    milestoneId: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    title: string
    message: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: UserUpdateOneWithoutSupervisedProjectsNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    benchmarks?: BenchmarkUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    benchmarks?: BenchmarkUncheckedUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    benchmarks?: BenchmarkUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    benchmarks?: BenchmarkUncheckedUpdateManyWithoutProjectNestedInput
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutProjectNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    geofence?: NullableJsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProgressUpdatesNestedInput
    milestone?: MilestoneUpdateOneRequiredWithoutProgressUpdatesNestedInput
  }

  export type ProgressUpdateUncheckedUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateManyProjectInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.MilestoneStatus
    order?: number
    budgetNgN?: number | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenchmarkCreateManyProjectInput = {
    id?: string
    milestoneId?: string | null
    title?: string
    notes?: string | null
    mediaUrl: string
    mediaType?: string
    category?: string
    createdAt?: Date | string
  }

  export type ProgressUpdateCreateManyProjectInput = {
    id?: string
    milestoneId: string
    supervisorId: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentRecordCreateManyProjectInput = {
    id?: string
    paymentRequestId?: string | null
    paidAmountNgN: number
    receiptUrl: string
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type MilestoneUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressUpdates?: ProgressUpdateUpdateManyWithoutMilestoneNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutMilestoneNestedInput
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    order?: IntFieldUpdateOperationsInput | number
    budgetNgN?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenchmarkUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenchmarkUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenchmarkUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUpdateOneRequiredWithoutProgressUpdatesNestedInput
    supervisor?: UserUpdateOneRequiredWithoutProgressUpdatesNestedInput
  }

  export type ProgressUpdateUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidAmountNgN?: IntFieldUpdateOperationsInput | number
    receiptUrl?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRequest?: PaymentRequestUpdateOneWithoutPaymentRecordsNestedInput
  }

  export type PaymentRecordUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAmountNgN?: IntFieldUpdateOperationsInput | number
    receiptUrl?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAmountNgN?: IntFieldUpdateOperationsInput | number
    receiptUrl?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateCreateManyMilestoneInput = {
    id?: string
    projectId: string
    supervisorId: string
    rawMediaUrls?: ProgressUpdateCreaterawMediaUrlsInput | string[]
    aiDescription?: string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: number | null
    processingStatus?: $Enums.ProcessingStatus
    reviewStatus?: $Enums.ReviewStatus
    supervisorNote?: string | null
    failureReason?: string | null
    retryCount?: number
    gpsLat?: number | null
    gpsLng?: number | null
    gpsManual?: boolean
    deviceTimestamp?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentRequestCreateManyMilestoneInput = {
    id?: string
    amountNgN: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProgressUpdatesNestedInput
    supervisor?: UserUpdateOneRequiredWithoutProgressUpdatesNestedInput
  }

  export type ProgressUpdateUncheckedUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    rawMediaUrls?: ProgressUpdateUpdaterawMediaUrlsInput | string[]
    aiDescription?: NullableStringFieldUpdateOperationsInput | string | null
    aiMarkupData?: NullableJsonNullValueInput | InputJsonValue
    aiCompletionEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    supervisorNote?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    gpsLat?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLng?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsManual?: BoolFieldUpdateOperationsInput | boolean
    deviceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRequestUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNgN?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecords?: PaymentRecordUpdateManyWithoutPaymentRequestNestedInput
  }

  export type PaymentRequestUncheckedUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNgN?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutPaymentRequestNestedInput
  }

  export type PaymentRequestUncheckedUpdateManyWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNgN?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordCreateManyPaymentRequestInput = {
    id?: string
    projectId: string
    paidAmountNgN: number
    receiptUrl: string
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentRecordUpdateWithoutPaymentRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidAmountNgN?: IntFieldUpdateOperationsInput | number
    receiptUrl?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPaymentRecordsNestedInput
  }

  export type PaymentRecordUncheckedUpdateWithoutPaymentRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    paidAmountNgN?: IntFieldUpdateOperationsInput | number
    receiptUrl?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateManyWithoutPaymentRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    paidAmountNgN?: IntFieldUpdateOperationsInput | number
    receiptUrl?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}