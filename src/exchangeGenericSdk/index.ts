import request from '../lib/request';

export default function exchangeGenericSdk(sdkConfig: SDKConfig) {
  const { database, baseURL } = sdkConfig;
  const headers = {
    'X-Database': database,
  };
  request.setSdkConfig(sdkConfig);
  request.setConfigure({ baseURL, headers });
}
