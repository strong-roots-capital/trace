/**
 * trace
 * tap function to log a value with optional tag
 */

/**
 * Log `value` with optional `tag` and return `value`.
 */
export function trace(
  logger: typeof console.log,
  ...tag: unknown[]
): <T>(value: T) => T {
  return function trace<T>(value: T): T {
    if (tag !== undefined && tag.length > 0) {
      logger(...tag, value);
    } else {
      logger(value);
    }
    return value;
  };
}

/**
 * Log `value` as pretty-printed JSON with optional `tag` and return
 * `value`.
 *
 * Note: `JSON.stringify` is unsafe (will throw errors on some input)
 * so this function is unsafe too.
 */
export function unsafeTraceJson(
  logger: typeof console.log,
  ...tag: unknown[]
): <T>(value: T) => T {
  return function trace<T>(value: T): T {
    if (tag.length > 0) {
      logger(...tag, JSON.stringify(value, null, 2));
    } else {
      logger(JSON.stringify(value, null, 2));
    }
    return value;
  };
}

/**
 * Return an IO to log `value` with optional `tag` and return `value`.
 */
export function IOtrace(
  logger: typeof console.log,
  ...tag: unknown[]
): <T>(value: T) => () => T {
  return function trace<T>(value: T): () => T {
    return function (): T {
      if (tag.length > 0) {
        logger(...tag, value);
      } else {
        logger(value);
      }
      return value;
    };
  };
}
