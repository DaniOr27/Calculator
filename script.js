const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Funcionalidad para los botones de la calculadora
buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";  // Limpiamos el display
        } else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);  // Eliminamos el último carácter
        } else if (display.innerText !== "" && item.id == "equal") {
            try {
                display.innerText = eval(display.innerText);  // Calculamos la expresión
            } catch {
                display.innerText = "Error";  // Si hay un error de evaluación, mostramos "Error"
                setTimeout(() => (display.innerText = ""), 2000);  // Limpiamos el display tras 2 segundos
            }
        } else if (display.innerText === "" && item.id == "equal") {
            display.innerText = "Null";  // Si el display está vacío y se presiona igual
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.innerText;  // Añadimos el texto del botón al display
        }
    };
});

// Funcionalidad para alternar el tema oscuro
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}
