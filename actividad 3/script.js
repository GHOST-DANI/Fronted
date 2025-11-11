const a1 = document.getElementById("h1");
a1 . innerHTML = `
<section>
    <p>Bugatti es caro debido a su enfoque en la máxima potencia y velocidad, el uso de materiales exóticos y de alta calidad en su fabricación, su lujo extremo y personalización, el proceso de producción artesanal y de baja escala, y los altos costos de investigación y desarrollo</p>
    </section>
`;
function togglea1(){
    const div = document.getElementById("a1");
    if (div.innerHTML === "") {
        div.innerHTML = `
<section>
    <p>Bugatti es caro debido a su enfoque en la máxima potencia y velocidad, el uso de materiales exóticos y de alta calidad en su fabricación, su lujo extremo y personalización, el proceso de producción artesanal y de baja escala, y los altos costos de investigación y desarrollo</p>
    </section>
`;
div.style.display = "block";
    }else{
        div.innerHTML ="";
        div.style.display = "none";
    }
};

const b1 = document.getElementById("b1");
b1 . innerHTML = `
<section>
    <h3>Rendimiento</h3>
    </section>
`;
function toggleb1(){
    const div = document.getElementById("b1");
    if (div.innerHTML === "") {
        div.innerHTML = `
<section>
    <p>Motor: W16 de \(8.0\) litros con cuatro turbos.Potencia: \(1.850\) CV en la versión de producción, usando gasolina de \(110\) octanos.Peso: \(1.240\) kg en seco en la versión conceptual, con un peso en la versión de producción de \(1.450\) kg para cumplir con las regulaciones de la FIA.Relación peso-potencia: Aproximadamente \(0.91\) kg/CV en la versión de producción.Aceleración: Capaz de alcanzar los \(100\) km/h en \(2.17\) segundos y los \(400\) km/h en \(12\) segundos.Velocidad máxima: Se estima que podría superar los \(500\) km/h, aunque se limita a \(380\) km/h debido a las restricciones de las llantas.Aerodinámica: Genera cerca de \(3.000\) kg de carga aerodinámica, lo que le permite soportar fuerzas G extremas en curvas. </p>
    </section>
`;
div.style.display = "block";
    }else{
        div.innerHTML ="";
        div.style.display = "none";
    }
};

const b2 = document.getElementById("b2");
b2 . innerHTML = `
<section>
    <h3>Rendimiento</h3>
    </section>
`;
function toggleb2(){
    const div = document.getElementById("b2");
    if (div.innerHTML === "") {
        div.innerHTML = `
<section>
    <p>Motor: W16 de 8.0 litros con cuatro turbocompresores.
Potencia: 1500 caballos de fuerza (o hasta 1600 en algunas versiones).
Torque: 1180 lb-pie o 1600 Nm.
Transmisión: Automática de doble embrague de siete velocidades.
Aceleración (0-100 km/h): ~2.3-2.4 segundos.
Velocidad máxima: 420 km/h (limitada electrónicamente). </p>
    </section>
`;
div.style.display = "block";
    }else{
        div.innerHTML ="";
        div.style.display = "none";
    }
};

const b3 = document.getElementById("b3");
b3 . innerHTML = `
<section>
    <h3>Rendimiento</h3>
    </section>
`;
function toggleb3(){
    const div = document.getElementById("b3");
    if (div.innerHTML === "") {
        div.innerHTML = `
<section>
    <p>Motor: W16 de 8.0 litros con cuatro turbos.
Potencia: 1001 CV en la versión original, hasta 1200 CV en el Super Sport.
Par motor: 1250 Nm en la versión original, hasta 1500 Nm en el Super Sport.
Transmisión: Automática de doble embrague de 7 velocidades.
Tracción: Integral (AWD).
Aceleración (0-100 km/h): 2.5 segundos.
Velocidad máxima: 407 km/h en la versión estándar, hasta 431 km/h en el Super Sport (limitada a 415 km/h para proteger los neumáticos).
Peso: Aproximadamente 1888 kg (versión estándar).
Frenos: Discos de cerámica de carbono con pinzas de titanio.
Aerodinámica: Ala trasera que funciona como freno de aire a altas velocidades. </p>
    </section>
`;
div.style.display = "block";
    }else{
        div.innerHTML ="";
        div.style.display = "none";
    }
};

