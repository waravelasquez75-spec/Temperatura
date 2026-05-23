let temperatureChart = null;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCalor');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const t0 = parseFloat(document.getElementById('t0').value);
        const ts = parseFloat(document.getElementById('ts').value);
        const k = parseFloat(document.getElementById('k').value);
        const totalTime = parseFloat(document.getElementById('t').value);

        if (isNaN(t0) || isNaN(ts) || isNaN(k) || isNaN(totalTime)) {
            alert("Por favor completa todos los campos correctamente.");
            return;
        }

        // Cálculo
        const tempFinal = ts + (t0 - ts) * Math.exp(-k * totalTime);
        const tempRedondeada = Math.round(tempFinal);

        const resultadoDiv = document.getElementById('resultado');

        // === LÓGICA MEJORADA ===
        let emoji = "";
        let mensaje = "";

        const diferencia = tempRedondeada - ts;

        if (diferencia > 15) {
            emoji = "🔥🔥";
            mensaje = "¡Está muy caliente aún!";
        } else if (diferencia > 5) {
            emoji = "🔥";
            mensaje = "Todavía está caliente";
        } else if (diferencia > 0) {
            emoji = "🌡️";
            mensaje = "Se está enfriando poco a poco";
        } else if (diferencia > -5) {
            emoji = "❄️";
            mensaje = "Ya está bastante fresco";
        } else {
            emoji = "❄️❄️";
            mensaje = "¡Está muy frío! Equilibrio alcanzado";
        }

        resultadoDiv.innerHTML = `
            <strong>Temperatura Final después de ${totalTime} horas</strong>
            <div class="temp">${emoji} ${tempRedondeada}°C</div>
            <p>${mensaje}</p>
        `;

        generarGrafica(t0, ts, k, totalTime);
    });
});

function generarGrafica(t0, ts, k, totalTime) {
    const labels = [];
    const temps = [];
    const steps = 25;

    for (let i = 0; i <= steps; i++) {
        const time = (totalTime * i) / steps;
        const temp = ts + (t0 - ts) * Math.exp(-k * time);
        labels.push(time.toFixed(1) + "h");
        temps.push(parseFloat(temp.toFixed(1)));
    }

    if (temperatureChart) temperatureChart.destroy();

    const ctx = document.getElementById('temperatureChart').getContext('2d');
    temperatureChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperatura (°C)',
                data: temps,
                borderColor: '#1e40af',
                backgroundColor: 'rgba(30, 64, 175, 0.2)',
                borderWidth: 4,
                tension: 0.4,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: { 
                    display: true, 
                    text: 'Evolución de la Temperatura', 
                    font: { size: 18 } 
                }
            }
        }
    });
}
