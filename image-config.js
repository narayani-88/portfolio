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
    
    // For public hosting - use professional stock images
    production: {
        profile: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        projects: {
            nids: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
            nsploit: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
            nhash: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
            nrecon: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=250&fit=crop',
            homoglyph: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
            quantum: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop'
        }
    }
};

// Auto-detect environment
const isLocal = window.location.hostname === 'localhost' || 
                window.location.hostname === '127.0.0.1' || 
                window.location.protocol === 'file:' ||
                window.location.hostname === '';

const currentConfig = isLocal ? ImageConfig.local : ImageConfig.production;
console.log('Environment detected:', isLocal ? 'LOCAL' : 'PRODUCTION');
console.log('Current hostname:', window.location.hostname);
console.log('Current protocol:', window.location.protocol);

// Function to load images dynamically
function loadImages() {
    console.log('Loading images for environment:', isLocal ? 'local' : 'production');
    
    // Load profile image
    const profileImg = document.querySelector('#profile-pic');
    if (profileImg) {
        profileImg.src = currentConfig.profile;
        console.log('Profile image set to:', currentConfig.profile);
    }
    
    // Load project images with error handling
    const imageMap = {
        'nIds.png': currentConfig.projects.nids,
        'nSploit.png': currentConfig.projects.nsploit,
        'nHash.png': currentConfig.projects.nhash,
        'nRecon.png': currentConfig.projects.nrecon,
        'homoglyph.png': currentConfig.projects.homoglyph,
        'qunatum.jfif': currentConfig.projects.quantum
    };
    
    document.querySelectorAll('.project-image img').forEach((img, index) => {
        const currentSrc = img.getAttribute('src');
        const filename = currentSrc.split('/').pop();
        
        if (imageMap[filename]) {
            img.src = imageMap[filename];
            console.log(`Project image ${index} (${filename}) set to:`, img.src);
            
            // Add error handling
            img.onerror = function() {
                console.error('Failed to load image:', this.src);
                // Fallback to a working image
                this.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop';
            };
        }
    });
}

// Load images when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadImages);
} else {
    loadImages();
}
