// Semester 3 Notes — Search

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const pages = [
    {
        name: "Digital Laws & Ethics",
        file: "Digital_Laws_and_Ethics.html"
    },
    {
        name: "OTT Advertising",
        file: "OTT_Advertising.html"
    },
    {
        name: "Digital Media Planning & Buying",
        file: "Digital_Media_Planning_and_Buying.html"
    },
    {
        name: "E-Commerce & Digital Marketing",
        file: "E-Commerce_and_Digital_Marketing.html"
    },
    {
        name: "Mobile Advertising",
        file: "Mobile_Advertising.html"
    },
    {
        name: "Web Analytics & Strategy Formulation",
        file: "Web_Analytics_and_Strategy_Formulation.html"
    },
    {
        name: "Affiliate Marketing",
        file: "Affiliate_Marketing.html"
    },
    {
        name: "Artificial Intelligence in Digital Marketing",
        file: "AI_in_Digital_Marketing.html"
    }
];

let searchIndex = [];

async function buildSearchIndex() {
    for (const page of pages) {
        try {
            const response = await fetch(page.file);
            const html = await response.text();

            const parser = new DOMParser();
            const document = parser.parseFromString(html, "text/html");

            const headings = document.querySelectorAll("main h1, main h2, main h3, main h4");

            headings.forEach((heading) => {
                let content = "";
                let element = heading.nextElementSibling;

                while (element && !["H1", "H2", "H3", "H4"].includes(element.tagName)) {
                    content += " " + element.textContent;
                    element = element.nextElementSibling;
                }

                searchIndex.push({
                    subject: page.name,
                    file: page.file,
                    title: heading.textContent.trim(),
                    id: heading.id,
                    content: (heading.textContent + " " + content)
                        .replace(/\s+/g, " ")
                        .trim()
                });
            });
        } catch (error) {
            console.error("Could not load:", page.file, error);
        }
    }
}

function createSnippet(text, query) {
    const lowerText = text.toLowerCase();
    const position = lowerText.indexOf(query);

    if (position === -1) {
        return text.substring(0, 150) + "...";
    }

    const start = Math.max(0, position - 70);
    const end = Math.min(text.length, position + query.length + 100);

    let snippet = text.substring(start, end);

    if (start > 0) {
        snippet = "..." + snippet;
    }

    if (end < text.length) {
        snippet += "...";
    }

    return snippet;
}

function displayResults(query) {
    const matches = searchIndex.filter((item) =>
        item.content.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        searchResults.innerHTML = `
            <p class="search-empty">
                No results found for "<strong>${query}</strong>".
            </p>
        `;
        return;
    }

    searchResults.innerHTML = matches.map((item) => `
        <a class="search-result"
           href="${item.file}#${item.id}">
            <strong>${item.subject}</strong>
            <span>${item.title}</span>
            <small>${createSnippet(item.content, query)}</small>
        </a>
    `).join("");
}

searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    if (!query) {
        searchResults.innerHTML = "";
        return;
    }

    if (searchIndex.length === 0) {
        searchResults.innerHTML = `
            <p class="search-loading">Loading notes...</p>
        `;
        return;
    }

    displayResults(query);
});

buildSearchIndex();