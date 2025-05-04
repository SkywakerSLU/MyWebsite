document.addEventListener("DOMContentLoaded", function () {
    // Desplazamiento suave del menú
    document.querySelectorAll("#menu-lateral a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Efecto de aparición en secciones
    document.querySelectorAll(".contenido").forEach(sec => {
        sec.style.opacity = "0";
        setTimeout(() => {
            sec.style.opacity = "1";
        }, 600);
    });

    // Animación en el menú
    const menuItems = document.querySelectorAll("#menu-lateral ul li a");
    menuItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
        });
        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Efecto de zoom al pasar el mouse sobre imágenes
    const imagenes = document.querySelectorAll(".imagen-box img");
    imagenes.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});
