import { CompanyCode } from '@/types/company-code.js';

type Options = {
  userId: string;
  password: string;
  company: CompanyCode;
  apiVersion: string;
};

export type MethodOptions<I = undefined> = I extends undefined ? Options & { input?: I } : Options & { input: I };