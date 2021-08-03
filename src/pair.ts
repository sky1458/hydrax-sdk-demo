import request from "./utils/request";
import { SDKConfig, ErrorHandler } from "./index.d";
export async function queryPair(
  url: string,
  options: SDKConfig,
  errorHandler?: ErrorHandler
) {
  const response = request(url, options);
  return {};
}
