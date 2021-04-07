import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import elementKOLocale from 'element-ui/lib/locale/lang/ko'
import elementJALocale from 'element-ui/lib/locale/lang/ja'

import enLocale from './en'
import zhLocale from './zh'
import koLocale from './ko'
import jaLocale from './ja'

console.log(enLocale, 'enLocale')

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  ko: {
    ...koLocale,
    ...elementKOLocale
  },
  ja: {
    ...jaLocale,
    ...elementJALocale
  }
}

const getLanguage = () => {
  const choosedLanguage = localStorage.getItem('language')
  if (choosedLanguage) {
    return choosedLanguage
  }
  // 未主动选择,则看看浏览器是什么语言
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locale = Object.keys(messages).find(each => language.indexOf(each) > -1)
  return locale || 'en' // 本地未配置浏览器语言则使用英语
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages
})

export default i18n