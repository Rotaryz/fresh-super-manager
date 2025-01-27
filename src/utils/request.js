'use strict'

import axios from 'axios'
import * as Utils from './request-utils'

const TIME_OUT = 10000
const ERR_OK = 0
const ERR_NO = -404
const COMMON_HEADER = {}

const http = axios.create({
  timeout: TIME_OUT,
  headers: COMMON_HEADER
})

http.interceptors.request.use(
  (config) => {
    config.url = resetUrl(config.url)
    // 请求数据前的拦截
    // if (process.env.VUE_APP_ENV === 'release') {
    //   let version = 'v2/'
    //   config.url = config.url.split('api/').join(`${version}api/`)
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

function resetUrl(url) {
  const IS_PRODUCTION = process.env.NODE_ENV === 'production'
  if (IS_PRODUCTION) {
    return url
  }
  // todo
  let pathname = window.location.pathname
  if (pathname && pathname.indexOf('/v') > -1) {
    let version = pathname.substr(1)
    url = url.split('api/').join(`${version}api/`)
    return url
  }
  return url
  // return url.split('api/').join(`/v1/api/`)
}

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.resolve(error.response)
  }
)

function checkStatus(response) {
  // _loading
  // 如果http状态码正常，则直接返回数据
  if (
    response &&
    (response.status === 200 || response.status === 201 || response.status === 304 || response.status === 422)
  ) {
    // 全国包邮1688授权
    if (response && response.data.code === 14001) {
      window.open(
        response.data.authorized_url ||
          'https://auth.1688.com/oauth/authorize?client_id=4900988&site=1688&redirect_uri=https%3A%2F%2Fmarket-api.jkweixin.com%2Fmarket%2Fapi%2Fauthorized'
      )
      return {
        status: ERR_NO,
        msg: '请重新登录1688账号'
      }
    }
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: ERR_NO,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === ERR_NO) {
    console.warn(res.msg)
  }
  if (res.data && res.data.code !== ERR_OK) {
    // 如果网络请求成功，而提交的数据，或者是后端的一些未知错误所导致的，可以根据实际情况进行捕获异常
    Utils.handleErrorType(res.data.code)
    throw requestException(res)
  }
  return res.data
}

function requestException(res) {
  const error = {}
  error.statusCode = res.status
  const serviceData = res.data
  if (serviceData) {
    error.code = serviceData.code
    error.error = serviceData.error
    error.message = serviceData.message
    error.serverData = serviceData
  }
  return error
}

export default {
  post(url, data, loading = false, timeout = 30000) {
    Utils.showLoading(loading)
    return http({
      method: 'post',
      url,
      data, // post 请求时带的参数
      timeout
    })
      .then((response) => {
        return checkStatus(response)
      })
      .then((res) => {
        return checkCode(res)
      })
  },
  get(url, params, loading = false, timeout = 10000) {
    Utils.showLoading(loading)
    return http({
      method: 'get',
      url,
      params, // get 请求时带的参数
      timeout
    })
      .then((response) => {
        return checkStatus(response)
      })
      .then((res) => {
        return checkCode(res)
      })
  },
  put(url, data, loading = false, timeout = 10000) {
    Utils.showLoading(loading)
    return http({
      method: 'put',
      url,
      data, // put 请求时带的参数
      timeout
    })
      .then((response) => {
        return checkStatus(response)
      })
      .then((res) => {
        return checkCode(res)
      })
  },
  delete(url, data, loading = false, timeout = 10000) {
    Utils.showLoading(loading)
    return http({
      method: 'delete',
      url,
      data, // put 请求时带的参数
      timeout
    })
      .then((response) => {
        return checkStatus(response)
      })
      .then((res) => {
        return checkCode(res)
      })
  }
}
