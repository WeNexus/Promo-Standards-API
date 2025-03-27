// Add auth to Request object
import express from 'express';

declare global {
  namespace Express {
    interface Request {
      auth?: {
        id: string;
        password: string;
      };
    }
  }
}