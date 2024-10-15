const divReals= document.getElementById('mesReas')
const divImg= document.getElementById("imgLogo2")
const divImg1= document.getElementById("imgLogo1")
const contact= document.getElementById("contact")
const imgLogoContent= document.getElementById("imgLogoDiv")

 // Récupération des articles de l'API 
 async function getGithApi(){
     const response= await fetch(
         'https://api.github.com/users/lionelruto/repos',
         {mode: 'cors'},
         {
             method: 'GET',
             headers: {
                 'Accept': 'application/vnd.github.v3+json',
                 'Content-type': 'application/json',
                 'User-Agent': 'request',
                'Autorization': `Bearer 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` 
             }
         }
     );

     if(!response.ok){
     }
     if(response.status==200){
        const data= await response.json();
        for (const key of data) {
            const name= key.name
            const lang= key.language
            const url= key.html_url
            const langUrl= key.languages_url
            console.log(key)
            //const description= key.description
            //divReals.textContent= "hello"
            //getGithApiPhoto(name)
            console.log(langUrl)

            const langs= await getLanguages(langUrl)
            console.log(langs)
            download(name, lang, url, langs)
        }

     }

     
 } 

 function download(name, language, url, langs){
    //const fileName = source.split('/').pop();
    var container = document.getElementById("carroussel-content"); // Récupération du conteneur

    var realist= document.createElement("div")
    var realistInfo= document.createElement("div")
    var realistContent= document.createElement("div")
    var realistType= document.createElement("div")
    var realistInfoTools= document.createElement("div")

    var realistRedirect= document.createElement("a")
    realistRedirect.style.textDecoration = 'none';
    realistRedirect.style.color = 'inherit';
    realistRedirect.href = url

    realistRedirect.addEventListener("click", function(event) {
        event.preventDefault(); 
        var nouvellePage = this.getAttribute('href');
        window.open(nouvellePage, '_blank');
    });



    realist.classList.add('reaList')
    var imgSource = document.createElement("img")
    imgSource.setAttribute("class", "imgBlock")
    //realist.setAttribute("style", cssString)
    imgSource.src= "./../../assets/images/github_logo.png"
    //var realist = realist.appendChild(imgSource)

    realistInfo.classList.add('realist_info')

    realistContent.classList.add('realist_info_content')
    var pInfoContent= document.createElement("p")
    pInfoContent.textContent= name
    pInfoContent.setAttribute("style", "text-align: start; font-size: 26px; font-weight: bold;  margin-top: 5px;")
    realistContent.appendChild(pInfoContent)
    //realistContent.appendChild(realistContent1)

    realistInfoTools.classList.add('realist_info_tools')
    var pRealType= document.createElement("p")
    pRealType.setAttribute("style", "font-size:17px; font-weight:bold; color:#77C1EF")
    pRealType.textContent = "Projet"
    realistInfoTools.appendChild(pRealType)

    realistType.classList.add('realist_type')
    for (const lang in langs) {
        switch(lang){
            case 'CSS':
                var imgLogo1= document.createElement("img")
                imgLogo1.src= "./../../assets/images/icons8-css.svg"
                realistType.appendChild(imgLogo1)
                break;
            case 'HTML':
                var imgLogo1= document.createElement("img")
                var imgLogo2= document.createElement("img")
                imgLogo1.src= "./../../assets/images/icons8-html.svg"
                imgLogo2.src= "./../../assets/images/icons8-nodejs.svg"
                realistType.appendChild(imgLogo1)
                realistType.appendChild(imgLogo2)
                break;
            case 'Kotlin':
                var imgLogo1= document.createElement("img")
                var imgLogo2= document.createElement("img")
    
                imgLogo1.src= "./../../assets/images/icons8-kotlin.svg"
                imgLogo2.src= "./../../assets/images/icons8-android-os-48.png"
                realistType.appendChild(imgLogo1)
                realistType.appendChild(imgLogo2)

                break;
            case 'Dockerfile':
                var imgLogo1= document.createElement("img")
                imgLogo1.src= "./../../assets/images/icons8-docker-48.png"
                realistType.appendChild(imgLogo1)
                break;
            case 'JavaScript': 
                var imgLogo1= document.createElement("img")
                var imgLogo2= document.createElement("img")
                imgLogo1.src= "./../../assets/images/icons8-javascript.svg"
                imgLogo2.src= "./../../assets/images/icons8-react-js.svg"
                realistType.appendChild(imgLogo1)
                realistType.appendChild(imgLogo2)  
                break;
            case 'SCSS':
                var imgLogo1= document.createElement("img")
                imgLogo1.src= "./../../assets/images/icons8-sass-48.png"
                realistType.appendChild(imgLogo1)
                break;
            case 'Java':  
                var imgLogo1= document.createElement("img")
                imgLogo1.src= "./../../assets/images/icons8-java.svg"
                realistType.appendChild(imgLogo1) 
                break;      
                case 'RobotFramework':  
                var imgLogo1= document.createElement("img")
                imgLogo1.src= "./../../assets/images/robotframework-svgrepo-com.svg"
                realistType.appendChild(imgLogo1) 
                break;     
                case 'Gherkin':  
                var imgLogo1= document.createElement("img")
                imgLogo1.src= "./../../assets/images/Cucumber.svg"
                realistType.appendChild(imgLogo1) 
                break;   
                 
         
        }       
    }
    realistInfoTools.appendChild(realistType)
    realistContent.appendChild(realistInfoTools)
    realistInfo.appendChild(realistContent)
    realist.appendChild(imgSource)
    realist.appendChild(realistInfo)
    realistRedirect.appendChild(realist)
    container.appendChild(realistRedirect);
}

