import {defineStore} from "pinia";

export const usePaints = defineStore('paints', {
    state: () => ({
            paints: [
                {
                    id: 0,
                    img: ["paint_1.png", "p_1_d_1.jpg", "p_1_d_2.jpg", "p_1_d_3.jpg"],
                    title: "«Рождение Венеры» Сандро Боттичелли",
                    desc: "картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция.",
                    oldPrice: '2 000 000',
                    newPrice: '1 000 000',
                    isSold: false,
                },
                {
                    id: 1,
                    img: ["paint_2.png", "p_2_d_1.jpg", "p_2_d_2.jpg", "p_2_d_3.jpg"],
                    title: "«Тайная вечеря» Леонардо да Винчи",
                    desc: "монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495—1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане. Ранее ошибочно называлась фреской, однако было установлено, что роспись выполнена не фреской, и не «а-секко», а в особой технике, придуманной художником: яичной темперой по масляному грунту из свинцовых белил.",
                    oldPrice: null,
                    newPrice: '3 000 000',
                    isSold: false,
                },
                {
                    id: 2,
                    img: ["paint_3.png", "p_3_d_1.jpg", "p_3_d_2.jpg", "p_3_d_3.jpg"],
                    title: "«Сотворение Адама» Микеланджело",
                    desc: "фреска Микеланджело, написанная около 1511 года является четвёртой из девяти центральных композиций потолка Сикстинской капеллы, посвящённых девяти сюжетам книги Бытия.",
                    oldPrice: '6 000 000',
                    newPrice: '5 000 000',
                    isSold: false,
                },
                {
                    id: 3,
                    img: ["paint_4.png", "p_4_d_1.jpg", "p_4_d_2.jpg", "p_4_d_3.jpg"],
                    title: "«Урок анатомии» Рембрандт",
                    desc: "Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека.",
                    oldPrice: '2 000 000',
                    newPrice: '1 000 000',
                    isSold: true,
                },
            ]
        })
})
export const useCart = defineStore('cart', {
    state: () => ({
        cart: (JSON.parse(localStorage.getItem('cart')) !== null)
        ? JSON.parse(localStorage.getItem('cart'))
        : []
    }),
    actions: {
        addToCart(data) {
            if (data !== null) this.cart.push(data)
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        delFromCart(data) {
            const index = this.cart.findIndex(n => n.id === data.id);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(this.cart))
        }
    }
})
export const useSearch = defineStore('search', {
    state: () => ({
        searchValue: ''
    }),
    actions: {
        setSearchValue(data) {
            this.searchValue = data
        }
    }
})