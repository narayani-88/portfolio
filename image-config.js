// Image Configuration - Keep your images private while hosting publicly
const ImageConfig = {
    // For local development - use your actual images
    local: {
        profile: './narayani.jpeg',
        projects: {
            nids: './nIds.png',
            nsploit: './nSploit.png', 
            nhash: './nHash.png',
            nrecon: './nRecon.png',
            homoglyph: './homoglyph.png',
            quantum: './qunatum.jfif'
        }
    },
    
    // For public hosting - use placeholder or hosted images
    production: {
        profile: 'https://via.placeholder.com/150x150/234C6A/D2C1B6?text=NP',
        projects: {
            nids: 'https://via.placeholder.com/400x250/234C6A/D2C1B6?text=NIDS+Project',
            nsploit: 'https://via.placeholder.com/400x250/344F1F/D2C1B6?text=nSploit+Tool',
            nhash: 'https://via.placeholder.com/400x250/234C6A/D2C1B6?text=HashSleuth',
            nrecon: 'https://via.placeholder.com/400x250/344F1F/D2C1B6?text=Nrecon+Tool',
            homoglyph: 'https://via.placeholder.com/400x250/234C6A/D2C1B6?text=Homoglyph+Detector',
            quantum: 'https://via.placeholder.com/400x250/344F1F/D2C1B6?text=Quantum+Journey'
        }
    }
};

// Auto-detect environment
const isLocal = window.location.hostname === 'localhost' || 
                window.location.hostname === '127.0.0.1' || 
                window.location.protocol === 'file:';

const currentConfig = isLocal ? ImageConfig.local : ImageConfig.production;

// Function to load images dynamically
function loadImages() {
    // Load profile image
    const profileImg = document.querySelector('#profile-pic');
    if (profileImg) {
        profileImg.src = currentConfig.profile;
    }
    
    // Load project images
    const projectImages = {
        'nIds.png': currentConfig.projects.nids,
        'nSploit.png': currentConfig.projects.nsploit,
        'nHash.png': currentConfig.projects.nhash,
        'nRecon.png': currentConfig.projects.nrecon,
        'homoglyph.png': currentConfig.projects.homoglyph,
        'qunatum.jfif': currentConfig.projects.quantum
    };
    
    // Replace all project images
    document.querySelectorAll('.project-image img').forEach(img => {
        const filename = img.src.split('/').pop();
        if (projectImages[filename]) {
            img.src = projectImages[filename];
        }
    });
}

// Load images when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadImages);
} else {
    loadImages();
}
