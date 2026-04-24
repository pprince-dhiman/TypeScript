/* 
1. Any :
let x:any;
x = 23;
x = "Prince";
// ts type checking will become off (behaves same as js)
// any -> not recommended.
 */

/* 
// 2. Unknown :
// Can be anything, but safer than any. Must check type before use.

let b: unknown = "hello";
// b.toUpperCase(); ❌ error

if (typeof b === "string") {
  b.toUpperCase(); // ✅
}
 */

/* 
3. void : return nothing. 

function printMsg(): void {
  console.log("done");
}
 */

/* 
4. never : Function never ends or throws error.

function crash(): never {
  throw new Error("stop");
} */

