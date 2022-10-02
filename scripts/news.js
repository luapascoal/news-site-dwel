let categories = [
    politic = {
        fancyName: 'Política'
    }, 
    education = {
        fancyName: 'Educação'
    }, 
    health = {
        fancyName: 'Saúde'
    }
];

let news = [
    {
        category: politic,
        title: 'Eleição',
        author: 'Luã',
        picture: '/images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: education,
        title: 'Educação',
        author: 'Luã',
        picture: '/images/paisagem.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at justo dignissim, venenatis elit sit amet, facilisis nulla. Nunc sodales ex a commodo porta. Nullam ut elementum orci. Vestibulum egestas pretium odio ut tristique. Suspendisse sed dolor mollis, pulvinar ex fringilla, luctus ex. Etiam tempor laoreet efficitur. Mauris vestibulum mi sed felis bibendum ultricies. Curabitur quis facilisis magna, sed aliquet metus. Maecenas a fringilla sapien. Nullam lacus augue, lacinia in tellus nec, imperdiet rhoncus nisl. Curabitur efficitur placerat nulla, non luctus sapien volutpat non.'
    },
    {
        category: health,
        title: 'Educação',
        author: 'Luã',
        picture: '/images/paisagem.jpg',
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
    console.log(type[3]);

    switch(type[3]) {
        case "politic":
            //
        case "index":
            getRandomNews();
            break;
        case "health":

        case "education":
        
    }
};

const getRandomNews = () => {
    console.log(news);
    const random = Math.floor(Math.random() * news.length);

    console.log("Número aleatório:", random);
    console.log(news[random].category.fancyName)
};
