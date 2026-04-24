/* let credentials: (x: string, y: string) => boolean;

credentials = (username, password) => {
    if (username === "Prince" && password === "123")
        return true;

    return false;
};

console.log(credentials("Prince", "123")); 
 */

/* function sum(...arr: number[]):number{
    let sum:number = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}

console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
 */

/* let arr: number[] = [1,2,3,4,5];
let arr2: number[] = [...arr];
arr2.push(6);
console.log(arr);
console.log(arr2); 
*/

/* function display(username:string, password:string):void;
function display(email:string, password:number):void;

function display(value1:any, value2:any):void{
    if(typeof value2 === 'string'){
        console.log(`${value1}, your uppercase password: ${value2.toUpperCase()}.`);
    }

    if(typeof value2 === 'number'){
        console.log(`${value1}, your interger password: ${value2}.`);
    }
}

display("Prince", 123);
display("Prince", "pass123"); */

/* function getValue<T>(value:T): T {
    return value;
}

getValue<string>("Prince");
getValue<number>(10);
getValue<boolean>(true); */

/* interface Box<T> {
    value: T;
    size: number;
}

function numValue(obj: Box<number>) { 
    console.log(obj);
}
function strValue(obj: Box<string>) {
    console.log(obj);
}

numValue({ value: 123, size: 3 });
strValue({ value: "Prince", size: 4 });
 */

/* class User<T>{
    constructor(public id:T) {}
}

let u1 = new User<number>(123);
let u2 = new User<string>("Prince");

console.log(u1, u2); */

/* function User<T>(name:T, password:T): T {
    return "Done" as T;
}

User("Prince", "123"); */