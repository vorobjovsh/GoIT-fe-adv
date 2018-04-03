export default function readREST() {
    fetch(appData.url, {
        metod: "get"
    }).then(function (response) {
        let json = response.json();
        if (response.status >= 200 && response.status < 300) {
            return json;
        } 
    }).then(function (json) {
        let tmp = arrayToObj(json);
        // если список больше 10, то сохраним userRec
        let userRec = appData.records;
        appData.records = Object.assign(appData.records, tmp);
        addtoResultsArray(appData.results, appData.records);
      
        sortByScore(appData.results);
        // получить список максимум из 10-ти топ результатов
        filterTopResult(appData.results);

        appData.records = Object.assign(appData.records, userRec);
        sortByScore(appData.results);

        appData.results.map(function (elem) {
            return addToScoreList(elem.name, elem.score, userListParent);
        });
        // console.log('appData.userCurrent.id = ', appData.userCurrent.id);
        
        
        appData.userId = document.getElementById(appData.userCurrent.id);
        
        paintUserScore();
    }).catch(function (error) {
        console.log('Fetch Error :-S', error);
    });
}

import {appData} from './../appData';
import arrayToObj from './../MODEL/arrayToObj';
import addtoResultsArray from './../MODEL/addtoResultsArray';
import sortByScore from './../MODEL/sortByScore';
import filterTopResult from './../MODEL/filterTopResult';
import addToScoreList from './../VIEW/addToScoreList';
import {userListParent} from './../allElements';
//import {userId} from './../allElements';
import paintUserScore from './../VIEW/paintUserScore';
