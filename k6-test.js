import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 2000, // slowly?
  duration: "20s",
};

export default function () {
  http.get("web site url?");
  sleep(1);
}