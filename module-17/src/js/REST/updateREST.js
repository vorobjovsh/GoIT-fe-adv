export default function updateREST(obj) {

    const updateUrl = appData.url + '?action=2&id=' + obj.restID + '&name=' + obj.name + '&score=' + obj.score;
    console.log(updateUrl);
    fetch(updateUrl, {
        metod: "post"

    }).catch(function (error) {
        console.log('updateREST: Fetch Error : ', error);
    });
}

import {appData} from './../appData';
