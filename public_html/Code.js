

/*function ChangeBackground()
{
    var myDate = new Date().getSeconds();
    
    
}*/



var arrSlyth = ['draco.jpg','Slytherin.jpg','green.jpeg','slyth.gif'];
var arrGryf = ['harry.jpg','griffyndor.jpeg','red.jpg','original.gif'];
setInterval(function(){
    
    let myDate = new Date().getSeconds();
    //Slytherin wins
    if (myDate > 0 && myDate <= 30 )
    {
        //document.body.style.background = 
        //document.getElementById("winner").innerHTML = "Slytherin Rules. Gryffindor Drools";
        document.getElementById("pictures").style.background = "url(" + arrSlyth[2] + " )";
        document.getElementById("banner").innerHTML = "Slytherin Rules. Gryffindor Drools!";
        document.getElementById("banner").style.color="silver";
        document.getElementById("container").style.background="url(" + arrSlyth[0] + " )";
        document.body.style.background="url(" + arrSlyth[3] + " )";
        document.getElementById("winner").style.color="silver";
        
        
    }
    // Gryffindor wins
     else if (myDate >= 31 && myDate < 60)
     {
        // document.body.style.background = "url(" + imgArray[1] + ")";
        //document.getElementById("winner").innerHTML = "Gryffindor Wins Again";
        document.getElementById("pictures").style.background = "url(" + arrGryf[2] + ")";
        document.getElementById("banner").innerHTML = "Gryffindor Wins Again!";
        document.getElementById("banner").style.color="gold";
        document.getElementById("container").style.background="url(" + arrGryf[0] + ")";
        document.body.style.background="url(" + arrGryf[3] + " )";
        document.getElementById("winner").style.color="gold";
        //document.body.style.backgroundSize="cover";
       // document.body.style.backgroundRepeat="no-repeat";

        
     }
    
},1000);

