/* ==========================================================================
   1. DICCIONARIO DE COLORES (NUEVO)
   Aquí definimos qué nombre mostrar para cada código de color.
   Si usas un color nuevo, agrégalo a esta lista.
   ========================================================================== */
const NOMBRES_COLORES = {
    "#000000": "Negro",
    "#FFFFFF": "Blanco",
    "#808080": "Plateado",
    "#C0C0C0": "Plateado",
    "#A9A9A9": "Gris Oscuro",
    "#FF0000": "Rojo",
    "#0000FF": "Azul",
    "#1E90FF": "Azul Claro",
    "#008000": "Verde",
    "#FFFF00": "Amarillo",
    "#FFD700": "Dorado",
    "#FFA500": "Naranja",
    "#C45824": "Terracota",
    "#a608fb": "Morado",
};

/* ==========================================================================
   2. BASE DE DATOS DE PRODUCTOS
   ========================================================================== */
const listaProductos = [
    { 
        id: 1, 
        nombre: "Tornillo con capuchón", 
        descripcion: "Fijación segura con acabado protector resistente.", 
        categoria: ["Tornillos"], 
        img: "img/TornilloConCapuchon.webp",
        colores: ["#000000", "#C0C0C0"] 
    },
    { 
        id: 2, 
        nombre: "Caja para contador de agua",
        descripcion: "Protección duradera para contadores de agua.", 
        categoria: ["Hogar"], 
        img: "img/RegistroAgua.webp",
        colores: ["#000000", "#008000"] 
    },
    { 
        id: 3, 
        nombre: "Topes", 
        descripcion: "Ideales para señalización vial y seguridad.", 
        categoria: ["Variedad"], 
        img: "img/Conos.png",
        colores: ["#FFFF00"]
    },
    { 
        id: 4, 
        nombre: "Capuchones con arandela metálica", 
        descripcion: "Protección práctica para terminales y tornillos.", 
        categoria: ["Tornillos"], 
        img: "img/capuchones.webp",
        colores: ["#FF0000", "#FFFF00", "#008000", "#0000FF"] 
    },
    { 
        id: 5, 
        nombre: "Tornillos con capuchón inoxidable más empaque más tapita", 
        descripcion: "Alta resistencia para múltiples aplicaciones.", 
        categoria: ["Tornillos"], 
        img: "img/tornillos..webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 6, 
        nombre: "Tapas para tornillo", 
        descripcion: "Cubiertas que protegen contra óxido y humedad.", 
        categoria: ["Tornillos"], 
        img: "img/TapasTornillo.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 7, 
        nombre: "Registro para contador de agua", 
        descripcion: "Solución resistente para proteger registros.", 
        categoria: ["Hogar","Variedad"], 
        img: "img/RegistroContadorAgua.webp", 
        colores: ["#FF0000", "#0000FF","#FFFFFF"] 
    },
    { 
        id: 8, 
        nombre: "Resaltes de aluminio", 
        descripcion: "Seguridad vial con estructura reforzada.", 
        categoria: ["Variedad"], 
        img: "img/ResaltesAluminio.webp", 
        colores: ["#808080"] 
    },
    { 
        id: 9, 
        nombre: "Capelotes de cresta baja", 
        descripcion: "Ajuste perfecto para cubiertas de teja.", 
        categoria: ["Variedad"], 
        img: "img/CapelotesCrestaBaja.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 10, 
        nombre: "Caja polo a tierra", 
        descripcion: "Protección segura para conexiones eléctricas.", 
        categoria: ["Hogar"], 
        img: "img/CajaATierra.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 11, 
        nombre: "Tornillo con capuchón fibra de vidrio más empaque de sellado", 
        descripcion: "Incluye arandela de neopreno para mejor sellado.", 
        categoria: ["Tornillos"], 
        img: "img/CapuchonBlando.png", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"]    
    },
    { 
        id: 12, 
        nombre: "Tornillo con neopreno más capuchón económico", 
        descripcion: "Opción práctica y funcional para tejas.", 
        categoria: ["Tornillos"], 
        img: "img/TornilloNeopreno.png", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 13, 
        nombre: "Tornillo con capuchón arandela metálica", 
        descripcion: "Mayor firmeza y protección metálica.", 
        categoria: ["Variedad"], 
        img: "img/CapuchonArandela.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 14, 
        nombre: "Tornillo con capuchón arandela nylon", 
        descripcion: "Ligero y resistente a la corrosión.", 
        categoria: ["Variedad"], 
        img: "img/CapuchonNylon.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 15, 
        nombre: "Capuchón con arandela metálica tradicional", 
        descripcion: "Distribuye presión y mejora fijación.", 
        categoria: ["Variedad"], 
        img: "img/ArandelaMetalica.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 16, 
        nombre: "Capuchón PVC más arandela en nylon", 
        descripcion: "Aislante y resistente al desgaste.", 
        categoria: ["Variedad"], 
        img: "img/ArandelaNylon.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 17, 
        nombre: "Capelote para teja colonial", 
        descripcion: "Asegura y protege cubiertas de teja.", 
        categoria: ["Variedad"], 
        img: "img/CapeloteTeja.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 18, 
        nombre: "Capuchón económico", 
        descripcion: "Protección simple y funcional.", 
        categoria: ["Variedad"], 
        img: "img/CapuchonesEconomicos.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 19,     
        nombre: "Capelotes cresta alta", 
        descripcion: "Diseño ideal para tejas de cresta alta.", 
        categoria: ["Variedad"], 
        img: "img/CapeloteCrestaAlta.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 20, 
        nombre: "Amarres para teja", 
        descripcion: "Fijación segura para cubiertas y techos.", 
        categoria: ["Hogar"], 
        img: "img/AmarreTeja.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 21, 
        nombre: "Contador para agua", 
        descripcion: "Resistente, ideal para instalaciones residenciales.", 
        categoria: ["Hogar","Variedad"], 
        img: "img/contadorAgua.png", 
        colores: ["#0000FF"] 
    },
    { 
        id: 22, 
        nombre: "Capuchón de tejas", 
        descripcion: "Protección y ajuste para cubiertas.", 
        categoria: ["Hogar","Variedad"], 
        img: "img/CapuchonTeja.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
    { 
        id: 22, 
        nombre: 'Tornillo calibre 12 x 1½ x 2" x 2½ x 3"', 
        descripcion: "Disponible en varias medidas.", 
        categoria: ["Hogar","Variedad"], 
        img: "img/TornillosCompletos.webp", 
        colores: ["#0000FF","#FF0000","#008000","#000000","#FFA500"] 
    },
];



/* ==========================================================================
   3. SELECCIÓN DE ELEMENTOS DEL DOM
   ========================================================================== */
const contenedorCatálogo = document.getElementById('productGridJS');
const buscador = document.getElementById('searchInput');
const botonLupa = document.querySelector('.nav-search button');
const chipsCategorias = document.querySelectorAll('.chip');
const seccionCatalogo = document.getElementById('catalogo-completo');

/* ==========================================================================
   4. FUNCIÓN AUXILIAR: GENERAR HTML DE COLORES (CON TOOLTIP)
   Esta es la parte mágica que pone el nombre al pasar el mouse.
   ========================================================================== */
function generarHTMLColores(arrayColores) {
    if (!arrayColores || arrayColores.length === 0) return '';
    
    const circulos = arrayColores.map(color => {
        // Buscamos el nombre en nuestro diccionario. 
        // Si no existe, usa el código hex (ej: #123456) como respaldo.
        const nombreColor = NOMBRES_COLORES[color] || color;
        
        // El atributo 'title' es el que muestra el mensajito flotante nativo
        return `<span class="color-circle" style="background-color: ${color};" title="${nombreColor}"></span>`;
    }).join('');

    return `<div class="color-palette">${circulos}</div>`;
}

/* ==========================================================================
   5. RENDERIZADO DEL CATÁLOGO (DINÁMICO)
   ========================================================================== */
function renderizarCatalogo(productos) {
    contenedorCatálogo.innerHTML = "";
    
    if (productos.length === 0) {
        contenedorCatálogo.innerHTML = `<p style="grid-column: 1/-1; color: #777; text-align: center; padding: 20px;">No se encontraron productos.</p>`;
        return;
    }
    
    productos.forEach(prod => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card-mini';
        
        // Usamos la función auxiliar
        const htmlColores = generarHTMLColores(prod.colores);

        tarjeta.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}" loading="lazy">
            <h4>${prod.nombre}</h4>
            
            ${htmlColores}

            <p class="descripcion-mini">${prod.descripcion}</p>
            
            <a href="https://wa.me/573142184201?text=Hola!%20Me%20interesa:%20${encodeURIComponent(prod.nombre)}" 
               class="btn-mini-wa" target="_blank">
               Cotizar Ahora
            </a>
        `;
        contenedorCatálogo.appendChild(tarjeta);
    });
}

/* ==========================================================================
   6. INYECCIÓN DE COLORES EN HTML ESTÁTICO
   Busca los divs con data-colores="..." y les pone los círculos.
   ========================================================================== */
function inyectarColoresEstaticos() {
    const cardsEstaticas = document.querySelectorAll('.product-card[data-colores]');

    cardsEstaticas.forEach(card => {
        const data = card.getAttribute('data-colores');
        // Convierte el string " #FFF, #000 " en array ["#FFF", "#000"]
        const arrayColores = data.split(',').map(c => c.trim());

        const htmlColores = generarHTMLColores(arrayColores);

        // Inserta los colores justo después del título (h3)
        const infoDiv = card.querySelector('.product-info');
        const titulo = infoDiv.querySelector('h3');
        
        if(titulo && htmlColores !== '') {
            const divTemporal = document.createElement('div');
            divTemporal.innerHTML = htmlColores;
            titulo.insertAdjacentElement('afterend', divTemporal.firstChild);
        }
    });
}

/* ==========================================================================
   7. LÓGICA DE BÚSQUEDA Y FILTROS
   ========================================================================== */
function ejecutarBusqueda() {
    const textoBusqueda = buscador.value.toLowerCase().trim();
    
    const productosFiltrados = listaProductos.filter(p => 
        p.nombre.toLowerCase().includes(textoBusqueda) || 
        p.categoria.some(cat => 
            cat.toLowerCase().includes(textoBusqueda)
        )
    );
    
    renderizarCatalogo(productosFiltrados);
    scrollSuaveA(seccionCatalogo);
}


// Función pequeña para hacer el scroll suave y ajustado
function scrollSuaveA(elemento) {
    const offset = 110; 
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = elemento.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Eventos del Buscador
buscador.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') ejecutarBusqueda();
});

botonLupa.addEventListener('click', (e) => {
    e.preventDefault();
    ejecutarBusqueda();
});

// Eventos de Categorías (Chips)
chipsCategorias.forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelector('.chip.active').classList.remove('active');
        chip.classList.add('active');

        const categoriaSeleccionada = chip.getAttribute('data-category');
        const filtrados = categoriaSeleccionada === "Todos" 
            ? listaProductos 
            : listaProductos.filter(p => 
                p.categoria.includes(categoriaSeleccionada)
            );
        
        renderizarCatalogo(filtrados);
        scrollSuaveA(seccionCatalogo);
    });
});

/* ==========================================================================
   8. INICIALIZACIÓN
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo(listaProductos);
    inyectarColoresEstaticos();
});

/* ==========================================================================
   9. MENÚ HAMBURGUESA
   ========================================================================== */
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.getElementById('nav-links');
const enlacesMenu = navLinks.querySelectorAll('a');

// 1. Abrir menú al tocar la hamburguesa
hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.add('active');
});

// 2. Cerrar menú al tocar la 'X'
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// 3. Cerrar menú automáticamente cuando se hace clic en un enlace (Inicio, Catálogo, etc.)
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});