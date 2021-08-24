import request from '../lib/request';
import sha256 from 'crypto-js/sha256';
import { v4 as uuidv4 } from 'uuid';

export default async function login(
  info: LoginInfo,
  url: string,
  errorHandler = () => null
) {
  const { username, password } = info;
  const sp = sha256(password);
  const params = {
    requestId: uuidv4(),
    loginId: username,
    pwdHash: sp,
  };
  const response = await request(url, { data: params }, errorHandler);
  if (response.data.status === 'S') {
    return {
      success: true,
      ...response,
    };
  }
  return {
    success: false,
    ...response,
  };
}
