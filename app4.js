//closures

function a(){
    var b = 10;
    function b(){
        console.log(b);
    }
    return b;
}

var z = a() //-> now z has function a which si retuning function B which logs value of b
console.log(z) // we get 10 becuase the function B is lexically connected with function a it remember from whre the b value is being filled and what is the value 