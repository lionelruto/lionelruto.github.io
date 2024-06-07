$(document).ready(function() {
    var paragraphCreated = false;
    var $breadcumb = $('#breadcumbs')
    var newDiv = $('<div></div>');
    var newDiv2 = $('<div></div>');
    var newDiv3 = $('<div></div>');
    var newIcon = $('<i></i>');
    //Afficher dynamiquement le menu flottan en fontion du scroll
    function handleFloatMenu() {
        $(document).scroll(function () {
            var y = $(this).scrollTop();
            //console.log(y)
            var x = $("#navFixed").position();
            console.log($breadcumb.css('visibility') === 'hidden')
            if (y>x.top && !paragraphCreated) {
    
                if($breadcumb.css('visibility') === 'hidden'){
                console.log('im hide so im fix')
                $('#floatingMenu').css({"width": "100%",
                 "top": "0px",
                 "position": "fixed",
                 "display": "flex",
                 "justify-content": "space-between",
                 //"align-items": "center",
                 "border-radius": "0px",
                "margin": "0",
                "z-index": "105",
                //"align-items": "center",
                //"margin-left": "80px",
                "flex-direction": "row",
                "background-color": "#77C1EF",
                "right": "0",
                //"text-align": "center",
                "height": "50px",
                "transform": "scale(1)",
                "transition": "transform 300ms"
               
            });
    
                $('.navigation0').hover(function(){
                    $('.navigation0 .navHov0').css({
                        "height": "27px",
                    })
                }, 
                function(){
                    $('.navigation0 .navHov0').css({
                        "height": "0px",
                    })
                });
    
                $('.navigation1').hover(function(){
                    $('.navigation1 .navHov1').css({
                        "height": "27px",
                    })
                }, 
                function(){
                    $('.navigation1 .navHov1').css({
                        "height": "0px",
    
                        
                    })
                });            
    
                $('.navigation2').hover(function(){
                    $('.navigation2 .navHov2').css({
                        "height": "27px",
                    })
                }, 
                function(){
                    $('.navigation2 .navHov2').css({
                        "height": "0px",
                    })
                });  
    
                $('.navigation3').hover(function(){
                    $('.navigation3 .navHov3').css({
                        "height": "27px",
                    })
                }, 
                function(){
                    $('.navigation3 .navHov3').css({
                        "height": "0px",
                    })
                });  
    
                $('.navigation4').hover(function(){
                    $('.navigation4 .navHov4').css({
                        "height": "27px",
                    })
                },
                function(){
                    $('.navigation4 .navHov4').css({
                        "height": "0px",
                    })
                });  
    
                $('#floatingMenu p').css({
                    "margin-top":"5px",
                    "font-size": "20px",
                    "font-weight": "bold",
                    "color": "#FFFFFF"
                })
    
                $('#floatingMenu p').hover(function(){
                    $(this).css({
                        "color": "#FFDF00"
                    });
                }, function(){
                    // Rétablir la couleur par défaut lorsque le survol est terminé
                    $(this).css({
                        "color": "#FFFFFF" // ou bien la couleur par défaut
                    });
                })
    
                $('.navigation0').css({
                    "border-bottom": "none"
                })
    
                $('.navigation1').css({
                    "border-bottom": "none"
                })
                $('.navigation2').css({
                    "border-bottom": "none"
                })
                $('.navigation3').css({
                    "border-bottom": "none"
                })
                $('.navigation4').css({
                    "border-bottom": "none"
                })
    
                $('#floatingMenu .navContaint').css({
                    "display":"flex",
                    "width": "100%",
                    "justify-content": "center",
                    "flex-direction": "row",
                    
                })
    
                $('#floatingMenu .navContaint .navContain-bloc').css({
                    "width": "14%",
                    "height":"100%"
                    
                })
    
    
                $('#floatingMenu .navigation0 .navHov0').css({
                    "visibility": "hidden",
                    "height": "80px",
                    "opacity":" 1",
                    "border-bottom": "2px solid #77C1EF"
                })
    
                $('.navigation0').hover(function(){
                    $('.navigation0 .navHov0').css({
                        "visibility": "hidden",
    
                    })
                }, 
                function(){
                    $('.navigation0 .navHov0').css({
                        "height": "0px",
                        "visibility": "hidden",
    
                    })
                });
    
                $('#floatingMenu .navigation1 .navHov1').css({
                    "visibility": "hidden",
                    "height": "80px",
                    "opacity":" 1",
                    "border-bottom": "2px solid #77C1EF"
                })
    
                $('.navigation1').hover(function(){
                    $('.navigation1 .navHov1').css({
                        "visibility": "hidden",
    
                    })
                }, 
                function(){
                    $('.navigation1 .navHov1').css({
                        "height": "0px",
                        "visibility": "hidden",
    
                    })
                });
    
                $('#floatingMenu .navigation2 .navHov2').css({
                    "visibility": "hidden",
                    "height": "80px",
                    "opacity":" 1",
                    "border-bottom": "2px solid #77C1EF"
                })
    
                $('.navigation2').hover(function(){
                    $('.navigation2 .navHov2').css({
                        "visibility": "hidden",
    
                    })
                }, 
                function(){
                    $('.navigation2 .navHov2').css({
                        "height": "0px",
                        "visibility": "hidden",
    
                    })
                });
    
                $('#floatingMenu .navigation3 .navHov3').css({
                    "visibility": "hidden",
                    "height": "80px",
                    "opacity":" 1",
                    "border-bottom": "2px solid #77C1EF"
                })
    
                $('.navigation3').hover(function(){
                    $('.navigation3 .navHov3').css({
                        "visibility": "hidden",
    
                    })
                }, 
                function(){
                    $('.navigation3 .navHov3').css({
                        "height": "0px",
                        "visibility": "hidden",
    
                    })
                });
    
                $('#floatingMenu .navigation4 .navHov4').css({
                    "visibility": "hidden",
                    "height": "80px",
                    "opacity":" 1",
                    "border-bottom": "2px solid #77C1EF"
                })
    
                $('.navigation4').hover(function(){
                    $('.navigation4 .navHov4').css({
                        "visibility": "hidden",
    
                    })
                }, 
                function(){
                    $('.navigation4 .navHov4').css({
                        "height": "0px",
                        "visibility": "hidden",
    
                    })
                });            
    
    
    
                $('#floatingMenu').hover(function(){
                    //Mousehover
                    $('#floatingMenu ').css({
                        "box-shadow": "2px 2px 15px #77C1EF",
                        "transform": "scale(1.02)",
                        "transition": "transform 300ms"
                    })
                }, 
                //Mouse leave
                function() {
                    $('#floatingMenu ').css({
                        "box-shadow": "2px 2px 15px #F2F2F2",
                        "transform": "scale(1)",
                        "transition": "transform 300ms"
                    })               
                });
                var img = document.createElement("img");
                img.src = "./../../assets/images/LM-logo/LM-logo/LM Blanc.png";
                img.style.width="40px"
                img.style.height="40px"
                img.style.marginLeft = "60px" 
                $('#floatingMenu').prepend(img); // Ajouter l'élément au début de #floatingMenu
                paragraphCreated = true;
                }
    
                
            
            } else if(y<x.top && paragraphCreated){
                if($breadcumb.css('visibility') === 'hidden'){
                    console.log('im hide and foat')
                    $('#floatingMenu').css({
                        "width": "100px",
                        "border-radius": "15px",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "space-between",
                        "box-shadow": "2px 2px 15px #F2F2F2",
                        "background-color": "#FFFFFF",
                        "margin-left": "20px",
                        "position": "absolute",
                        "top": "88px",
                        "right": "25px",
                        "padding": "15px",
                        "height": "75%",
                        "transform": "scale(1)",
                        "transition": "transform 300ms",
                    
                    
                    });
        
                    $('#floatingMenu').hover(function(){
                        //Mousehover
                        $('#floatingMenu ').css({
                            "box-shadow": "2px 2px 15px #77C1EF",
                            "transform": "scale(1.1)",
                            "transition": "transform 300ms"
                        })
                    }, 
                    //Mouse leave
                    function() {
                        $('#floatingMenu ').css({
                            "box-shadow": "2px 2px 15px #F2F2F2",
                            "transform": "scale(1)",
                            "transition": "transform 300ms"
                        })               
                    });
        
                    $('.navigation').css({
                        "text-align": "center",
                        "margin-bottom": "10px",
                        "cursor": "pointer",
                        
                    })
        
        
                    $('#floatingMenu p').css({
                        "margin-top":"5px",
                        "font-size": "15px",
                        "font-weight":"bold",
                        "color": "#77C1EF"
                    })
        
                    $('#floatingMenu p').hover(function(){
                        $(this).css({
                            "color": "#77C1EF"
                        });
                    }, function(){
                        // Rétablir la couleur par défaut lorsque le survol est terminé
                        $(this).css({
                            "color": "#77C1EF" // ou bien la couleur par défaut
                        });
                    })
        
        
                    $('#floatingMenu .navigation0 .navHov0').css({
                        "height": "80px",
                        "opacity":" 1",
                        "visibility":"hidden",
                        "border-bottom": "2px solid #77C1EF"
                    })
        
                    $('.navigation0').hover(function(){
                        $('.navigation0 .navHov0').css({
                            "content": "",
                            "border-width": "4px", 
                            "border-left-style": "solid", 
                            "color":"#77C1EF",  
                            "height": "0px",
                            "visibility": "visible",
                            "transition": "height 250ms linear",
                            "transform-origin": "50% 50%"
        
                        })
                    }, 
                    function(){
                        $('.navigation0 .navHov0').css({
                            "content": "",
                            "border-width": "4px", 
                            "border-left-style": "solid", 
                            "color":"#77C1EF",  
                            "height": "0px",
                            "visibility":"hidden",
                            "transition": "height 250ms linear",
                            "transform-origin": "50% 50%"
        
                        })
                    });
        
                    $('#floatingMenu .navigation1 .navHov1').css({
                        "height": "80px",
                        "opacity":" 1",
                        "visibility":"hidden",
                        "border-bottom": "2px solid #77C1EF"
                    })
        
                    $('.navigation1').hover(function(){
                        $('.navigation1 .navHov1').css({
                            "height": "80px",
                            "opacity":" 1",
                            "visibility": "visible",
                            "border-bottom": "2px solid #77C1EF",
                            "transition": "height 250ms linear",
                            "transform-origin": "50% 50%"
        
                        })
                    }, 
                    function(){
                        $('.navigation1 .navHov1').css({
                            "content": "",
                            "border-width": "4px", 
                            "border-left-style": "solid", 
                            "color":"#77C1EF",  
                            "height": "0px",
                            "visibility":"hidden",
                            "transition": "height 250ms linear",
                            "transform-origin": "50% 50%"
        
                        })
                    });
        
                    $('#floatingMenu .navigation2 .navHov2').css({
                        "height": "80px",
                        "opacity":" 1",
                        "visibility":"hidden",
                        "border-bottom": "2px solid #77C1EF"
                    })
        
                    $('.navigation2').hover(function(){
                        $('.navigation2 .navHov2').css({
                            "height": "80px",
                            "opacity":" 1",
                            "visibility": "visible",
                            "border-bottom": "2px solid #77C1EF",
                            "transition": "height 250ms linear",
                            "transform-origin": "50% 50%"
        
                        })
                    }, 
                    function(){
                        $('.navigation2 .navHov2').css({
                            "content": "",
                            "border-width": "4px", 
                            "border-left-style": "solid", 
                            "color":"#77C1EF",  
                            "height": "0px",
                            "visibility":"hidden",
                            "transition": "height 250ms linear",
                            "transform-origin": "50% 50%"
        
                        })
                    });
        
                    $('#floatingMenu .navigation3 .navHov3').css({
                        "height": "80px",
                        "opacity":" 1",
                        "visibility":"hidden",
                        "border-bottom": "2px solid #77C1EF"
                    })
        
                    $('.navigation3').hover(function(){
                        $('.navigation3 .navHov3').css({
                            "height": "80px",
                            "opacity":" 1",
                            "visibility": "visible",
                            "border-bottom": "2px solid #77C1EF",
                            "transition": "height 250ms linear",
                            "transform-origin": "50% 50%"
        
                        })
                    }, 
                    function(){
                        $('.navigation3 .navHov3').css({
                            "content": "",
                            "border-width": "4px", 
                            "border-left-style": "solid", 
                            "color":"#77C1EF",  
                            "height": "0px",
                            "visibility":"hidden",
                            "transition": "height 250ms linear",
                            "transform-origin": "50% 50%"
        
                        })
                    });
        
                    $('#floatingMenu .navigation4 .navHov4').css({
                        "height": "80px",
                        "opacity":" 1",
                        "visibility":"hidden",
                        "border-bottom": "2px solid #77C1EF"
                    })
        
                    $('.navigation4').hover(function(){
                        $('.navigation4 .navHov4').css({
                            "height": "80px",
                            "opacity":" 1",
                            "visibility": "visible",
                            "border-bottom": "2px solid #77C1EF",
                            "transition": "height 250ms linear",
                            "transform-origin": "50% 50%"
                        })
                    }, 
                    function(){
                        $('.navigation4 .navHov4').css({
                            "content": "",
                            "border-width": "4px", 
                            "border-left-style": "solid", 
                            "color":"#77C1EF",  
                            "height": "0px",
                            "visibility":"hidden",
                            "transition": "height 250ms linear",
                            "transform-origin": "50% 50%"
        
                        })
                    });
        
         
        
                    $('.navigation0').css({
                        "border-bottom": "2px solid #000000"
                    })
        
                    $('.navigation1').css({
                        "border-bottom": "2px solid #000000"
                    })
                    $('.navigation2').css({
                        "border-bottom": "2px solid #000000"
                    })
                    $('.navigation3').css({
                        "border-bottom": "2px solid #000000"
                    })
                    $('.navigation4').css({
                        "border-bottom": "2px solid #000000"
                    })
        
                    $('#floatingMenu .navContaint .navContain-bloc').css({
                        "width": "100%",
                        "height":"100%"
                        
                    })
        
        
                    $('.navContaint').css({
                        "display":"flex",
                        "flex-direction": "column",
                        "width": "100%",
                        "justify-content": "space-between",
                        
                    })
                    
                    $('#floatingMenu img').remove();
                    paragraphCreated = false;
                }
    
    
            }        
        });        
    }
    //gestion du breadcumb
    function handleBreadcumb() {
        $breadcumb.click(function() {
            //$('#floatingMenu').css('display', 'block');



            newDiv2.css({
                'width':'100%',
                'display':'flex',
                'height':'100%',
                'position':'fixed',
                'z-index':'104',
                'visibility':'visible',
                'top':'0'
            });

            newDiv3.css({
                'width':'100%',
                'background-color':'#706868',
                'height':'100%',
                'opacity':'0.5'
            })
            newIcon.text('clear')
            newIcon.addClass('material-icons filled')
            newDiv.attr('id', 'icon');
            newIcon.css({
                'font-size': '30px',
                'cursor':'pointer',
                'visibility': 'visible',
                'display':'block'
            })

            newDiv.css({
                'display': 'flex',
                'justify-content': 'flex-end',
                'width': '100%',

            })
            if($('#navContaint i.material-icons.filled:contains("clear")').length === 0){  //vérifier que l'icone clear ne s'affiche pas plusieurs fois
                newDiv.append(newIcon)
            }
            $('#navContaint').prepend(newDiv) //ajouter au début avec prepend au lieu de append 




                $('#floatingMenu').css({
                    'width': '300px',
                    'top': '0',
                    'left': '0',
                    'position': 'fixed',
                    'border-radius': '0',
                    'height': '100%',
                    'max-height': 'none',
                    'margin-left': '0',
                    'visibility':'visible',
                    'display': 'flex',
                    'justify-content': 'space-between',
                    'z-index': '105',
                    'flex-direction': 'column',
                    'background-color': 'rgb(255, 255, 255)',
                    'transform': 'scale(1)',
                    'transition': 'transform 300ms ease 0s',
                    'box-shadow': 'rgb(242, 242, 242) 2px 2px 15px',
                    'padding': '15px',
                })
    
                newDiv2.append($('#floatingMenu'));
                newDiv2.append(newDiv3)
                $('#main').prepend(newDiv2); // Ajouter newDiv2 au début du body pour qu'il soit visible

        });     
        
        newIcon.click(function (e) { 
            e.preventDefault();
            $('#floatingMenu').css({
                'visibility':'hidden'
            })
        
            newDiv2.css({
                'display':'none'
            })
            
        });
    } 

    //gestion dynamique des skills avec animation
    function handleSkills() {
        let skills = ["Android", "Docker", "Kubernetes", "MySQL", "Javascript", "Eclipse", "Git", "Jenkins", "GitLabs", "Jira", "Robot Framework", "Xray"];

        for (let i = 0; i < skills.length; i++) {
            let skillDiv = $(`.skillList .skills-${i + 1}`);
    
            skillDiv.hover(
                function () {
                    let p = document.createElement("p");
                    p.style.color = "#4078c0"; // or #FFDF00
                    p.style.position = "absolute";
                    p.style.bottom = "0";
                    p.style.margin = "0";
                    p.style.textAlign = "center";
                    p.style.width = "100%"; // Pour centrer le texte
                    p.textContent = skills[i];
                    $(this).append(p); // Utilisation de jQuery append
                },
                function () {
                    $(this).find("p").remove(); // Utilisation de jQuery pour trouver et supprimer
                }
            );
        }        
    }
    
    handleFloatMenu();
    handleSkills();
    handleBreadcumb();
});