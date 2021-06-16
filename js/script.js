
const container=document.querySelector(".app");

const myApp=[
              { 
               type:" INICIAIS ",
               msg:" ",
               path:"images/letraG",
               structure:[
                           {question:"GA",options:['G.jpg','G.jpg','G.jpg','GALINHA.jpg'],key:3},

                           {question:"GA",options:['G.jpg','GATO.jpg','G.jpg' ,'G.jpg'],key:1},

                           {question:"GI",options:['GIZ.jpg','G.jpg','G.jpg','G.jpg'],key:0},
 
                           {question:"GA",options:['G.jpg','G.jpg','GALO.jpg','G.jpg'],key:2},
                     
                           {question:"GÊ",options:['G.jpg' ,'G.jpg','G.jpg','GENIO.jpg'],key:3},

                           {question:"GA",options:['GAVETAS.jpg' ,'G.jpg','G.jpg','G.jpg'],key:0},
                              
                           {question:"GI",options:['G.jpg','G.jpg','GILETE.jpg','G.jpg'],key:2},
                              
                           {question:"GA",options:['G.jpg','GAIVOTA.jpg','G.jpg','G.jpg'],key:1},
                            
                           {question:"GE",options:['G.jpg','G.jpg','G.jpg','GELO.jpg'],key:3},

                           {question:"GA",options:['GARCA.jpg','G.jpg','G.jpg','G.jpg'],key:0},   
                              
                           {question:"GU",options:['G.jpg','G.jpg','GULOSEIMAS.jpg','G.jpg'],key:2},

                           {question:"GE",options:['G.jpg','GELATINA.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GA",options:['G.jpg','G.jpg','G.jpg','GAIOLA.jpg'],key:3},
                           
                           {question:"GÊ",options:['GEMEAS.jpg','G.jpg','G.jpg', 'G.jpg',],key:0},

                           {question:"GA",options:['G.jpg','G.jpg','GARRAFA.jpg','G.jpg'],key:2},

                           {question:"GA",options:['G.jpg','G.jpg','G.jpg','GALHO.jpg'],key:3},

                           {question:"GO",options:['GOTA.jpg','G.jpg','G.jpg','G.jpg'],key:0},                           

                           {question:"GA",options:['G.jpg','GANSO.jpg','G.jpg','G.jpg'],key:1},
                              
                           {question:"GE",options:['G.jpg','G.jpg','GELEIA.jpg' ,'G.jpg'],key:2},
 
                           {question:"GA",options:['GANGORRA.jpg','G.jpg','G.jpg','G.jpg'],key:0},

                           {question:"GI",options:['G.jpg','G.jpg','G.jpg', 'GIRAFA.jpg'],key:3},

                           {question:"GA",options:['G.jpg','GAROTO.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GO",options:['G.jpg','G.jpg','GOIABA.jpg','G.jpg'],key:2},
                              
                           {question:"GI",options:['GINASTICA.jpg','G.jpg','G.jpg','G.jpg'],key:0},
                              
                           {question:"GO",options: ['G.jpg', 'GORILA.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GA",options:['G.jpg','G.jpg','G.jpg','GALOCHA.jpg'],key:3},

                           {question:"GO",options:['G.jpg','G.jpg','GOLEIRO.jpg','G.jpg'],key:2},
                               
                           {question:"GA",options:['GAVIAO.jpg','G.jpg','G.jpg','G.jpg'],key:0},
                              
                           {question:"GO",options:['G.jpg','GOLFINHOS.jpg','G.jpg' ,'G.jpg'],key:1},

                           {question:"GA",options:['G.jpg','G.jpg','GARAGEM.jpg','G.jpg'],key:2},

                           {question:"GI",options:['G.jpg','G.jpg','G.jpg','GIRASSOL.jpg'],key:3},

                           {question:"GÊ",options:['GENIO.jpg','G.jpg','G.jpg','G.jpg'],key:0},
                             
                           {question:"GO",options:['G.jpg','GOTA.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GA",options:['G.jpg','G.jpg','G.jpg','GAMBA.jpg'],key:3},
                              
                           {question:"GE",options:['G.jpg','G.jpg','GELADEIRA.jpg','G.jpg'],key:2},

                           {question:"GA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:0},
                           
                           {question:"GI",options:['G.jpg','GIGANTEjpg','G.jpg','G.jpg'],key:1},

                           {question:"GA",options:['G.jpg','G.jpg','GAFANHOTO.jpg','G.jpg'],key:2},
                             
                           {question:"G0",options:['GOMA.jpg','G.jpg','G.jpg','G.jpg'],key:0},
                             
                           {question:"GA",options:['G.jpg','G.jpg','G.jpg','GARCONETE.jpg'],key:3},

                           {question:"GO",options:['G.jpg','GOLA.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GE",options:['G.jpg','G.jpg','GEMA.jpg','G.jpg'],key:2},
                              
                           {question:"GI",options:['GINCANA.jpg','G.jpg','G.jpg','G.jpg'],key:0},

                           {question:"GA",options:['G.jpg','G.jpg','G.jpg','GARFO.jpg'],key:3}


                          ]
              },

              { 
                   type:" SÍLABAS ",
                   msg:" ",
                   path:"images/letraG",
                   structure:[
                              {question:"GALINHA",options:['GAVETAS.jpg','GALINHA.jpg','GALO.jpg','GARRAFA.jpg'],key:1},

                              {question:"GATO",options:['GATO.jpg','GARRAFA.jpg','GAIOLA.jpg' ,'GALHO.jpg'],key:0},

                              {question:"GIZ",options:['GOTA.jpg','GOLEIRO.jpg','GIZ.jpg','GOLA.jpg'],key:2},
 
                              {question:"GALO",options:['GEMA.jpg','GARAGEM.jpg','GAROTA.jpg','GALO.jpg'],key:3},
                     
                              {question:"GÊNIO",options:['GENIO.jpg' ,'GANGORRA.jpg','GARRAFA.jpg','GALHO.jpg'],key:0},

                              {question:"GAVETAS",options:['GAIVOTA.jpg' ,'GANGORRA.jpg','GAVETAS.jpg','GALHO.jpg'],key:2},
                              
                              {question:"GILETE",options:['GAVIAO.jpg','GILETE.jpg','GANGORRA.jpg','GOLFE.jpg'],key:1},
                              
                              {question:"GAIVOTA",options:['GANGORRA.jpg','GAMBA.jpg','GALO.jpg','GAIVOTA.jpg'],key:3},
                            
                              {question:"GELO",options:['GELO.jpg','GELADEIRA.jpg','GIGANTE.jpg','GIRASSOL.jpg'],key:0},

                              {question:"GARÇA",options:['GALHO.jpg','GIRASSOL.jpg','GIRAFA.jpg','GARCA.jpg'],key:3},   
                              
                              {question:"GULOSEIMAS",options:['GOTA.jpg','GULOSEIMAS.jpg','GARRAFA.jpg','GULOSEIMAS.jpg'],key:1},

                              {question:"GELATINA",options:['GIRASSOL.jpg','GELEIA.jpg','GELATINA.jpg','GIGANTE.jpg'],key:2},

                              {question:"GAIOLA",options:['GAIOLA.jpg','GOIABA.jpg','GOLFINHOS.jpg','GOLEIRO.jpg'],key:0},
                           
                              {question:"GÊMEAS",options:['GORILA.jpg','GOLFINHOS.jpg','GEMEAS.jpg', 'GIRASSOL.jpg',],key:2},

                              {question:"GARRAFA",options:['GIRASSOL.jpg','GARRAFA.jpg','GIRAFA.jpg','GELADEIRA.jpg'],key:1},

                              {question:"GALHO",options:['GALHO.jpg','GIRASSOL.jpg','GIRAFA.jpg','GOLFINHOS.jpg'],key:0},

                              {question:"GOTA",options:['GANGORRA.jpg','GOTA.jpg','GALOCHA.jpg','GAROTA.jpg'],key:1},                           

                              {question:"GANSO",options:['GALHO.jpg','GIRASSOL.jpg','GANSO.jpg','GOLFINHOS.jpg'],key:2},
                              
                              {question:"GELÉIA",options:['GELEIA.jpg','GANSO.jpg','GALO.jpg' ,'GAIVOTA.jpg'],key:0},
 
                              {question:"GANGORRA",options:['GALHO.jpg','GIRASSOL.jpg','GIRAFA.jpg','GANGORRA.jpg'],key:3},

                              {question:"GIRAFA",options:['GIRAFA.jpg','GANGORRA.jpg','GAROTO.jpg', 'GOIABA.jpg'],key:0},

                              {question:"GAROTO",options:['GOLFINHOS.jpg','GOIABA.jpg','GAROTO.jpg','GIRASSOL.jpg'],key:2},

                              {question:"GOIABA",options:['GOIABA.jpg','GIRASSOL.jpg','GELADEIRA.jpg','GAVETAS.jpg'],key:0},
                              
                              {question:"GINÁSTICA",options:['GALHO.jpg','GINASTICA.jpg','GIRAFA.jpg','GOLFINHOS.jpg'],key:1},
                              
                              {question:"GORILA",options: ['GALHO.jpg', 'GALINHA.jpg','GATO.jpg','GORILA.jpg'],key:3},

                              {question:"GALOCHA",options:['GIRASSOL.jpg','GALOCHA.jpg','GIRAFA.jpg','GORILA.jpg'],key:1},

                              {question:"GOLEIRO",options:['GALOCHA.jpg','GALHO.jpg','GAVIAO.jpg','GOLEIRO.jpg'],key:3},
                               
                              {question:"GAVIÃO",options:['GALHO.jpg','GINCANA.jpg','GAVIAO.jpg','GANGORRA.jpg'],key:2},
                              
                              {question:"GOLFINHOS",options:['GOLFINHOS.jpg','GAIVOTA.jpg','GAVETAS.jpg' ,'GARFO.jpg'],key:0},

                              {question:"GARAGEM",options:['GOLA.jpg','GORILA.jpg','GELADEIRA.jpg','GARAGEM.jpg'],key:3},

                              {question:"GIRASSOL",options:['GELO.jpg','GELEIA.jpg','GIRASSOL.jpg','GARCONETE.jpg'],key:2},

                              {question:"GÊNIO",options:['GAMBA.jpg','GENIO.jpg','GATO.jpg','GAVIAO.jpg'],key:1},
                             
                              {question:"GOTA",options:['GOLFINHOS.jpg','GOLEIRO.jpg','GOTA.jpg','GEMA.jpg'],key:2},

                              {question:"GAMBÁ",options:['GELADEIRA.jpg','GAMBA.jpg','GENIO.jpg','GEMEAS.jpg'],key:1},
                              
                              {question:"GELADEIRA",options:['GELADEIRA.jpg','GIRASSOL.jpg','GINCANA.jpg','GULOSEIMAS.jpg'],key:0},

                              {question:"GAROTA",options:['GEMEAS.jpg','GIGANTE.jpg','GOLFINHOS.jpg','GAROTA.jpg'],key:3},
                           
                              {question:"GIGANTE",options:['GANGORRA.jpg','GOTA.jpg','GIGANTE.jpg','GAROTA.jpg'],key:2},

                              {question:"GAFANHOTO",options:['GELADEIRA.jpg','GAFANHOTO.jpg','GELO.jpg','GEMEAS.jpg'],key:1},
                             
                              {question:"G0MA",options:['GULOSEIMAS.jpg','GOLEIRO.jpg','GOTA.jpg','GOMA.jpg'],key:3},
                             
                              {question:"GARÇONETE",options:['GARCONETE.jpg','GIRASSOL.jpg','GEMEAS.jpg','GULOSEIMAS.jpg'],key:0},

                              {question:"GOLA",options:['GARAGEM.jpg','GENIO.jpg','GOLA.jpg','GELEIA.jpg'],key:2},

                              {question:"GEMA",options:['GOLFINHOS.jpg','GOLEIRO.jpg','GOTA.jpg','GEMA.jpg'],key:3},
                              
                              {question:"GINCANA",options:['GIZ.jpg','GINCANA.jpg','GORILA.jpg','GALOCHA.jpg'],key:1},

                              {question:"GARFO",options:['GARFO.jpg','GATO.jpg','GALOCHA.jpg','GAFANHOTO.jpg'],key:0}

              ]

             }             
           ]
 // create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();
                

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
              var options=this.optionEle.children;
              for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="  =D  ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="  =(  ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" =P ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }

           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              
              if (this.score > this.quizSize/2){
                   
                   this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
              }
              
           }
     }
       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }

     



  
   
   
 


