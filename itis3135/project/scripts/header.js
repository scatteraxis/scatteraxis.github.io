document.addEventListener("DOMContentLoaded", function() {
    // Get the JSON file
    fetch("./components/header.json")
        .then((response) => response.json())
        .then((data) => {
            // Find header container
            const headerContainer = document.querySelector(".header-container");

            // Create the header title
            const titleElement = document.createElement("h1");
            const titleText = document.createElement("em");
            titleText.innerHTML = `${data.header.title}`;
            titleElement.appendChild(titleText);
            headerContainer.appendChild(titleElement);

            // Create nav-bar for the links
            const navBar = document.createElement("div");
            navBar.classList.add("nav-bar");

            // Add each link to the nav bar from the JSON
            data.header.links.forEach((link) => {
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = link.name;
                menuItem.href = link.url;
                navBar.appendChild(menuItem);
            });

            // Add nav bar to the header
            headerContainer.appendChild(navBar);
        })
        .catch((error) => console.error("Error fetching header data:", error));
});
