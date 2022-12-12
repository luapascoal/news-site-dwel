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

let news = [
    {
        category: politic,
        id: 1,
        title: 'Eleição 1',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: education,
        id: 2,
        title: 'Educação 1',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: health,
        id: 3,
        title: 'Saúde 1',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: politic,
        id: 4,
        title: 'Eleição 2',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: education,
        id: 5,
        title: 'Educação 2',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: health,
        id: 6,
        title: 'Saúde 2',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: politic,
        id: 7,
        title: 'Eleição 3',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: education,
        id: 8,
        title: 'Educação 3',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: health,
        id: 9,
        title: 'Saúde 3',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    }
];

document.addEventListener('DOMContentLoaded',() => {
    const directories = document.querySelectorAll(".nav-item");

    var currentDirectory = location.href;
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

const renderNewsContent = (news) => {
    const newsContainer = document.querySelector('.grid-container');

    const image = document.createElement("div");
    image.classList.add("news-image");
    image.style.backgroundImage = "url(" + news.picture + ")";

    const newsItem = document.createElement("div");
    newsItem.classList.add("grid-news-item");

    const backItem = document.createElement("a");
    backItem.innerText = "Clique para voltar.";
    backItem.setAttribute("href", "/");

    const authorItem = document.createElement("p");
    authorItem.innerText = "Autor: " + news.author;

    const titleItem = document.createElement("h1");
    titleItem.innerText = news.title;

    const contentItem = document.createElement("p");
    contentItem.innerText = news.content;

    newsItem.appendChild(backItem);
    newsItem.appendChild(image);
    newsItem.appendChild(authorItem);
    newsItem.appendChild(titleItem);
    newsItem.appendChild(contentItem);

    newsContainer.appendChild(newsItem);
};

const renderNews = (href) => {
    let type = href.split("/");

    handleConstruct(type[3]);
};

const handleConstruct = (category) => {
    const newsContainer = document.querySelector('.grid-container');

    let categoryNews = getNews(category);
    categoryNews.forEach(categoryNewsItem => {
        const newsItem = document.createElement("a");
        newsItem.style.backgroundImage = "url(" + categoryNewsItem.picture + ")";
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

const getNews = (category) => {
    if (category == "index" || category == "") return getRandomNews();

    let categoryNews = [];
    news.forEach(forNews => {
        if (forNews.category.id == category) categoryNews.push(forNews);
    });

    return categoryNews;
};

const getRandomNews = () => {
    let randomNews = [];
    while (randomNews.length < 6) {
        const random = Math.floor(Math.random() * news.length);
        const selectedNews = news[random];
        if (randomNews.includes(selectedNews)) continue;
        
        randomNews.push(selectedNews);
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