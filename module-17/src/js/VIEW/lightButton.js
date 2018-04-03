/*
   Подсветка клавиатуры: клавиша, которую следует нажать.
 */

export default function lightButton(charText) {
    Array.from(keyboardButtons, function (elem) {
        if (elem.classList.contains('keyboard__btn--active')) {
            elem.classList.remove('keyboard__btn--active');
        }
        if (elem.textContent === charText) {
            elem.classList.add('keyboard__btn--active');
        }
    });
}

import {keyboardButtons} from './../allElements';
