const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput && searchResults) {
    searchInput.addEventListener("input", function () {
        const query = this.value.trim().toLowerCase();

        if (!query) {
            searchResults.innerHTML = "";
            return;
        }

        searchResults.innerHTML = `
            <p>Searching for: <strong>${query}</strong></p>
        `;
    });
}