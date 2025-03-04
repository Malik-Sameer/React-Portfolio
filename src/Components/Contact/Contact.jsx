import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "../Reveal/Reveal"
import './Contact.css'

const Contact = () => {
  const [result, setResult] = React.useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        setResult("Sending....")
        const formData = new FormData(event.target);
      
        fetch("/", {
          method: "POST",
          body: new URLSearchParams(formData).toString(),
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
          .then(() => {
            setResult("Email sent Successfully");
            event.target.reset();      
          })
          .catch((error) => console.error("Form submission error", error));
          console.log([...formData.entries()]);
      };
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                       I am a passionate and dedicated Computer Science student with a strong desire to contribute to the field of software development. Through my academic studies and hands-on experience, I have developed a solid foundation in programming, problem-solving, and algorithm design. I am constantly seeking opportunities to further expand my knowledge and skills in this dynamic industry.
                    </p>
                </div>

                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">10
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Projects</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">2
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>years of experience</span></p>
                    </div>

                </div>

            </div>
          <div className="form">
            <form
            name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}
                className=" max-w-6xl p-5 md:p-12 pb-1"
                id="form"
            >
            <input type="hidden" name="form-name" value="contact" />
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 relative"
            >
              Send Message
            </button>
          </form>
          <span className="contact-result">{result}</span> 
          </div>
         
        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact