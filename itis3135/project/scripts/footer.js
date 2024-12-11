document.addEventListener("DOMContentLoaded", function() {
    // Get the json file
    fetch("./components/footer.json")
        .then((response) => response.json())
        .then((data) => {
            // Find the footer container
            const footerContainer = document.querySelector(".footer");

            // Create the text and designer link
            const footerText = document.createElement("b");

            // Create the link for the designer website
            const designerLink = document.createElement("a");
            designerLink.href = data.footer.link;
            designerLink.textContent = data.footer.designer;

            // Add the text and link to the footer
            footerText.innerHTML = `${data.footer.text} `;
            footerText.appendChild(designerLink);
            footerText.innerHTML += ` &copy; ${data.footer.year}`;

            // Append the text content to the footer
            footerContainer.appendChild(footerText);

            // Create validation buttons container
            const validationContainer = document.createElement("div");
            validationContainer.classList.add("validation-buttons");

            // Create HTML Validation button
            const htmlButton = document.createElement("a");
            htmlButton.href = data.footer.validation.html;
            htmlButton.target = "_blank";
            htmlButton.classList.add("validation-button");
            htmlButton.textContent = "HTML";

            // Create CSS Validation button
            const cssButton = document.createElement("a");
            cssButton.href = data.footer.validation.css;
            cssButton.target = "_blank";
            cssButton.classList.add("validation-button");
            cssButton.textContent = "CSS";

            // Create WCAG Validation button
            const wcagButton = document.createElement("a");
            wcagButton.href = data.footer.validation.wcag;
            wcagButton.target = "_blank";
            wcagButton.classList.add("validation-button");
            wcagButton.textContent = "WCAG";

            // Add buttons to the validation container
            validationContainer.appendChild(htmlButton);
            validationContainer.appendChild(cssButton);
            validationContainer.appendChild(wcagButton);

            // Append validation container to the footer
            footerContainer.appendChild(validationContainer);
        })
        .catch((error) => console.error("Error fetching footer data:", error));
});
