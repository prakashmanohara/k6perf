import http from 'k6/http';
import { check, sleep, SharedArray } from 'k6';

//commanded to run with default vu
export const options = {
  stages: [
    { duration: '1m', vus: 10, 
      thresholds:{http_req_duration: ['p(95)<500]']}
    },
  ],
};


export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  check(res, 
    { 'status was 200': (r) => r.status == 200 }
    );
  sleep(1);
}
