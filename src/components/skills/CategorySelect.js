import React, { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../../context/Category';
import { TECHNOLOGIES } from "../../constants";
import { Transition, SwitchTransition } from 'react-transition-group';
import styled  from "styled-components";
import Skill from "./Skill";

const FadeDiv = styled.div`
  transition: 0.5s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;

const FadeTransition = ({ children, ...rest }) => (
    <Transition {...rest}>
      {state => <FadeDiv state={state}>{children}</FadeDiv>}
    </Transition>
);

const Technologies = ({ categoryTransition }) => {
    const [category] = useContext(CategoryContext);
    const [skills, setSkills] = useState(TECHNOLOGIES[category]);
  
    useEffect(() => {
      setSkills(TECHNOLOGIES[category]);
    }, [category]);

    return (
        <SwitchTransition>
            <FadeTransition
                key={categoryTransition ? "Front End" : "Back End"}
                timeout={100}
                unmountOnExit
                mountOnEnter
            >
                <ul className="technologies">  
                    {skills.map((skill, id) => (
                        <Skill key={id} {...skill}/>
                    ))}
                </ul>
            </FadeTransition>
        </SwitchTransition>
    );
};

const CategorySelect = () => {
    const CATEGORIES = ["Front End", "Back End"];
    const [category, setCategory] = useContext(CategoryContext);
    const [categoryTransition, setCategoryTransition] = useState(false);

    return (
        <div>
            <div className="category-container flex flex-row justify-center mt-20 mb-20 font-semibold" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000"  data-aos-mirror="true">
                {CATEGORIES.map((cat) => (
                    <h2 className={`cursor-pointer ${ category === cat ? 'underline' : '' }`} 
                        key={cat} 
                        onClick={() => {
                            setCategory(cat);
                            setCategoryTransition(!categoryTransition);
                        }}
                    >
                        {cat}
                    </h2>
                ))} 
            </div> 
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="0" data-aos-mirror="true">   
                <Technologies categoryTransition={categoryTransition} />
            </div>
        </div>
    );
};

export default CategorySelect;