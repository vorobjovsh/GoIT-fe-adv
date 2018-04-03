export default function resetKeyboardLetters(e) {
    appData.currentSetting.lang = e.target.textContent;
    setKeyboardLetters(appData.currentSetting.setKeyboard(), keyboardButtons);
    Array.from(langBtns, function (elem) {
        return elem.classList.remove('lang-ctrls__btn--active');
    });
    e.target.classList.add('lang-ctrls__btn--active');
    fillTypableChars(typableChars, appData.currentSetting.setTypingText());
    hideTypeElements(typableChars, appData.currentSetting.setTypingText());
    // clear();

    const text = appData.currentSetting.setTypingText();
    // подсветка текущей буквы
    // console.log(text);
    lightButton(text[0]);
}

import {appData} from './../appData';
import setKeyboardLetters from './../VIEW/setKeyboardLetters';
import {keyboardButtons, langBtns, typableChars} from './../allElements';
import fillTypableChars from './../VIEW/fillTypableChars';
import hideTypeElements from './../VIEW/hideTypeElements';
import lightButton from './../VIEW/lightButton';
