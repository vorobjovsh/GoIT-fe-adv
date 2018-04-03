//import './../POLIFILLS/mapPolifill';

export default function arrayToObj(arr) {
    let obj = {};
    arr.map(function (elem) {
        return obj[elem["name"]] = elem["score"];
    });
    return obj;
}
