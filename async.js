console.log("Start");

    function getName(name){
        return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Inside name setTimeout")
        resolve(name);
      }, 2000);
    })
}
    
    function getHobbies(name){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log("Inside hobby setTimeOut")
              resolve(["Singing", "Cricket", "Football"]);
            },1000);
         })
    }
    
async function showHobby(){
    const nm = await getName("Shweta")
    const hobby = await getHobbies(nm)
    console.log(hobby)
}
showHobby()
    
console.log("End");