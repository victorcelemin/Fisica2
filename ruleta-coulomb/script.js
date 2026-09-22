const questions = [
    {
        q: "¿Quién formuló la Ley de Coulomb y mediante qué experimento se comprobó?",
        a: "Fue formulada por el físico e ingeniero francés Charles-Augustin de Coulomb en 1785. La comprobó experimentalmente utilizando una balanza de torsión, un dispositivo de gran sensibilidad que medía la torsión de un hilo suspendido producida por la fuerza de repulsión o atracción entre esferas metálicas cargadas."
    },
    {
        q: "¿Qué es una carga puntual y por qué es necesaria para aplicar la fórmula?",
        a: "Una carga puntual es un modelo físico que asume que toda la carga eléctrica de un cuerpo está concentrada en un único punto geométrico sin dimensiones apreciables. Es necesaria porque la fórmula estándar asume que la distancia entre los centros de carga está perfectamente definida y no se ve alterada por la redistribución geométrica de las cargas en el volumen del cuerpo."
    },
    {
        q: "¿Qué representa la constante electrostática (k) y cuál es su valor en el vacío?",
        a: "Representa la constante de proporcionalidad que relaciona el producto de las cargas y el cuadrado de la distancia con la magnitud de la fuerza en un medio determinado. En el vacío, su valor en el Sistema Internacional es k = 8.99 x 10^9 N·m^2/C^2."
    },
    {
        q: "¿Qué es la permitividad del vacío (epsilon_0) y cómo se relaciona con k?",
        a: "Es una constante física fundamental que cuantifica la capacidad del espacio vacío para permitir el establecimiento de un campo eléctrico. Se relaciona mediante k = 1 / (4 * pi * epsilon_0). Su valor es aprox 8.854 x 10^-12 C^2 / (N·m^2)."
    },
    {
        q: "¿Por qué la Ley de Coulomb se clasifica como una 'ley del inverso del cuadrado'?",
        a: "Porque la intensidad de la fuerza electrostática disminuye de forma cuadrática respecto a la distancia de separación (1 / r^2). Si la distancia se triplica, la fuerza se reduce a la novena parte (1/9)."
    },
    {
        q: "¿Qué ocurre con la fuerza electrostática si ambas cargas duplican su valor a la vez?",
        a: "La fuerza se vuelve 4 veces mayor. Dado que la fuerza depende directamente del producto de las magnitudes de las cargas, al duplicar ambas (2q1 * 2q2), el producto se cuadruplica."
    },
    {
        q: "¿Cómo se define la forma vectorial de la Ley de Coulomb?",
        a: "F_12 = k * [(q1 * q2) / r^2] * u_12, donde u_12 es un vector unitario en la línea recta que une ambas cargas. Signo positivo indica repulsión y negativo atracción."
    },
    {
        q: "¿Cumple la fuerza eléctrica de Coulomb con la Tercera Ley de Newton?",
        a: "Sí. La fuerza que la carga 1 ejerce sobre la 2 es igual en magnitud y dirección, pero opuesta, a la que la 2 ejerce sobre la 1 (F_12 = -F_21). Forman un par de acción y reacción."
    },
    {
        q: "¿Qué es la permitividad relativa o constante dieléctrica (epsilon_r) de un medio?",
        a: "Es un factor adimensional que indica cuántas veces es más permisivo un material aislante para el campo eléctrico en comparación con el vacío (epsilon_r = epsilon / epsilon_0)."
    },
    {
        q: "¿Por qué dos cargas experimentan una fuerza mucho menor sumergidas en agua que en el vacío?",
        a: "Porque el agua es altamente polar. Sus moléculas se orientan alrededor de cada carga (solvatación), creando un campo opuesto que apantalla las cargas, reduciendo la fuerza neta a una octogésima parte."
    },
    {
        q: "¿Cuál es la diferencia técnica entre permitividad absoluta y permitividad relativa?",
        a: "La permitividad absoluta tiene unidades (C^2 / N·m^2) y describe el medio específico. La relativa es una relación comparativa pura (sin unidades) tomando el vacío como base 1."
    },
    {
        q: "¿Qué sucede si se coloca una lámina conductora conectada a tierra entre las cargas?",
        a: "El conductor reorganiza instantáneamente sus electrones, anulando las líneas de campo eléctrico en su interior (jaula de Faraday). Esto interrumpe la interacción directa entre las cargas."
    },
    {
        q: "¿Qué establece el Principio de Superposición en electrostática?",
        a: "Establece que la fuerza total sobre una carga en un sistema es igual a la suma vectorial de las fuerzas individuales que cada una de las demás cargas ejerce sobre ella de forma independiente."
    },
    {
        q: "¿Cómo se determina el punto de equilibrio electrostático entre dos cargas fijas?",
        a: "Es el lugar donde la suma vectorial de las fuerzas sobre una tercera carga es cero. Con igual signo, está entre ellas; con signos opuestos, sobre la línea exterior más cercana a la menor."
    },
    {
        q: "¿Qué postula el Teorema de Earnshaw en relación con el equilibrio de cargas?",
        a: "Demuestra que es imposible mantener un conjunto de cargas puntuales estáticas en equilibrio estable únicamente con fuerzas electrostáticas (inversas al cuadrado). Cualquier perturbación lo desestabilizará."
    },
    {
        q: "¿Cómo se calcula la fuerza neta cuando las cargas están distribuidas en un plano bidimensional?",
        a: "Se calculan las magnitudes por pares, se descomponen en componentes cartesianas (X e Y), se suman algebraicamente por eje, y se halla la resultante aplicando el Teorema de Pitágoras."
    },
    {
        q: "¿Por qué la Ley de Coulomb no describe adecuadamente las fuerzas entre cargas en movimiento rápido?",
        a: "Porque es puramente electrostática. En movimiento rápido generan campos magnéticos y propagación retardada, lo que exige las ecuaciones de Maxwell y la Fuerza de Lorentz."
    },
    {
        q: "¿Si los protones se repelen, por qué no se desintegra el núcleo atómico?",
        a: "A distancias subatómicas (10^-15 m) actúa la Fuerza Nuclear Fuerte, que es unas 100 veces más intensa que la repulsión de Coulomb, superándola y manteniendo el núcleo cohesionado."
    },
    {
        q: "¿Por qué no sentimos fuerzas electrostáticas con los objetos cotidianos?",
        a: "Porque la materia macroscópica es eléctricamente neutra, conteniendo casi el mismo número de electrones que de protones, por lo que las cargas netas son cero a distancias perceptibles."
    },
    {
        q: "¿Qué aplicaciones tecnológicas cotidianas e industriales se basan en la fuerza de Coulomb?",
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

// Generar colores bonitos
function generateColors(count) {
    const palette = [
        '#ef4444', '#f97316', '#f59e0b', '#84cc16', '#22c55e', 
        '#10b981', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', 
        '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e'
    ];
    colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(palette[i % palette.length]);
    }
}

// Background Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for(let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 50 + 20;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

function updateUI() {
    nameList.innerHTML = '';
    players.forEach((player, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = player;
        
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
        ctx.fillStyle = '#1e293b';
        ctx.fill();
        
        ctx.fillStyle = '#64748b';
        ctx.font = '20px Poppins';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Añade jugadores', centerX, centerY);
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
        
        // Truncate long names
        let displayName = player;
        if(displayName.length > 12) displayName = displayName.substring(0, 10) + '...';
        
        ctx.fillText(displayName, radius - 20, 0);
        ctx.restore();
    });
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.15, 0, 2 * Math.PI);
    ctx.fillStyle = '#0f172a';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();
}

