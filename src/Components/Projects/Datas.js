import project1 from "./Assets/RecipeWebsite.png";
import project2 from './Assets/Game.png';

export const projectData = [
  {
    id: 1,
    image: project1,
    name: "Food Recipe Website",
    description: "A beautifully designed recipe website that allows users to explore, save, and share their favorite recipes. With a simple, intuitive interface and powerful filtering options, it makes meal planning a breeze. From appetizers to desserts, this website is perfect for food lovers of all skill levels.",
    technologies: "HTML, CSS, JavaScript",
    category: 'web'
  },
  
  {
    id: 2,
    image: project2,
    name: "Puzzle Adventure Game",
    description: "A fun and engaging puzzle adventure game developed using Scratch. Players must solve challenging puzzles and explore new levels while uncovering secrets along the way. With user-friendly mechanics, it offers a thrilling experience for players of all ages.",
    technologies: "Scratch, Game Development",
    category: 'app'
  },
  
  {
    id: 3,
    image: project1,
    name: "Family Hardware Catalog",
    description: "A comprehensive catalog website designed for my parents' hardware store. The platform showcases a wide variety of building materials, tools, and home improvement products. With an easy-to-navigate interface, customers can quickly browse and learn more about products available at the store, including features like product categories and descriptions.",
    technologies: "HTML, CSS, JavaScript, React",
    category: 'web'
  },

  {
    id: 4,
    image: project2,
    name: "Home Improvement Game",
    description: "A fun and interactive game created with GDevelop, designed to engage players in home improvement challenges. Players will use tools and materials to complete renovation projects and upgrade homes, all while learning about different aspects of construction and design in a virtual environment.",
    technologies: "GDevelop, Game Development",
    category: 'other'
  },
];

export const projectNav = [
  { name: 'all' },
  { name: 'web' },
  { name: 'app' },
  { name: 'other' },
];
