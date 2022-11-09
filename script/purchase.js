const form = document.getElementById('myForm')
const errorMessage = document.getElementById('errorMessage')

function handleSubmit(e){
    const formData = new FormData(form)

    const fullname = formData.get('fullnameTxt')
    const phonenumber = formData.get('phoneTxt')
    const email = formData.get('emailTxt')
    const gender = formData.get('genderTxt')
    const age = formData.get('ageTxt')
    const address = formData.get('addressTxt')
    const district = formData.get('districtTxt')
    const postalcode = formData.get('postalCodeTxt')
    const notes = formData.get('notesTxt')
    const agree = formData.get('agree')
    let error = []

    if(!fullname){
        error.push("Full Name cannot be empty!")
    }

    if(!phonenumber){
        error.push("Phone Number cannot be empty!")
    }

    if(!email){
        error.push("Email cannot be empty!")
    }

    if(!address){
        error.push("Address cannot be empty!")
    }

    if(!district){
        error.push("Address cannot be empty!")
    }

    if(!postalcode){
        error.push("Postal Code cannot be empty!")
    }

    if(!agree){
        error.push("You are not agree to the term and condition")
    }
    
    if(error.length > 0){
        alert(error.join("\n"))
      
    }else{
        if(!confirm("Are You Sure")){

        }  
    }

    




}


form.addEventListener('submit', handleSubmit)

