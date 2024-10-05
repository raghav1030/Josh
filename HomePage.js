//  Project section
// Data for the projects
const projects = [
    {
      title: "How To Make Flyer Design",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit Awd And Lorem Ipsum...",
      image: "./public/projects1.jpg", // Replace with the actual image URL
      tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
    },
    {
      title: "How To Make Flyer Design",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit Awd And Lorem Ipsum...",
      image: "./public/projects2.jpg",
      tags: ["Typescript", "ReactJs", "NextJs", "CSS"]
    },
    {
        title: "How To Make Flyer Design",
        description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit Awd And Lorem Ipsum...",
        image: "./public/projects3.jpg",
        tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
    },
    {
        title: "How To Make Flyer Design",
        description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit Awd And Lorem Ipsum...",
        image: "./public/projects5.jpg",
        tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
    },
    {
        title: "How To Make Flyer Design",
        description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit Awd And Lorem Ipsum...",
        image: "./public/projects1.jpg",
        tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
    },
    {
        title: "How To Make Flyer Design",
        description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit Awd And Lorem Ipsum...",
        image: "./public/projects8.jpg",
        tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
    },
    // Add 4 more projects here...
  ];
  
  // Function to generate the project cards dynamically
  const generateProjectCards = () => {
    const container = document.getElementById('projectsDiv');
    
    projects.map((project) => {
      const projectCard = `
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}">
          <div class="project-card-content">
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-description">${project.description}</p>
            <div class="project-tags">
              ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
      container.innerHTML += projectCard;
    });
  };
  
  // Call the function to generate the cards on page load
  window.onload = generateProjectCards;
  


  // contact section
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    // Fetch the form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validation logic
    if (!name || !email) {
      alert('Please fill out the required fields: Name and Email');
      return; // Don't proceed if validation fails
    }
  
    // Log form data to the console
    console.log('Form Data Submitted:');
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
  
    // Show confirmation dialog
    if (confirm('Your message has been submitted. Do you want to continue?')) {
      // Reset form if user confirms
      document.getElementById('contact-form').reset();
    }
  });
  