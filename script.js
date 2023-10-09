document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const submitButton = document.getElementById("submitButton");
    const output = document.getElementById("output");

    submitButton.addEventListener("click", function() {
        const text = textInput.value.trim();

        if (text !== "") {
            const p = document.createElement("p");
            p.textContent = text;
            output.appendChild(p);
            textInput.value = ""; // Clear the textarea
        }
    });
});