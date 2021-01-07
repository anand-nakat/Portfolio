import project1 from "../images/project1.jpg";
import project3 from "../images/project3.jpg";
import project2 from "../images/project2.jpg";

export const projects = [
  {
    title: "World heritage sites",
    image: project1,
    description: `Dynamic Website connected to database, featuring Best World
                Heritage Sites. User can like any site, which will be added to
                his favourites collection. This collection is sotred in
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
    title: "Music Player",
    image: project3,
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
    title: "Typing Speed Calculator",
    image: project2,
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
        id: 2,
        title: "Javascript",
      },
      {
        id: 3,
        title: "JQuery",
      },
    ],
  },
];
