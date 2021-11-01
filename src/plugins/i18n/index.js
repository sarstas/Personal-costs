import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'ru',
    messages: {
        en: {
            logoText: "My personal costs",
            linkDashboard: "Dashboard",
            linkAbout: "About",
            btnAddPayment: "Add Payment",
            tableHeadDate: "Date",
            tableHeadCategory: "Category",
            tableHeadValue: "Value",
            tableHeadAction: "Action",
            actionEdit: "Edit",
            actionDelete: "Delete",
            categoryFood: "Food",
            categoryTransport: "Transport",
            categoryEducation: "Education",
            categorySport: "Sport",
            copyright: "Saraikin Stanislav"
        },
        ru: {
            logoText: "Мои личные расходы",
            linkDashboard: "Таблица расхдов",
            linkAbout: "О нас",
            btnAddPayment: "Добавить расход",
            tableHeadDate: "Дата",
            tableHeadCategory: "Категория",
            tableHeadValue: "Сумма",
            tableHeadAction: "Операции",
            actionEdit: "Изменить",
            actionDelete: "Удалить",
            categoryFood: "Еда",
            categoryTransport: "Транспорт",
            categoryEducation: "Образование",
            categorySport: "Спорт",
            copyright: "Сарайкин Станислав"
        }
    }
})