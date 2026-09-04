const topButton = document.createElement("button");

topButton.innerHTML = "↑ Top";
topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.display = "none";
topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.padding = "10px 16px";
topButton.style.border = "none";
topButton.style.borderRadius = "8px";
topButton.style.background = "#222";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "14px";
topButton.style.zIndex = "1000";

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});