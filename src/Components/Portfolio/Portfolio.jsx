import React from 'react';
import project1 from "../../assets/project-1.png"
import project2 from "../../assets/project-2.png"
import project4 from "../../assets/project-4.png"
import project5 from "../../assets/project-3.png"
import project6 from "../../assets/project-5.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from '../Reveal/Reveal';

const projects = [
    {
      img: project1,
      title: "Youvid",
      description: "Video platform containing videos of different categories.",
      links: {
        site: "https://basicyouvid.netlify.app/",
        github: "https://github.com/Malik-Sameer/Youvid.git",
      },
    },
    {
      img: project2,
      title: "Aims Lahore",
      description: "A demo website for university using React.js",
      links: {
        site: "https://aimslahore.netlify.app/",
        github: "https://github.com/Malik-Sameer/Aims.git",
      },
    },
    {
      img: project4,
      title: "Bliss Makeup",
      description: "An e-commerce platform for selling product of a specific brand",
      links: {
        site: "https://codepen.io/Muhammad-Sameer-the-typescripter/pen/LYMeyLy",
        github: "https://github.com/Malik-Sameer/Makeup-website.git",
      },
    },
    {
      img: project5,
      title: "Movies Box",
      description: "Front-end of a movie playing website which is completely responsive",
      links: {
        site: "https://codepen.io/Muhammad-Sameer-the-typescripter/pen/oNmYVPN",
        github: "https://github.com/Malik-Sameer/Moviesbox.git",
      },
    },
    {
      img: project6,
      title: "Sneakers",
      description: "Front-end of an e-commerce website specifically selling shoes",
      links: {
        site: "https://codepen.io/Muhammad-Sameer-the-typescripter/pen/mdagqML",
        github: "https://github.com/Malik-Sameer/Shoes.git",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300' target='blank'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300' target='blank'> 
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio