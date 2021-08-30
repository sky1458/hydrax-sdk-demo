// import { AxiosRequestConfig } from 'axios';
import request from '../lib/request';
import { v4 as uuidv4 } from 'uuid';

type RequestBody<T, U, Z> = {
  [type: string]: T | U | Z
}

type ReturnDataFormat<T> = {
  data: {
    error: {
      message: string
    },
    result: T
  }
}

/**
 * Returns the correct data format
 * 
 * @param res response content
 * @returns correct data format
 */
const returnFormatData = (res: ReturnDataFormat<object[]>) => ({
  success: Boolean(!(res?.data?.error)), // error ? 'failed' : 'success'
  message: res?.data?.error || "",
  data: res?.data?.result || null,
})

const generateBalances = async () => {
  const { token, userId } = request.getSdkConfig()
  const id = uuidv4()
  const requestBody: RequestBody<string, number, any[]> = {
    id,
    method: 'execute',
    params: [
      'td.account',
      'get_balances',
      [],
      { "user_id": userId },
      { "user_id": userId, token: token },
    ],
  }
  const response = await request.post('/json_rpc', requestBody);

  return returnFormatData(response)
};

export default generateBalances