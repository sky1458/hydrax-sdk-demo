import axios from "axios";
import { queryPair } from "./pair";

function request(url: string) {
  const req = axios(url);
  return {
    queryPair: () => queryPair(req),
  };
}

function queryMarkets() {}
