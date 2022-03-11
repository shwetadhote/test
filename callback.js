console.log("Start");

function getName(name, callback){
  setTimeout(() => {
    console.log("Inside name setTimeout")
    callback(name);
  }, 2000)
}

function getHobbies(name, callback){
  setTimeout(() => {
    console.log("Inside hobby setTimeOut")
    callback(["Singing", "Cricket", "Football"]);
  },1000)
}
const nm = getName("Shweta" , (nm)=>{console.log(nm);
getHobbies(nm, (hobby) => {console.log(hobby)}) })

console.log("End");
