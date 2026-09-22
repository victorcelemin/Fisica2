const questions = [
    {
        q: "¿Quién formuló la Ley de Coulomb y mediante qué experimento se comprobó?",
        a: "Fue formulada por el físico e ingeniero francés Charles-Augustin de Coulomb en 1785. La comprobó experimentalmente utilizando una <strong>balanza de torsión</strong>, un dispositivo de gran sensibilidad que medía la torsión de un hilo suspendido producida por la fuerza de repulsión o atracción entre esferas metálicas cargadas."
    },
    {
        q: "¿Qué es una <strong>carga puntual</strong> y por qué es necesaria para aplicar la fórmula?",
        a: "Una carga puntual es un modelo físico que asume que toda la carga eléctrica de un cuerpo está concentrada en un único punto geométrico sin dimensiones apreciables. Es necesaria porque la fórmula estándar asume que la distancia entre los centros de carga está perfectamente definida."
    },
    {
        q: "¿Qué representa la constante electrostática (<em>k</em>) y cuál es su valor en el vacío?",
        a: "Representa la constante de proporcionalidad que relaciona el producto de las cargas y el cuadrado de la distancia con la magnitud de la fuerza. En el vacío, su valor en el SI es <strong>k = 8.99 &times; 10<sup>9</sup> N&middot;m<sup>2</sup>/C<sup>2</sup></strong>."
    },
    {
        q: "¿Qué es la permitividad del vacío (<em>&epsilon;<sub>0</sub></em>) y cómo se relaciona con <em>k</em>?",
        a: "Es una constante física fundamental que cuantifica la capacidad del espacio vacío para permitir el establecimiento de un campo eléctrico. Se relaciona mediante <strong>k = 1 / (4&pi;&epsilon;<sub>0</sub>)</strong>. Su valor es aprox <strong>8.854 &times; 10<sup>-12</sup> C<sup>2</sup>/(N&middot;m<sup>2</sup>)</strong>."
    },
    {
        q: "¿Por qué la Ley de Coulomb se clasifica como una <em>'ley del inverso del cuadrado'</em>?",
        a: "Porque la intensidad de la fuerza electrostática disminuye de forma cuadrática respecto a la distancia de separación <strong>(1 / r<sup>2</sup>)</strong>. Si la distancia se triplica, la fuerza se reduce a la novena parte (1/9)."
    },
    {
        q: "¿Qué ocurre con la fuerza electrostática si ambas cargas duplican su valor a la vez?",
        a: "La fuerza se vuelve <strong>4 veces mayor</strong>. Dado que la fuerza depende directamente del producto de las magnitudes de las cargas, al duplicar ambas (2q<sub>1</sub> &times; 2q<sub>2</sub>), el producto se cuadruplica."
    },
    {
        q: "¿Cómo se define la <strong>forma vectorial</strong> de la Ley de Coulomb?",
        a: "<strong>F<sub>12</sub> = k &middot; [(q<sub>1</sub> &middot; q<sub>2</sub>) / r<sup>2</sup>] &middot; u<sub>12</sub></strong>, donde <em>u<sub>12</sub></em> es un vector unitario en la línea recta que une ambas cargas. Signo positivo indica repulsión y negativo atracción."
    },
    {
        q: "¿Cumple la fuerza eléctrica de Coulomb con la <strong>Tercera Ley de Newton</strong>?",
        a: "Sí. La fuerza que la carga 1 ejerce sobre la 2 es igual en magnitud y dirección, pero opuesta, a la que la 2 ejerce sobre la 1 <strong>(F<sub>12</sub> = -F<sub>21</sub>)</strong>. Forman un par de acción y reacción."
    },
    {
        q: "¿Qué es la permitividad relativa o constante dieléctrica (<em>&epsilon;<sub>r</sub></em>) de un medio?",
        a: "Es un factor adimensional que indica cuántas veces es más permisivo un material aislante para el campo eléctrico en comparación con el vacío <strong>(&epsilon;<sub>r</sub> = &epsilon; / &epsilon;<sub>0</sub>)</strong>."
    },
    {
        q: "¿Por qué dos cargas experimentan una fuerza mucho menor sumergidas en <strong>agua</strong> que en el vacío?",
        a: "Porque el agua es altamente polar. Sus moléculas se orientan alrededor de cada carga (solvatación), creando un campo opuesto que apantalla las cargas, reduciendo la fuerza neta a una <strong>octogésima parte (1/80)</strong>."
    },
    {
        q: "¿Cuál es la diferencia técnica entre permitividad <strong>absoluta</strong> y permitividad <strong>relativa</strong>?",
        a: "La permitividad absoluta tiene unidades (C<sup>2</sup>/N&middot;m<sup>2</sup>) y describe el medio específico. La relativa es una relación comparativa pura (sin unidades) tomando el vacío como base 1."
    },
    {
        q: "¿Qué sucede si se coloca una lámina conductora conectada a tierra entre las cargas?",
        a: "El conductor reorganiza instantáneamente sus electrones, anulando las líneas de campo eléctrico en su interior (<strong>jaula de Faraday</strong>). Esto interrumpe la interacción directa entre las cargas."
    },
    {
        q: "¿Qué establece el <strong>Principio de Superposición</strong> en electrostática?",
        a: "Establece que la fuerza total sobre una carga en un sistema es igual a la <strong>suma vectorial</strong> de las fuerzas individuales que cada una de las demás cargas ejerce sobre ella de forma independiente."
    },
    {
        q: "¿Cómo se determina el punto de <strong>equilibrio electrostático</strong> entre dos cargas fijas?",
        a: "Es el lugar donde la suma vectorial de las fuerzas sobre una tercera carga es cero. Con igual signo, está entre ellas; con signos opuestos, sobre la línea exterior más cercana a la menor."
    },
    {
        q: "¿Qué postula el <strong>Teorema de Earnshaw</strong> en relación con el equilibrio de cargas?",
        a: "Demuestra que es <strong>imposible</strong> mantener un conjunto de cargas puntuales estáticas en equilibrio estable únicamente con fuerzas electrostáticas (inversas al cuadrado). Cualquier perturbación lo desestabilizará."
    },
    {
        q: "¿Cómo se calcula la <strong>fuerza neta</strong> cuando las cargas están distribuidas en un plano bidimensional?",
        a: "Se calculan las magnitudes por pares, se descomponen en <strong>componentes cartesianas (X e Y)</strong>, se suman algebraicamente por eje, y se halla la resultante aplicando el Teorema de Pitágoras."
    },
    {
        q: "¿Por qué la Ley de Coulomb no describe adecuadamente las fuerzas entre cargas en <strong>movimiento rápido</strong>?",
        a: "Porque es puramente electrostática. En movimiento rápido generan campos magnéticos y propagación retardada, lo que exige las ecuaciones de Maxwell y la Fuerza de Lorentz."
    },
    {
        q: "¿Si los protones se repelen, por qué no se desintegra el <strong>núcleo atómico</strong>?",
        a: "A distancias subatómicas (10<sup>-15</sup> m) actúa la <strong>Fuerza Nuclear Fuerte</strong>, que es unas 100 veces más intensa que la repulsión de Coulomb, superándola y manteniendo el núcleo cohesionado."
    },
    {
        q: "¿Por qué no sentimos fuerzas electrostáticas intensas con los <strong>objetos cotidianos</strong>?",
        a: "Porque la materia macroscópica es <strong>eléctricamente neutra</strong>, conteniendo casi el mismo número de electrones que de protones, por lo que las cargas netas son cero a distancias perceptibles."
    },
    {
        q: "¿Qué <strong>aplicaciones tecnológicas</strong> cotidianas e industriales se basan en la fuerza de Coulomb?",
        a: "Pintura electrostática en polvo, impresoras láser/fotocopiadoras, y precipitadores electrostáticos (filtros industriales para humo y polvo)."
    }
];

