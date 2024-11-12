
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Section from './Components/About-section/Section';
import Skills from './Components/Skills/Skills';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';

import Project from './Components/Projects/Project';



function App() {


  return (



<div className="app" >
 {/*     <h1>hello world</h1>{/**for testing purposes */} 
     <Header/>
     <Hero/>
     <hr/>
     <Section/>
     <hr/>
     <Skills/>
     <hr/>
     <h1>Projects</h1>
     <button className='filter-btn'>All Projects</button>
      <button className='filter-btn'>Web programming </button>
      <button className='filter-btn'>Others</button>
     <Project image={projectData[0].image}  
     name={projectData[0].name}  
     
     description={projectData[0].description}
     technologies={projectData[0].technologies}
     />

<Project  image={projectData[1].image}  
 name={projectData[1].name}  
     
     description={projectData[1].description}
     technologies={projectData[1].technologies}
     />

<Project image={projectData[2].image}  
name={projectData[2].name}  
     
     description={projectData[2].description}
     technologies={projectData[2].technologies}

     
     />

<Project image={projectData[3].image}  
name={projectData[3].name}  
     
     description={projectData[3].description}
     technologies={projectData[3].technologies}

  
     />
     <button className='all-btn'>View All Projects</button>

     <hr/>

     <Form/>
   
     <Footer/>

    </div>



   );
}

export default App;
