const questions = [
    {
        q: "¿Qué diferencia existe entre un conductor y un aislador respecto al comportamiento de sus electrones?",
        a: "Los <strong>conductores</strong> permiten el flujo libre de cargas eléctricas debido a que sus electrones de valencia están poco ligados al núcleo. Por el contrario, los <strong>aisladores</strong> (o dieléctricos) no permiten el flujo libre de cargas porque sus electrones se encuentran fuertemente ligados."
    },
    {
        q: "¿Qué ejemplos de materiales conductores y aisladores se presentan en el texto?",
        a: "<strong>Conductores:</strong> Cobre, aluminio, plata y agua con sales.<br><strong>Aisladores:</strong> Vidrio, plástico, madera seca y caucho."
    },
    {
        q: "¿Qué establece la Ley de Coulomb y cuál es su fórmula matemática?",
        a: "Describe la fuerza eléctrica entre dos cargas puntuales, señalando que es directamente proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia que las separa. Su fórmula es <strong>F = k &middot; |q<sub>1</sub> &middot; q<sub>2</sub>| / r<sup>2</sup></strong>."
    },
    {
        q: "¿Cuál es el valor numérico y las unidades de la constante de Coulomb (k)?",
        a: "La constante equivale a <strong>k = 8.99 &times; 10<sup>9</sup> N&middot;m<sup>2</sup>/C<sup>2</sup></strong>."
    },
    {
        q: "¿Cómo influye el signo de las cargas en la fuerza ejercida entre ellas?",
        a: "Si las cargas tienen el <strong>mismo signo</strong>, la fuerza es de <strong>repulsión</strong>; si son de <strong>signo contrario</strong>, la fuerza es de <strong>atracción</strong>."
    },
    {
        q: "¿Qué es el campo eléctrico (E) y cuáles son sus fórmulas de cálculo?",
        a: "Es la región del espacio alrededor de una carga donde se manifiesta una fuerza eléctrica sobre otra carga de prueba (definida como fuerza por unidad de carga). Se calcula mediante <strong>E = F / q</strong> o <strong>E = k &middot; |Q| / r<sup>2</sup></strong>."
    },
    {
        q: "¿Cuáles son tres características fundamentales de las líneas de campo eléctrico?",
        a: "1. Salen de las cargas positivas y entran en las negativas.<br>2. Nunca se cruzan entre sí.<br>3. Cuanto más juntas están, mayor es la intensidad del campo."
    },
    {
        q: "¿Cómo se define el potencial eléctrico (V), cuál es su fórmula y en qué unidad se mide?",
        a: "Se define como la energía potencial eléctrica por unidad de carga en un punto (<strong>V = k &middot; Q / r</strong>). Su unidad es el <strong>voltio (V)</strong>, equivalente a <strong>Joules por Coulomb (J/C)</strong>."
    },
    {
        q: "¿Qué es la diferencia de potencial (&Delta;V) y cuál es su papel en los circuitos?",
        a: "Es el trabajo necesario para mover una carga entre dos puntos por unidad de carga (<strong>&Delta;V = W / q</strong>). También llamada <strong>voltaje</strong>, es la fuerza que impulsa la corriente eléctrica en un circuito."
    },
    {
        q: "Entre el campo eléctrico y el potencial eléctrico, ¿cuál es una magnitud vectorial y cuál escalar?",
        a: "El <strong>campo eléctrico (E)</strong> es una <strong>magnitud vectorial</strong>, mientras que el <strong>potencial eléctrico (V)</strong> es una <strong>magnitud escalar</strong>."
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

// Audio and Visualizer Logic
const bgMusic = document.getElementById('bgMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
const soundBarsContainer = document.getElementById('soundBars');

// Create sound bars
const NUM_BARS = 15;
for (let i = 0; i < NUM_BARS; i++) {
    const bar = document.createElement('div');
    bar.classList.add('sound-bar');
    soundBarsContainer.appendChild(bar);
}
const bars = document.querySelectorAll('.sound-bar');

let isPlaying = false;
let visualizerInterval;

function updateVisualizer() {
    bars.forEach(bar => {
        // Random height between 5px and 30px
        const height = isPlaying ? Math.floor(Math.random() * 25) + 5 : 5;
        bar.style.height = `${height}px`;
    });
}

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        isPlaying = false;
        playPauseBtn.textContent = '▶️';
        clearInterval(visualizerInterval);
        // Reset bars
        bars.forEach(bar => bar.style.height = '5px');
    } else {
        bgMusic.play().then(() => {
            isPlaying = true;
            playPauseBtn.textContent = '⏸️';
            visualizerInterval = setInterval(updateVisualizer, 150);
        }).catch(err => {
            console.warn('Audio play was prevented or file not found', err);
            // Even if file not found, start visualizer as simulation
            isPlaying = true;
            playPauseBtn.textContent = '⏸️';
            visualizerInterval = setInterval(updateVisualizer, 150);
        });
    }
});
