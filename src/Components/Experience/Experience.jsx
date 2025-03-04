import React from 'react'
import { motion } from 'framer-motion'
import Reveal from '../Reveal/Reveal'
import './Experience.css'

const experiences = [
    {
        company: 'BS Computer Science',
        period: '2021 - Present',
        description: 'A comprehensive program covering software development, algorithms, data structures, databases, artificial intelligence, and cybersecurity.',
      },
      {
        company: 'Front-End Development',
        period: '2022',
        description: 'Learn to build stunning and responsive websites using HTML, CSS, and JavaScript. This course covers modern front-end frameworks like React and styling libraries like Tailwind CSS. ',
      },
      {
        company: 'Php Development',
        period: '2024',
        description: 'This course covered PHP from scratch, teaching how to build dynamic websites and applications.Learned the syntex of php.',
      },
     
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto experience'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Courses</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        
      <div id="tocontact"></div>
    </div>
  )
}

export default Experience