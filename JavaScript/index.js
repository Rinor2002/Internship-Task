function showSelectedValues() {
    const checkboxes = document.querySelectorAll('input[name="group"]:checked');
    const selectedValues = Array.from(checkboxes).map(res => res.value);
    console.log(selectedValues);
}

function changeValues() {
    const checkboxes = document.querySelectorAll('input[name="group"]');
    const newValues = ['Rinor', '2002', 'Kastrati', 'JS'];
    checkboxes.forEach((cb, i) => {
        cb.value = newValues[i];
        cb.nextSibling.textContent = newValues[i];
    });
}

function swapValues() {
    const checkboxes = document.getElementsByName("group");
    const values = Array.from(checkboxes).map((checkbox) => checkbox.value);
    const texts = Array.from(checkboxes).map((checkbox) => checkbox.nextSibling.textContent);

    checkboxes.forEach((cb, i) => {
        cb.value = values[values.length - 1 - i];
        cb.nextSibling.textContent = texts[texts.length - 1 - i];
    });
}