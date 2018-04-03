// addToList
export default function addToScoreList(name, score, parent) {
    const li = document.createElement('li');
    const pName = document.createElement('p');
    const pScore = document.createElement('p');
    li.className = 'user-list__item';
    pName.className = 'user-list__name';
    pName.id = 'id-' + name;
    pScore.className = 'user-list__score';
    pName.textContent = name;
    pScore.textContent = score;
    li.appendChild(pName);
    li.appendChild(pScore);
    parent.appendChild(li);
}
