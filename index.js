
// 1-demonstrates recieving a function and calling it
function receivesAFunction(cb){
    return cb();
}

receivesAFunction('I love Coding')


// 2- returns a named function

function returnsANamedFunction(test){

    return function insider(){
        console.log('blah')
    }
}


// 3-demonstrates reurning an anpnymous function

function returnsAnAnonymousFunction(){
    return function (){
        console.log('testing')
    }
}