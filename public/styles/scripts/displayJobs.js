import { DevJobExperiencesEN, DevJobExperiencesFR,QaJobExperiencesEN, QaJobExperiencesFR } from "../constants/listjobs";
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

//function to change the Job base on Lang and url
function changeJobLang(jobExpFr, jobExpEn){
    document.addEventListener('DOMContentLoaded', () => {
        const languageSelector = document.getElementById('lang');
        languageSelector.addEventListener('change', (event) => {
            if (event.target.value === 'fr') {
                displayJobs(jobExpFr);
            } else {
                displayJobs(jobExpEn);
            }
        });
    
    
    
        // Display the default language (French) initially
        displayJobs(jobExperiencesFR);
    });
}

//permet de changer les informations en fonction de l'url, si QA ou DEV
function changeProfileInfo(){
    const host = window.location.hostname

    if (host === "dev.mambingolionel.com"){
        changeJobLang(DevJobExperiencesEN, DevJobExperiencesFR)

    }else if (host === "mambingolionel.com"){
        changeJobLang(QaJobExperiencesEN, QaJobExperiencesFR)
    }

}
