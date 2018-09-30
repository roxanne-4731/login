import querystring from 'querystring';
import http from './http.service';

export function login(username, password) {
  return http.post('oauth/token', querystring.stringify({
    username: username,
    password: password,
    client_id: 'dc68510e-159d-4bca-a4f9-338ab2350d2a',
    client_secret: 'admin',
    grant_type: 'password'
  }), {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => response.data);
}

export function whoami() {
  return http.get('api/user/whoami')
    .then((response) => response.data);
}
// the message
export function preAuthenticate(username) {
  return http.post('api/user/preAuthenticate', {
    username
  }).then((response) => console.log(response));
}
