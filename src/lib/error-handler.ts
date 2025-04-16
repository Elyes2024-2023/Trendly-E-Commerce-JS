export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const handleError = (err: Error | AppError) => {
  if (err instanceof AppError) {
    // Handle operational errors
    console.error(`Operational error: ${err.message}`);
    return {
      message: err.message,
      statusCode: err.statusCode,
    };
  } else {
    // Handle programming or unknown errors
    console.error(`Programming error: ${err.message}`);
    return {
      message: 'Something went wrong',
      statusCode: 500,
    };
  }
}; 