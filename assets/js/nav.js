document.addEventListener('DOMContentLoaded', function() {
    // Get the base URL for your site
    const baseUrl = '/';
    
    // Get the current page path
    const currentPath = window.location.pathname;
    
    // Determine if we're in a subdirectory
    const isInSubdirectory = currentPath.includes('blog-posts') || currentPath.includes('projects-folder');
    
    // Set prefix based on location
    const prefix = isInSubdirectory ? '../' : './';
    
    // Create navigation HTML
    const nav = `
        <nav class="nav">
            <a href="${prefix}index.html" class="nav-logo">TP</a>
            <div class="nav-menu">
                <a href="${prefix}projects.html" class="nav-link">Projects</a>
                <a href="${prefix}about.html" class="nav-link">About</a>
                <a href="${prefix}blog.html" class="nav-link">Blog</a>
            </div>
        </nav>
    `;
    
    // Insert navigation
    document.getElementById('nav-placeholder').innerHTML = nav;
    
    // Highlight current page
    const currentPage = currentPath.split('/').pop();
    if (currentPage) {
        const currentLink = document.querySelector(`a[href$="${currentPage}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
});