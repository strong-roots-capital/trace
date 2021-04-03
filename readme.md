# trace
[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package][]](https://npmjs.org/package/@strong-roots-capital/trace)
[![Build status][]](https://travis-ci.org/strong-roots-capital/trace)
[![Code Coverage][]](https://codecov.io/gh/strong-roots-capital/trace)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[NPM Package]: https://img.shields.io/npm/v/@strong-roots-capital/trace.svg
[Build status]: https://travis-ci.org/strong-roots-capital/trace.svg?branch=master
[Code Coverage]: https://codecov.io/gh/strong-roots-capital/trace/branch/master/graph/badge.svg

> tap function to log a value with optional tag

## Install

``` shell
npm install @strong-roots-capital/trace
```

## Use

``` typescript
import { trace } from '@strong-roots-capital/trace'

import Debug from 'debug'
import * as O from 'fp-ts/Option
import { pipe } from 'fp-ts/function'

const debug = Debug('defaults')

// If user has specified concurrency, will print on the debug stream:
// "concurrency 4"
const concurrency = pipe(
    O.fromNullable(getUserConcurrency()),
    O.pipe(trace(debug, 'concurrency')),
    O.getOrElse(() => 1)
)
```

> Note: also works with `console.{info,log,warn,error}`

## API

### trace

```typescript
trace: (logger: typeof console.log, ...tag: unknown[]) => <T>(value: T) => T
```

### unsafeTraceJson

```typescript
trace: (logger: typeof console.log, ...tag: unknown[]) => <T>(value: T) => T
```

### IOtrace

```typescript
trace: (logger: typeof console.log, ...tag: unknown[]) => <T>(value: T) => () => T
```
