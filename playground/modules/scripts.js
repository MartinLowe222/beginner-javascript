import { returnHi, last, middle} from "./utils.js";
//a named export must be the name 
// we can also rename a export as well by using the as keyword
// import {returnHi as sayHi}
import westerhoff from "./wes";
//



console.log(westerhoff)

const name = "wes";

console.log(returnHi(name));



// a file is a module, you can easily just put export infront of the function 