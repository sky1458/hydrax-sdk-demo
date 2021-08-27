declare interface SDKConfig {
  baseURL?: string;
  userId?: string;
  token?: string;
  companyId?: string;
  database?: string;
  usePublic?: boolean;
}

declare interface PageInfoParams {
  limit?: number;
  offset?: number;
}

declare interface ResponseData {
  list: any[];
  total: number;
}

declare interface CustomResponse {
  success: boolean;
  data: ResponseData;
  message: string;
}

declare interface LoginInfo {
  username: string;
  password: string;
}

declare interface AxiosInstanceConfigureType {
  baseURL: string;
  headers?: object;
  rest?: any;
}
