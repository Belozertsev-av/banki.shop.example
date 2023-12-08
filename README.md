### Сайт запущен на хостинге. Ознакомится можно по ссылке: https://banki-shop-example.vercel.app/

## О проекте

Учебное задание выполненное на Vue.js 2 версии используя синтаксис Options Api.

## Был реализован следущий функционал:

1. Строка поиска
   При ввода текста в строке поиска должен происходить поиск по названиям позиций.
   Лишние карточки должны исчезать/скрываться.

2. Кнопка "купить"
   При нажатии на кнопку:
   - она должна менять состояние, на 2 сек, на "обрабатывается"
   - после "обрабатывается" переходить в состояние "в корзине"
     Отображение состояний визуально оформить, напр. "preloader icon", "purchase icon", "checked icon", и т.п.
     Дизайн/стиль продумать самостоятельно.

3. Сохранение состояния позиций
   После перезагрузки страницы, состояния позиций (в корзине он или нет) должно сохраняться.

4. Подробное описание позиции
   При клике на название/изображение товара должна открывается модальное окно с карточкой товара.
   В карточке должны быть:
- краткое описание позиции
- цена
- слайдер, содержащий 2-4 изображения
