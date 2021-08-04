import { AxiosRequestConfig } from "axios";
declare interface SDKConfig extends AxiosRequestConfig {
  baseUrl?: string;
  user_id?: string;
  token?: string;
  company_id?: string;
  database?: string;
  usePublic?: boolean;
}

interface OtherParams {
  user_id: string;
  token: string;
  company_id: string;
}

declare interface ErrorHandler {
  (err: string): void;
}
