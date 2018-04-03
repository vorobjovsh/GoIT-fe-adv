export default function removeListeners() {
    // console.log('remove listeners');

    /* ======================== смена языка раскладки ====================== */
    languageButtons.removeEventListener('click', resetKeyboardLetters);

    /* ============= добавить пользователя ====================== */
    sbmt.removeEventListener('click', addUser);

    /* ============= показать скрытое окно для ввода текста ============= */
    btnShow.removeEventListener('click', showTextArea);

    /* ============= добавить новый текст ============= */
    btnTextAdding.removeEventListener('click', setNewPhrase);

    /* ========================= начинаем сравнение кликов клавиш с текстом ========== */
    beginButton.removeEventListener('click', beginType);

    desactiveBtn();
}

import {languageButtons} from './../allElements';
import resetKeyboardLetters from './resetKeyboardLetters';
import {sbmt} from './../allElements';
import addUser from './addUser';
import {btnShow} from './../allElements';
import showTextArea from './../VIEW/showTextArea';
import {btnTextAdding} from './../allElements';
import setNewPhrase from './../VIEW/setNewPhrase';
import {beginButton} from './../allElements';
import beginType from './beginType';
import desactiveBtn from './../VIEW/desactiveBtn';
