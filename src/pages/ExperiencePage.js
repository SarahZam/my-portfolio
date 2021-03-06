import React from 'react';
import {Container,Row, Col} from "react-bootstrap";
import Hero from "../components/Hero";
import yolo from '../assets/images/exppic.png';
import csug from '../assets/images/csug.png';
import hci from '../assets/images/exphci.jpg';
import cs from '../assets/images/cs.jpg';
import ProjectCards from "../components/ProjectCards";
import ExperienceSection from "../components/ExperienceSection";

const exps = [
    {
        id: 0,
        company: 'Yolo Shadow',
        img:yolo,
        jobtitle: 'Software Engineering Intern',
        date: 'September 2020 - Current',
        description: [
                'Collaborated with team members to develop and deploy a cross-platform service built with ReactJS, Node.js, Express, and MongoDB (MERN stack) that allows users to log in, access personalized dashboards, book appointments, access application forms, and review information and updates.',
                'Collaborated with UI/UX designer to implement user-centered design making the platform accessible and easy to use.',
                'Collaborated with backend team to help create REST APIs for data storage and editing.'

        ]
    },
    {
        id: 1,
        company: 'University of Rochester, Computer Science Department',
        img: cs,
        jobtitle: 'Workshop Leader',
        date: 'August 2020 - Current',
        description:[
            'Conducted weekly hour-long workshops focused on introductory computer science concepts implemented in Java.',
            'Dedicated weekly office hours and graded exams.'
        ]
    },
    {
        id: 2,
        company: 'University of Rochester, Human-Computer Interaction Lab',
        img: hci,
        jobtitle: 'Research Assistant',
        date: 'October 2019 - May 2020',
        description:[
            'Analyzed statistical data using pandas framework and features extracted from audio-visual files by software such as openSMILE and openEAR in order to distinguish good and bad debate practices.',
            'Collaborated with a team of 3 to collect and annotate over 400 audio-visual files and used Python Libraries such as Pandas, Matplotlib, and NumPy to analyze the data.',
            'Graphed the numerical results using Excel and presented the statistical findings with PowerPoint.',
            'Co-designed and deployed the temporary website for outreach of participants using HTML, CSS and JavaScript.'
        ]
    }

]


function ExperiencePage(props) {

    const makeExps = (exps) => {
        return exps.map(exp => {
            return <ExperienceSection exp={exp} key={exp.id} />
        })
    }

    return(
        <div className="pb-5">
            <Hero title={props.title}/>
            {makeExps(exps)}
        </div>

    )
}

export default ExperiencePage;