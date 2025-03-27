import { FunctionKeys } from 'utility-types';

export type ServiceRouteMapping<S extends object> = {
  service: S;
  prefix: string;
  endpoints: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    paths: Record<string, FunctionKeys<S>>;
  }[];
};