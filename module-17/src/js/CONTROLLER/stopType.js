export default function stopType() {

    document.removeEventListener('keypress', checkKey);

    addListeners();

    //timer
    const resultTime = timer.stop().split(':');
    appData.timerCurrent = +resultTime[0] + +resultTime[1] / 1000;

    // Расчитать Score  и показать на странице,
    const currentTextLength = appData.typingText[appData.currentSetting.lang].length;
    const currentScore = getScore(appData.timerCurrent, currentTextLength);
    speed.textContent = currentScore;

    // сравнить Score, перезаписать результаты
    if (appData.currentType.errors === 0) {
        // userScore.score = scr > userScore.score ? scr : userScore.score;
        if (currentScore > appData.userCurrent.score) {
            appData.userCurrent.score = currentScore;
            // console.log(`${currentScore}`);
            getRESTIdUser();
            save('thisUser', appData.userCurrent);
            updateREST(appData.userCurrent);
        }
        appData.userId.nextSibling.textContent = appData.userCurrent.score;
        // пройтись по списку проверить score , переместить
        updateListByScore();
    }

    // Модальное окно при завершении
    modal.style.transform = 'translateY(-25%)';
    modalP.textContent = 'Fin';

    // Показать Errors на странице и обнулить
    appData.currentType.errors = 0;

    restoreView();
}

import checkKey from './checkKey';
import addListeners from './addListeners';
import {timer} from './../timer';
import {appData} from './../appData';
import getScore from './../MODEL/getScore';
import {speed, modal, modalP} from './../allElements';
import getRESTIdUser from './../REST/getRESTIdUser';
import save from './../LOCALSTORAGE/save';
import updateREST from './../REST/updateREST';
import updateListByScore from './../VIEW/updateListByScore';
import restoreView from './../VIEW/restoreView';
