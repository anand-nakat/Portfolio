import project1 from "../images/world heritage.jpg";
import musicPlayer from "../images/music player.jpg";
import typingSpeed from "../images/typing speed.jpg";
import pixabay from "../images/pixabay picture gallery.jpg";
import colorShades from "../images/color shades generator.png";
import cocktail from "../images/cocktail db.jpg";
import dummyParagraph from "../images/dummy paragraph generator.png";
import cyanokhoj from "../images/cyanokhoj.jpg";

export const projects = [
  {
    title: "Pixabay Picture Gallery",
    link: "https://pixabay-photo-gallery.netlify.app/",
    image: pixabay,
    description: `Pixabay Picture Gallery makes use of the Pixabay API to showcase trending pictures hosted on 
    their website. It also has search functionality, which will display photos related to the tag you searched. And it also comes with Dark Mode. User can switch between Light Mode and Dark Mode. 
    The website is created using React JS Library and Tailwind CSS Framework.`,
    stack: [
      {
        id: 1,
        title: "React",
      },
      {
        id: 2,
        title: "Tailwind CSS",
      },
      {
        id: 3,
        title: "Javascript",
      },
    ],
  },
  {
    title: "Color Shades Generator",
    link: "https://shades-generator.netlify.app/",
    image: colorShades,
    description: `Color-Shades-Generator generates ten tints and ten shades of a color. 
    The tints and shades created with the help of values.js library.
User can search any of the color to generate different shades of the same color. This project is developed using React.JS Library`,
    stack: [
      {
        id: 1,
        title: "React",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "Javascript",
      },
    ],
  },
  {
    title: "Cyanokhoj",
    link: "http://34.67.7.17/CyanoKhoj/",
    image: cyanokhoj,
    description: `I worked on this under SLoP Hackathon 2020 where I contributed as a Web Developer and improved the
    UI/UX.It employs the citizen science program by tracking their tweets and subsequent data 
    analysis on Google Earth Engine, aimed at effective CyanoHAB detection  and monitoring in water bodies 
    around the world.`,
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JQuery",
      },
      {
        id: 4,
        title: "PHP",
      },
      {
        id: 5,
        title: "MySQL",
      },
    ],
  },

  {
    title: "World heritage sites",
    image: project1,
    link: "http://world-heritage-sites.infinityfreeapp.com/",
    description: `Dynamic Website connected to database, featuring Best World
                Heritage Sites. User can like any site, which will be added to
                his favourites collection. This collection is stored in
                database, so it is accessible any time. Also it comes with a
                admin view, admin can add new site, edit or delete existing
                site, right through website.`,
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JQuery",
      },
      {
        id: 4,
        title: "Bootsrap",
      },
      {
        id: 5,
        title: "PHP",
      },
      {
        id: 6,
        title: "MySQL",
      },
    ],
  },
  {
    title: "Cocktail DB",
    link: "https://cocktails-db-project.netlify.app/",
    image: cocktail,
    description: `Cocktail DB makes use of the Cocktail DB API to showcase some of the famous cocktails and you can also search your favorite Cocktail to know its ingredients and procedure to create it.
This website is built using React JS Library`,
    stack: [
      {
        id: 1,
        title: "React",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "Javascript",
      },
    ],
  },
  {
    title: "Music Player",
    image: musicPlayer,
    link: "https://anand-nakat.github.io/Music-Player/Music%20Player.html",
    description: `A Music Player built using vanilla Javascript without any external libraries.
    It comes with play/pause, next/previous song, active progress bar, and volume functionality. 
    I also implemented a playlist, through which user can control playback. `,
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "Javascript",
      },
    ],
  },
  {
    title: "dummy paragraph generator",
    image: dummyParagraph,
    link: "https://random-paragraph-generator.netlify.app/",
    description: `Tired of Lorem Ipsum? Dummy Paragraph is a simple Web App that can generate upto 9 different 
    paragraphs of dummy text.
    So if you ever want some dummy text, you know where to go!`,
    stack: [
      {
        id: 1,
        title: "React ",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "Javascript",
      },
    ],
  },
  {
    title: "Typing Speed Calculator",
    image: typingSpeed,
    link:
      "https://anand-nakat.github.io/Typing-Speed-Calculator/TypeWriting%20Speed.html",
    description: `Typing Speed Calculator calculates your approximate typing speed in words per minute (wpm).
    It generates a paragraph of text, and as user completes typing, it produces result including speed, accuracy,etc. If you want to know yours, give it a try. `,
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "Javascript",
      },
      {
        id: 4,
        title: "JQuery",
      },
    ],
  },
];