function spin() {
    if (players.length < 2 || isSpinning) return;
    
    isSpinning = true;
    spinBtn.disabled = true;

    // Random spins (between 5 and 10 full rotations) + random end angle
    const spins = Math.floor(Math.random() * 5) + 5;
    const degrees = Math.floor(Math.random() * 360);
    const totalRotation = (spins * 360) + degrees;
    
    currentRotation += totalRotation;
    
    canvas.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        isSpinning = false;
        spinBtn.disabled = false;
        
        // Calculate winner
        const normalizedRotation = currentRotation % 360;
        // Pointer is at the top (270 degrees in canvas coords, or considering rotation it shifts)
        // Since canvas rotates clockwise, the top point moves opposite to rotation
        const sliceAngle = 360 / players.length;
        
        // 270 deg is the top. 
        // 360 - normalizedRotation gives us how much the wheel was turned backwards from 0
        const topAngle = (360 - normalizedRotation + 270) % 360;
        const winnerIndex = Math.floor(topAngle / sliceAngle);
        
        const winner = players[winnerIndex];
        
        showQuestion(winner);
        
    }, 5000); // 5 seconds matches CSS transition duration
}

spinBtn.addEventListener('click', spin);

function showQuestion(winner) {
    // Pick a random question
    const qIndex = Math.floor(Math.random() * questions.length);
    const question = questions[qIndex];
    
    winnerNameEl.textContent = `¡El turno es de ${winner}!`;
    questionTextEl.textContent = question.q;
    answerTextEl.textContent = question.a;
    
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
