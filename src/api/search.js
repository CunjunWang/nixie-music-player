// Created by CunjunWang on 2019-06-16

import jsonp from '../common/js/jsonp'
import {commonParameter, options} from './config'
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getHotKey () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParameter, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}

export function search (query, page, zhida, perpage) {
  const url = debug ? '/api/search' : 'https://nixie-music-player.herokuapp.com/api/search'

  const data = Object.assign({}, commonParameter, {
    w: query,
    p: page,
    perpage,
    n: perpage,
    catZhida: zhida ? 1 : 0,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    remoteplace: 'txt.mqq.all',
    uin: 0,
    needNewCode: 1,
    platform: 'h5',
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
