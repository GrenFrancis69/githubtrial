firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        
        document.getElementById('pagebtn').onclick = () => {
            var tweet = document.getElementById('textinput').value;
            var timestamp = firebase.firestore.Timestamp.fromeDate(new Date);

            // invoke firebase
            let tweetDoc = firebase.firestore().collection('tweets').doc();
            tweetDoc.set({
                tweet:tweet,
                timeZone:timeStamp,
                tweetId:tweetDoc.id,
                userId:user.uid,

            }).then(() => {
                alert('tweet has been sent')
                window.location.href = '/homepage.html'
            }).catch((error) => {
                console.log(error.message);
            })
        }
    }
    else {
        window.location.href = '/homepage.html'
    }
})

// let content = '';

// content += `<div>`
// content += `<h4>${newTime}</h4>`
// content += `<p>${tweet}</p>`

// content += `<div class='icons'>`
// content += `<i onClick='editTweet(\`${tweetId}\`)' class=fas fa-edit h1">`
// content += `<div class='icons'>`


// window.editTweet = (tweetId) => {
//     // alert(tweetId)

//     db.collection('tweets').doc(tweetId)
//     .get().then((doc) => {
//         let myTweet = doc.data().tweet;
//         document.getElementById('newtweet').value = myTweet;
//     })

//     // update tweet
//     document.getElementById('updatebtn').onclick = () => {
//         let newTweet = document.getElementById('newtweet').value;

//         db.collection('tweets').doc(tweetId).update({
//             tweet:newTweet,
//         }).then (() => {
//             alert('hey the tweet has been updated!')
//         }).catch((error) => {
//             console.log(error.message);
//         })
//     }
// }


// else {
//     window.location.href = 'homepage.html'
// }


// // delete tweet

// window.deleteTweet = (tweetId) => {

//     db.collection('tweets').doc(tweetId)
//     .delete().then(() => {
//         alert('Tweet has succesfully been deleted!')
//     }).catch((error) => {
//         console.log(error.message)
//     })
// }
//     else {
//         window.location.href = 'homepage.html'
// }

