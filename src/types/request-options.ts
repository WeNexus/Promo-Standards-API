import { MethodOptions } from '@/types/method-options.js';

export type RequestOptions = {
  action: string;
} & MethodOptions<Record<string, any> | undefined>;