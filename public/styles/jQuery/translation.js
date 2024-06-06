window.addEventListener('DOMContentLoaded', function() {
    // Déclencher manuellement l'événement de changement de langue au chargement de la page
    var selectElement = document.getElementById('lang');
    var event = new Event('change');
    selectElement.dispatchEvent(event);
});

document.getElementById('lang').addEventListener('change', function() {
    var selectElement = document.getElementById('lang');
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    

    var hey = document.getElementById('hey');
    var im = document.getElementById('im');
    var presentations = document.getElementById('presentations');
    var recruitMe = document.getElementById('recruitMe');
    var btncv = document.getElementById('btncv');

    var competences = document.getElementById('competences');
    var about = document.getElementById('about');
    var programmation = document.getElementById('programmation');
    var database = document.getElementById('database');
    var gestionP = document.getElementById('gestionP');
    var conception = document.getElementById('conception');
    var tests = document.getElementById('tests');
    var skills = document.getElementById('skills');

    var experience = document.getElementById('experience');

    var myServices = document.getElementById('myServices');
    var dev = document.getElementById('dev');
    var descDev = document.getElementById('descDev');
    var seo = document.getElementById('seo');
    var descSEO = document.getElementById('descSEO');
    var mobile = document.getElementById('mobile');
    var descMobile = document.getElementById('descMobile');
    var test = document.getElementById('test');
    var descTest = document.getElementById('descTest');

    var reals = document.getElementById('reals');

    var acceuilfloat = document.getElementById('acceuilfloat');
    var Aproposfloat = document.getElementById('Aproposfloat');
    var servicefloat = document.getElementById('servicesfloat');
    var realsfloat = document.getElementById('realsfloat');
    var contactfloat = document.getElementById('contactfloat');

    var acceuiFoot = document.getElementById('acceuiFoot');
    var aproposfoot = document.getElementById('aproposfoot');
    var serviceFoot = document.getElementById('serviceFoot');
    var realFoot = document.getElementById('realFoot');
    var contactFoot = document.getElementById('contactFoot');
    var menufoot = document.getElementById('menufoot');

    var titleReals = document.getElementById('realsTitle')
    var followMe = document.getElementById('followMe');

    var callme = document.getElementById('callme');
    var name = document.getElementById('name');
    var object = document.getElementById('object');
    var mail = document.getElementById('mail');
    var text = document.getElementById('text');
    var send = document.getElementById('send');






    if(selectedValue === 'fr') {
        console.log('Langue sélectionnée : Français');
        document.documentElement.lang == 'fr'
        hey.textContent = "Salut, ";
        im.textContent = "Je suis"; 
        presentations.textContent = "je suis un développeur web, Android et QA Engineer passionné par la création de solutions numériques innovantes. Fort d'une expérience dans le développement logiciel, je m'engage à produire des produits de qualité qui répondent aux besoins de mes utilisateurs.";
        recruitMe.textContent = "Me recruter";
        btncv.textContent = "Mon CV";
        
         competences.textContent = "Competences"
         about.textContent = "A propos de moi"
         programmation.textContent = "Programmation"
         database.textContent = "SGBD"
         gestionP.textContent = "Gestion des projets"
         conception.textContent = "Conception"
         tests.textContent = "Tests"
         skills.textContent = "Technologies"

         experience.textContent = "Experience"

         myServices.textContent = "Services"
          dev.textContent = "DEVELOPPEUR"
          descDev.textContent = "Doté d'une expertise approfondie en développement logiciel, je suis passionné par la création d'applications innovantes qui répondent aux besoins des utilisateurs tout en repoussant les limites de la technologie."
          seo.textContent = "SEO"
          descSEO.textContent = "Maîtrisant les arcanes du référencement et de l'optimisation web, je suis déterminé à propulser mes clients vers les sommets des classements de recherche, grâce à des stratégies efficaces et à une compréhension approfondie des algorithmes"
          mobile.textContent = "MOBILE APP"
          descMobile.textContent = "Avec une passion pour la mobilité et une solide expérience en développement d'applications mobiles, je suis déterminé à concevoir des expériences utilisateur exceptionnelles sur les plateformes Android et iOS"
          test.textContent = "Tests"
          descTest.textContent = "Expert en assurance qualité logicielle, je mets en œuvre des stratégies de test rigoureuses pour garantir la qualité et la fiabilité des applications et des sites web, offrant ainsi une expérience utilisateur optimale"
        
          titleReals.textContent = "Realisations"
        
          acceuiFoot.textContent = "Acceuil"
          aproposfoot.textContent = "A propos de moi"
          serviceFoot.textContent = "Services"
          realFoot.textContent = "Realisations"
          contactFoot.textContent = "Contact"
          menufoot.textContent = "Menu"

          acceuilfloat.textContent = "Acceuil"
           Aproposfloat.textContent = "A propos de moi"
           servicefloat.textContent = "Services"
           realsfloat.textContent = "Realisations"
            contactfloat.textContent = "Contact"

            followMe.textContent = "Me Suivre"
            callme.textContent = "Contact nous"

            name.placeholder = "Votre nom";
            object.placeholder = "Object";
            mail.placeholder = "Enter votre email";
            text.placeholder = "ECrivez ici";
            send.value= "Envoyer"


    } else if(selectedValue === 'en') {
        console.log('Selected Language: English');
        document.documentElement.lang == 'en'
        hey.textContent = "Hello, ";
        im.textContent = "I am"; 
        presentations.textContent = "I am a web developer, Android developer, and QA Engineer passionate about creating innovative digital solutions. With experience in software development, I am committed to producing high-quality products that meet the needs of my users.";
        recruitMe.textContent = "Hire Me";
        btncv.textContent = "My CV";

        competences.textContent = "Skills";
        about.textContent = "About Me";
        programmation.textContent = "Programming";
        database.textContent = "Database";
        gestionP.textContent = "Project Management";
        conception.textContent = "Design";
        tests.textContent = "Tests"
        skills.textContent = "Technologies";

        experience.textContent = "Experience"

        myServices.textContent = "Services";
        dev.textContent = "DEVELOPER";
        descDev.textContent = "With deep expertise in software development, I am passionate about creating innovative applications that meet user needs while pushing the boundaries of technology.";
        seo.textContent = "SEO";
        descSEO.textContent = "Mastering the intricacies of search engine optimization and web optimization, I am determined to propel my clients to the top of search rankings through effective strategies and a deep understanding of algorithms.";
        mobile.textContent = "MOBILE APP";
        descMobile.textContent = "With a passion for mobility and a solid background in mobile app development, I am committed to designing exceptional user experiences on both Android and iOS platforms.";
        test.textContent = "Testing";
        descTest.textContent = "As a software quality assurance expert, I implement rigorous testing strategies to ensure the quality and reliability of applications and websites, thus providing an optimal user experience.";

        titleReals.textContent = "Portfolio"


        acceuiFoot.textContent = "Home";
        aproposfoot.textContent = "About Me";
        serviceFoot.textContent = "Services";
        realFoot.textContent = "Portfolio";
        contactFoot.textContent = "Contact";
        menufoot.textContent = "Menu"

        acceuilfloat.textContent = "Home";
        Aproposfloat.textContent = "About Me";
        servicefloat.textContent = "Services";
        realsfloat.textContent = "Portfolio";
        contactfloat.textContent = "Contact";

        followMe.textContent = "Follow Me"
        callme.textContent = "Contact us"

        name.placeholder = "Your name";
        object.placeholder = "Object";
        mail.placeholder = "Enter your email";
        text.placeholder = "Write here";
        send.value = "Send";
    }
});
