import baseUrl from './baseUrl';
import axs from 'axios';
import qs from 'qs';
import router from '@/router'
import i18n from '@/lang/index'
import { Message } from 'element-ui'

// import utils from './utils.js'
axs.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axs.defaults.timeout = 1000000
axs.defaults.headers.delete['Content-Type'] = 'application/json;charset=UTF-8';
// 添加一个请求拦截器
axs.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

axs.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.status !== 0) {
      Message({
        message: i18n.t('common.' + res.code),
        type: 'error',
        duration: 3000
      })
      // 如果状态不是0,则是本次业务操作失败,统一根据错误码国际化toast提示
      if ([401, 1017].includes(res.code)) {
        // 无权限,判断是否已登录,未登录则跳转到登录页

        router.push({ path: './login' })
      }
      return Promise.reject(new Error(res || 'Error'))
    }
    return response.data;
  },
  err => {
    console.log(err, 'response err')
    // 直接展示默认的1016错误提示
    Message({
      message: i18n.t('common.1016'),
      type: 'error',
      duration: 3000
    })
  })
export default {
  baseUrl,
  axs,
  get(url, data, headers) {
    return axs.get(url, { params: data }, headers);
  },
  post(url, data) {
    return axs.post(url, data);
  },
  put(url, data) {
    return axs.put(url, data);
  },
  del(url, data, headers) {
    return axs.delete(url, data, headers);
  },
  request(url, data, method, headers) {
    method = method || 'get';
    method = method.toLocaleLowerCase();
    switch (method) {
      case 'get':
        return this.get(url, data, headers);
      case 'post':
        return this.post(url, data);
      case 'put':
        return this.put(url, data);
      case 'del':
        return this.del(url, data, headers);
    }
  }
}