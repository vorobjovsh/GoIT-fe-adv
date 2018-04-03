export default function checkKey(event) {
    // event.key

    const length = appData.currentType.text.length;

    if (length > 0) {
        // console.log(appData.currentType.text);
        if (appData.currentType.text[length - 1] === event.key) {
            nextTypeSymbol();
            appData.currentType.text.pop();
            const last = appData.currentType.text.length;
            // console.log(tmp);
            lightButton(appData.currentType.text[last - 1]);
            if (length === 1) {
                stopType();
            }
        } else {
            ++appData.currentType.errors;
            errorTypeSymbol();
        }

        return true;
    }
    return 'Error: appData.currentType.text.length = ' + appData.currentType.text.length;
}

import {appData} from './../appData';
import nextTypeSymbol from './../VIEW/nextTypeSymbol';
import lightButton from './../VIEW/lightButton';
import stopType from './stopType';
import errorTypeSymbol from './../VIEW/errorTypeSymbol';
