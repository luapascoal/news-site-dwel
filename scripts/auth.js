firebase.auth().onAuthStateChanged(async(user) => {
    if (user) {
        let test = await fetchUser();
        console.log(test.admin);
        if (test != null && test.admin) {
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

function handleLogin(e) {
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
                admin: element.data().admin
            };

            return user;
        }
    });

    return user;
};

function createAdminButton() {
    const flex = document.querySelector('.flex');
    const admin = document.createElement('a');
    admin.classList.add('cta');
    admin.innerText = "Admin";
    admin.setAttribute('href', 'admin.html');

    flex.appendChild(admin);
}