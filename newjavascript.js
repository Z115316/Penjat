/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
            var vides = 7;
            var correcte = 0;
            var correctes = "";
            var dolentes = "";

            function comprovar() {
            var lletra = document.getElementById("valor").value;
                document.getElementById("valor").value = "";
                lletra = lletra.toLowerCase();  
         
            switch (lletra) {
                case "á":
                case "à":
                    lletra = "a";
                    break;
                case "é":
                case "è":
                    lletra = "e";
                    break;
                case "í":
                case "ï":
                    lletra = "i";
                    break;
                case "ó":
                case "ò":
                    lletra = "o";
                    break;
                case "ú":
                case "ü":
                    lletra = "u";
                    break;   
            }    
                if (((lletra >= "a") && (lletra <= "m")) || (lletra == "ç" ))
                {
                    alert("Has encertat!");
                    correcte = correcte + 1;
                    correctes = correctes + " " + lletra;
                    document.getElementById("correctes").innerHTML =  correctes;
                } 
                
                else if (((lletra >= "n") && (lletra <= "z")) || (lletra == "ñ" ))
                {
                    alert("Has fallat!");
                    vides = vides -1;
                        if (vides == 0){
                            alert("has fallat tots els intents");
                            AturaTot();
                        }
                        document.getElementById("vida").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + vides;
                        dolentes = dolentes + " " + lletra;
                        document.getElementById("incorrectes").innerHTML =  dolentes; 
                        MostraImg();
                           
                
                }
                
                else {
                    alert("caràcter incorrecte");
                }
            }
          
            function AturaTot() {
                document.getElementById("valor").disabled = true;
                document.getElementById("boto").disabled = true;
            }

               
    function amagaTot(){
                    
                document.getElementById("ahorcado_0").hidden = true;
                document.getElementById("ahorcado_1").hidden = true;
                document.getElementById("ahorcado_2").hidden = true;
                document.getElementById("ahorcado_3").hidden = true;
                document.getElementById("ahorcado_4").hidden = true;
                document.getElementById("ahorcado_5").hidden = true;
                document.getElementById("ahorcado_6").hidden = true;   
                }
                
                
    function MostraImg() {
     switch (vides)
     {

     case 6:
    document.getElementById("ahorcado_6").hidden = false; 
          break; 
     case 5:
     document.getElementById("ahorcado_5").hidden = false;
     document.getElementById("ahorcado_6").hidden = true; 
            break; 
     case 4:
     document.getElementById("ahorcado_4").hidden = false; 
     document.getElementById("ahorcado_5").hidden = true; 
             break; 
       case 3:
    document.getElementById("ahorcado_3").hidden = false;
    document.getElementById("ahorcado_4").hidden = true; 
          break;
     case 2:
    document.getElementById("ahorcado_2").hidden = false;
    document.getElementById("ahorcado_3").hidden = true; 
         break; 
     case 1:
    document.getElementById("ahorcado_1").hidden = false; 
    document.getElementById("ahorcado_2").hidden = true; 
            break;
         case 0:
    document.getElementById("ahorcado_0").hidden = false; 
    document.getElementById("ahorcado_1").hidden = true;
            break; 
     default:
    break;
            }
         } 



