# The Wyse Guy Portfolio

A clean, responsive professional portfolio website showcasing IT security expertise, certifications, and professional experience.

## Overview

This portfolio is built with pure HTML, CSS, and JavaScript, focusing on:
- Clean, semantic HTML5
- Responsive design
- Accessibility
- Easy maintenance
- Efficient web scraping capability

## Structure


    

wysestone_portfolio/
├── index.html
├── certifications.html
├── work.html
├── education.html
├── skills.html
├── lib/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
└── README.md

    

## Features

### Core Pages
- **Home**: Brief introduction and portfolio navigation
- **Certifications**: Professional certifications and training achievements
- **Work Experience**: Professional history and accomplishments
- **Education**: Academic background and qualifications
- **Skills**: Technical skills and competencies

### Interactive Features
- Dark mode toggle
- Search functionality
- Certification filtering
- Responsive design
- Smooth scrolling
- Loading animations

### Technical Features
- Semantic HTML5 structure
- Mobile-first responsive design
- Accessibility considerations
- Web scraping friendly
- Performance optimized

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- No external frameworks or libraries

## Setup

1. Clone the repository:
```bash
git clone https://github.com/wysestone/wysestone_portfolio.git

    

    Navigate to the project directory:

    
cd wysestone_portfolio

    

    Open in a web browser:

    Open index.html in your preferred browser
    Or serve using a local server:

        
    python -m http.server 8000

        

    Then visit http://localhost:8000

Maintenance
Adding New Certifications

    Open certifications.html
    Add new certification using the existing article structure:

    
<article class="certification" data-category="category-name">
    <h4>Certification Name</h4>
    <p class="issuer">Issued by: Organization</p>
    <p class="verification">
        <a href="verification-link">Verify Certification</a>
    </p>
</article>

    

Updating Skills

    Open skills.html
    Add new skills using the existing article structure:

    
<article class="skill">
    <h4>Skill Name</h4>
    <p class="skill-description">Description of the skill</p>
</article>

    

Best Practices
HTML

    Use semantic HTML elements
    Maintain proper heading hierarchy
    Include alt text for images
    Ensure proper ARIA labels

CSS

    Follow BEM naming convention
    Use responsive units (rem, em, %)
    Implement mobile-first design
    Maintain consistent spacing

JavaScript

    Use event delegation
    Implement error handling
    Maintain clean, documented code
    Follow performance best practices

Browser Support

    Chrome (latest)
    Firefox (latest)
    Safari (latest)
    Edge (latest)
    Opera (latest)

Performance Considerations

    Minimized HTTP requests
    Optimized images
    Efficient CSS selectors
    Vanilla JavaScript for minimal overhead

Accessibility

    Semantic HTML structure
    ARIA labels where needed
    Keyboard navigation support
    Color contrast compliance
    Screen reader friendly

Future Enhancements

    [ ] Add blog section
    [ ] Implement project showcase
    [ ] Add contact form
    [ ] Enhance certification filtering
    [ ] Add print stylesheet

Contributing

    Fork the repository
    Create your feature branch (git checkout -b feature/AmazingFeature)
    Commit your changes (git commit -m 'Add some AmazingFeature')
    Push to the branch (git push origin feature/AmazingFeature)
    Open a Pull Request

License

This project is licensed under the MIT License - see the LICENSE file for details
Contact

Anthony Wyse - [LinkedIn Profile]
Project Link: [GitHub Repository]
Acknowledgments

    Icons from [Font Awesome]
    Inspiration from various portfolio designs
    Security community resources
