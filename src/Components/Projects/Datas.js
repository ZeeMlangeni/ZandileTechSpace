/* import project1 from "../../Assets/placeholder.jpg" */
import recipe from '../../Assets/recipe.png'
import clean from '../../Assets/clean.jpg'
import game from '../../Assets/game1.png'
import material from '../../Assets/material.jpg'


export const projectData = [
  {
    id: 1,
    image: recipe,
    name: "Food Recipe Website",
    description: "A beautifully designed recipe website that allows users to explore, save, and share their favorite recipes. With a simple, intuitive interface and powerful filtering options, it makes meal planning a breeze. From appetizers to desserts, this website is perfect for food lovers of all skill levels.",
    technologies: "HTML, CSS, JavaScript",
    category: 'web'
  },
  
  {
    id: 2,
    image: game,
    name: "Puzzle Adventure Game",
    description: "A fun and engaging puzzle adventure game developed using Scratch. Players must solve challenging puzzles and explore new levels while uncovering secrets along the way. With user-friendly mechanics, it offers a thrilling experience for players of all ages.",
    technologies: "Scratch, Game Development",
    category: 'app'
  },
  
  {
    id: 3,
    image: material,
    name: "Family Hardware Catalog",
    description: "A comprehensive catalog website designed for my parents' hardware store. The platform showcases a wide variety of building materials, tools, and home improvement products. With an easy-to-navigate interface, customers can quickly browse and learn more about products available at the store, including features like product categories and descriptions.",
    technologies: "HTML, CSS, JavaScript, React",
    category: 'web'
  },

  {
    
      "id": 4,
      "image": clean,
      "name": "SparklePro Cleaning Services",
      "description": "A professional and user-friendly website created to showcase SparklePro's exceptional cleaning services. Our team specializes in residential and commercial cleaning, offering services such as deep cleaning, carpet care, window washing, and more. Clients can easily browse available services, book appointments, and learn about our commitment to quality and eco-friendly cleaning solutions.",
      "technologies": "Web Development, HTML, CSS, JavaScript",
      "category": "Service"
    
    
  },
];

export const projectNav = [
  { name: 'all' },
  { name: 'web' },
  { name: 'app' },
  { name: 'other' },
];
