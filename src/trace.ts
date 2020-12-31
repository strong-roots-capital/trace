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
        if (tag.length > 0) {
            logger(...tag, value)
        } else {
            logger(value)
        }
        return value
    }
}
