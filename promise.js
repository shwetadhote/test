/*const promiseObj1 = new Promise((resolve, reject)=>{
    let req = true
    if(req==true){
        resolve("Request Success")
    } else {
        reject("Request Rejected")
    }
});
promiseObj1.then(
    (value) => {console.log(value)},
    (error) => {console.log(error)},
)*/

/*const promiseObj1 = new Promise((resolve, reject)=>{
    let req = true
    if(req==true){
        resolve([1,2,3,4,5])
    } else {
        reject("Request Rejected")
    }
}).then(
    (value) => {console.log(value)},
    ).catch((error) => {console.log(error);
    }).finally(() => {console.log("Cleaned Up")})
    */

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
    getName("Shweta")
    .then(nm => getHobbies(nm))
    .then(hobby => console.log(hobby))
    
    console.log("End");
    
