import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 2000, // slowly?
  duration: "10s",
};

export default function () {
  http.get("https://www.aziz.kr/");
  sleep(1);
}