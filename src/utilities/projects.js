import project1 from "../images/world heritage.jpg";
import musicPlayer from "../images/music player.jpg";
import typingSpeed from "../images/typing speed.jpg";
import pixabay from "../images/pixabay picture gallery.jpg";
import colorShades from "../images/color shades generator.png";
import cocktail from "../images/cocktail db.jpg";
import dummyParagraph from "../images/dummy paragraph generator.png";
import cyanokhoj from "../images/cyanokhoj.jpg";
import markdown from "../images/markdown.png";
import hackerNews from "../images/hacker news.png";
import quizApp from "../images/quiz app.png";
import githubUsers from "../images/github users.jpeg";
import comfyStore from "../images/comfy store.png";
import image_caption from "../images/image caption.jpeg";
import recommendation from "../images/recommendation system.jpg"
import pos from "../images/pos.png"
import date_translation from "../images/date_translation.jpeg"
import community from "../images/community.jpeg"
import link_prediction from "../images/link_prediction.png"
import music from "../images/music.jpg"
import open4 from "../images/open4.jpg"
import mm from "../images/mm.png"
import cse from "../images/cse.jpeg"
import sentiment from "../images/sentiment.png"

export const projects = [
  {
    title: " Neural Image Captioning",
    link: "",
    image: image_caption,
    description: `Built Sequence to Sequence model to generate descriptive caption for an image. Trained on Flickr8K Dataset. Used pre-trained computer vision model ResNet as Encoder, LSTM as Decoder and Attention mechanism to attend to
most relevant pixels. Used Beam Search to generate the optimial sequence of caption description.
Evaluated performance using metrics like BLEU score and Top-5% accuracy`,
    stack: [
      {
        id: 1,
        title: "ML",
      },
      {
        id: 2,
        title: "NLP",
      },
      {
        id: 3,
        title: "DL",
      },
      {
        id: 4,
        title: "CV",
      }
    ],
  },
  {
    title: "Neural Collaborative Filtering for Recommendation Systems",
    link: "https://github-users-summary.netlify.app/",
    image: recommendation,
    description: `Performed fusion of Generalized Matrix Factorization (GMF) and Mulit-Layer Perceptron (MLP) in order to perform
collaborative filtering on the basis of implicit feedback using negative sampling.
Surpasses traditional matrix factorization based machine learning approaches.
Achieved 0.66 Hit Ratio (HR) on MovieLens dataset.`,
    stack: [
      {
        id: 1,
        title: "ML",
      },
      {
        id: 2,
        title: "NLP",
      },
      {
        id: 3,
        title: "DL",
      },
      {
        id: 4,
        title: "Recommendation",
      }

    ],
  },
  {
    title: "Part of Speech Tagging with RNNs and BERT",
    link: "",
    image: pos,
    description: `Identify and label the part of speech of each word in a sentence. Trained on Universal Dependencies English Web Tree
Bank. Used GloVe as pre-trained word embedding. Used variants of Recurrent Neural Network (RNN) like LSTM, GRU to achieve 89% accuracy. Fine-tuned pre-trained Transformer model BERT to further improve accuracy to 91.68%`,
    stack: [
      {
        id: 1,
        title: "ML",
      },
      {
        id: 2,
        title: "NLP",
      },
      {
        id: 3,
        title: "DL",
      },
      {
        id: 3,
        title: "Transfer Learning",
      }
    ],
  },
  {
    title: " Social Media Link Prediction with Graph Mining",
    link: "",
    image: link_prediction,
    description: `Predicts missing links in a social network, i.e. if a user wants to follow other user. Performed Ingenious Feature Engineering : Page Rank, Katz Centrality, Adar Index, etc. Experimented with classification models like SVM, Random Forest and Logistic Regression.
     Achieved best F1 Score of 93.53% and AUC score of 0.94`,
    stack: [
      {
        id: 1,
        title: "ML",
      },
      {
        id: 2,
        title: "Graph Mining",
      },
      {
        id: 3,
        title: "Feature Engineering",
      }
    ],
  },
  {
    title: "Music Genre Classification and Recommendation",
    link: "",
    image: music,
    description: `Genre classification of audio samples from GTZAN dataset and Recommendation system to suggest similar music.
Visualized genre groups using Principal Component Analysis (PCA).
Employed different classification models like Naive Bayes, K-Nearest Neighbors (KNN), Support Vector Classifier (SVC),
Random Forest, XGBoost to achieve 90% accuracy.
Converted the audio samples to image representation, and used pre-trained computer vision model ResNet34.
`,
    stack: [
      {
        id: 1,
        title: "ML",
      },
      {
        id: 2,
        title: "DL",
      },
      {
        id: 3,
        title: "CV",
      }
    ],
  },
  {
    title: "Community Detection",
    link: "https://github.com/anand-nakat/Community_Detection",
    image: community,
    description: `Identify different communities on the Facebook Social Circles Dataset.
Used Iterative Hierarchical Spectral Clustering Algorithm to detect communities using Fiedler Vector.
Visualized communities by plotting graph using networkx library
`,
    stack: [
      {
        id: 1,
        title: "ML",
      },
      {
        id: 2,
        title: "Unsupervised",
      },
      {
        id: 3,
        title: "Clustering",
      }
    ],
  },
  {
    title: "Neural Date Translation using Attention",
    link: "https://github.com/anand-nakat/Neural-Date-Translation-using-Attention",
    image: date_translation,
    description: `Translated human-readable dates into machine-readable dates, For eg 'Saturday 29 February 2021' => '2021-02-29'. Implemented Encoder-Decoder Architecture with original Aligned Attention mechanism.
     Used Bi-directional GRU for Encoder/Decoder and Teacher Forcing to improve performance. Achieved 96.56% accuracy with exact match.
`,
    stack: [
      {
        id: 1,
        title: "ML",
      },
      {
        id: 2,
        title: "DL",
      },
      {
        id: 3,
        title: "NLP",
      },
      {
        id: 4,
        title: "Attention"
      }
    ],
  },
  {
    title: "Hotel Booking Review Classification",
    link: "",
    image: sentiment,
    description: ` Implemented Bi-directional LSTM & DAN for classifiying the sentiment of the reviews. 
    Used GloVe and FastText as pre-trained embeddings. Achieved best F1-Score of 92.56%.
`,
    stack: [
      {
        id: 1,
        title: "ML",
      },
      {
        id: 2,
        title: "DL",
      },
      {
        id: 3,
        title: "NLP",
      }, {
        id: 4,
        title: "Embeddings"
      }
    ],
  },
  {
    title: "Leveraging SIMD/SIMT for reduced Matrix Multiplications",
    link: "",
    image: mm,
    description: `Discovered ways to parallelize a highly parallel program.
Performed vectorization, multi-threading, to obtain speedups on the CPU.
Used CUDA programming to optimize and achieve substantial speedup over CPU based optimizations.
Used nvprof as GPU profiling tool to analyze the bottlenecks.`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "Multi-threading",
      },
      {
        id: 3,
        title: "Vectorization",
      },
      {
        id: 4,
        title: "Profiling",
      }

    ],
  },
  {
    title: "Eliminating Common Sub Expressions:",
    link: "",
    image: cse,
    description: `Wrote a LLVM pass to hoist the anticipated expressions.
This optimization reduces the code size and avoids redundant calculations.
Implemented the data flow analysis to compute the anticipated expressions using a backwards-intersection schema`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "LLVM",
      },
      {
        id: 3,
        title: "Compiler Design",
      },
    ],
  },
  {
    title: "Open4 : A DRAM access scheduling policy",
    link: "",
    image: open4,
    description: `Analyzed a different memory access scheduling policy.
Wrote a pin tool to generate traces and used it on set of benchmarks.
Used DRAMSim3 to implement the policy. Analysed it’s performance against different addressing schemes and access
patterns`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "DRAM",
      },
      {
        id: 3,
        title: "PIN Tool",
      },
    ],
  },

  {
    title: "Github Users",
    link: "https://github-users-summary.netlify.app/",
    image: githubUsers,
    description: `Uses Github API to provide a summary about a Github User, like number of Repositories owned by the User, number of Followers, Gists created, etc.
  . It uses Fusion Charts to represent more info like Most Used Languages by the User, Most Starred Repositories, Most Forked Repositories in the form of Charts. It uses Auth0 for User Authentication`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "React",
      },
      {
        id: 4,
        title: "Tailwind CSS"
      }

    ],
  },
  {
    title: "Comfy E-Store",
    link: "https://comfy-sloth-e-commerce-store.netlify.app/",
    image: comfyStore,
    description: `An E-commerce website built using React with Stripe for payment gateway. This web app includes multiple pages like Products Page with option to filter your product search, Cart Page to review your purchases and Checkout Page to complete the purchase with Stripe Payment.Auth0 is used for User Authentication before Checking out.`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "React",
      },
      {
        id: 4,
        title: "Styled Components",
      }
    ],
  },
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
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "React",
      },
      {
        id: 4,
        title: "Tailwind CSS"
      }
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
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "React",
      },
      {
        id: 4,
        title: "Tailwind CSS"
      }
    ],
  },

  {
    title: "Cyanokhoj",
    link: "https://github.com/Chintan2108/CyanoKhoj",
    image: cyanokhoj,
    description: `I worked on this under SLoP Hackathon 2020 where I contributed as a Web Developer and improved the
    UI/UX.It employs the citizen science program by tracking their tweets and subsequent data 
    analysis on Google Earth Engine, aimed at effective CyanoHAB detection  and monitoring in water bodies 
    around the world.`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "PHP",
      },
      {
        id: 4,
        title: "MySQL",
      }
    ],
  },
  {
    title: "Quiz Trivia App",
    link: "https://quiz-trivia-app.netlify.app/",
    image: quizApp,
    description: `Quiz Trivia is a Web App that uses Open Trivia DB API to host different quizzes on numerous topics. User can customize the Quiz as per his wish like the Number of Questions in Quiz, Category of Questions and Difficulty Level. Also the score is calculated at real time, as the user is attempting the Quiz.`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "React",
      },
      {
        id: 4,
        title: "Tailwind CSS"
      }
    ],
  },
  {
    title: "World heritage sites",
    image: project1,
    link: "https://youtu.be/QkRnKz1V6Sw",
    description: `Web Dev Website connected to database, featuring Best World
                Heritage Sites. User can like any site, which will be added to
                his favourites collection. This collection is sotred in
                database, so it is accessible any time. Also it comes with a
                admin view, admin can add new site, edit or delete existing
                site, right through website.`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "PHP",
      },
      {
        id: 4,
        title: "MySQL",
      }
    ],
  },

  {
    title: "Live Markdown Preview",
    link: "https://live-markdown-preview.netlify.app/",
    image: markdown,
    description: `This is a simple Web App that generates live preview of the Markdown code that you write. This can be a pretty handy tool when you want to know how your README File will look like in the Github Repository before making a commit.
I've also added a feature of Local Storage, so that if page is refreshed by mistake, the code written will be saved on local storage of browser and fetched when you open the site again.`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "Javascript",
      },
    ],
  },
  {
    title: "Cocktail DB",
    link: "https://cocktails-db-project.netlify.app/",
    image: cocktail,
    description: `Cocktail DB makes use of the Cocktail DB API to showcase some of the famous cocktails and you can also search your favorite Cocktail to know its ingredients and procedure to create it.
`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "React",
      },
    ],
  },
  {
    title: "Hacker News",
    link: "https://hacker-news-articles.netlify.app/",
    image: hackerNews,
    description: `Hacker News is a Web App, that uses Hacker News Search API. It is built on top of Algolia Search's API. 
    So it is a one stop destination for tech related articles. If you want to read articles on any topic, just search it!`,
    stack: [
      {
        id: 1,
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "React",
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
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
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
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "React",
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
        title: "SDE",
      },
      {
        id: 2,
        title: "Web Dev",
      },
      {
        id: 3,
        title: "Javascript",
      },
    ],
  },
];
