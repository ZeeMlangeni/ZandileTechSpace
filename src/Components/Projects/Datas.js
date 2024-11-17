//imported images for the project
import recipe from "../../Assets/recipe.png";
import clean from "../../Assets/clean.jpg";
import game from "../../Assets/game1.png";
import material from "../../Assets/material.jpg";

// projectData an array of the different projects

export const projectData = [
  {
    id: 1,
    image: recipe,
    name: "Food Recipe Website",
    description:
      "A beautifully designed recipe website that allows users to explore, save, and share their favorite recipes. With a simple, intuitive interface and powerful filtering options, it makes meal planning a breeze. From appetizers to desserts, this website is perfect for food lovers of all skill levels.",
    technologies: "HTML, CSS, JavaScript",
    category: "web",
    role: "Frontend Developer",
    repoLink: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    image: game,
    name: "Puzzle Adventure Game",
    description:
      "A fun and engaging puzzle adventure game developed using Scratch. Players must solve challenging puzzles and explore new levels while uncovering secrets along the way. With user-friendly mechanics, it offers a thrilling experience for players of all ages.",
    technologies: "Scratch, Game Development",
    category: "other",
    role: "Game Developer",
    repoLink: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    image: material,
    name: "Family Hardware Catalog",
    description:
      "A comprehensive catalog website designed for my parents' hardware store. The platform showcases a wide variety of building materials, tools, and home improvement products. With an easy-to-navigate interface, customers can quickly browse and learn more about products available at the store.",
    technologies: "HTML, CSS, JavaScript, React",
    category: "web",
    role: "Frontend Developer",
    repoLink: "https://github.com/yourusername/project3",
  },
  {
    id: 4,
    image: clean,
    name: "SparklePro Cleaning Services",
    description:
      "A professional and user-friendly website created to showcase SparklePro's exceptional cleaning services. Our team specializes in residential and commercial cleaning, offering services such as deep cleaning, carpet care, window washing, and more.",
    technologies: "HTML, CSS, JavaScript",
    category: "app",
    role: "Web Developer",
    repoLink: "https://github.com/yourusername/project4",
  },
];



// projectNav an array of objects representing the navigation options for filtering projects and matches the categories.
export const projectNav = [
  { name: "all" },
  { name: "web" },
  { name: "app" },
  { name: "other" },
];
