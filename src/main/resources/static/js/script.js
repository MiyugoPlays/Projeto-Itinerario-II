function fetchAndDisplayVideos() {
    fetch('/api/videos')
        .then(response => response.json())
        .then(videos => {
            const videoContainer = document.getElementById('videos');
            videoContainer.innerHTML = '';  // Clear existing content
            videos.forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.classList.add('video');
                const embedUrl = getEmbedUrl(video.url);
                videoElement.innerHTML = `
                    <h3>${video.titulo}</h3>
                    <p>${video.descricao}</p>
                    <div class="video-wrapper">
                        <iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                `;
                videoContainer.appendChild(videoElement);
            });
        })
        .catch(error => {
            console.error('Error fetching videos:', error);
        });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayVideos);

function getEmbedUrl(url) {
    if (!url) {
        return ''; 
    }
    if (url.includes('youtube.com')) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('vimeo.com')) {
        const videoId = url.split('/').pop();
        return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
}
