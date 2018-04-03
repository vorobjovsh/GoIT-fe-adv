export default function addtoResultsArray(array, object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            array.push(new UserResult(key, object[key]));
        }
    }
}

import UserResult from './UserResult';