let players = [];
let colors = [];
const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spinBtn');
const nameInput = document.getElementById('nameInput');
const addNameBtn = document.getElementById('addNameBtn');
const nameList = document.getElementById('nameList');

// Modal Elements
const modal = document.getElementById('questionModal');
const winnerNameEl = document.getElementById('winnerName');
const questionTextEl = document.getElementById('questionText');
const answerContentEl = document.getElementById('answerContent');
const answerTextEl = document.getElementById('answerText');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

let currentRotation = 0;
let isSpinning = false;

// Generar colores temáticos (Rojos UT, Negros, Grises, Azules)
function generateColors(count) {
    const palette = [
        '#c8102e', '#1e293b', '#9e0b22', '#3b82f6', 
        '#ef4444', '#0f172a', '#dc2626', '#2563eb'
    ];
    colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(palette[i % palette.length]);
    }
}

// Background Particles (Charges)
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for(let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        // Randomly assign positive (red) or negative (blue)
        if (Math.random() > 0.5) {
            particle.classList.add('positive');
        } else {
            particle.classList.add('negative');
        }
        
        const size = Math.random() * 40 + 20;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        particlesContainer.appendChild(particle);
    }
}

function updateUI() {
    nameList.innerHTML = '';
    players.forEach((player, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = player;
        span.style.fontWeight = "600";
        
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '×';
        deleteBtn.onclick = () => removePlayer(index);
        
        li.appendChild(span);
        li.appendChild(deleteBtn);
        nameList.appendChild(li);
    });

    spinBtn.disabled = players.length < 2 || isSpinning;
    generateColors(players.length);
    drawRoulette();
}

