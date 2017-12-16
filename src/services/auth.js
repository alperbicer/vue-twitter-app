import firebase from 'firebase'

const getCurrentUser = () => firebase.auth().currentUser

const requiresUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe()
      if (user) {
        resolve(user)
        return
      }
      reject(Error('System: Yetkisiz kullanıcı!'))
    })
  })
}

export default {
  getCurrentUser,
  requiresUser
}
