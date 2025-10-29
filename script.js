const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');
const items = resultsList.getElementsByTagName('li');

let originalTexts = [];
for (let i = 0; i < items.length; i++) {
originalTexts.push(items[i].textContent);
}

searchInput.addEventListener('input', function () {
const inputValue = searchInput.value.toLowerCase().trim();

for (let i = 0; i < items.length; i++) {
    const title = originalTexts[i];
    const lowerTitle = title.toLowerCase();

    if (inputValue === "") {
        items[i].innerHTML = title;
        items[i].style.display = '';
        continue;
    }

    // Разбиваем введённые буквы на массив
    const searchLetters = inputValue.split('');

    // Проверяем, есть ли хоть одна из введённых букв в названии
    let matchFound = false;
    let highlightedTitle = "";

    for (let j = 0; j < lowerTitle.length; j++) {
        const currentChar = lowerTitle[j];

    if (searchLetters.includes(currentChar)) {
        // если текущая буква входит в набор — подсветим её
        highlightedTitle += `<mark>${title[j]}</mark>`;
        matchFound = true;
    } else {
        highlightedTitle += title[j];
    }
    }

    if (matchFound) {
        items[i].innerHTML = highlightedTitle;
        items[i].style.display = '';
    } else {
        items[i].style.display = 'none';
    }
}
});
