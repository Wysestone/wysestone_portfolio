// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeDarkMode();
    initializeFilterSystem();
    initializeSearchFunction();
    addSortingCapability();
    setupCertificationValidation();
});

// Dark Mode Toggle
function initializeDarkMode() {
    // Add dark mode toggle button to header
    const header = document.querySelector('header');
    const darkModeButton = document.createElement('button');
    darkModeButton.innerHTML = '🌙';
    darkModeButton.classList.add('dark-mode-toggle');
    header.appendChild(darkModeButton);

    // Toggle dark mode
    darkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Save preference to localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        darkModeButton.innerHTML = isDarkMode ? '☀️' : '🌙';
    });

    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeButton.innerHTML = '☀️';
    }
}

// Filter System for Skills Page
function initializeFilterSystem() {
    if (window.location.pathname.includes('skills.html')) {
        const skillsContainer = document.querySelector('.skills-container');
        const skills = document.querySelectorAll('.skill');
        
        // Create filter buttons
        const categories = ['All', 'Technical', 'Security', 'Tools'];
        const filterContainer = document.createElement('div');
        filterContainer.classList.add('filter-container');
        
        categories.forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.addEventListener('click', () => filterSkills(category));
            filterContainer.appendChild(button);
        });

        skillsContainer.parentNode.insertBefore(filterContainer, skillsContainer);

        function filterSkills(category) {
            skills.forEach(skill => {
                if (category === 'All' || skill.dataset.category === category) {
                    skill.style.display = 'block';
                } else {
                    skill.style.display = 'none';
                }
            });
        }
    }
}

// Search Function
function initializeSearchFunction() {
    // Add search box to header
    const nav = document.querySelector('nav');
    const searchBox = document.createElement('input');
    searchBox.type = 'search';
    searchBox.placeholder = 'Search...';
    searchBox.classList.add('search-box');
    nav.appendChild(searchBox);

    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const searchableElements = document.querySelectorAll('article, .skill, .certification');

        searchableElements.forEach(element => {
            const text = element.textContent.toLowerCase();
            element.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

// Sorting Capability for Work Experience
function addSortingCapability() {
    if (window.location.pathname.includes('work.html')) {
        const experienceContainer = document.querySelector('.experience-container');
        const jobs = Array.from(document.querySelectorAll('.job'));

        const sortButton = document.createElement('button');
        sortButton.textContent = 'Sort by Date';
        sortButton.classList.add('sort-button');
        experienceContainer.parentNode.insertBefore(sortButton, experienceContainer);

        let isAscending = true;
        sortButton.addEventListener('click', () => {
            jobs.sort((a, b) => {
                const dateA = new Date(a.querySelector('.period').textContent.split('-')[0]);
                const dateB = new Date(b.querySelector('.period').textContent.split('-')[0]);
                return isAscending ? dateA - dateB : dateB - dateA;
            });

            jobs.forEach(job => experienceContainer.appendChild(job));
            isAscending = !isAscending;
            sortButton.textContent = `Sort ${isAscending ? 'Ascending' : 'Descending'}`;
        });
    }
}

// Certification Validation
function setupCertificationValidation() {
    if (window.location.pathname.includes('certifications.html')) {
        const certifications = document.querySelectorAll('.certification');
        
        certifications.forEach(cert => {
            const verifyLink = cert.querySelector('.verification a');
            if (verifyLink) {
                verifyLink.addEventListener('click', (e) => {
                    // Add click tracking or validation logic
                    console.log(`Verification clicked for: ${cert.querySelector('h3').textCxtContent}`);
                });
            }
        });
    }
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
