import axios from 'axios';
import toastr from 'toastr';
import querystring from 'querystring';

import store from '../store';
import * as types from '../store/types';

class HttpService {
  constructor() {
    axios.defaults.baseURL = 'https://app.smartserviceco.ir/';
    axios.interceptors.request.use(
      (config) => {
        const accessToken = store.getters[types.AUTH_GET_ACCESS_TOKEN];
        if (accessToken) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      }, (error) => {
        toastr.error('لطفا ارتباط خود با شبکه را مجدد چک نمایید', 'خطا در ارتباط با سرور', {
          'positionClass': 'toast-bottom-full-width'
        });
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const originalRequest = error.config;
        if (error && error.response && error.response.status === 401 && error.response.data) {
          if (error.response.data.error === 'unauthorized') {
            const refreshToken = store.getters[types.AUTH_GET_REFRESH_TOKEN];
            return this.doRefreshToken(refreshToken).then((tokenData) => {
              store.dispatch(types.AUTH_ACT_STORE_AUTHDATA, tokenData);
              return axios.request(originalRequest);
            }).catch((error) => {
              store.dispatch(types.AUTH_ACT_LOGOUT);
              return Promise.reject(error);
            });
          }
        }
        return Promise.reject(error);
      }
    );
  }

  get(url, config) {
    return axios.get(url, config);
  }

  post(url, data, config = {
    headers: {
      'content-type': 'application/json'
    }
  }) {
    return axios.post(url, data, config);
  }

  doRefreshToken(refreshToken) {
    return axios.post('oauth/token', querystring.stringify({
      refresh_token: refreshToken,
      client_id: 'dc68510e-159d-4bca-a4f9-338ab2350d2a',
      client_secret: 'admin',
      grant_type: 'refresh_token'
    }), {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => response.data);
  }
}

export default new HttpService();
