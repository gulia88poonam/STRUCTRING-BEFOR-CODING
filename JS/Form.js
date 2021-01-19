class Form{
    constructor(){}
    display(){
       var title=createElement('h2');
       title.html("Car racing game");
       var input=createInput("Name");
       var button=createButton("Play");
       title.position(130,0);
       input.position(130,160);
       button.position(250,200);
       var greeting=createElement('h3')
       button.mousePressed(function(){
           input.hide();
           button.hide();
           var name=input.value()
           playerCount=playerCount+1;
           player.update(name);
           player.updateCount(playerCount);
           greeting.html("Hello"+name);
           greeting.position(130,160);
       })
    }
}