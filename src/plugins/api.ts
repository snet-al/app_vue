import axios from 'axios'
import store from '@/store';

export default ((axiosOptions = {}, withoutAuthorization = true) => {
  const defaultOptions = {
    baseURL: `https://topseller-api.inovacion.al/api`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: '',
    },
  }
  let accessToken = ''
  if (store && store.getters && store.getters.token && store.getters.token.accessToken) {
    accessToken = store.getters.token.accessToken
  }
  let options = { ...defaultOptions, ...axiosOptions }
  if (!withoutAuthorization) {
    options.headers.Authorization = 'Bearer ' + accessToken;
  }

  return axios.create(options)
})()
