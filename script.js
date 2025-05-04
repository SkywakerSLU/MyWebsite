document.addEventListener("DOMContentLoaded", function () {
    // Menú con desplazamiento suave
    document.querySelectorAll("#menu-lateral a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Efecto de aparición gradual en las secciones
    document.querySelectorAll(".contenido").forEach(sec => {
        sec.style.opacity = "0";
        setTimeout(() => {
            sec.style.opacity = "1";
        }, 600);
    });

    // Animación del menú al pasar el mouse
    const menuItems = document.querySelectorAll("#menu-lateral ul li a");
    menuItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
        });
        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });
});
