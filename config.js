// Configuration for different environments
const config = {
    // Set to 'local' when running locally, 'production' when hosted
    environment: 'production', // Change this based on where you're running
    
    images: {
        local: {
            profile: 'narayani.jpeg',
            projects: {
                nids: 'nIds.png',
                nsploit: 'nSploit.png',
                nhash: 'nHash.png',
                nrecon: 'nRecon.png',
                homoglyph: 'homoglyph.png',
                quantum: 'qunatum.jfif'
            }
        },
        production: {
            profile: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
            projects: {
                nids: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
                nsploit: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop',
                nhash: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
                nrecon: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=200&fit=crop',
                homoglyph: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop',
                quantum: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop'
            }
        }
    }
};

// Function to get the appropriate image URL
function getImageUrl(imageType, projectKey = null) {
    const env = config.environment;
    if (projectKey) {
        return config.images[env].projects[projectKey];
    }
    return config.images[env][imageType];
}
