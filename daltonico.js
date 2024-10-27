document.addEventListener("DOMContentLoaded", function() {
    const colorSchemeSelector = document.getElementById("color-scheme");

    colorSchemeSelector.addEventListener("change", function() {
        const selectedScheme = colorSchemeSelector.value;
        
        // Remove classes de cor anteriores
        document.body.classList.remove("default-color", "color-blind-color");
        
        // Adiciona a classe correspondente ao esquema de cor selecionado
        if (selectedScheme === "color-blind") {
            document.body.classList.add("color-blind-color");
        } else {
            document.body.classList.add("default-color");
        }
    });
});