
const container=document.querySelector(".app");

const myApp=[
              { 
               type:" INICIAIS ",
               msg:" ",
               path:"images/letraG",
               structure:[
                           {question:"GALINHA",options:['G .jpg','G.jpg','G.jpg','G.jpg'],key:4},

                           {question:"GATO",options:['G.jpg','G.jpg','G.jpg' ,'G.jpg'],key:1},

                           {question:"GALO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:2},

                           {question:"GAVETA",options:['G.jpg' ,'G.jpg','G.jpg','G.jpg'],key:0},
                           
                           {question:"GAOVOTA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:2},

                           {question:"GAIOLA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:0},
                           
                           {question:"GAITA",options:['G.jpg','G.jpg','G.jpg', 'G.jpg',],key:2},

                           {question:"GARRAFA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GALHO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:0},

                           {question:"GELADEIRA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:2},

                           {question:"GELO",options:['G.jpg','G.jpg','G.jpg','G .jpg'],key:1},

                           {question:"GELEIA",options:['G.jpg','G.jpg','G.jpg' ,'G.jpg',],key:0},

                           {question:"GELATINA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GIRAFA",options:['G.jpg','G .jpg','G.jpg', 'G.jpg'],key:0},

                           {question:"GIGANTE",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:2},

                           {question:"GOIABA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:0},

                           {question:"GORILA",options: ['G.jpg', 'G.jpg','G.jpg','G.jpg'],key:3},

                           {question:"GOLFE",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GOLEIRO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:3},

                           {question:"GOLFINHO",options:['G.jpg','G.jpg','G.jpg' ,'G.jpg'],key:0},

                           {question:"GOTA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GANGORRA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GIRASSOL",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GENIO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GAMBÁ",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GENGIBRE",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},
                           
                           {question:"GAFANHOTO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GARÇONETE",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GOLA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GULOSO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                           {question:"GARFO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:3}

                          ]
              },

              { 
                   type:" SÍLABAS ",
                   msg:" ",
                   path:"images/letraG",
                   structure:[
                              {question:"GALINHA",options:['G .jpg','G.jpg','G.jpg','G.jpg'],key:4},

                              {question:"GATO",options:['G.jpg','G.jpg','G.jpg' ,'G.jpg'],key:1},

                              {question:"GALO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:2},

                              {question:"GAVETA",options:['G.jpg' ,'G.jpg','G.jpg','G.jpg'],key:0},
                           
                              {question:"GAOVOTA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:2},

                              {question:"GAIOLA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:0},
                           
                              {question:"GAITA",options:['G.jpg','G.jpg','G.jpg', 'G.jpg',],key:2},

                              {question:"GARRAFA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GALHO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:0},

                              {question:"GELADEIRA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:2},

                              {question:"GELO",options:['G.jpg','G.jpg','G.jpg','G .jpg'],key:1},

                              {question:"GELEIA",options:['G.jpg','G.jpg','G.jpg' ,'G.jpg',],key:0},

                              {question:"GELATINA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GIRAFA",options:['G.jpg','G .jpg','G.jpg', 'G.jpg'],key:0},

                              {question:"GIGANTE",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:2},

                              {question:"GOIABA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:0},

                              {question:"GORILA",options: ['G.jpg', 'G.jpg','G.jpg','G.jpg'],key:3},

                              {question:"GOLFE",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GOLEIRO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:3},

                              {question:"GOLFINHO",options:['G.jpg','G.jpg','G.jpg' ,'G.jpg'],key:0},

                              {question:"GOTA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GANGORRA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GIRASSOL",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GENIO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GAMBÁ",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GENGIBRE",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},
                           
                              {question:"GAFANHOTO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GARÇONETE",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GOLA",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GULOSO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:1},

                              {question:"GARFO",options:['G.jpg','G.jpg','G.jpg','G.jpg'],key:3}

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
                         span.innerHTML="CORRETA";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="ERRADA";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML="CORRETA";
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
                   
                   this.optionEle.innerHTML="<h1><span>FIM DO JOGO</span> <br> PARABÉNS</h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><span>FIM DO JOGO</span> <br> PRATIQUE MAIS</h1>";
              }
              
           }
     }
       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }


      

     



  
   
   
 


