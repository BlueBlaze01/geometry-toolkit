const shapeDropdown = document.getElementById("shape");
const calculationDropdown = document.getElementById("calculation");
const inputsContainer = document.getElementById("inputs");
const calculateButton = document.getElementById("calculateBtn");
const result = document.getElementById("result");

function updateCalculations() {

    const selectedShape =
        shapeDropdown.value;

    calculationDropdown.innerHTML = "";

    for (
        let calculation
        in geometryData[selectedShape]
    ) {

        const option =
            document.createElement("option");

        option.value =
            calculation;

        option.textContent =
            calculation.replace(
                /([A-Z])/g,
                " $1"
            ).trim();

        calculationDropdown.appendChild(option);
    }

    updateInputs();
}

function updateInputs() {

    const selectedShape =
        shapeDropdown.value;

    const selectedCalculation =
        calculationDropdown.value;

    inputsContainer.innerHTML = "";

    const fields =
        geometryData[selectedShape]
        [selectedCalculation]
        .inputs;

    for (let field of fields) {

        const label =
            document.createElement("label");

        label.textContent =
            field + ": ";

        const input =
            document.createElement("input");

        input.type = "number";

        inputsContainer.appendChild(label);
        inputsContainer.appendChild(input);

        inputsContainer.appendChild(
            document.createElement("br")
        );

        inputsContainer.appendChild(
            document.createElement("br")
        );
    }
}

function showResult(formula, valuesUsed, substitution, answer
    ) {

    result.innerHTML = `
        <strong>Formula</strong>
        <br>
        ${formula}

        <br><br>

        <strong>Values Used</strong>
        <br>
        ${valuesUsed}

        <br><br>

        <strong>Substitution</strong>
        <br>
        ${substitution}

        <br><br>

        <strong>Answer</strong>
        <br>
        ${answer}
      `;

}

function calculate() {

    const selectedShape =
        shapeDropdown.value;

    const selectedCalculation =
        calculationDropdown.value;

    const calculationData =
        geometryData[selectedShape]
        [selectedCalculation];

    const inputs =
        inputsContainer.querySelectorAll("input");

    const values =
        Array.from(inputs).map(
            input => Number(input.value)
        );

    if (
        values.some(
            value =>
                isNaN(value) ||
                value <= 0
        )
    ) {

        result.innerHTML =
            "Please enter valid positive numbers.";

        return;
    }

    const resultData =
        calculationData.calculate(
            ...values
        );

        const answer =
            Number(resultData.answer);

        if (
            Number.isNaN(answer) ||
            answer < 0
        ) {

            result.innerHTML =
                "<strong>Error:</strong><br>Calculation could not be completed.";

            return;
        }

    if (
        isNaN(resultData.answer) ||
        !isFinite(resultData.answer)
    ) {

        result.innerHTML =
            "The values entered do not form a valid shape.";

        return;

    }

    showResult(
        calculationData.formula,
        resultData.valuesUsed,
        resultData.substitution,
        resultData.answer
    );
}
    
shapeDropdown.addEventListener("change", updateCalculations);
shapeDropdown.addEventListener("change", updateInputs);

calculationDropdown.addEventListener("change", updateInputs);

calculateButton.addEventListener(
    "click",
    calculate
);

const themeDropdown =
    document.getElementById("theme");

const savedTheme =
    localStorage.getItem("theme")
    || "soft-dark";

document.body.className =
    savedTheme;

themeDropdown.value =
    savedTheme;

themeDropdown.addEventListener(
    "change",
    () => {

        document.body.className =
            themeDropdown.value;

        localStorage.setItem(
            "theme",
            themeDropdown.value
        );
    }
);

updateCalculations();
updateInputs();

