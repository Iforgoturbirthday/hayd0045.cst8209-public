const textgame = {
    wood: 0,
    marshmellows: 3,
    fire: false,
    tent: false,
}

function help(){
    console.log("Commands: pitch(), search(), tend(), roast(), sleep(), help()")
}

function pitch(campingGame = textgame){
    if(campingGame.tent){
       campingGame.tent = false
       console.log("'You unpitch your tent.'")
    } else{
        campingGame.tent = true
       console.log("'You pitched the tent.'")
    }
}

function search(campingGame = textgame){
    if(!campingGame.fire){
        campingGame.wood += 1
        console.log("'You found a peice of wood.'")
    }

}

function tend(campingGame = textgame){
    if(!campingGame.fire && campingGame.wood >0){
        campingGame.fire = true
        console.log("'You started a fire.'")
    } else if(campingGame.fire){
        campingGame.fire = false
        console.log("'You stopped the fire.'")
    } else{
        console.log("'You need wood to start a fire.'")
    }

}

function roast(campingGame = textgame){
    if(campingGame.fire && campingGame.marshmellows >0){
        campingGame.marshmellows -= 1
        console.log("'You roasted a marshmellow.'")
    } else if(!campingGame.fire){
        console.log("'You need to start a fire first.'")
    } else{
        console.log("'You need a marshmellow.'")
    }
}

function sleep(campingGame = textgame){
    if(!campingGame.fire && campingGame.tent){
        campingGame.wood = 0
        campingGame.marshmellows = 3
        campingGame.fire = false
        campingGame.tent = false
        console.log("'You went to sleep.'")
    } else if(campingGame.fire && campingGame.tent){
        console.log("'You need to put out the fire.'")
    } else if(!campingGame.tent && !campingGame.fire){
        console.log("'You need to pitch the tent.'")
    } else{
        console.log("'You need to put out the fire and pitch the tent.'")
    }
}