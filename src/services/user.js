import firebase from 'firebase'

const get = (id) => {
  return firebase.database()
    .ref(`user/${id}`)
    .once('value')
    .then((snapshot) => {
      return snapshot.val()
    })
}

const create = (user, credential, additionalUserInfo) => {
  let profile = {
    name: user.displayName,
    username: additionalUserInfo.username,
    email: user.email,
    photoURL: user.photoURL,
    credential: credential,
    type: 'twitter'
  }

  return firebase.database()
    .ref(`user/${user.uid}`)
    .set(profile)
}

export default {
  get,
  create
}
