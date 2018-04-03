export default function errorTypeSymbol() {
    typableChars[appData.currentType.position].classList.add('typable__char--error');
    errors.textContent = appData.currentType.errors;
}

import {typableChars, errors} from './../allElements';
import {appData} from './../appData';
