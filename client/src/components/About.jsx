import React from "react"

const About = () => {
  return (
    <div
      id="about"
      className="pt-5 bg-gray-100 px-4 flex  justify-center lg:h-[700px]"
    >
      <div className="h-full hidden md:flex items-end justify-end grow">
        <img
          src="./assets/laptop-man.png"
          alt="laptop-man"
          className="h-full"
        />
      </div>
      <div className="lg:h-full flex flex-col justify-center lg:w-1/2 md:pr-12 lg:pl-32">
        <div className="lg:w-10/12 text-justify">
          <h1 className="font-bold mb-10 text-5xl text-left">
            A propos de moi
          </h1>
          <p>
            Bonjour ! Je suis un jeune passionné de développement web et
            application mobile, en quête de beaux projets.
          </p>
          <br />
          <p>
            Récemment diplômé en tant que Full Stack Developper Javascript, je
            souhaite continuer pour une seconde année en alterance en tant que
            concepteur développeur d’applications.
          </p>

          <a
            href="./CV_Alternance_HUET_Jimmy.pdf"
            target="_blank"
            className="h-10 flex items-center justify-center my-4 w-full md:w-52 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded"
          >
            Consulter mon CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
