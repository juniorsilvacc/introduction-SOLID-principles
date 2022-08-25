import express, { NextFunction, Request, Response } from 'express';
import { AppError } from './errors/app-error';

const exceptions = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'Error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  });
};

export { exceptions };
