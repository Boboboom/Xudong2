import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// 注册i18n实例并引入语言文件
const i18n = new VueI18n({
    locale: 'en',
    messages: {
        'zh': require('./languages').zh,
        'en': require('./languages').en,
        'de': require('./languages').de
    }
})

export default i18n