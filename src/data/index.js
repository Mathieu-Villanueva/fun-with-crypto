export const crypto = [ 
  {
    label: 'BTC',
    name: 'Bitcoin'
  },
  {
    label: 'ETH',
    name: 'Ethereum'
  },
  {
    label: 'LTC',
    name: 'Litecoin'
  },
  {
    label: 'DASH',
    name: 'Dash'
  },
  {
    label: 'XMR',
    name: 'Monero'
  }
];

export const block = [
  {
    id: 1,
    section: {
      title: "What is this site ",
      description: "Well, not much. It's primarily to practice both React and scss, but it might end up in my portfolio if it's good enough !"
    },
    content: {
      title:"Current composition of the website",
      item: [
        {
          title: 'React',
          span: 'version : 1.0',
          content: '48 %'
        },
        {
          title: 'Scss',
          span: 'version : 1.0',
          content: '52 %'
        }
      ]
    }
  },
  {
    id:2,
    section: {
      title:'Roadmap',
      description: 'Here you will find what features will be implemented in the next weeks !'
    },
    content: {
      title:'Current version of the App : 1.0',
      item:  [
        {
          title: 'Crypto page',
          span: 'version : 1.1',
          content: 'The crypto page was there to help me practicing css but, right-now, it dosen\'t really blend in the app. The plan is to replace it with a home page, something that will better match the purpose of this App'
        },
        {
          title: 'Contact page',
          span: 'version : 1.2',
          content: 'The contact page needs a lot of work right now. I\'ll be adding a form to simulate a way to contact me. The socials links need additional improuvements too. Until I add a backend, this page won\'t be real :/'
        },
        {
          title: 'API',
          span: 'version : 1.3',
          content: 'This step will allow me to make the website more dynamic.'
        },
        {
          title: 'Form in About Section',
          span: 'version : 1.4',
          content:'The form will be there to add dynamically items in the roadmap block.'
        },
        {
          title: 'Navigation 2.0 ',
          span: 'version : 1.5',
          content: 'Right now, the navigation is composed of two elements. One is handling the home page and the second one is used to handle the navigation inside the website. If you look correctly you can see the glitch when the nav takes over the home page. In this version, the navigation will be handle by a unique component.'
        },
        {
          title: 'Authentification',
          span: 'version : 2.0',
          content: 'Until i add an authentification, it would be meaningless to do any improuvement to the site. It would\'t be wise.  I\'ll be adding a authentification system before connecting the website to an API.'
        },
        {
          title: 'About page',
          span: 'version : 2.x',
          content:'Right now, the design is really bad but I\' have no idea what I could do to improve it... I am really bad at this...'
        },
     ]
    }
  }
];