async function getLanguages(value){
    const response= await fetch(
        `${value}`, 
        {mode: 'cors'},
        {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Content-type': 'application/json',
               'Autorization': `Bearer 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` 
            }
        }
    );

    if(!response.ok){
    }
    if(response.status==200){
       const data= await response.json();
       //divReals.textContent= "hello"
       console.log(data)
       return data
       //console.log(data.download_url)

    }
} 


 async function getGithApiPhoto( value){
    const response= await fetch(
        `https://api.github.com/repos/lionelruto/${value}/contents/black man at office.png`,
        {mode: 'cors'},
        {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Content-type': 'application/json',
               'Autorization': `Bearer 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` 
            }
        }
    );

    if(!response.ok){
    }
    if(response.status==200){
       const data= await response.json();
       //divReals.textContent= "hello"
       download(data.download_url, "je suis la description qui est renseignée dans chaque vue de l element", value)
       //console.log(data.download_url)

    }
} 

async function animatedImgs (){
    document.addEventListener('DOMContentLoaded',()=>{
        const container= document.querySelector(".AboutMe")
        //divImg.src = "../../assets/images/cloudbeds.png"
        //divImg.classList.add("imgLogo2")
        //container.appendChild(divImg); 
        container.addEventListener('mouseenter', ()=>{

            if (!divImg.classList.contains("imgLogo2")){
                divImg.classList.add("imgLogo2")
                container.removeEventListener('mouseenter', arguments.callee);

            }
        })
    })
}

// Function to adjust visibility based on screen width
function adjustVisibility () {
    if (window.innerWidth < 1025) {
        contact.style.display= 'none'
        divImg1.style.display= 'none'
        imgLogoContent.style.display= 'none'
        divImg.style.visibility= 'hidden'
    }else if(window.innerWidth>=800 && window.innerWidth<=1024  ){
        contact.style.display= 'flex'
        divImg1.style.display= 'block'

    }else if(window.innerWidth > 1025) {
        divImg1.style.display= 'block'
        contact.style.display= 'flex'
        imgLogoContent.style.display= 'block'
        divImg.style.visibility= 'visible'

    }
};

// Adjust visibility on window resize
window.addEventListener('resize', adjustVisibility);
window.addEventListener('load', adjustVisibility);


//getGithApiPhoto("OhMyFood")

 getGithApi()
// Initial adjustment
adjustVisibility();
 animatedImgs()