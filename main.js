
document.querySelectorAll('.error-state').forEach(item => {
    item.style.display = "none";
})

const images = document.querySelectorAll('img');

images.forEach((img) => {
    img.setAttribute('draggable', 'false');
})

const radioInput = document.querySelectorAll('.mortgage-type');

radioInput.forEach(radio => {
    radio.addEventListener('click', (event) => {
        event.preventDefault();
        const checkBox = radio.querySelector('input[type=radio]');
        checkBox.checked = !checkBox.checked;   
        if (checkBox.id == "repayment" && checkBox.checked) {
            document.getElementById("mortgage-type-repayment").classList.add("selected", "mortgage-type-active");
            document.getElementById("mortgage-type-interest").classList.remove("selected", "mortgage-type-active");
        } else if (checkBox.id == "interest-only" && checkBox.checked) {
            document.getElementById("mortgage-type-interest").classList.add("selected", "mortgage-type-active");
            document.getElementById("mortgage-type-repayment").classList.remove("selected", "mortgage-type-active");
        } else {
            document.getElementById("mortgage-type-repayment").classList.remove("selected", "mortgage-type-active");
            document.getElementById("mortgage-type-interest").classList.remove("selected", "mortgage-type-active");
        }
    })
})


document.getElementById("submit-button").addEventListener('click', (event) => {
    event.preventDefault();
})
