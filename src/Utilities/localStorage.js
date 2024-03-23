const getStoredCard = () => {
    const cardData = localStorage.getItem("categoryId");

    if (cardData) {
        return JSON.parse(cardData);
    }

    return [];
}


const saveToLocalStorage = id => {
    const storedCardIds = getStoredCard();

    const existedCardIds = storedCardIds.find(item => item === id);

    if (!existedCardIds) {
        storedCardIds.push(id);
        localStorage.setItem("categoryId", JSON.stringify(storedCardIds));
    }
}

export {getStoredCard, saveToLocalStorage};