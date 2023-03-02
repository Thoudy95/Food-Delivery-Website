var mysound = document.getElementById("mysound");
        var icon = document.getElementById("icon");
 
     
        icon.onclick = function() 
           { if (mysound.paused) {
 
            
                mysound.play();
                icon.src =
"../img/16427.png";
            } else {
                
 
                    mysound.pause();
                    icon.src =
    "../img/play.png";
                
            }
        }