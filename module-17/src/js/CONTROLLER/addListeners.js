export default function addListeners() {

    activeBtn();

    /* ======================== смена языка раскладки ====================== */
    languageButtons.addEventListener('click', resetKeyboardLetters);

    /* ============= добавить пользователя ====================== */
    sbmt.addEventListener('click', addUser);

    /* ============= показать скрытое окно для ввода текста ============= */
    btnShow.addEventListener('click', showTextArea);

    /* ============= добавить новый текст ============= */
    btnTextAdding.addEventListener('click', setNewPhrase);

    /* ========================= начинаем сравнение кликов клавиш с текстом ========== */
    beginButton.addEventListener('click', beginType);
}

import activeBtn from './../VIEW/activeBtn';
import {languageButtons, sbmt, btnShow, btnTextAdding, beginButton} from './../allElements';
import resetKeyboardLetters from './resetKeyboardLetters';
import addUser from './addUser';
import showTextArea from './../VIEW/showTextArea';
import setNewPhrase from './../VIEW/setNewPhrase';
import beginType from './beginType';