function addPlayer() {
    const name = nameInput.value.trim();
    if (name && !players.includes(name)) {
        players.push(name);
        nameInput.value = '';
        updateUI();
    }
}

function removePlayer(index) {
    if (isSpinning) return;
    players.splice(index, 1);
    updateUI();
}

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addPlayer();
});
addNameBtn.addEventListener('click', addPlayer);

function drawRoulette() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (players.length === 0) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#e2e8f0';
        ctx.fill();
        
        ctx.fillStyle = '#64748b';
        ctx.font = '20px Poppins';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Añade estudiantes', centerX, centerY);
        return;
    }

    const arc = (2 * Math.PI) / players.length;

    players.forEach((player, i) => {
        const angle = i * arc;
        
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, angle, angle + arc);
        ctx.lineTo(centerX, centerY);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle + arc / 2);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px Poppins';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 4;
        
        let displayName = player;
        if(displayName.length > 14) displayName = displayName.substring(0, 12) + '...';
        
        ctx.fillText(displayName, radius - 25, 0);
        ctx.restore();
    });
    
    // Draw center circle (representing a nucleus)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.15, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#c8102e';
    ctx.lineWidth = 5;
    ctx.stroke();
    
    // Draw a plus in the center
    ctx.fillStyle = '#c8102e';
    ctx.font = 'bold 30px Poppins';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('+', centerX, centerY + 2);
}

function spin() {
    if (players.length < 2 || isSpinning) return;
    
    isSpinning = true;
    spinBtn.disabled = true;

    const spins = Math.floor(Math.random() * 5) + 5;
    const degrees = Math.floor(Math.random() * 360);
    const totalRotation = (spins * 360) + degrees;
    
    currentRotation += totalRotation;
    canvas.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        isSpinning = false;
        spinBtn.disabled = false;
        
        const normalizedRotation = currentRotation % 360;
        const sliceAngle = 360 / players.length;
        
        const topAngle = (360 - normalizedRotation + 270) % 360;
        const winnerIndex = Math.floor(topAngle / sliceAngle);
        
        const winner = players[winnerIndex];
        showQuestion(winner);
        
    }, 5000); 
}

spinBtn.addEventListener('click', spin);

function showQuestion(winner) {
    const qIndex = Math.floor(Math.random() * questions.length);
    const question = questions[qIndex];
    
    winnerNameEl.textContent = `¡El turno es de ${winner}!`;
    
    // Usar innerHTML para que los subíndices (epsilon_0) y superíndices funcionen correctamente
    questionTextEl.innerHTML = question.q;
    answerTextEl.innerHTML = question.a;
    
    answerContentEl.classList.add('hidden');
    showAnswerBtn.classList.remove('hidden');
    
    modal.classList.add('active');
}

showAnswerBtn.addEventListener('click', () => {
    answerContentEl.classList.remove('hidden');
    showAnswerBtn.classList.add('hidden');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Init
createParticles();
drawRoulette();
