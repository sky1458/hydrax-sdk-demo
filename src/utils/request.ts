import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

function checkStatus(response: AxiosResponse) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  throw error;
}

interface ErrorHandler {
  (): void;
}

async function request(
  url: string,
  options: AxiosRequestConfig,
  errorHandler?: ErrorHandler
) {
  return axios(url, options)
    .then(checkStatus)
    .then((response: AxiosResponse) => ({ data: response.data }))
    .catch((error) => {
      errorHandler && errorHandler();
      return {
        data: {
          message: "Error",
          status: 500,
        },
      };
    });
}

export default request;
