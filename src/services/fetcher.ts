import { AxiosRequestConfig } from 'axios'

// import { Redis } from '@upstash/redis'
import api from './api'

// const redis = Redis.fromEnv()

export const fetcher = async (url: string | null, config?: AxiosRequestConfig) => {
  if (typeof url !== 'string' || !url || url === '') return null
  // get query object from url string
  return api
    .get(url, config)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw new Error(e)
    })
}
