let inputName = document.querySelector("#exampleInputName")
let inputGender= document.querySelectorAll("#form-user-create [name=gender]:checked")
let inputBirthday = document.querySelector("#exampleInputBirth")
let inputCountry = document.querySelector("#exampleInputCountry")
let inputEmail = document.querySelector("#exampleInputEmail")
let inputPassword = document.querySelector("#exampleInputPassword")
let inputFile = document.querySelector("#exampleInputFile")
let inputAdmin = document.querySelector("#exampleInputAdmin")

let fields = document.querySelectorAll("#form-user-create [name]")

fields.forEach((field, index) => { 

    if(field.name == "gender") { 
        if (field.checked) { 
            console.log("SIM", field)
        }
   
    } else { 
        console.log("não")
    }
    


});