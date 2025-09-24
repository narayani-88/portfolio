// Profile Image Configuration - Only handle profile photo
const ImageConfig = {
    // For local development - use your actual profile image
    local: {
        profile: './narayani.jpeg'
    },
    
    // For public hosting - use professional stock photo for profile only
    production: {
        profile: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
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

// Function to load profile image only
function loadImages() {
    console.log('Loading profile image for environment:', isLocal ? 'local' : 'production');
    
    // Only handle profile image - project images will load normally from directory
    const profileImg = document.querySelector('#profile-pic');
    if (profileImg) {
        profileImg.src = currentConfig.profile;
        console.log('Profile image set to:', currentConfig.profile);
        
        // Add error handling for profile image
        profileImg.onerror = function() {
            console.error('Failed to load profile image:', this.src);
            // Fallback to a generic professional photo
            this.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face';
        };
    }
    
    console.log('Project images will load from directory normally');
}

// Load images when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadImages);
} else {
    loadImages();
}
