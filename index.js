/*
My Github Profile
*/
/* md: markdown-it : {
    html: true,
    linkify: true,
    breaks: true
}
*/
// markdown-it-emoji
// fs

// format:
// const introTitle = generateTitle(2, `Hey :wave:, I'm ${generateLink('Stanley', 'https://stanleylim.me/')}`);

const md = require('markdown-it') ({
    html: true,
    linkify: true,
    breaks: true
});

const emoji = require('markdown-it-emoji');
const fs = require('fs');
const axios = require('axios').default;

md.use(emoji);

const introTitle = generateTitle(2, `Hello world :alien:, I'm Jiahan(Johan) Lin`);

// const blog_url = `You can find ${generateLink('some blogs', 'https://jhnlynn.github.io')} of mine`;

const self_intro = `I am currently a Computer Engineering grad student @NYU, and here's my ${generateLink('Portfolio Link', 'https://master.d1frq0k5r6sok7.amplifyapp.com')}`;

    const badgeConfigs = [
        // {
        //     name: 'Johan-lin',
        //     badgeText: 'Johan-Lin',
        //     labelBgColor: '4E69C8',
        //     logoBgColor: '4E69C8',
        //     logo: 'Firefox',
        //     link: 'https://jhnlynn.github.io',
        // },
    {
        name: 'LinkedIn',
        badgeText: '@JiahanLin',
        labelBgColor: '0077B5',
        logoBgColor: '0077B5',
        logo: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jiahanlin/',
    },
    {
        name: 'Spotify',
        badgeText: '@Johan%20Lin',
        labelBgColor: '1ED760',
        logoBgColor: 'fff',
        logo: 'Spotify',
        link: 'https://open.spotify.com/user/qxbv7msm01prpq2fe0mk4etf0',
    },
];

const badges = badgeConfigs.reduce((result, config) => result + ' ' + generateBadge(config), '');

const gifs = `<img align="right" src="https://media.giphy.com/media/hpF9R9M1PHN5e5liSx/giphy.gif?cid=ecf05e4736ja2ur0f27i7848b09dreq3cai96m9hu9g603fh&rid=giphy.gif&ct=g" />`;

const toolsTitle = generateTitle(2, `Below are some stats for my daily use: `);
const toolsIconSize = 25;


const toolBadges = [
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg',
        alt: 'python',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg',
        alt: 'java',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        alt: 'react',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        alt: 'javascript',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
        alt: 'vue',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
        alt: 'bootstrap',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
        alt: 'css3',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original-wordmark.svg',
        alt: 'go',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg',
        alt: '.NET',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
        alt: 'mongodb',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
        alt: 'mysql',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
        alt: 'postgresql'
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg',
        alt: 'redis',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
        alt: 'nodejs',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original-wordmark.svg',
        alt: 'flask',
    },
    {
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain-wordmark.svg',
        alt: 'django',
    },
    {
        src: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
        alt: 'spring',
    }
];

const tools = toolBadges.reduce((result, toolConfig) => result + '\n' + generateIcon(toolConfig, toolsIconSize), '');

const visitor_counter = `![visitors](https://visitor-badge.glitch.me/badge?page_id=johannes-lin.johannes-lin&left_color=green&right_color=red)`

const stats = `![](https://github.com/jhnlynn/github-stats/blob/master/generated/overview.svg)`

const data = {

};

const realgithubStats = `![](https://github-readme-stats.vercel.app/api?username=jhnlynn&amp;show_icons=true)`;
// const wakaTimeStats = `[![Johan's wakatime stats](https://github-readme-stats.vercel.app/api/wakatime?username=jhnlynn)](https://github.com/jhnlynn/jhnlynn)`;
const githubStats = `![](https://github-readme-stats.vercel.app/api/top-langs/?username=jhnlynn&layout=compact&count_private=true&theme=default)`
const streak = `![](https://github-readme-streak-stats.herokuapp.com?user=jhnlynn&hide_border=true&ring=7EDDCF&fire=7EDDCF)`;

const content = `
${realgithubStats}
${githubStats} ${streak}\n
${visitor_counter}\n
`;

const markdownContent = md.render(content);

fs.writeFile('README.md', markdownContent, (err) => {

    if (err) {
        return console.error(err);
    }
    console.info(`Writing to README.md`);

});


function generateBadge(badgeConfig) {
    if (badgeConfig.name == "jhnlynn") {
        return `[![${badgeConfig.name} Badge](https://img.shields.io/website?up_color=red&up_message=johan-lin&url=https%3A%2F%2Fjhnlynn.github.io%2F)](https://jhnlynn.github.io/)`;
    }
    return `[![${badgeConfig.name} Badge](https://img.shields.io/badge/-${badgeConfig.badgeText}-${badgeConfig.labelBgColor}?style=flat-square&labelColor=${badgeConfig.logoBgColor}&logo=${badgeConfig.logo}&link=${badgeConfig.link})](${badgeConfig.link})`;
}

function generateIcon(iconConfig, toolsIconSize) {
    return `<img src="${iconConfig.src}" alt="${iconConfig.alt}" width="${toolsIconSize}" height="${toolsIconSize}" />`;
}

function generateTitle(size, title) {
    return `${'#'.repeat(size)} ${title}`;
}

function generateLink(label, link) {
    return `[${label}](${link})`;
}
