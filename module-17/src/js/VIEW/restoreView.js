export default function restoreView() {
    appData.currentType.position = 0;
    // remove old
    Array.from(keyboardButtons, function (elem) {
        elem.classList.remove('keyboard__btn--active');
        // elem.classList.remove('keyboard__btn--active');
    });
    Array.from(typableChars, function (elem) {
        elem.classList.remove('typable__char--error');
        elem.classList.remove('typable__char--success');
        elem.classList.remove('typable__char--current');
    });
    // default
    typableChars[0].classList.add('typable__char--current');
    // let currentChar = appData.typingText[appData.currentSetting.lang];
    // console.log()
    lightButton(appData.typingText[appData.currentSetting.lang][0]);
    // keyboardButtons[0].classList.add('keyboard__btn--active');
}

import {appData} from './../appData';
import {keyboardButtons, typableChars} from './../allElements';
import lightButton from './lightButton';
