const en = {
    'header': {
        links: ['Home', 'About', 'Skills', 'Projects', 'Contact']
    },
    'landing': {
        name: 'Rafael',
        subtitle: 'FullStack Developer',
        cta: 'Contact'
    },
    'about': {
        intro: {
            firstText: 'About',
            secondText: 'me'
        },
        paragraphs : [
            "Hi there, my name is Rafael Buzatto de Campos. Once a Civil Engineer, other time a poker player, but now I'm a fullstack developer! In frontend I have a background built up on React and Angular while at the backend in NodeJS.",
            "I started my journey studying Civil Engineer at Unicamp. Shortly after my graduation I started a new career as successfull professional poker player, where I've spent over 10 years in a highly competitive arena playing against some of the toughest players in the world.",
            "For the last two year I switched for a new career at web development, where I found a great passion in it. Started with Java, then moved to Javascript where I learned exciting tools, like React and Angular. I'm also keen to work backend, handling requests and database, authenticate user."
        ]
    },
    'skills': {
        intro: {
            firstText: 'Skills',
            secondText: 'My'
        },
        paragraphs : [
            "Throughout the last two year I've read articles, watched tutorials and did courses to sharp my knowledge. Most of my studies are based on Udemy courses.",
            "At frontend I have experience with React and Angular, with solid knowledge in Javascript and its latest releases. I'm careful to provide a responsive design along with optimized bundle, lazy loading, tree shaking, protected routes with user authentication.",
            "Meanwhile, my backend focus is primary NodeJS based, with experience in Express, MongoDB & GraphQL and some knowledge at SQL database. For user authentication, encrypting properly user password (bcrypt) and managing the token creation without providing sensible data back to frontend.",
            "I have to thank a lot to great instructors that delivered high quality content for professional development: Andrew Mead, Stephen Grider, Maximilian Schwarzmuller, Brad Traversy, Leonardo Leitao, Andrei Neagoie."
        ],
        heading : 'What Do I Know?'
    },
    'projects': {
        intro: {
            firstText: 'Projects',
            secondText: 'My'
        },
        cases: [
            {
                name: 'Canto do Saci',
                desc: 'Brazilian Restaurant WebSite built in VanillaJS. Responsive, it includes Gmaps API for routes. Deployed with Firebase.'
            }
        ]
    },
    'footer': {
        txt: 'Find me',
    }
}

const pt = {
    'header': {
        links: ['Home', 'Sobre', 'Estudos', 'Projetos', 'Contato']
    },
    'landing': {
        name: 'Rafael',
        subtitle: 'Desenvolvedor FullStack',
        cta: 'Contato'
    },
    'about': {
        intro: {
            firstText: 'Sobre',
            secondText: 'Mim'
        },
        paragraphs: [
            'Olá, meu nome é Rafael Buzatto de Campos. Formado Engenheiro Civil, outrora professional de poker, agora contudo, desenvolvedor fullstack! Em frontend tenho base em React e Angular, enquanto que no backend, NodeJS.',
            'Eu comecei minha jornada estudando Engenharia Civil na Unicamp. Logo após minha graduação Eu comecei uma carreira bem sucedida como jogador profissional de poker, onde passei 10 anos competindo contra alguns dos melhores jogadores do mundo.',
            'Nos últimos dois anos mudei para uma nova carreira em desenvolvimento web, onde encontrei uma grande paixão. Começei em Java, e passei para Javascript onde aprendi ferramentas fantásticas, como React e Angular. Também aprecio trabalhar no backend, lidando com rotas e banco de dados, assim como autenticação de usuário.'
        ]
     
    },
    'skills': {
        intro: {
            firstText: 'Estudos',
            secondText: 'Meus'
        },
        paragraphs : [
            "Ao longo deste últimos dois anos Eu li diversos artigos, assisti tutoriais e realizei cursos para meu aprimoramento profissional. Maior parte de meus estudos foram realizados em cursos disponíveis na plataforma Udemy.",
            "No frontend tenho experiência React e Angular, com sólidos conhecimento em Javascipt e suas atualizações. Crio um design responsivo, com bundle otimizado, utlizando lazy loading, tree shaking, rotas protegidas com autenticação de usuário.",
            "Do outro lado, meu backend é estruturado em torno de NodeJS, com experiência em Express, MongoDB & GraphQL, com algum conhecimento em databases SQL. Para devida autenticação, senhas são criptografadas (bcrpyt) com gerenciamento correto de token sem retorno de dados privados ao frontend.",
            "Agradeço especialmente aos excelentes instrutores que se dispuseram a dividir seu conhecimento em cursos de alta qualidade: Andrew Mead, Stephen Grider, Maximilian Schwarzmuller, Brad Traversy, Leonardo Leitao, Andrei Neagoie."
        ],
        heading : 'Sei sobre?'
    },
    'projects': {
        intro: {
            firstText: 'Projetos',
            secondText: 'Meus'
        },
        cases: [
            {
                name: 'Canto do Saci',
                desc: 'Projeto para restaurante construído em VanillaJS. Responsivo, inclui Gmaps API para rotas, implantado com Firebase.'
            }
        ]
    },
    'footer': {
        txt: 'Contato',
    }
}

const languages = {
    en,
    pt
}

export default languages