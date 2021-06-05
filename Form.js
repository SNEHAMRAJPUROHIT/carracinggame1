class Form{
    constructor(){

    }
    display(){
        var title=createElement("h1")
        title.html("CAR RACING GAME")
        title.position(300,100)
        var input=createInput("ENTER NAME")
        input.position(350,160)
        var button =createButton("login")
        button.position(400,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            var greeting=createElement("h1")
            greeting.html("WELCOME "+name)
            greeting.position(350,160)
        })
    }

}