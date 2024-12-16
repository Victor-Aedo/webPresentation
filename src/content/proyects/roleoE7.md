---
title: RoleoE7
github: https://github.com/Victor-Aedo/RoleoE7
description: Es una aplicación que actualiza automáticamente la tienda de la taberna del juego móvil Epic Seven. Para ello, utiliza dependencias que permiten el reconocimiento de imágenes para buscar las monedas y herramientas de automatización para simular movimientos del ratón para llevar a cabo la compra de las monedas.
portadaImg: "/img/OnBreak.webp"
carrusel:
  video: "/video/RoleoE7.mp4"
  imagenes:
    - "/img/linkedin.webp"
    - "/img/GitHub.webp"
    - "/img/OnBreak.webp"
    - "/img/OnBreak.webp"

---

## **Descripción**
Es una aplicación diseñada específicamente para automatizar la tienda de la taberna en el popular juego móvil Epic Seven. Su propósito principal es actualizar de forma automática el inventario de la tienda, facilitando la adquisición de recursos clave para los jugadores. Para lograr esto, la aplicación utiliza tecnologías avanzadas como herramientas de reconocimiento de imágenes, las cuales identifican de manera precisa las monedas disponibles en pantalla. Además, emplea soluciones de automatización que simulan los movimientos y clics del ratón, reproduciendo de manera exacta las acciones necesarias para realizar las compras en el juego sin intervención manual. Esta combinación de tecnologías permite optimizar el tiempo del usuario y asegurar un manejo eficiente de los recursos dentro del juego.

## **Manual de uso** 


## **Instalar dependencias**
instala las dependencias desde el archivo requirements.txt, puede usar el comando pip install -r requirements.txt  

## **Ejecutar proyecto**
Ejecute el archivo main.py usando el comando python main.py, luego presione la tecla "t" para ejecutar el proyecto, ya que tiene una validación para pausar, reanudar la ejecución, esto se activa con la tecla "t" y se alterna. Puede detener el script de forma permanente pulsando "esc"

## **Precauciones**
Epic Seven debe ejecutarse en pantalla completa, dependiendo del emulador y el sistema operativo la forma en que se haga puede variar, pero en la mayoría de los casos basta con presionar la ventana del juego y presionar "F11".
No hay garantía de que funcione para sistemas operativos distintos de Windows.
No he podido comprobar que funcione en otras resoluciones de pantalla. La aplicación se desarrolló en una configuración con una pantalla de 1920 x 1080, lo que puede hacer que no funcione correctamente en otras resoluciones.

## **Tecnologias**
 
- **Python:** Lenguaje pricipal del proyecto, escogido por su facilidad para acceder a herramientas de automatizacion e IA.


- **pyautogui:** Esta libreria esta enfocada en automatizar tareas, por lo que fué utilizada para simular click y movimientos de maouse automaticos, a su vez tambien posee herramientas de reconocimiento de imagenes por lo que todo lo esecial del programa fué realizado con pyautogui.


- **keyboard:** Permite monitorear si el usuario presiona teclas específicas, utilizado para detener la ejecucion del programa cuando el usuario presiona las teclas especificadas.  


- **threading:** Librería de Python que permite ejecutar varias tareas en paralelo dentro de un programa, creando hilos de ejecución, fué de gran utilidad, ya que se deben reconocer 2 tipos de monedas, el ciclo completo para determinar si una moneda es encontrada o no es aproximadamente 3 segundos y al buscar 2 monedas este tiempo se duplicaba, gracias a threading este tiempo se pudo reducir a la mitad, permitiendo buscar ambas monedas al mismo tiempo.  




