class Form {
constructor(){

   this.title = createElement ('h2')
  
   this.input = createInput ("name");

   this.button  = createButton ('play');

   this.greeting = createElement ('h3');

   this.reset = createButton ('reset');
 
}

hide (){
   this.input.hide ();
   this.button.hide();
   this.title.hide ();
   this.greeting.hide();
}


display(){
   
 this.title.html ("Car racing game");
 this.title.position (displayWidth /2 - 150,0);

   this.input.position (displayWidth/2 -140,displayHeight/2 -80);
   this.button.position (displayWidth/2-90,displayHeight /2);
   this.reset.position (10,20);
   
 this.button.mousePressed (()=>{
    this.input.hide ();
    this.button.hide ();
    player.name = this.input.value ();
    playerCount += 1 ;
    player.index = playerCount ; 
    player.update ();
    player.updateCount (playerCount);
    this.greeting.html("welcome "+ player.name);
    this.greeting.position(displayWidth/2 - 100,displayHeight/4);

 })
 
 this.reset.mousePressed (()=>{
    player.updateCount (0);
    game.update (0);
 })
}
}