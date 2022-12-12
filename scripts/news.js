let db = firebase.firestore();

let categories = [
    politic = {
        id: 'politic',
        fancyName: 'Política'
    }, 
    education = {
        id: 'education',
        fancyName: 'Educação'
    }, 
    health = {
        id: 'health',
        fancyName: 'Saúde'
    }
];

let news = [];
/*
old static news
let news = [
    {
        category: politic,
        id: 1,
        title: 'Eleição 1',
        author: 'Luã',
        picture: 'https://i.imgur.com/sKV54PO.jpeg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: education,
        id: 2,
        title: 'Educação 1',
        author: 'Luã',
        picture: 'https://i.imgur.com/sKV54PO.jpeg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: health,
        id: 3,
        title: 'Saúde 1',
        author: 'Luã',
        picture: 'https://i.imgur.com/sKV54PO.jpeg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: politic,
        id: 4,
        title: 'Eleição 2',
        author: 'Luã',
        picture: 'https://i.imgur.com/sKV54PO.jpeg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: education,
        id: 5,
        title: 'Educação 2',
        author: 'Luã',
        picture: 'https://i.imgur.com/sKV54PO.jpeg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: health,
        id: 6,
        title: 'Saúde 2',
        author: 'Luã',
        picture: 'https://i.imgur.com/sKV54PO.jpeg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: politic,
        id: 7,
        title: 'Eleição 3',
        author: 'Luã',
        picture: 'https://i.imgur.com/sKV54PO.jpeg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: education,
        id: 8,
        title: 'Educação 3',
        author: 'Luã',
        picture: 'https://i.imgur.com/sKV54PO.jpeg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: health,
        id: 9,
        title: 'Saúde 3',
        author: 'Luã',
        picture: 'https://i.imgur.com/sKV54PO.jpeg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    }
];
*/

document.addEventListener('DOMContentLoaded',async() => {
    await fetchNews();

    var currentDirectory = location.href;
    if (currentDirectory.includes('liked')) {
        renderNews(currentDirectory);
        return;
    }

    const directories = document.querySelectorAll(".nav-item");
    for (var i = 0; i < directories.length; i++) {
        if (directories[i].href != currentDirectory) continue;

        directories[i].classList.add("selected");
        renderNews(directories[i].href);

        return;
    }

    for (var i = 0; i < news.length; i++) {
        let split = currentDirectory.split("/");
        if (news[i].id != split[3]) continue;

        renderNewsContent(news[i]);
    }
});

function handleRegisterNews() {
    let id = news.length + 1;
    let category = document.getElementById('news-category');
    let title = document.getElementById('news-title');
    let image = document.getElementById('news-image');
    let author = document.getElementById('news-author');
    let content = document.getElementById('news-content');

    db.collection("news").add({
        id: id,
        category: category.value,
        title: title.value,
        image: image.value,
        author: author.value,
        content: content.value
    })
    .then(() => {
        news.push(
            id,
            category.value,
            title.value,
            image.value,
            author.value,
            content.value
        );

        category.value = "";
        title.value = "";
        image.value = "";
        author.value = "";
        content.value = "";
        
        console.log('Noticia criada salvo.');
        document.getElementById('register-news').innerHTML = "Notícia registrada com sucesso.";
    })
    .catch((error) => {
        console.log(error);
        document.getElementById('register-news').innerHTML = error;
    });
}

async function fetchNews() {
    const newsCollection = await db.collection("news").get();

    newsCollection.forEach(element => {
        news.push({
            id: element.data().id,
            category: element.data().category,
            title: element.data().title,
            author: element.data().author,
            image: element.data().image,
            content: element.data().content
        });
    });

    return news;
};

const renderLikedNews = async() => {
    const newsContainer = document.querySelector('.grid-container');
    
    let categoryNews = await getLikedNews();
    categoryNews.forEach(categoryNewsItem => {
        const newsItem = document.createElement("a");
        newsItem.style.backgroundImage = "url(" + categoryNewsItem.image + ")";
        newsItem.classList.add("grid-item");
    
        const authorItem = document.createElement("p");
        authorItem.innerText = "Autor: " + categoryNewsItem.author;

        const titleItem = document.createElement("h1");
        titleItem.innerText = categoryNewsItem.title;

        const contentItem = document.createElement("p");
        contentItem.innerText = categoryNewsItem.content;

        const readMore = document.createElement("p");
        readMore.classList.add("read-more");
        readMore.innerText = "Clique para ler mais."

        newsItem.appendChild(authorItem);
        newsItem.appendChild(titleItem);
        newsItem.appendChild(contentItem);
        newsItem.appendChild(readMore);

        newsItem.setAttribute("href", categoryNewsItem.id);

        newsContainer.appendChild(newsItem);
    });
};

