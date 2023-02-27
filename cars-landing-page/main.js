function convertToInteger(str) {
 return parseInt(str);
}

console.log(convertToInteger("56"));

const str = new String ("Hello");

function SayHello(){
    console.log("Hello " + this.name +"!")
}

const person = {
    name: "Eugene",
    age:18,
    func: SayHello
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.multBuy = function (n) {
    return this.map(function(i){
      return i * n
    }); 
};



console.log(arr.multBuy(5))

const person1 = {
    name:"Eugene",
    age: 18,
    job: "Frontend",
    Data: function () {
    console.log("Name: "+ this.name, "Age: "+ this.age, "job: "+ this.job)
    }
}

const person2 = {
    name:"Ann",
    age: 18,
    job: "Backend"
}

person1.Data.apply(person2);
