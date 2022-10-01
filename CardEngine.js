var CardEngine = await fetch('cards.json').then(rs => rs.json());

CardEngine.getRandomCard = function () {
    return this.cards[Math.floor(this.cards.length * Math.random())];
};
CardEngine.addCard = function (card) {
    this.cards.push(card);
};
CardEngine.printCards = function () {
    console.log(this.cards);
};
CardEngine.displayRandomCard = function () {
    var card = this.getRandomCard();
    document.getElementById("titleDisplay").value = card.title;
    document.getElementById("descriptionDisplay").value = card.description;
};

document.getElementById("saveButton").onclick = function () {
    CardEngine.addCard({
        "title": document.getElementById("titleInput").value,
        "description": document.getElementById("descriptionInput").value
    });
    document.getElementById("titleInput").value = "";
    document.getElementById("descriptionInput").value = "";
    CardEngine.printCards();
    CardEngine.displayRandomCard();
};

CardEngine.displayRandomCard();
