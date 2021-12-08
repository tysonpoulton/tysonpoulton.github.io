import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../constants'


const Projects = () => {
    return (
        <section id="projects" className="project-container pt-20 w-screen bg-white">
            <div className="flex justify-center flex-wrap">
                {PROJECTS.map((project, id)=> <ProjectCard key={id} {...project} />)}
            </div>
        </section>
    )
}

export default Projects
