/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-void */
import axios from 'axios'
import Constant from 'constant'

// 导入所有api模块
import Project from '@/apps/project/modules/project-info/api/project.api.js'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = Constant.ROOT_URL
axios.defaults.timeout = 60000

/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      if (response !== void 0) { // 统一拦截器里有可能将response设置为null
        resolve(response.data)
      }
    }).catch((error) => {
      reject(error)
    })
  })
}

function axiosPost (url, params, resolve, reject) {
  axios.post(url, params, {
    //  转成form-data格式的请求数据
    transformRequest: [function (data) {
      let ret = ''
      for (const it in data) {
        // noinspection JSUnfilteredForInLoop
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
  }).then(response => {
    if (response !== void 0) { // 统一拦截器里有可能将response设置为null
      resolve(response.data)
    }
  }).catch((error) => {
    reject(error)
  })
}

/**
 *
 * @param url
 * @param params
 * @param options
 * @returns {*}
 */
export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    axiosPost(url, params, resolve, reject)
  })
}

// 导出所有模块
export default {
  Project: Project
}
