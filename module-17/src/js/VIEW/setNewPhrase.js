export default function setNewPhrase(event) {
    event.preventDefault();
    
    let lng = 'en';

    Array.from(radioLang, function (elem) {
        if (elem.checked) {
            lng = elem.value;
        }
    });
   
    appData.typingText[lng] = elemTextArea.value.toLocaleLowerCase();

    hideElem(wrpTextArea);

    /* ================== меняем раскладку клавиатуры ================*/
    setKeyboardLetters(appData.currentSetting.setKeyboard(), keyboardButtons);
    /* =================  добавляет текст в  typable ====================== */
    let text = appData.currentSetting.setTypingText();

    // подсветка текущей буквы
    lightButton(text[0]);

    fillTypableChars(typableChars, text);
    hideTypeElements(typableChars, text);
}

import {radioLang, elemTextArea, wrpTextArea, keyboardButtons, typableChars} from './../allElements';
import {appData} from './../appData';
import hideElem from './hideElem';
import setKeyboardLetters from './setKeyboardLetters';
import lightButton from './lightButton';
import fillTypableChars from './fillTypableChars';
import hideTypeElements from './hideTypeElements';
