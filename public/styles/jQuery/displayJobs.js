//import { jobExperiencesEN, jobExperiencesFR } from "../../media/constants/listjobs";
function displaySkills(skills) {
    return skills.map(skill => `<div class="realist_type"><p>${skill}</p></div>`).join('');
}
function displayJobs(jobs) {
    const jobList = document.getElementById('experience_bloc');
    jobList.innerHTML = ''; // Clear any existing content

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        const jobSkills= document.createElement('div')
        jobSkills.className= "techSkillList";
        jobSkills.style.display = "flex";
        jobElement.className = 'experience_bloc_content';
        const content = document.getElementById('techContent')
        const skillsHTML = displaySkills(job.jobSkills);
        jobElement.innerHTML = `
            
            <img src="${job.jobImg}" style="border-radius: 10px; height: 50px; width: 50px;" alt="">
            <div id="techContent" style="margin-left: 20px;">
                <div style="">
                    <p style="font-weight: bold; font-size: medium; color: #191919;">${job.jobTitle}</p>
                    <p style="color: #191919;">${job.jobCompany}</p>
                    <p style="color: #666666;">${job.jobPeriod}</p>
                </div>
                <p>${job.jobDescription}</p>
                <div class="techSkillList" style="display: flex; ">
                    ${skillsHTML}
                </div>
                <div>

                </div>

                <hr style="margin-top: 20px;"/>
            </div>
        `;
        jobList.appendChild(jobElement);
        //content.appendChild(jobSkills)
        
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('lang');
    languageSelector.addEventListener('change', (event) => {
        if (event.target.value === 'fr') {
            displayJobs(jobExperiencesFR);
        } else {
            displayJobs(jobExperiencesEN);
        }
    });



    // Display the default language (French) initially
    displayJobs(jobExperiencesFR);
});
    const jobExperiencesFR = [
        {
            "jobImg": "./assets/images/logo_NTB.jpg",
            "jobTitle": "Full-stack Developer",
            "jobCompany": "NTB entreprise",
            "jobContratType": "CDD",
            "jobPeriod": "Jan 2022 - Present",
            "jobDescription": "Designed and developed robust web applications for clients across various industries, employing Agile methodologies to ensure timely and efficient delivery, collaborated with design teams to create engaging and intuitive user interfaces, integrating responsive design elements, developed backend functionalities using Laravel, optimizing performance with complex SQL queries, implemented automated testing to ensure code quality and reduce bugs in production.",
            "jobSkills": ["Javascript", "Node Js", "Postman", ,"React Js", "HTML", "Python", "CSS", "Jira", "Laravel", "Docker", "Git", "Typescript", "MongoDB", "Kubernetes", "Magento", "MYSQL", "WordPress"]
        },
        {
            "jobImg": "./assets/images/logo_Ubix.jpeg",
            "jobTitle": "Software Engineer",
            "jobCompany": "Ubix-group",
            "jobContratType": "CDI",
            "jobPeriod": "Jan 2020 - Nov 2023 . 3 yrs 11 mos",
            "jobDescription": "Spearhead architectural design, ensuring our systems are robust and meet both current and future needs, develop high-quality applications using technologies like JavaScript (React, Node.js), Java, and Python, focusing on creating seamless user experiences and efficient backend services, mentor junior developers, fostering a collaborative team environment and enhancing overall performance through code reviews and knowledge sharing, work within Agile teams to deliver features on time, actively participating in sprint planning, daily stand-ups, and retrospectives, champion best practices in testing, including test-driven development (TDD) and continuous integration/continuous deployment (CI/CD), to maintain high software quality standards, collaborate closely with product managers and designers to define requirements and translate them into technical specifications, I am passionate about leveraging technology to solve complex problems and continuously improving our software development practices.",
            "jobSkills": ["Javascript", "Node Js", "AWS","Kotlin","Postman", ,"React Js", "HTML", "Python", "CSS", "Jira", "Laravel", "Docker", "Git", "Jenkins","Typescript", "MongoDB", "Kubernetes", "Magento", "MYSQL", "WordPress"]
        },
        {
            "jobImg": "./assets/images/Logo_OpenClassrooms.png",
            "jobTitle": "Student Mentor - web and android development",
            "jobCompany": "OpenClassrooms",
            "jobContratType": "Self-employed",
            "jobPeriod": "Mar 2021 - May 2023 · 2 yrs 3 mos",
            "jobDescription": "- Rédaction de la note de cadrage du projet - Guider et conseiller les étudiants dans la réalisation des projets - Inspirer les étudiants par l’expérience vécue sur le métier - Suivi de la progression des étudiants au fil des sessions de mentorat - Accompagner les étudiants à surmonter les difficultés rencontrées dans les projets à réaliser Evaluer le travail des étudiants",
            "jobSkills": ["Javascript", "Node Js", "HTML5", "CSS3", "JAVA", "Kotlin"]
        },
        {
            "jobImg": "./assets/images/logo_Empty.png",
            "jobTitle": "Junior Full stack developper",
            "jobCompany": "Alma metrics",
            "jobContratType": "Intership",
            "jobPeriod": "Mar 2018 - Aou 20219 · 1 yrs 6 mos",
            "jobDescription":"Assisted in the development of web applications using HTML, CSS, and JavaScript for the frontend, and Node.js and Express for the backend, ensuring responsive and user-friendly designs, Database Management: Worked with databases such as MongoDB and MySQL to design and implement data models, optimizing queries for performance and scalability, Version Control: Utilized Git for version control, participating in collaborative coding practices and code reviews to enhance code quality and maintainability, Agile Methodologies: Actively participated in Agile ceremonies, including daily stand-ups and sprint planning, contributing to a fast-paced development environment, API Integration: Helped integrate third-party APIs, enabling seamless data exchange and enhancing application functionality",
            "jobSkills": ["Javascript", "Node Js", "HTML5", "CSS3", "JAVA", "Kotlin"]
        },
    ];
    
    const jobExperiencesEN = [
        {
            "jobImg": "./assets/images/gozem-logo.png",
            "jobTitle": "QA Engineer",
            "jobCompany": "Gozem - Africa's Super App",
            "jobContratType": "",
            "jobPeriod": "Aug 2022 - Present",
            "jobDescription": "Improve the test automation experience at Gozem by enhancing tools/scripts, test coverage, and/or code structure, and automate repeated manual tasks to improve self/stream and productivity; Debug and analyze the bugs in the application, helping developers in arriving at the root cause with the help of our head of tech; Manage testing and delivery of your own tasks (manual testing); Participate in product discussions to improve our features; Take responsibility for the entire life cycle of your stories: development, test, production, and subsequent fixes and improvements with the guidance of head of tech; Write concise, comprehensive, detailed test plans, and review the test cases/test plans written by peers; Work closely with the Product team right from the inception of features; Understand business and product requirements as related to payments and the existing service architecture; gain a deeper understanding of the domain.",
            "jobSkills": ["Javascript", "Node Js", "Postman", "Lambda test", "Python", "Robot framework", "Jira"]
        },
        {
            "jobImg": "./assets/images/Logo_OpenClassrooms.png",
            "jobTitle": "Student Mentor - web and android development",
            "jobCompany": "OpenClassrooms",
            "jobContratType": "Self-employed",
            "jobPeriod": "Mar 2021 - May 2023 · 2 yrs 3 mos",
            "jobDescription": "- Writing the project scoping note - Guiding and advising students in the realization of projects - Inspiring students with lived experience in the field - Monitoring student progress throughout mentoring sessions - Helping students overcome challenges encountered in projects - Evaluating student work",
            "jobSkills": ["Javascript", "Node Js", "HTML5", "CSS3", "JAVA", "Kotlin"]
        },
        {
            "jobImg": "./assets/images/orangeCM.png",
            "jobTitle": "Information Systems Engineer - Offer and Service Qualification",
            "jobCompany": "Orange Cameroun",
            "jobContratType": "",
            "jobPeriod": "Dec 2019 - Aug 2022 . 2 yrs 9 mos",
            "jobDescription": "Analyzing Business requirements (Marketing and Commercial Directorate) ▪ Writing test cases ▪ Designing the automation schema ▪ Setting up the application architecture to ensure it integrates well with the existing system ▪ TDD practices ▪ Using best practices (SOLID, Design patterns) to ensure good code quality for easier maintenance and scalability ▪ Integrating third-party platform APIs, USSD, WEB, IN ▪ Developing automation paths and creating automation scripts with KaptivateTesting ▪ Writing Macros ▪ Using GIT for version control ▪ Performing regression testing ▪ Level 2 support on IN (intelligent network) platforms",
            "jobSkills": ["KapptivateTesting", "PHP", "Appium", "Xray", "Python", "Robot framework", "SOAP UI"]
        },
    ];
//displayJobs(jobExperiencesFR);