"use strict";
(function(){
    let heures = 12;
    let minutes = 0;
    let secondes = 0;
    window.addEventListener("load",main)
    function main(){
        // afficherHeure();
        setInterval(incrementerTemps, 1000)
    }
    function afficherHeure() {
    //   const now = new Date();
    //   let h = now.getHours().toString().padStart(2, '0');
    //   let m = now.getMinutes().toString().padStart(2, '0');
    //   let s = now.getSeconds().toString().padStart(2, '0');
      let h = heures.toString().padStart(2, '0');
      let m = minutes.toString().padStart(2, '0');
      let s = secondes.toString().padStart(2, '0');
      id('montre').textContent = `${h}:${m}:${s}`;
    }
    function incrementerTemps() {
      secondes++;              

      if (secondes === 60) {   
        secondes = 0;          
        minutes++;            
      }
      if (minutes === 60) {    
        minutes = 0;           
        heures++;              
      }

      if (heures === 24) {     
        heures = 0;            
      }

      afficherHeure();         
    }
    function id(id){
        return document.getElementById(id);
    }
    function qs(selector){
        return document.querySelector(selector);

    }
    function qsa(selector){
        return document.querySelectorAll(selector)
    }
    function gen(tagname){
        return document.createElement(tagname);
    }
})();