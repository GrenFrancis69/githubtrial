document.getElementById("btnlogin").onclick = function(){
    document.getElementById("loginform").style.display = "block"
}

document.getElementById("loginbtn").onclick = () => {

    document.getElementById("loginform").style.display = "none";

}

document.getElementById("loginbtn").onclick = () => {
    let email = document.getElementById("loginemail").value;
    let password = document.getElementById("loginpassword").value;

    // INVOKE FIREBASE

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
        let user = userCredentials.user
        let uid = user.uid;

        console.log(user);
        console.log(uid);
        alert("user has logged in")
    }).catch((error) => {
        console.log(error.message);
    })

}