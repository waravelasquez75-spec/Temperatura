
# DESAFIO

Proyecto **Termoaventura**:


# 🌊 TERMOAVENTURA: Descubre la Magia del Enfriamiento

¡Bienvenido a **Termoaventura**! Una aplicación web interactiva y visual diseñada para simular y predecir el comportamiento térmico de un cuerpo a lo largo del tiempo, utilizando la **Ley de Enfriamiento de Newton**. 

Esta herramienta es ideal para estudiantes, docentes o entusiastas de la física y el cálculo que desean experimentar de forma didáctica cómo influyen la temperatura ambiente, las condiciones iniciales y las propiedades del material en la pérdida o ganancia de calor.

---

## 📋 Descripción

**Termoaventura** calcula de forma instantánea la temperatura final de un objeto tras transcurrir un tiempo determinado basándose en la ecuación diferencial del enfriamiento de Newton:

Fórmula: T = Ts + (T0 - Ts) * e^(-k * t)

### Características Principales:
* **Simulación Dinámica:** Calcula el estado térmico exacto ingresando la temperatura inicial (TO), la del entorno (Ts), la constante de enfriamiento (k) y el tiempo de exposición (t).
* **Gráfica Interactiva:** Genera una curva suavizada en tiempo real mediante *Chart.js* para observar la tendencia de la temperatura hasta aproximarse al equilibrio térmico.
* **Interfaz Premium:** Diseño moderno, estilizado con CSS avanzado, fondos con gradientes dinámicos y animaciones fluidas al mostrar los resultados.
* **Feedback Intuitivo:** Clasifica el estado térmico del resultado mediante un sistema inteligente de mensajes y emojis dinámicos (desde *Muy Caliente* 🔥 hasta *Equilibrio Alcanzado* ❄️).

---

## 🛠️ Requisitos

Al ser una aplicación web estática (Client-Side), no requiere de servidores complejos, bases de datos ni entornos de ejecución pesados. Solo necesitas:

1. **Un navegador web moderno** actualizado (Google Chrome, Mozilla Firefox, Microsoft Edge, Brave o Safari).
2. **Conexión a Internet** (necesaria la primera vez para cargar la librería de gráficos *Chart.js* desde su CDN).
3. **Un editor de texto o código** (opcional, como VS Code, si deseas auditar o modificar los archivos).

---

## 🚀 Instrucciones de Instalación

Sigue estos sencillos pasos para montar el proyecto de forma local en tu computadora:

1. **Clonar o descargar el proyecto:**
   Puedes clonar este repositorio usando Git en tu terminal:
   ```bash
   git clone [https://github.com/tu-usuario/termoaventura.git]
   (https://github.com/tu-usuario/termoaventura.git)
O bien, simplemente descarga los archivos comprimidos en formato `.zip` y extráelos en una carpeta.*

2. **Estructura de Archivos:**
Asegúrate de que los tres archivos principales se encuentren en el mismo directorio:
```text
├── index.html
├── estilo.css
└── javacrip.js

```


3. **Ejecutar la aplicación:**
No requiere compilación. Basta con hacer **doble clic sobre el archivo index.html** para abrirlo directamente en tu navegador preferido. ¡Listo para usar!

---

## 📖 Guía de Uso

Utilizar **Termoaventura** es sumamente sencillo e intuitivo. Aquí tienes un flujo rápido de trabajo:

1. **Completar los Parámetros Básicos:**
* **🔥 Temperatura Inicial (°C):** La temperatura con la que empieza el objeto (ej. `120`).
* **❄️ Temperatura del lugar (°C):** La temperatura ambiente o del medio que lo rodea (ej. `38`).
* **⚡ Constante k:** El coeficiente de enfriamiento que depende del material y su superficie (ej. `0.45`).
* **⏰ Tiempo (horas):** El intervalo de tiempo que deseas evaluar (ej. `3`).


2. **Generar la Simulación:**
* Haz clic en el botón **"Ver Evolución Mágica ✨"**.
* Se desplegará instantáneamente un contenedor animado con la **Temperatura Final** estimada y una advertencia sobre su estado actual.


3. **Analizar la Gráfica:**
* Desplázate hacia abajo para interactuar con el gráfico de líneas. Puedes pasar el cursor sobre los puntos de la curva para conocer el valor exacto estimado en cada fracción de hora.



---

## 🤝 Contribuciones

Si te apasiona la física o el desarrollo frontend y quieres ayudar a mejorar **Termoaventura**, ¡las puertas están abiertas! Puedes colaborar de las siguientes maneras:

1. Realiza un **Fork** de este repositorio.
2. Crea una rama con una nueva funcionalidad o corrección (`git checkout -b feature/NuevaMejora`).
3. Envía tus cambios localmente (`git commit -m 'Añadida nueva funcionalidad'`).
4. Sube la rama a tu repositorio (`git push origin feature/NuevaMejora`).
5. Abre un **Pull Request** detallando tus modificaciones para que sean revisadas.

### Ideas para aportar:

* Añadir soporte para cambio de unidades (Fahrenheit o Kelvin).
* Guardar un historial local de las simulaciones realizadas utilizando *LocalStorage*.
* Mejorar la responsividad en pantallas de dispositivos móviles muy pequeños.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Esto significa que eres libre de usar, modificar, copiar y distribuir este software tanto para fines personales como comerciales, siempre y cuando se incluya el aviso de derecho de autor correspondiente.

---

*Desarrollado con fines educativos y científicos. ¡Que la física te acompañe!* 🌊

**Desarrolladora** : WARA VELASQUEZ 

```

```

