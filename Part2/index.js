console.log('hi')
const idInput = document.getElementById('card-id')
const styleInput = document.getElementById('style-id')

const setCard = () => {
    const card = document.querySelector(`#${idInput.value}`);
    card.style.color = styleInput.value
}