document.addEventListener("DOMContentLoaded", function() {
    // Get the json file
    fetch("./components/footer.json")
        .then((response) => response.json())
        .then((data) => {
            // Find the footer container
            const footerContainer = document.querySelector(".footer");

            // Add content
            const footerText = document.createElement("b");

            // Create the link for design website
            const designerLink = document.createElement("a");
            designerLink.href = data.footer.link;
            designerLink.textContent = data.footer.designer;

            // Add the text and link to the footer
            footerText.innerHTML = `${data.footer.text} `;
            footerText.appendChild(designerLink);
            footerText.innerHTML += ` &copy; ${data.footer.year}`;

            // Add the completed element to the footer
            footerContainer.appendChild(footerText);
        })
        .catch((error) => console.error("Error fetching footer data:", error));
});
