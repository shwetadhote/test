const promiseObj1 = new Promise((resolve, reject)=>{
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
)