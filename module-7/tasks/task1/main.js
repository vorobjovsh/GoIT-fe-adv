function createUserCard() {
    const cardBlock = document.querySelector('.cardblock');
    
    const card = document.createElement("div");
    card.classList.add("card");
    
    const figure = document.createElement("figure");
    card.appendChild(figure);
    
    const userImage = document.createElement("img");
    userImage.classList.add("card__image");
    userImage.src = "images/user1.jpg";
    figure.appendChild(userImage);
    
    const figcaption = document.createElement("figcaption"); 
    figure.appendChild(figcaption);
    
    const nameUser = document.createElement("h3");
    nameUser.classList.add("card__title");
    nameUser.textContent = "Claudia Cardinale";
    figcaption.appendChild(nameUser);
    
    const textBlock = document.createElement("div");
    textBlock.classList.add("card__textblock");
    figcaption.appendChild(textBlock);
    
    const textAge = document.createElement("span");
    textAge.textContent = "29";
    textBlock.appendChild(textAge);
    
    const textSep = document.createElement("span");
    textSep.textContent = "-";
    textBlock.appendChild(textSep);
    
    const textLocation = document.createElement("span");
    textLocation.textContent = "Philadelphia, PA";
    textBlock.appendChild(textLocation);
    
    const cardIcons = document.createElement("div");
    cardIcons.classList.add("card__icons");
    figcaption.appendChild(cardIcons);
    
    const iconStrawberries = document.createElement("span");
    iconStrawberries.classList.add("card__icons-strawberries");
    iconStrawberries.textContent = "19";
    cardIcons.appendChild(iconStrawberries);
    
    const iconLemons = document.createElement("span");
    iconLemons.classList.add("card__icons-lemons");
    iconLemons.textContent = "5";
    cardIcons.appendChild(iconLemons);
    
    const iconHand = document.createElement("span");
    iconHand.classList.add("card__icons-hand");
    cardIcons.appendChild(iconHand);
    
    cardBlock.append(card);
    
    return card;
}

createUserCard();
