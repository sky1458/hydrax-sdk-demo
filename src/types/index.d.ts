declare interface OtherParams {
  user_id: string;
  token: string;
  company_id: string;
}

declare interface ErrorHandler {
  (err: string): void;
}

declare interface SDKConfig {
  url?: string;
  userId?: string;
  token?: string;
  companyId?: string;
  database?: string;
  usePublic?: boolean;
}
