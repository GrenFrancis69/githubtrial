document.getElementById("reset").onclick = () => {

    alert("clicked")
    // get email

    let emailValue = document.getElementById("email").value

    // invoke firebase

    firebase.auth().sendPasswordResetEmail(emailValue).then(() => {
        alert(" succesfull a reset has been sent to your inputted email account")
    }).catch((error) => {
        console.log(error.message);
    })
}