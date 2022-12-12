let currentUser;

firebase.auth().onAuthStateChanged(async(user) => {
    if (user) {
        currentUser = await fetchUser();
        if (currentUser == null) return;

        console.log(currentUser.admin);
        if (currentUser != null && currentUser.admin) {
            createAdminButton();
        }
        console.log('user update');
        console.log(user);
    }
});

function handleRegister(e) {
    let email = document.getElementById('register-email');
    let password = document.getElementById('register-password');

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
        email.value = "";
        password.value = "";

        storeUser();

        console.log('criado');
        document.getElementById('register-message').innerHTML = "Usuário criado com sucesso.";
    })
    .catch((error) => {
        console.log(error);
        document.getElementById('register-message').innerHTML = error;
    });
};

function storeUser() {
    let user = firebase.auth().currentUser;
    db.collection("users").add({
        uid: user.uid,
        liked: [],
        admin: true
    })
    .then((user) => {
        if (user.admin) createAdminButton();

        console.log('Usuário salvo.');
    })
    .catch((error) => {
        console.log(error);
    });
}

function updateUser() {
    //let databaseUser = await fetchUser();
    //console.log('test user ' + databaseUser);

    db.collection("users").where("uid", "==", currentUser.id)
    .get()
    .then(function(querySnapshot) {
        console.log('update user query snapshot');
        querySnapshot.forEach(function(doc) {
            console.log(doc.id + " => " + currentUser.liked);
            doc.ref.update({liked: currentUser.liked})
        });
   })
}

function handleLogin(e) {
    if (currentUser != null) {
        document.getElementById('login-message').innerHTML = "Você já está logado.";
        return;
    }

    let email = document.getElementById('login-email');
    let password = document.getElementById('login-password');

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(async() => {
        console.log('logado');
        let user = await fetchUser();
        console.log(user);
        console.log(user.admin);
        
        if (user.admin) createAdminButton();

        email.value = "";
        password.value = "";

        document.getElementById('login-message').innerHTML = "Usuário logado com sucesso.";
    })
    .catch((error) => {
        console.log(error);
        document.getElementById('login-message').innerHTML = "Erro: " + error;
    });
};

async function fetchUser() {
    let current = firebase.auth().currentUser;
    const usersCollection = await db.collection("users").get();

    let user;
    usersCollection.forEach(element => {
        if (current.uid == element.data().uid) {
            user = {
                id: element.data().uid,
                liked: element.data().liked,
                admin: element.data().admin
            };

            return user;
        }
    });

    return user;
};

function handleLike(newsId) {
    if (currentUser == null) return;

    let liked = currentUser.liked;

    const likeButton = document.querySelector(".like-button");
    console.log('likebutton');
    if (likeButton != null) {
        console.log('add classlist');
        likeButton.classList.add('already-liked');
    }

    if (liked.includes(newsId)) {
        return;
    }

    liked.push(newsId);
    updateUser();
};

function createAdminButton() {
    const flex = document.querySelector('.flex');
    const admin = document.createElement('a');
    admin.classList.add('cta');
    admin.classList.add('admin');
    admin.innerText = "Admin";
    admin.setAttribute('href', 'admin.html');

    flex.appendChild(admin);
}