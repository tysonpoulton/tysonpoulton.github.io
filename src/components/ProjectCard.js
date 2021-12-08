import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = (props) => {
    const languageMap = (l, i, arr) => (i === arr.length - 1 ? l : `${l}, `);
    return (
        <div data-aos="flip-right" data-aos-duration="500">
            <article className="w-full flex flex-col items-start bg-white project-card">
                <span className="w-full">
                    <img className="img-container" src={props.src ? require(`../images/${props.src}`).default : ""} alt={props.name} />
                </span>
                <span className="title-link">
                    <span className="text-lg font-bold pl-1">{props.name}</span>
                    <span className="project-links">
                        <span className="project-links">
                            <a className="pr-2 no-underline link" href={props.code} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faCode} />
                            </a>
                            {props.live && (
                                <a className="link" href={props.live} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLink} />
                                </a>
                            )}
                        </span>
                    </span>
                </span>
                <span className="font-weight-300 italic">
                    {props.langs.map(languageMap)}
                </span>
            </article>
        </div>
    )
}

export default ProjectCard
