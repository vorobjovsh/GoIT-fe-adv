const cardBlock = document.querySelector('.cardblock');

function createUserCard() {
    
    const card = '<div class="card"><figure><img class="card__image" src="images/user1.jpg" alt=""><figcaption><h3 class="card__title">Claudia Cardinale</h3><div class="card__textblock"><span>29</span><span>-</span><span>Philadelphia, PA</span></div><div class="card__icons"><span class="card__icons-strawberries">19</span><span class="card__icons-lemons">5</span><span class="card__icons-hand"></span></div></figcaption></figure></div>';
    
    return card;
}

cardBlock.innerHTML += createUserCard();

cardBlock.insertAdjacentHTML('afterbegin', createUserCard());
