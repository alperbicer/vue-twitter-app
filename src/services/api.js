import User from './user'
import Auth from './auth'

import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://hayatmersin.com/apps/twitterapi/public/'

const getId = () => Auth.getCurrentUser().uid

const get = () => {
  return User.get(getId())
}

const getTimeline = (tokens) => {
  return new Promise((resolve) => {
    axios.get(`/getTimeline?accessToken=${tokens.accessToken}&secret=${tokens.secret}`)
      .then(response => {
        resolve(response.data.data)
      })
  })
}

const getFollowers = (tokens) => {
  return new Promise((resolve) => {
    axios.get(`/getFollowers?accessToken=${tokens.accessToken}&secret=${tokens.secret}`)
      .then(response => {
        resolve(response.data.data.users)
      })
  })
}

const postMesajGonder = (tokens, screenName, content) => {
  return new Promise((resolve) => {
    axios.post('/postMesajGonder', qs.stringify({ 'content': content, 'accessToken': tokens.accessToken, 'secret': tokens.secret, 'screenName': screenName }))
  })
}

export default {
  get,
  getTimeline,
  getFollowers,
  postMesajGonder
}
