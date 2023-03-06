import http from 'k6/http';
import { check, sleep, SharedArray } from 'k6';

export const options = {
  duration: '1m',
  vus: 50,
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95 percent of response times must be below 500ms
  },
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  check(res, 
    { 'status was 200': (r) => r.status == 200 }
    );
  sleep(1);
}
