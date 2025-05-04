document.addEventListener("DOMContentLoaded", function () {
    // Menú de navegación con desplazamiento suave
    document.querySelectorAll("#menu-lateral a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Efecto de aparición en el contenido
    document.querySelectorAll("section").forEach(sec => {
        sec.style.opacity = "0";
        setTimeout(() => {
            sec.style.opacity = "1";
        }, 500);
    });
});
