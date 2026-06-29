import type { ZodError, ZodIssue } from 'zod';

/** Shape of the JSON error body Remnawave returns on a failed request. */
export interface RemnawaveApiErrorBody {
  message?: string;
  error?: string;
  statusCode?: number;
  errorCode?: string;
  path?: string;
  timestamp?: string;
  [key: string]: unknown;
}

/**
 * Thrown when an API request fails (non-2xx response) or the network call
 * itself errors. Extends `Error`, so existing `error instanceof Error` /
 * `error.message` handling keeps working, while adding structured access to
 * the HTTP status, the Remnawave application error code, and the raw body.
 */
export class RemnawaveApiError extends Error {
  /** HTTP status code from the response (e.g. 401, 403, 404). Undefined for network errors. */
  public readonly status?: number;
  /** Remnawave application error code (e.g. "A025"), when present in the response body. */
  public readonly errorCode?: string;
  /** Raw response body returned by the API, if any. */
  public readonly data?: unknown;

  constructor(
    message: string,
    options: {
      status?: number;
      errorCode?: string;
      data?: unknown;
      cause?: unknown;
    } = {},
  ) {
    super(message);
    this.name = 'RemnawaveApiError';
    this.status = options.status;
    this.errorCode = options.errorCode;
    this.data = options.data;
    if (options.cause !== undefined) {
      (this as { cause?: unknown }).cause = options.cause;
    }
    Object.setPrototypeOf(this, RemnawaveApiError.prototype);
  }
}

/**
 * Thrown when a successful response does not match the expected Zod schema
 * (i.e. the API returned an unexpected shape). Extends `Error`.
 */
export class RemnawaveValidationError extends Error {
  /** The individual Zod validation issues. */
  public readonly issues: ZodIssue[];

  constructor(error: ZodError) {
    super(`Validation Error: ${error.message}`);
    this.name = 'RemnawaveValidationError';
    this.issues = error.issues;
    Object.setPrototypeOf(this, RemnawaveValidationError.prototype);
  }
}
