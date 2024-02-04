function greet(){
    
    let name = document.getElementById("Uname").value
    let password = document.getElementById("pword").value
    console.log(name)
    console.log(password)
    if(name=="Ashish" && password=="Ashish@123"){
        
        window.location.assign("https://youtu.be/SOLHcE3bnOU?si=OfiKfnEmqrn6xzca")
    }
    else{
        alert("Wrong password or username");
    }
}