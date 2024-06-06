$(document).ready(function() {
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        //console.log(y)
        var x = $("#navFixed").position();
        console.log(x)
        if (x.top==700) {
            //alert('nok')
            $('#floatingMenu').css({"width": "100%",
            "top": "0px",
            "height": "50px",
            "position": "fixed",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "borde-radius": "0px",
            "margin": "0",
            "z-index": "105",
            "right": "0",
            "text-align": "center"});
            console.log("bonne position")

            const numbers = [1, 2, 3, 4, 5];

            for (const number of numbers) {
                $('.navigation').css({
                    "border-bottom": "0px"
                })
}
        
        
        } /*else {
            console.log("hi")
            $('floatingMenu').css({
                "width": "100px",
                "border-radius": "15px",
                "background-color": "$color-background",
               " margin-left": "20px",
                "position": "absolute",
                "top": "110px",
                "right": "25px",
                "z-index": "105",
                "transform": "scale(1)",
                "transition": "transform 300ms",
        })

        }  */      
    });
});