// Arreglo con la información de los Modos de Juego y sus links de imágenes
const gameModes = [
    {
        title: "Campaña (Cooperativo)",
        text: "Hasta 4 jugadores colaboran para avanzar de un refugio a otro a través de distintos mapas, superando hordas y culminando cada historia con un rescate final.",
        // CAMBIA ESTE LINK POR EL DE TU FOTO DE CAMPAÑA
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_xL1QTSU4Hc7BzR9Ba1QlRDE6zXLvFsHIk5MdAq9hI4mERs7k7FjDSg&s=10"
    },
    {
        title: "Enfrentamiento (Versus)",
        text: "Partidas competitivas de hasta 8 jugadores divididos en dos equipos (Supervivientes contra Infectados especiales). Los infectados son controlados por humanos para intentar frenar el avance del rival.",
        // CAMBIA ESTE LINK POR EL DE TU FOTO DE VERSUS
        image: "https://static.wikia.nocookie.net/left4dead/images/3/39/Versus_icon.png/revision/latest/scale-to-width-down/250?cb=20091029233941"
    },
    {
        title: "Supervivencia (Survival)",
        text: "Modos en mapas cerrados y específicos donde el objetivo es resistir el mayor tiempo posible frente a oleadas interminables de infectados.",
        // CAMBIA ESTE LINK POR EL DE TU FOTO DE SURVIVAL
        image: "https://static.wikia.nocookie.net/left4dead/images/4/4c/Survival_icon.png/revision/latest?cb=20091029233942"
    },
    {
        title: "Búsqueda (Scavenge)",
        text: "Un modo competitivo por rondas donde los supervivientes deben buscar latas de gasolina y llevarlas a un generador antes de que se acabe el tiempo, mientras los infectados (controlados por jugadores) intentan impedirlo.",
        // CAMBIA ESTE LINK POR EL DE TU FOTO DE SCAVENGE
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92smGhD5TQMHONHfsWwUjaGj3DC2IeouIEBFCId5eDA&s=10"
    },
    {
        title: "Mutaciones (Mutations)",
        text: "Variaciones semanales o personalizadas del juego con reglas alocadas (por ejemplo, Tank Run, donde múltiples Tanks te persiguen toda la campaña, o modos solo con armas cuerpo a cuerpo).",
        // CAMBIA ESTE LINK POR EL DE TU FOTO DE MUTATIONS
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlr2sV2ps4CI947ikr3E1x3iH9PAjB3f7MslIXpHqzag&s=10"
    }
];

let currentIndex = 0;

// Referencias del DOM
const modeTitle = document.getElementById('modeTitle');
const modeText = document.getElementById('modeText');
const modeImage = document.getElementById('modeImage');
const prevBtn = document.getElementById('prevModeBtn');
const nextBtn = document.getElementById('nextModeBtn');
const carouselDots = document.getElementById('carouselDots');

// Crear los puntos indicadores
function createDots() {
    carouselDots.innerHTML = '';
    gameModes.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot-item');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => updateMode(index));
        carouselDots.appendChild(dot);
    });
}

// Actualizar modo visible
function updateMode(index) {
    currentIndex = index;
    const mode = gameModes[currentIndex];

    modeImage.style.opacity = '0';

    setTimeout(() => {
        modeTitle.textContent = mode.title;
        modeText.textContent = mode.text;
        modeImage.src = mode.image;
        modeImage.style.opacity = '1';
    }, 150);

    const dots = document.querySelectorAll('.dot-item');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Botones de control del carrusel
prevBtn.addEventListener('click', () => {
    let index = currentIndex - 1;
    if (index < 0) index = gameModes.length - 1;
    updateMode(index);
});

nextBtn.addEventListener('click', () => {
    let index = currentIndex + 1;
    if (index >= gameModes.length) index = 0;
    updateMode(index);
});

// Resaltar botones de menú de supervivientes
const filterBtns = document.querySelectorAll('.btn-filter');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Inicializar la interfaz al cargar
createDots();
updateMode(0);