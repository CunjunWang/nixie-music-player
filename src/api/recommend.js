// Created by CunjunWang on 2019-05-08

// import jsonp from '../common/js/jsonp'
// import {commonParameter, options} from './config'
// import {homeCarouselUrl} from './url'
import axios from 'axios'

// 获取推荐数据
export function getRecommend () {
  const url = '/api/getCarouselList'
  return axios.get(url).then((res) => {
    console.log('res:' + res)
    return Promise.resolve(res.data)
  })
  // const data = Object.assign({}, commonParameter, {
  //   platform: 'h5',
  //   uin: 0,
  //   needNewCode: 1
  // })
  // return jsonp(homeCarouselUrl, data, options)
}

export function getDiscList () {
  const url = '/api/getDiscList'
  // const data = Object.assign({}, commonParameter, {
  //   platform: 'yqq',
  //   hostUin: 0,
  //   sin: 0,
  //   ein: 29,
  //   sortId: 5,
  //   needNewCode: 0,
  //   categoryId: 10000000,
  //   rnd: Math.random(),
  //   format: 'json'
  // })
  // return axios.get(url, {
  //   params: data
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // })
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
