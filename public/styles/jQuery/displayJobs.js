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
            "jobImg": "./assets/images/gozem-logo.png",
            "jobTitle": "QA Engineer",
            "jobCompany": "Gozem - Africa's Super App",
            "jobContratType": "",
            "jobPeriod": "Aug 2022 - Present",
            "jobDescription": "Améliorer l'expérience d'automatisation des tests chez Gozem en améliorant les outils/scripts, la couverture des tests, et/ou la structure du code, et automatiser les tâches manuelles répétées pour améliorer la productivité ; Déboguer et analyser les bugs dans l'application, en aidant les développeurs à arriver à la cause profonde avec l'aide de notre chef de la technologie ; Gérer les tests et la livraison de vos propres tâches (tests manuels) ; Participer aux discussions sur les produits pour améliorer nos fonctionnalités ; Prendre la responsabilité de l'ensemble du cycle de vie de vos histoires : développement, test, production, et corrections et améliorations ultérieures avec l'aide du chef de la technologie ; Rédiger des plans de test concis, complets et détaillés, et examiner les cas de test/plans de test rédigés par les pairs ; Travailler en étroite collaboration avec l'équipe produit dès le début des fonctionnalités ; Comprendre les exigences commerciales et produit en ce qui concerne les paiements et l'architecture de service existante ; approfondir la compréhension du domaine.",
            "jobSkills": ["Javascript", "Node Js", "Postman", "Lambda test", "Python", "Robot framework", "Jira"]
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
            "jobImg": "./assets/images/orangeCM.png",
            "jobTitle": "Ingénieur SI qualification des offres et services",
            "jobCompany": "Orange Cameroun",
            "jobContratType": "",
            "jobPeriod": "Dec 2019 - Aug 2022 . 2 yrs 9 mos",
            "jobDescription": "Analyse des besoins du Business (Direction Marketing et Commerciale) ▪ Rédaction des cas de tests ▪ Conception du schéma d’automatisation Page 2 sur 5 ▪ Mise en place de l’architecture de l’application pour s’assurer qu’il s’intègre bien avec celle en place. ▪ Pratiques TDD ▪ Utilisation des best pratiques (SOLID, Design patterns) pour garantir la bonne qualité du code afin de faciliter la maintenance et l’évolutivité ▪ Intégration des API des plateformes tierces, USSD, WEB, IN ▪ Développement des parcours d’automatisation et création des scripts d’automatisation avec KaptivateTesting ▪ Rédaction des Macros ▪ Utilisation de GIT pour la gestion de versioning du Code ▪ Test de non régressions ▪ Support niveau 2 sur les plateformes IN (intelligent network)",
            "jobSkills": ["KapptivateTesting", "PHP", "Appium", "Xray", "Python", "Robot framework", "SOAP UI"]
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