document.getElementById("btnsignup").onclick = function(){
    document.getElementById("signupform").style.display = "block"
}

document.getElementById("signupbtn").onclick = () => {

    // GETTING HTML ELEMENTS;

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    let userphoneno = document.getElementById("userphoneno").value;

    // INVOKE FIREBASE;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {

        let user = userCredentials.user
        let uid = user.uid;

        console.log(user);
        console.log(uid);
        alert("user has been created")

        // INVOKE FIRESTORE

        firebase.firestore().collection("users").doc(uid)
        .set({
            email:email,
            username:username,
            userphoneno:userphoneno
        }).then(() => {
            alert("user data has been added")

            window.location.href = "/login.html"
        }).catch((error) => {

            console.log(error.message)
        })
    })
    .catch((error) => {

        console.log(error.message);
    })
}

document.getElementById("loginbtn").onclick = function(){
    document.getElementById("goto").style.display = "block"
}