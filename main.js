

var hundred = function () {
    for(var i=0; i <= 5; i++) {
        console.log(i * 100)
    }
}

hundred()


var double = function () {
    var doubleVal = 1
    for(var i=1; i <= 7; i++) {
        if (i === 1) { 
            doubleVal *= 1
        }
        else {
            doubleVal *= 2
        }
    console.log(doubleVal)
    }
}

double()


var triplets = function () {
    for(var i=1; i <= 3; i++) {
        for(var x=1; x <= 3; x++) {
            console.log(i)
        }
    }
}

triplets()


var addTwo = function () {
    var addVal = 0
    for(var i=1; i <= 6; i++) {
        console.log(addVal)        
        addVal += 2
    }
}

addTwo()
        
        
var multThree = function () {
    var val = 0
    for(var i=1; i <= 5; i++) {
        val += 3
        console.log(val)
    }
}      
        
multThree()
        
        
var countDown = function () {
    for(var i=9; i >= 0; i--) {
        console.log(i)
    }
}

countDown()


var zeroToThree = function () {
    for(var i=0; i <= 2; i++) {
        for(var x=0; x <= 3; x++) {
            console.log(x)
        }
    }
}

zeroToThree()