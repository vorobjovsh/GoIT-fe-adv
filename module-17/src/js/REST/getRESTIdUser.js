export default function getRESTIdUser() {
    fetch(appData.url, {
        metod: "get"
    }).then(function (response) {
        const json = response.json();
        if (response.status >= 200 && response.status < 300) {
            return json;
        } else {
            return error;
        }
    }).then(function (json) {
        setIdRESTByName(json);
    }).catch(function (error) {
        console.log('Fetch Error :-S', error);
    });
}

import {appData} from './../appData';
import setIdRESTByName from './../MODEL/setIdRESTByName';
