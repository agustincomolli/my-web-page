document.addEventListener("DOMContentLoaded", () => {
    const html = document.querySelector("html");
    const themeToggler = document.querySelector("#theme-toggler");

    html.setAttribute("data-bs-theme", "dark");
    themeToggler.addEventListener("click", () => {
        // Alterna entre un tema oscuro y uno claro.
        const theme = html.attributes.getNamedItem("data-bs-theme");
        if (theme && theme.value === "dark") {
            html.setAttribute("data-bs-theme", "light");
            themeToggler.innerHTML = '<i class="bi bi-sun-fill"></i>';
        } else {
            html.setAttribute("data-bs-theme", "dark");
            themeToggler.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        }
    })
})