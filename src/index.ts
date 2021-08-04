import { queryPair } from "./pair";
import { SDKConfig, ErrorHandler, OtherParams } from "./index.d";
import request from "./utils/request";

export function httpRequest(url: string, params: any) {
  return (otherParams: OtherParams, errorHandler = () => null) =>
    request(
      url,
      {
        params: {
          ...otherParams,
          ...params,
        },
      },
      errorHandler
    );
}

function HydraxSDK(url: string, token: string, user_id: string) {
  return {
    queryPair: queryPair,
  };
}

export default HydraxSDK;
