/**
 * Interactions.js - Interactividad dinámica del sitio
 * Cumple con el requerimiento de al menos una interacción por página.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Interacciones de la Portada (index.html) --- */
    const likeBtn = document.getElementById('like-btn');
    const likeCounter = document.getElementById('like-counter');
    let isLiked = false;

    if (likeBtn && likeCounter) {
        likeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            isLiked = !isLiked;
            
            if (isLiked) {
                likeBtn.style.fontWeight = 'bold';
                likeBtn.style.color = '#385898';
                likeBtn.innerText = '👍 Ya no me gusta';
                likeCounter.innerText = '👍 Tú, Alex Chen y otras 14 personas';
            } else {
                likeBtn.style.fontWeight = 'normal';
                likeBtn.style.color = '#385898';
                likeBtn.innerText = 'Me gusta';
                likeCounter.innerText = '👍 Alex Chen y otras 14 personas';
            }
        });
    }

    const postButton = document.getElementById('post-button');
    const statusTextarea = document.getElementById('status-textarea');
    
    if (postButton && statusTextarea) {
        postButton.addEventListener('click', () => {
            const content = statusTextarea.value;
            if (content.trim() === "") {
                alert("¿Qué tienes en mente? Escribe algo antes de publicar.");
            } else {
                alert("¡Estado actualizado! (Simulación de backend)");
                statusTextarea.value = "";
            }
        });
    }

    /* --- Interacciones del Perfil (perfil-template.html) --- */
    const addFriendBtn = document.getElementById('add-friend-btn');
    if (addFriendBtn) {
        addFriendBtn.addEventListener('click', () => {
            if (addFriendBtn.innerText === '+ Añadir amigo') {
                addFriendBtn.innerText = '✓ Solicitud enviada';
                addFriendBtn.style.backgroundColor = '#42b72a';
                addFriendBtn.style.borderColor = '#42b72a';
            } else {
                addFriendBtn.innerText = '+ Añadir amigo';
                addFriendBtn.style.backgroundColor = '#3b5998';
                addFriendBtn.style.borderColor = '#29487d';
            }
        });
    }

    // Efecto dinámico en tags de habilidades
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseover', () => {
            tag.style.backgroundColor = '#3b5998';
            tag.style.color = 'white';
        });
        tag.addEventListener('mouseout', () => {
            tag.style.backgroundColor = '#f0f2f5';
            tag.style.color = '#1c1e21';
        });
    });

    /* --- Interacciones de la Bitácora (bitacora.html) --- */
    const writeNoteBtn = document.getElementById('write-note-btn');
    if (writeNoteBtn) {
        writeNoteBtn.addEventListener('click', () => {
            const title = prompt("Título de la nueva nota:");
            if (title) {
                alert(`Abriendo editor para: "${title}"... (Funcionalidad para el TP2)`);
            }
        });
    }
});
