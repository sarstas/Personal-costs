import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/langs/en.json' // читер:) так не всегда получится. иногда переводы будут только в апи доступны

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'ru',
    messages: {
        en
    }
})
