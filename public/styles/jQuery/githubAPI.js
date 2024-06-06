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
            //const description= key.description
            //divReals.textContent= "hello"
            //getGithApiPhoto(name)
            download()
        }

     }

     
 } 

 function download(){
    //const fileName = source.split('/').pop();
    var container = document.getElementById("carroussel-content"); // Récupération du conteneur

    var realist= document.createElement("div")
    var realistInfo= document.createElement("div")
    var realistContent= document.createElement("div")
    var realistType= document.createElement("div")
    var realistInfoTools= document.createElement("div")

    realist.classList.add('reaList')
    var imgSource = document.createElement("img")
    var cssString= "width: 480px; height: 350px; flex-shrink: 0; flex-grow: 1; text-align: center; margin-left: 20px; border: 1px solid #F5F5F5;border-radius: 10px;cursor: pointer;transform: scale(1);transition: transform 300ms;"
    //realist.setAttribute("style", cssString)
    imgSource.src= "../../assets/images/cloudbeds.png"
    //var realist = realist.appendChild(imgSource)

    realistInfo.classList.add('realist_info')

    realistContent.classList.add('realist_info_content')
    var pInfoContent= document.createElement("p")
    pInfoContent.textContent= "Groupomania"
    pInfoContent.setAttribute("style", "text-align: start; font-size: 26px; font-weight: bold;  margin-top: 5px;")
    realistContent.appendChild(pInfoContent)
    //realistContent.appendChild(realistContent1)

    realistInfoTools.classList.add('realist_info_tools')
    var pRealType= document.createElement("p")
    pRealType.setAttribute("style", "font-size:17px; font-weight:bold; color:#77C1EF")
    pRealType.textContent = "Projet"
    realistInfoTools.appendChild(pRealType)

    realistType.classList.add('realist_type')
    var imgLogo1= document.createElement("img")
    imgLogo1.src= "../../assets/images/icons8-android-os-48.png"
    var imgLogo2= document.createElement("img")
    imgLogo2.src="../../assets/images/icons8-docker-48.png"

    realistType.appendChild(imgLogo1)
    realistType.appendChild(imgLogo2)

    realistInfoTools.appendChild(realistType)
    realistContent.appendChild(realistInfoTools)
    realistInfo.appendChild(realistContent)
    realist.appendChild(imgSource)
    realist.appendChild(realistInfo)

    container.appendChild(realist);




    //var title= document.createElement("p")
    //title.textContent= name
    //title.setAttribute("style", "color:#77C1EF; font-family: sans-serif; font-size: 20px; margin-top:10px")
    //var cssString= "width: 480px; height: 350px; flex-shrink: 0; flex-grow: 1; text-align: center; margin-left: 20px; border: 1px solid #F5F5F5;border-radius: 10px;cursor: pointer;transform: scale(1);transition: transform 300ms;"
    //divContent.classList.add('reaList')
    //divContent.setAttribute("style",cssString);
    //el.setAttribute("style", "width: 100%; height:100%; border-radius: 10px")
	//el.setAttribute("src", `${source}`);
	//el.setAttribute("download", 'https://raw.githubusercontent.com/lionelruto/OhMyFood/main/black%20man%20at%20office.png');
	//divContent.appendChild(el);
    //divContent.appendChild(title)
    //divContent.addEventListener('mouseover', function(event) {
        //var divDescription= document.createElement("div")
        //var divVisitgit= document.createElement("button")
        //var divVisitSite= document.createElement("button")
        //divVisitSite.textContent="visiter le site"
        //divVisitgit.textContent= "Regarder le projet"
        //divVisitSite.setAttribute("style", "background-color: #FFDF00; border-radius: 35px;border:2px solid #ffffff; color:#ffffff")
        //divVisitgit.setAttribute("style", "background-color: #FFDF00; border-radius: 35px;border:2px solid #ffffff; color:#ffffff")
        //divDescription.setAttribute("style", " opacity:0.4; text-align:center; z-index:4; position:absolute; top:0; left:0; right:0; bottom:0; padding:20px; border-radius: 10px; font-family:sans-serif; font-size:20px; display:flex; flex-direction:column; align-items:center")
        //divDescription.textContent= description
        //divContent.appendChild(divDescription)
        //divDescription.appendChild(divVisitSite)
        //divDescription.appendChild(divVisitgit)
   // })
    //divReals.appendChild(divContent)

 	//el.click();
	//el.remove();
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