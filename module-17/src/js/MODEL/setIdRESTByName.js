export default function setIdRESTByName(arr) {
    arr.map(function (elem) {
        if (elem.name === appData.userCurrent.name) {
            appData.userCurrent.restID = elem["id"];
        }
    });
}

import {appData} from './../appData';