const renderNewsContent = async(news) => {
    const newsContainer = document.querySelector('.grid-news-container');

    const image = document.createElement("div");
    image.classList.add("news-image");
    image.style.backgroundImage = "url(" + news.image + ")";

    const newsItem = document.createElement("div");
    newsItem.classList.add("grid-news-item");

    const buttonItem = document.createElement("div");
    buttonItem.classList.add("grid-news-buttons");

    const backItem = document.createElement("a");
    backItem.innerText = "◀";
    backItem.setAttribute("href", "/");

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.innerText = "❤";
    likeButton.setAttribute("onclick", "handleLike(" + news.id + ")");

    buttonItem.appendChild(backItem);
    buttonItem.appendChild(likeButton);

    const authorItem = document.createElement("p");
    authorItem.innerText = "Autor: " + news.author;

    const titleItem = document.createElement("h1");
    titleItem.innerText = news.title;

    const contentItem = document.createElement("p");
    contentItem.innerText = news.content;

    newsItem.appendChild(buttonItem);
    newsItem.appendChild(image);
    newsItem.appendChild(authorItem);
    newsItem.appendChild(titleItem);
    newsItem.appendChild(contentItem);

    newsContainer.appendChild(newsItem);

    let readUser = await fetchUser();
    let liked = readUser.liked;
    if (liked.includes(news.id)) {
        likeButton.classList.add('already-liked');
    }
};

const renderNews = (href) => {
    let type = href.split("/");

    handleConstruct(type[3]);
};

const handleConstruct = (category) => {
    if (category === 'liked') {
        renderLikedNews();
        return;
    }

    const newsContainer = document.querySelector('.grid-container');

    let categoryNews = getNews(category);
    categoryNews.forEach(categoryNewsItem => {
        const newsItem = document.createElement("a");
        newsItem.style.backgroundImage = "url(" + categoryNewsItem.image + ")";
        newsItem.classList.add("grid-item");
    
        const authorItem = document.createElement("p");
        authorItem.innerText = "Autor: " + categoryNewsItem.author;

        const titleItem = document.createElement("h1");
        titleItem.innerText = categoryNewsItem.title;

        const contentItem = document.createElement("p");
        contentItem.innerText = categoryNewsItem.content;

        const readMore = document.createElement("p");
        readMore.classList.add("read-more");
        readMore.innerText = "Clique para ler mais."

        newsItem.appendChild(authorItem);
        newsItem.appendChild(titleItem);
        newsItem.appendChild(contentItem);
        newsItem.appendChild(readMore);

        newsItem.setAttribute("href", categoryNewsItem.id);

        newsContainer.appendChild(newsItem);
    });
};

const getLikedNews = async() => {
    let likedNews = [];

    let readUser = await fetchUser();
    console.log(readUser.liked);
    for (var i = 0; i < readUser.liked.length; i++) {
        for (var y = 0; y < news.length; y++) {
            if (news[y].id == readUser.liked[i]){
                likedNews.push(news[y]);
            } 
        }
    }

    return likedNews;
};

const getNews = (category) => {
    if (category == "index" || category == "") return getRandomNews();

    let categoryNews = [];
    news.forEach(forNews => {
        if (forNews.category == category) categoryNews.push(forNews);
    });

    return categoryNews;
};

const getRandomNews = () => {
    let randomNews = [];
    if (news.length <= 6) {
        for (var i = 0; i < news.length; i++) {
            randomNews.push(news[i]);
        }

        return randomNews;
    }

    while (randomNews.length < 6) {
        const random = Math.floor(Math.random() * news.length);
        const selectedNews = news[random];
        if (randomNews.includes(selectedNews)) continue;
        
        randomNews.push(selectedNews);

        if(randomNews.length >= news.length) break;
    }

    return randomNews;
};

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const input = document.querySelector(".search-input");
const searchList = document.querySelector(".search-list");

icon.addEventListener("click", () => {
    search.classList.toggle('active');
});

input.addEventListener("input", () => {
    while (searchList.firstChild) {
        searchList.removeChild(searchList.lastChild);
    }

    let searchedNews = getSearchedNews(input.value);
    if (searchedNews.length == 0) {
        searchList.classList.remove('active');
        return;
    }

    handleSuggestion(searchedNews);
});

const handleSuggestion = (suggestions) => {
    for (var i = 0; i < suggestions.length; i++) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.innerText = suggestions[i].title;
        link.setAttribute('href', suggestions[i].id);
        
        item.appendChild(link);
        searchList.appendChild(item);
    }

    searchList.classList.add('active');
};

const getSearchedNews = (input) => {
    let searchedNews = [];
    if (input.length == 0) return searchedNews;

    for (var i = 0; i < news.length; i++) {
        if (!news[i].title.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())) continue;

        searchedNews.push(news[i]);
    }

    return searchedNews;
};