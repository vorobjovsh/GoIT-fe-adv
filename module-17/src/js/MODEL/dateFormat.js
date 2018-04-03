export default function dateFormat(digits) {
    let msc = void 0,
        sec = void 0,
        min = void 0,
        hour = void 0;

    msc = Math.floor(digits % 1000);
    if (msc > 99) {
        msc = ':' + msc;
    } else if (msc > 9) {
        msc = ':' + '0' + msc;
    } else {
        msc = ':' + '00' + msc;
    }

    sec = Math.floor(digits / 1000 % 60);
    if (sec > 9) {
        sec = sec;
    } else {
        sec = '0' + sec;
    }

    return sec + msc;
}
