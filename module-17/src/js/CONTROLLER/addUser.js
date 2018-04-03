export default function addUser(e) {
    // TODO сделать проверку на уникальность имени
    e.preventDefault();
    let name = user.value;
  
    sectionUser.style.display = 'none';
    //userId = document.getElementById('id-User');
  
    //userId.textContent = name;
    paintUserScore();
    appData.userCurrent.name = name;
    //appData.userCurrent.score = userId.nextSibling.textContent;
    createREST(appData.userCurrent);
    save('thisUser', appData.userCurrent);
}

import {user} from './../allElements';

import {sectionUser} from './../allElements';

import paintUserScore from './../VIEW/paintUserScore';
import {appData} from './../appData';
import createREST from './../REST/createREST';
import save from './../LOCALSTORAGE/save';
