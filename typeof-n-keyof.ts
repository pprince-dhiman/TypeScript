// ----  typeof -----
/* 
const obj = {
    username: "prince12", 
    email: "prince@gmail.com",
    password: "sdfsfd312"
}

type objType = typeof obj;

const obj1:objType = {
    username: "sdfs",
    email: "sdfs",
    password: "3we"
} */


// --------keyof----------
/* 
type user = {
    name: string;
    age: number;
    isAdmin: boolean;
}

const User:user = {
    name: "Prince", 
    age: 23, 
    isAdmin: true
}

type userKeys = keyof user;
// type userKey = keyof User; (X error -> not works no value)
// userKeys = "name" | "age" | "isAdmin"

let key:userKeys;

key = "name";
key = "age";
key = "isAdmin";
// key = "dob"; (X error); 
*/

// ------------ keyof + typeof-----------
/*
const HTTPCODES = {
    OK: 200,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
}

type httpcodesTypes = typeof HTTPCODES;  
// type httpcodesTypes = { OK: number; NOT_FOUND: number; SERVER_ERROR: number;} 

type httpcodesKeyTypes = keyof typeof HTTPCODES;    
// type httpcodesKeyTypes = "OK" | "NOTFOUND" | "SERVERERROR"

type httpcodesValueTypes = (typeof HTTPCODES)[keyof typeof HTTPCODES];
// type httpcodesValueTypes = number

function getCodeValue(key: httpcodesKeyTypes): httpcodesValueTypes{
    return HTTPCODES[key];
}

getCodeValue("OK"); // 200
*/