function auth() {
    const username = "wildan"
    const password = "12345"


    // tangkap input user

    let userInput =document.getElementById("username").value
    let passwordInput =document.getElementById("password").value


    if(username == userInput && password == passwordInput) {
        alert ("Login Berhasil")
        document.location ="home.html"
     } else {
        alert ("Login Gagal")
     }
    
}