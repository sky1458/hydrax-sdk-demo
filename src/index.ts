import { queryPair } from "./pair";
import { SDKConfig, ErrorHandler } from "./index.d";

function HydraxSDK(token: string, user_id: string) {
  return {
    queryPair: (url: string, options: SDKConfig, errorHandler: ErrorHandler) =>
      queryPair(url, options, errorHandler),
  };
}

export default HydraxSDK;
