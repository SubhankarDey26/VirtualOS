import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const colorWrap = (text, color) => React.createElement('div', { style: { color, whiteSpace: 'pre-wrap' } }, text)

    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => colorWrap('I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.', '#00CED1')
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => colorWrap(`Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express, Python, Django
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, Webpack, Vite
Cloud: AWS, Azure, Heroku`, '#FF69B4')
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => colorWrap(`1. Portfolio Website - React + Vite
2. E-commerce Platform - MERN Stack
3. Task Management App - Next.js
4. Real-time Chat App - Socket.io
5. Data Dashboard - React + Chart.js`, '#FFD700')
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => colorWrap(`Internship — Zidio Development (3 months)
  - Role: Intern (Backend Engineer)
  - Developed and optimized backend REST APIs improving performance and scalability.
  - Implemented secure user authentication, role-based access, and MongoDB interactions.
  - Collaborated with frontend team for API integration and feature delivery

Developer — USC KIIT (Tech Society)
  - Role: Backend Engineer
  - Worked on backend systems: API endpoints, database integration, and server-side logic for projects run by the tech society.

Senior Developer @ Tech Corp (2022 - Present)
  - Led development of 5+ React applications
  - Mentored junior developers

Full Stack Developer @ Web Solutions (2020 - 2022)
  - Built scalable APIs with Node.js
  - Designed responsive UIs with React`, '#7CFC00')
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => colorWrap(`Email: bnk.subhankar@gmail.com
Phone: +91 7047622800
Location: WestBengal Bankura`, '#1E90FF')
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/SubhankarDey26', '_blank')
                return colorWrap('Opening GitHub...', '#8A2BE2')
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => {
                const link = document.createElement('a')
                link.href = '/SubhankarResume.pdf'
                link.download = 'SubhankarResume.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                return colorWrap('Resume download started... Check your downloads folder! 📥', '#FF8C00')
            }
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => colorWrap(`LinkedIn: /in/subhankar-dey-617b4a243
Portfolio: ankurprajapati.dev`, '#C71585')
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => colorWrap(args.join(' '), '#00FA9A')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'subhankardey:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli