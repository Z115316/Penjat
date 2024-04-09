/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    
       
            var Paraula = [];
            var Lletres = ["_", "_", "_", "_", "_", "_", "_"];
            var vides = 7;

            
            var paraules = ["cordes", "fetge", "forca", "jutges",
                "jutjat", "mengen", "penjat", "quinta", "setze"];

            var pistes = ["A la quinta forca", "A ca un penja, no hi anomenis cordes",
                          "Setze jutges d'un jutjat mengen fetge d'un penjat"];
            
            var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];

            //Escull una paraula aleatoriament
            var aleatori = Math.floor(Math.random() * paraules.length);
            var paraula = paraules[aleatori];
            var pista = pistes[paraulespistes[aleatori]];         

            //Marcam cada lletra amb un "_"
            for (var i = 0; i < paraula.lenght; i++) {
                Paraula[i] = "_";
            }
            
            var correcte = 0;
            // var correctes = "";
            var dolentes = "";


            function comprovar() {
                    alert(paraula);
         
            
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
                // if (((lletra >= "a") && (lletra <= "m")) || (lletra == "ç" ))
                var pos = paraula.indexOf(lletra);
                if ((pos != -1) && (lletra != ""))
                {   
                    alert("Has encertat!");
                    
                    //Afegim lletra a Paraula i actualitzam la pantalla.
                    for (var i = pos; i < paraula.lenght; i++) {
                     if (paraula[i] == lletra){
                       Paraula[i] = lletra;  
                       
                     }
                    }
                                     
                    document.getElementById("cheer").play();
                    correcte = correcte + 1;
                    // correctes = correctes + " " + lletra;
                    document.getElementById("correctes").innerHTML = Paraula;
                } 
                
                else if (((lletra >= "a") && (lletra <= "z")) || 
                        (lletra == "ñ" ) || (lletra == "ç"))
                {
                    alert("Has fallat!");
                     document.getElementById("boom_cloud").play();
                        document.getElementById("vida").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + vides;
                        // dolentes = dolentes + " " + lletra;
                        Lletres[7 - vides] = lletra;
                        vides = vides -1;
                                                
                        document.getElementById("incorrectes").innerHTML =  Lletres; 
                        MostraImg();                                          
                }
                
                else {
                    alert("caràcter incorrecte");
                }
                
            if (vides == 0){
                alert("has fallat tots els intents");
                document.getElementById("cat-fight").play();
                AturaTot();
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
         var seconds = 0;
            function timer(){
            seconds = seconds + 0;
            document.getElementById("counter").innerHTML = seconds;
                  }
            setInterval(timer, 1000);
            



