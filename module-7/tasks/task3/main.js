
function addElem(parent, name, className, content) {
  
    let elem = document.createElement(name);
    if(className !== ""){
       elem.classList.add(className);
    }
    elem.textContent = content;
    parent.appendChild(elem);
    
    return elem;
}


function createUserCard(user) {
    const cardBlock = document.querySelector('.cardblock'); 
    const card = addElem(cardBlock, "div", "card");
    const figure = addElem(card, "figure");
    
    const userImage = addElem(figure, "img", "card__image");
    userImage.src = user.img;
    
    const figcaption = addElem(figure, "figcaption");
    const nameUser = addElem(figcaption, "h3", "card__title", user.name);
    const textBlock = addElem(figcaption, "div", "card__textblock");
    const textAge = addElem(textBlock, "span", "", user.age);
    const textSep = addElem(textBlock, "span", "", "-");
    const textLocation = addElem(textBlock, "span", "", user.location);
    const cardIcons = addElem(figcaption, "div", "card__icons");
    const iconStrawberries = addElem(cardIcons, "span", "card__icons-strawberries", user.strawberries);
    const iconLemons = addElem(cardIcons, "span", "card__icons-lemons", user.lemons);
    const iconHand = addElem(cardIcons, "span", "card__icons-hand");
    
    return card;
}

const userFirst = {
  img: 'https://vorobjovsh.github.io/GoIT-fe-adv/module-7/tasks/task3/images/user1.jpg',
  name: 'Claudia Cardinale',
  age: 29,
  location: 'Philadelphia, PA',
  strawberries: 19,
  lemons: 5
};

const userSecond = {
  img: 'https://vorobjovsh.github.io/GoIT-fe-adv/module-7/tasks/task3/images/user2.jpg',
  name: 'Claudia Schiffer',
  age: 47,
  location: 'Coldham Hall, Stanningfield',
  strawberries: 10,
  lemons: 3
};

const userThird = {
  img: 'https://vorobjovsh.github.io/GoIT-fe-adv/module-7/tasks/task3/images/user3.jpg',
  name: 'Kate Moss',
  age: 44,
  location: 'Croydon, Greater London',
  strawberries: 15,
  lemons: 6
};

createUserCard(userFirst);
createUserCard(userSecond);
createUserCard(userThird);
