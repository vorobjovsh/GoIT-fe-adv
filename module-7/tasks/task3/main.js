function createUserCard(user) {
    const cardBlock = document.querySelector('.cardblock');
    
    const card = document.createElement("div");
    card.classList.add("card");
    
    const figure = document.createElement("figure");
    card.appendChild(figure);
    
    const userImage = document.createElement("img");
    userImage.classList.add("card__image");
    userImage.src = user.img;
    figure.appendChild(userImage);
    
    const figcaption = document.createElement("figcaption"); 
    figure.appendChild(figcaption);
    
    const nameUser = document.createElement("h3");
    nameUser.classList.add("card__title");
    nameUser.textContent = user.name;
    figcaption.appendChild(nameUser);
    
    const textBlock = document.createElement("div");
    textBlock.classList.add("card__textblock");
    figcaption.appendChild(textBlock);
    
    const textAge = document.createElement("span");
    textAge.textContent = user.age;
    textBlock.appendChild(textAge);
    
    const textSep = document.createElement("span");
    textSep.textContent = "-";
    textBlock.appendChild(textSep);
    
    const textLocation = document.createElement("span");
    textLocation.textContent = user.location;
    textBlock.appendChild(textLocation);
    
    const cardIcons = document.createElement("div");
    cardIcons.classList.add("card__icons");
    figcaption.appendChild(cardIcons);
    
    const iconStrawberries = document.createElement("span");
    iconStrawberries.classList.add("card__icons-strawberries");
    iconStrawberries.textContent = user.strawberries;
    cardIcons.appendChild(iconStrawberries);
    
    const iconLemons = document.createElement("span");
    iconLemons.classList.add("card__icons-lemons");
    iconLemons.textContent = user.lemons;
    cardIcons.appendChild(iconLemons);
    
    const iconHand = document.createElement("span");
    iconHand.classList.add("card__icons-hand");
    cardIcons.appendChild(iconHand);
    
    cardBlock.append(card);
    
    return card;
}

const userFirst = {
  img: 'images/user1.jpg',
  name: 'Claudia Cardinale',
  age: 29,
  location: 'Philadelphia, PA',
  strawberries: 19,
  lemons: 5
};

const userSecond = {
  img: 'images/user2.jpg',
  name: 'Claudia Schiffer',
  age: 47,
  location: 'Coldham Hall, Stanningfield',
  strawberries: 10,
  lemons: 3
};

const userThird = {
  img: 'images/user3.jpg',
  name: 'Kate Moss',
  age: 44,
  location: 'Croydon, Greater London',
  strawberries: 15,
  lemons: 6
};

createUserCard(userFirst);
createUserCard(userSecond);
createUserCard(userThird);
