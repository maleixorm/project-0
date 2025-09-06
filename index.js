function lucky() {
    let search = document.getElementById('q');
    search.addEventListener('click', () => {
        let newSearch = 'oi' + search.value;
        console.log(`https://google.com/search?q=${newSearch}`);
    });
}
