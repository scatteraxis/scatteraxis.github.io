document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("current-time").innerHTML = "Date : " + Date();
    const welcomeSubmit = document.getElementById("welcome-submit");
    const welcomePresent = document.getElementById("welcome-present");
    const areaUsage = document.getElementById("area-usage");
    const taxTotal = document.getElementById("tax-total");
    const randomPartsOutput = document.getElementById("random-parts-output");
    const numberSubmit = document.getElementById("number-submit");
    const areaSubmit = document.getElementById("area-submit");
    const taxableSubmit = document.getElementById("taxable-submit");
    const randomPartsButton = document.getElementById("random-parts");

    welcomeSubmit.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const mood = document.getElementById("mood").value;
        welcomePresent.innerHTML = `The Arcade Snake Corp welcomes you, ${name}! We're glad you are doing ${mood}!`;
    });

    numberSubmit.addEventListener("click", () => {
        const inputField = document.getElementById("number");
        const number = Math.round(Math.abs(parseFloat(inputField.value)));
        const polygonStorage =
        {
            0: "not a polygon",
            1: "monogon",
            2: "bigon",
            3: "triangle",
            4: "quadrilateral",
            5: "pentagon",
            6: "hexagon",
            7: "heptagon",
            8: "octagon",
            9: "nonagon",
            10: "decagon"
        };

        if (polygonStorage[number]) {
            alert(polygonStorage[number]);
        } else {
            alert("Not a valid number!");
        }
    });

    areaSubmit.addEventListener("click", () => {
        const inputField = document.getElementById("area");
        const cleanedArea = (Math.floor(parseFloat(inputField.value)));

        areaUsage.innerHTML = `Your space can fit ${Math.floor(cleanedArea / 8.06)} arcade cabinet(s)`;
    });

    taxableSubmit.addEventListener("click", () => {
        const inputField = document.getElementById("taxable");
        const cleanedTaxable = parseFloat(inputField.value).toFixed(2);

        taxTotal.innerHTML = `The tax on top of your total will be ${(cleanedTaxable * 0.0725).toFixed(2)}.`;
    });

    randomPartsButton.addEventListener("click", () => {
        const partsStorage =
        {
            0: "STG",
            1: "Python",
            2: "Corn",
            3: "Boa",
            4: "Viper",
            5: "Garter",
            6: "Mamba",
        };

        randomPartsOutput.innerHTML = `You could try ordering ${partsStorage[Math.round(Math.random() * 6)]} style sticks and ${partsStorage[Math.round(Math.random() * 6)]} style buttons for your arcade cabinets.`;
    });

});