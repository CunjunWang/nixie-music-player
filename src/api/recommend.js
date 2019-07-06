// Created by CunjunWang on 2019-05-08

import {commonParameter} from './config'
import axios from 'axios'

// 获取推荐数据
export function getRecommend () {
  const url = '/api/getCarousel'
  const data = Object.assign({}, commonParameter, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getDiscList () {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParameter, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList (disstid) {
  const url = '/api/getCdInfo'
  const data = Object.assign({}, commonParameter, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
