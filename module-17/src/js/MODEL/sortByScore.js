export default function sortByScore(arr) {
    arr.sort(function (a, b) {
        return b.score - a.score;
    });
}
