import Vue from 'vue'
import Tweet from '../../../src/components/Tweet.vue'

describe('Tweet.vue', () => {
  const createComponent = () => {
    const TweetConstructor = Vue.extend(Tweet)
    const comp = new TweetConstructor({
      propsData: {
        tweet: {
          user: {
            profile_image_url: 'https://pbs.twimg.com/media/C8QzyMpXYAIfozt.jpg',
            name: 'deneme'
          },
          text: 'deneme'
        }
      }
    }).$mount()
    return comp
  }

  it('bağlantı render olmalı', () => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.image img').getAttribute('src'))
      .to.equal('https://pbs.twimg.com/media/C8QzyMpXYAIfozt.jpg')
  })
  it('profile image url değiştiği zaman elemanların src\'si güncellenmeli', () => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.image img').getAttribute('src'))
      .to.equal('https://pbs.twimg.com/media/C8QzyMpXYAIfozt.jpg')

    comp.link = 'https://vuejs.org/images/logo.png'
    Vue.nextTick(() => {
      expect(comp.$el.querySelector('.image img').getAttribute('src'))
        .to.equal('https://vuejs.org/images/logo.png')
    })
  })
})
