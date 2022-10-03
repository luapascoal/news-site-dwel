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
        title: 'Eleição',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: education,
        title: 'Educação',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: health,
        title: 'Saúde',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: politic,
        title: 'Eleição',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: education,
        title: 'Educação',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: health,
        title: 'Saúde',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: politic,
        title: 'Eleição',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: education,
        title: 'Educação',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: health,
        title: 'Saúde',
        author: 'Luã',
        picture: './images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
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
});

const renderNews = (href) => {
    let type = href.split("/");

    handleConstruct(type[3]);
};

const handleConstruct = (category) => {
    const newsContainer = document.querySelector('.grid-container');

    let categoryNews = getNews(category);
    categoryNews.forEach(categoryNewsItem => {
        const newsItem = document.createElement("div");
        newsItem.style.backgroundImage = "url(" + categoryNewsItem.picture + ")";
        newsItem.classList.add("grid-item");
    
        const authorItem = document.createElement("p");
        authorItem.innerText = "Autor: " + categoryNewsItem.author;

        const titleItem = document.createElement("h1");
        titleItem.innerText = categoryNewsItem.title;

        const contentItem = document.createElement("p");
        contentItem.innerText = categoryNewsItem.content;

        newsItem.appendChild(authorItem);
        newsItem.appendChild(titleItem);
        newsItem.appendChild(contentItem);

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

        randomNews.push(selectedNews);
    }

    return randomNews;
};