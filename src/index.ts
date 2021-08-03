import { queryPair } from "./pair";
import { SDKConfig } from "./index.d";

function HydraxSDK(url: string, options: SDKConfig, errorHandler: () => null) {
  return {
    queryPair: () => queryPair(url, options, errorHandler),
  };
}

export default HydraxSDK;
