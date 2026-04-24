/**
 * Core.js - Lógica global de Caralibro
 * Maneja la navegación y elementos comunes de la interfaz.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Caralibro Core Initialized');
    
    // 1. Simulación de búsqueda
    const searchInput = document.getElementById('global-search');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value;
                if (query.trim() !== "") {
                    alert(`Buscando "${query}" en el archivo de Caralibro...`);
                    searchInput.value = '';
                }
            }
        });
    }

    // 2. Placeholder dinámico para la búsqueda
    const placeholders = [
        "Buscar personas...",
        "Buscar notas de proyecto...",
        "Buscar integrantes...",
        "¿Qué buscas hoy?"
    ];
    let pIndex = 0;
    
    if (searchInput) {
        setInterval(() => {
            pIndex = (pIndex + 1) % placeholders.length;
            searchInput.placeholder = placeholders[pIndex];
        }, 4000);
    }
});
