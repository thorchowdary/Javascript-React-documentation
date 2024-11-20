const number = [1, 2, 3];
const squares = number.map(function(num) {
    return num * num;  // Add return statement
});
console.log(squares);  // Output: [1, 4, 9]

Array.prototype.myOwnMap =  function(fn){
    const resArray = []
    for(let i=0; i < this.length; i++ ){
        resArray.push(fn(this[i], i));
    }
    return resArray;
}
 const newArr = number.myOwnMap(function (item){
     return item*item
 })
 
 console.log(newArr)

