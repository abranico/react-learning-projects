
# React Learning Projects

Este repositorio contiene una colección de mini proyectos desarrollados con React y TypeScript. Cada proyecto está diseñado para explorar diferentes conceptos y características de React, incluyendo el uso de hooks, pruebas unitarias, etc.
Ademas se ha configurado un flujo de trabajo de GitHub Actions para realizar despliegues automáticos en Surge cada vez que se actualiza alguno de los proyectos en este repositorio. Este flujo de trabajo garantiza que cualquier cambio en el código se refleje automáticamente en la aplicación desplegada en surge.sh. Consulta los archivos YAML en la carpeta .github/workflows para obtener más detalles sobre la configuración.

| Número | Proyecto | Código | Web |
| --- | --- | --- | --- |
| `01` | [Buscador de Películas](#buscador-de-películas) | [Ver](buscador-peliculas/) | [Visitar]("https://grey-jewel.surge.sh/") |


---

## Buscador de Películas

### Descripción

Este proyecto es un buscador de películas que utiliza la API de [OMDb API](https://www.omdbapi.com/) para buscar información sobre películas. Permite a los usuarios buscar películas por título y ver sus detalles.

### Tareas Realizadas

- [x] Inicialización del proyecto React con TypeScript.
- [x] Integración del framework de estilos globales sin clases newcss para el diseño de la interfaz.
- [x] Buscar películas mediante un custom hook que valida el input de forma controlada con useEffect y evita validar en el primer render con useRef.
- [x] Mostrar películas mediante un custom hook que consume la API y maneja los errores.

---
