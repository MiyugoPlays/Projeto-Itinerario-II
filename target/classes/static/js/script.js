document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/videos')
        .then(response => response.json())
        .then(videos => {
            const videoContainer = document.getElementById('videos');
            videos.forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.classList.add('video');
                const embedUrl = getEmbedUrl(video.url);
                videoElement.innerHTML = `
                    <h3>${video.titulo}</h3>
                    <p>${video.descricao}</p>
                    <iframe width="560" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
                `;
                videoContainer.appendChild(videoElement);
            });
        });

    fetch('/api/ebooks')
        .then(response => response.json())
        .then(ebooks => {
            const ebookContainer = document.getElementById('ebooks');
            ebooks.forEach(ebook => {
                const ebookElement = document.createElement('div');
                ebookElement.innerHTML = `
                    <h3>${ebook.titulo}</h3>
                    <p>${ebook.autor}</p>
                    <a href="${ebook.url}" target="_blank">Baixar</a>
                `;
                ebookContainer.appendChild(ebookElement);
            });
        });
});

function getEmbedUrl(url) {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes('youtube.com')) {
        const videoId = urlObj.searchParams.get('v');
        return `https://www.youtube.com/embed/${videoId}`;
    } else if (urlObj.hostname.includes('vimeo.com')) {
        const videoId = urlObj.pathname.split('/').pop();
        return `https://player.vimeo.com/video/${videoId}`;
    }
    // Adicione mais condições conforme necessário para outras plataformas
    return url; // Retorna a URL original se não for uma plataforma conhecida
}
