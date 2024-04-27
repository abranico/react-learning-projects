# React Learning Projects

Este repositorio contiene una colección de mini proyectos desarrollados con React y TypeScript. Cada proyecto está diseñado para explorar diferentes conceptos y características de React, incluyendo el uso de hooks, pruebas unitarias, etc.<br><br>
Ademas se ha configurado un flujo de trabajo de GitHub Actions para realizar despliegues automáticos en Surge cada vez que se actualiza alguno de los proyectos en este repositorio. Este flujo de trabajo garantiza que cualquier cambio en el código se refleje automáticamente en la aplicación desplegada en surge.sh. Consulta los archivos YAML en la carpeta .github/workflows para obtener más detalles sobre la configuración.

| Número | Proyecto | Código | Web |
| --- | --- | --- | --- |
| `01` | [Buscador de Películas](#buscador-de-películas) | [Ver](buscador-peliculas/) | [Visitar](https://grey-jewel.surge.sh/) |
| `02` | [Carrito de Compras](#carrito-de-compras) | [Ver](carrito-compras/) | [Visitar](https://bizarre-chair.surge.sh/) |


---

## Buscador de Películas

### Descripción

Este proyecto es un buscador de películas que utiliza la API de [OMDb API](https://www.omdbapi.com/) para buscar información sobre películas. Permite a los usuarios buscar películas por título y ver sus detalles.

### Tareas Realizadas

- [x] Inicialización del proyecto React con TypeScript.
- [x] Integración del framework de estilos globales sin clases newcss para el diseño de la interfaz.
- [x] Buscar películas mediante un custom hook que valida el input de forma controlada usando useEffect y usa useRef para evitar validar en el primer renderizado.
- [x] Evitar búsquedas duplicadas del mismo término utilizando useRef
- [x] Mostrar películas utilizando un custom hook para consumir la API, gestionar los errores y el loading.
- [x] Creación de una función helper en la carpeta "services" para dividir la lógica del Fetch.

---

## Carrito de Compras

### Descripción

Este proyecto es una simulación de un carrito de compras que permite a los usuarios explorar una selección de productos provenientes de [Fake Store API](fakestoreapi.com) y agregarlos al carrito. Los usuarios pueden explorar productos, agregarlos al carrito y gestionar su contenido.

### Tareas Realizadas

- [x] Inicialización del proyecto React con TypeScript.
- [x] Integración del framework de estilos globales sin clases picocss para el diseño de la interfaz.
- [x] Mostrar productos utilizando un custom hook para consumir la API con useEffect y con su propia funcion helper que gestiona los errores y el loading.
- [x] Infinite scrolling para mejorar la experiencia del usuario al cargar productos de manera dinámica
- [x] Implementación de filtrado de productos por categoría.
- [x] Utilización de useContext para gestionar estados globales y evitar el patrón de prop drilling.


---
