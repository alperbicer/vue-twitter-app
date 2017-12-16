import User from './user'
import Auth from './auth'

const getId = () => Auth.getCurrentUser().uid

const get = () => {
  return User.get(getId())
}

export default {
  get
}
