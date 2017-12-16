import Vue from 'vue'
import Followers from '../../../src/theme/Followers.vue'

describe('Followers.vue', () => {
  const createComponent = () => {
    const FollowersConstructor = Vue.extend(Followers)
    const comp = new FollowersConstructor().$mount()
    return comp
  }

  it('doğru içerik render edilmeli', done => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.row span').textContent)
      .to.equal('Mesaj Göndermek İstediğiniz Takipçinizi Seçin')
    setTimeout(function () {
      done()
    }, 1000)
  })
})
