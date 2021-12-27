import { Request } from 'express';
import { User } from 'src/models/User';

export interface EnhancedRequest extends Request {
  body: {
    [key: string]: any;
  };
}
