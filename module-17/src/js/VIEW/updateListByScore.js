export default function updateListByScore() {
    // console.log('updateListByScore');
    const userListScores = document.querySelectorAll('.user-list__item');
    const tmp = Array.from(userListScores);
    tmp.sort(function (a, b) {
        return b.lastChild.textContent - a.lastChild.textContent;
    });
    Array.from(userListScores, function (elem) {
        return elem.remove();
    });
    tmp.map(function (elem) {
        return userListParent.appendChild(elem);
    });
}

import {userListParent} from './../allElements';
