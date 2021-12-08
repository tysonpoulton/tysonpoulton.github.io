import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export const SOCIAL_ITEMS = [
    {
        icon: faLinkedin,
        dest: "https://www.linkedin.com/in/tyson-poulton/"
    },
    {
        icon: faGithub,
        dest: "https://github.com/tysonpoulton"
    },
    {
        icon: faEnvelope,
        dest: "mailto:ty.poulton@gmail.com"
    },
    {
        icon: faFileAlt,
        dest: "PDF"
    }
];

export const TECHNOLOGIES = {
    "Front End": [
        {
            name: "Javascript",
            src: "https://img.icons8.com/color/96/000000/javascript.png",
            link: "https://www.javascript.com/",
        },
        {
            name: "React",
            src: "https://img.icons8.com/color/96/000000/react-native.png",
            link: "https://reactjs.org/",
        },
        {
            name: "Angular",
            src: "https://img.icons8.com/color/96/000000/angularjs.png",
            link: "https://angular.io/",
        },
        {
            name: "SASS",
            src: "https://img.icons8.com/color/96/000000/sass.png",
            link: "https://sass-lang.com/",
        },
        {
            name: "HTML5",
            src: "https://img.icons8.com/color/96/000000/html-5.png",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
            name: "CSS",
            src: "https://img.icons8.com/color/96/000000/css3.png",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
    ],
    "Back End": [
        {
            name: "Node",
            src: "https://img.icons8.com/color/96/000000/nodejs.png",
            link: "https://nodejs.org/en/",
        },
        {
            name: "Firebase",
            src: "https://img.icons8.com/color/96/000000/firebase.png",
            link: "https://firebase.google.com/",
        },
        {
            name: "Express",
            src: "https://cdn.iconscout.com/icon/free/png-96/express-9-1175170.png",
            link: "https://expressjs.com/",
        }
    ]
};

export const PROJECTS = [
    {
        name: "Fireside Chat",
        code: "https://github.com/tysonpoulton/fireside-chat",
        live: "https://tysonpoulton.github.io/fireside-chat/",
        src: "fireside-chat.png",
        langs: ["React", "Firebase"],
    },
    {
        name: "Portfolio Site (You're already on it!)",
        code: "https://github.com/tysonpoulton/",
        src: "portfolio-site.png",
        langs: ["React", "SASS", "TailwindCSS"],
    },
    {
        name: "Image Gallery",
        code: "https://github.com/tysonpoulton/image-gallery",
        live: "https://tysonpoulton.github.io/image-gallery/",
        src: "image-gallery.png",
        langs: ["React, TailwindCSS"],
    },
    {
        name: "Task Tracker",
        code: "https://github.com/tysonpoulton/task-tracker",
        src: "task-tracker.png",
        langs: ["React", "Node", "CSS"],
    },
    {
        name: "Lyrify",
        code: "https://github.com/tysonpoulton/lyrify",
        src: "spotify-clone.png",
        langs: ["React", "Node", "Express", "Bootstrap"],
    },
]