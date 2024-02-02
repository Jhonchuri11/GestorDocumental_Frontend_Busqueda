const anotherSearchSection = document.getElementById('SearchSection');
const showSearchButton = document.getElementById('showSearch');

showSearchButton.addEventListener('click', function() {
    if (anotherSearchSection.style.display === 'none') {
        anotherSearchSection.style.display = 'block';
    } else {
        anotherSearchSection.style.display = 'none';
    }
});
