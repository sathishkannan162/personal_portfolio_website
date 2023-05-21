const projects = [
  {
    projectID: 1,
    project: 'Celestial Bodies Database',
    title: 'Celestial Bodies Database',
    link: 'https://github.com/sathishkannan162/celestial_bodies_database_freecodecamp_project_submission',
    content:
      'This project was done using PostgresSQL and done as a part of coursework of Relational databases on freeCodeCamp.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_1.jpeg',
  },
  {
    projectID: 2,
    project: 'Project World Cup Database',
    title: 'World Cup Database',
    link: 'https://github.com/sathishkannan162/worldcup_database_project_freecodecamp',
    content:
      'This project was done as a part of the relational database course on freeCodeCamp.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_1.jpeg',
  },
  {
    projectID: 3,
    project: 'Salon Appointment Scheduler Project',
    title: 'Salon Appointment Scheduler Project',
    link: 'https://github.com/sathishkannan162/salon_appointment_scheduler_project_freecodecamp',
    content:
      'This project based on the relational database was done as a part of coursework of Relational database on freeCodeCamp. You can run the script salon.sh and enter the customer info and appointment details. The details will be added to the salon database.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_1.jpeg',
  },
  {
    projectID: 4,
    project: 'Periodic Table Database Project',
    title: 'Periodic Table Database',
    link: 'https://github.com/sathishkannan162/periodic_table_database_project_freecodecamp',
    content:
      "This project was done as a part of coursework of the Relational database course on freeCodeCamp.\nYou should import the database using the SQL file. Then you can run all the scripts in the repository. There are three script files in this code:\n- The first one capitalizes the first letter of the symbols in the elements table.\n- The second one removes trailing zeros from the end of atomic masses of elements in the properties table.\n- In the third file named element.sh, you should pass an argument. The argument can be the symbol or the atomic number or the name of the element. If you don't pass an argument, it will print to give an argument. If an argument that is not in the database is present, then it will print a line explaining the same.",
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_1.jpeg',
  },
  {
    projectID: 5,
    project: 'Number Guessing Game Project',
    title: 'Number Guessing Game Project',
    link: 'https://github.com/sathishkannan162/number_guess_game_project_freecodecamp',
    content:
      'A text-based number guessing game made using PostgreSQL and bash scripting. This project was done as a part of coursework of the relational database on freeCodeCamp.\nYou need to make a database on your machine with the SQL file. Then you can run the number_guess.sh file.\n- It will ask for a username and store it in the database.\n- It will print a welcome message if you are a new user.\n- It will show a message with total games played and the best guesses score for an existing user.\n- It will display a message with the guess count when you finish the game.\n- The game data (guesses, username) will be stored in the database at the end of each game.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_1.jpeg',
  },
  {
    projectID: 6,
    project: 'survey form project',
    title: 'Suvery form',
    link: 'https://bespoke-sprite-2835b5.netlify.app/',
    content:
      'Simple form built with HTML and CSS. Completed as a part of freecodecamp responsive web design course.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_1.jpeg',
  },
  {
    projectID: 7,
    project: 'Tribute page',
    title: 'Tribute page',
    link: 'https://cool-seahorse-e1e2f1.netlify.app/',
    content:
      'Simple tribute page built with HTML and CSS. Completed as a part of freecodecamp responsive web design course.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_2.jpeg',
  },
  {
    projectID: 8,
    project: 'Technical documentation page',
    title: 'Technical documentatoin page',
    link: 'https://meek-kangaroo-efc9a6.netlify.app/',
    content:
      'Simple technical documentation page built with HTML and CSS. Completed as a part of freecodecamp responsive web design course.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_3.jpeg',
  },
  {
    projectID: 9,
    project: 'Product landing page',
    title: 'Product landing page',
    link: 'https://cool-smakager-c4c7f3.netlify.app/',
    content:
      'Simple product landing page built with HTML and CSS. Completed as a part of freecodecamp responsive web design course.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_4.jpeg',
  },
  {
    projectID: 10,
    project: 'Personal portfolio page project',
    title: 'Personal portfolio page',
    link: 'https://eloquent-sunshine-0a0ead.netlify.app/',
    content:
      'Simple personal portfolio page built with HTML and CSS. Completed as a part of freecodecamp responsive web design course.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_5.jpeg',
  },
  {
    projectID: 11,
    project: 'Random quote machine',
    title: 'Random Quote Machine',
    link: 'https://tangerine-phoenix-8bdb19.netlify.app/',
    content:
      'This app is built with React. This app generates random quotes whenever you click the new quote button. You can share the quote to Twitter or Tumblr by clicking on the corresponding share buttons. This project was done as a part of coursework of Frontend development libraries on freeCodeCamp.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_6.jpeg',
  },
  {
    projectID: 12,
    project: 'Markdown Previewer project',
    title: 'Markdown Previewer App',
    link: 'https://illustrious-dango-eeec10.netlify.app/',
    content:
      'This markdown previewer project is built using React and Redux. Redux was used for state management. You can maximize and minimize the editors and previewers. You can view real-time changes in the preview canvas. This project was done as a part of coursework of Frontend development libraries on freeCodeCamp.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_7.jpeg',
  },
  {
    projectID: 13,
    project: 'Drum machine',
    title: 'Drum Machine',
    link: 'https://leafy-duckanoo-6be2fc.netlify.app/',
    content:
      'This Drum Machine project was done using React and Redux. You can play different sounds, and the sound name is displayed in a small display. You can also use keyboard keys to play the drum machine. This project was done as a part of coursework of Frontend development libraries on freeCodeCamp.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
  },
  {
    projectID: 14,
    project: 'JavaScript Calculator',
    title: 'Javascript Calculator',
    link: 'https://dazzling-cranachan-bbcf86.netlify.app/',
    content:
      'A simple calculator app. You can do any basic calculations using this app. This app was done using React and Redux. This project was done as a part of coursework of Frontend development libraries on freeCodeCamp.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_9.jpeg',
  },
  {
    projectID: 15,
    project: '25+5 clock pomodoro timer app',
    title: 'Pomodoro timer app',
    link: 'https://tangerine-scone-ee1b59.netlify.app/',
    content:
      'A simple Pomodoro app built using React and Redux. In this app, you can set session and break length and use it as a pomodoro timer. Pressing reset makes the app go to the original state. This project was done as a part of coursework of Frontend development libraries on freeCodeCamp.',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_10.jpeg',
  },
  {
    projectID: 16,
    project: 'D3 bar chart',
    title: 'D3 bar chart',
    link: 'https://sunny-platypus-17e871.netlify.app/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      'This chart is used using D3 JavaScript library. This chart displays the USP GDP over years. It has a nice tooltip element. You can use your own data by replacing the JSON link in the fetch method. You have to modify your data to suit the program, other than that everything else will work fine.',
  },
  {
    projectID: 17,
    project: 'D3 scatterplot',
    title: 'D3 Scatterplot',
    link: 'https://gorgeous-sopapillas-268351.netlify.app/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      'This chart shows doping incidents in bicycle racing in each year and their relevance to finish time by the winner. Hover over the data points to get more information about that incident. Orange color circles represent winners without doping incidents. Blue color represents winners with doping incidents. You can insert your data by replacing the JSON file link in the fetch method.',
  },
  {
    projectID: 18,
    project: 'D3 Heat Map',
    title: 'D3 Heat Map',
    link: 'https://harmonious-semifreddo-43f2df.netlify.app/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      'This heat map shows the variation of temperature in a certain month of the year. Different colors represent different ranges of temperatures. It has a tooltip that shows more information on a point when you hover over the data point. The data point will also be highlighted while hovering over it. You can use the heat map for your own data by customizing your data similar to the URL in the variable URL and then replace the URL with your own URL. You can choose your own colors by changing the colorList array. You can give any number of colors, the program will take care of the rest. If you want to position the chart, change the margin.top and margin.left variables.',
  },
  {
    projectID: 19,
    project: 'D3 Choropleth Map',
    title: 'D3 Choropleth Map',
    link: 'https://prismatic-flan-40db31.netlify.app/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      "This map shows the percentage of adults over 25 with a bachelor's degree or higher in different counties in the USA. This map was constructed using Topojson.js and D3.js libraries. When you hover over a county, you will get more information via a tooltip that appears. You can use your own data by changing the URLs in the d3.json method. You can change the colors by changing the colors array in the script.js file. Different sequential palettes were generated in color brewer and added for convenience in the file.",
  },
  {
    projectID: 20,
    project: 'D3 Tree Map',
    title: 'D3 Tree Map',
    link: 'https://dynamic-cat-d603c1.netlify.app/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      'This tree map shows the top 100 Kickstarter campaigns based on their funding. They are grouped by different categories in different colors. When you hover over a tile, you will see a tooltip that will give more information about that Kickstarter campaign. Two other datasets are given as comments. You can use them for the tree map just by replacing the URL variable with those links. But you have to change the title and description for the same.',
  },
  {
    projectID: 21,
    project: 'Timestamp Microservice',
    title: 'Timestamp Microservice',
    link: 'https://timestamp-microservice-api-freecodecampproject.sathishkannan16.repl.co/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      'This project was done as a part of Backend development and APIs course on Freecodecamp and is an exact replica of [https://timestamp-microservice.freecodecamp.rocks/](https://timestamp-microservice.freecodecamp.rocks/). There will be examples on the site on how to use the API. You can insert other dates at the end of the HTTP string. You will get the date in milliseconds since Jan 1, 1970, 00:00:00 GMT and also the date in UTC. You can pass values as a date or milliseconds or date strings.',
  },
  {
    projectID: 22,
    project: 'Request Header Parser Microservice',
    title: 'Request Header Parser Microservice',
    link: 'https://timestamp-microservice-api-freecodecampproject.sathishkannan16.repl.co/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      'This project was done as a part of Backend development and APIs course on Freecodecamp and is an exact replica of [https://timestamp-microservice.freecodecamp.rocks/](https://timestamp-microservice.freecodecamp.rocks/). When you go to the /api/whoami page of this site, it will show information about your IP and browser in the form of JSON.',
  },
  {
    projectID: 23,
    project: 'URL Shortener Microservice',
    title: 'URL shortener Microservice',
    link: 'https://url-shortener-microservice-project.sathishkannan16.repl.co/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      "This project was done as a part of Backend development and APIs course on Freecodecamp and is an exact replica of [https://url-shortener-microservice.freecodecamp.rocks/](https://url-shortener-microservice.freecodecamp.rocks/). There will be examples on the site on how to use the API. You can write the URL in the input field and click the POST button. Then the request will be received by the server, and it sends a JSON containing the short URL. You can use the shortened URL as '[https://url-shortener-microservice-project.sathishkannan16.repl.co/api/shorturl/{short](https://url-shortener-microservice-project.sathishkannan16.repl.co/api/shorturl/%7Bshort) url}'.",
  },
  {
    projectID: 24,
    project: 'Exercise Tracker',
    title: 'Exercise Tracker',
    link: 'https://github.com/sathishkannan162/Exercise-tracker-Project',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      "This project was done as a part of Backend development and APIs course on Freecodecamp and is an exact replica of [https://exercise-tracker.freecodecamp.rocks/](https://exercise-tracker.freecodecamp.rocks/). There will be examples on the site on how to use the API. You can create a new user using the 'Create a New User' form. The user will be stored in a MongoDB database. When you create a user, you will get a JSON of the user with a username and an alphanumeric ID. Use this ID as a unique identifier to add user exercise logs to the database. You can query the database with user_id using `/api/user/:_id/logs`. It will send a JSON with all the exercises in the logs field. You can limit the number of exercises you want to query. You can also set from and to date to get exercises done by a user in a specified range.",
  },
  {
    projectID: 25,
    project: 'File Metadata Microservice',
    title: 'File Metadata Microservice',
    link: 'https://file-metadate-microservice-project.sathishkannan16.repl.co/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      'Upload the file, and the metadata such as file type and size of the file will be displayed as JSON. The uploaded file will be stored in the uploads folder without any file extension. You need to rename the file with appropriate extensions so that you would be able to view the image. You can also use the multer package to automatically set the file extension and file name. This project was done as a part of Backend development and APIs course on Freecodecamp and is an exact replica of [https://file-metadata-microservice.freecodecamp.rocks/](https://file-metadata-microservice.freecodecamp.rocks/). **Script handle_uploads.sh will delete files when the number of files exceeds more than 5.** You can change the number of files in uploads by changing the count variable in the script. The script should be run manually. In the future, we plan to run the script whenever a file is uploaded, and the oldest files will be deleted.',
  },
  {
    projectID: 26,
    project: 'Metric-Imperial Converter',
    title: 'Metric-Imperial Converter',
    link: 'https://metric-imperial-converter-project.sathishkannan16.repl.co/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      "This project converts Imperial units to metric units and vice versa. This project is implemented as an API. You can request the same service from other apps by making a GET request. You can send data using and get a post methods. You can use mathematical expressions in the input. You can also put the units in the form, and the output will be shown below. Use the units without space like '1.5km' rather than '1.5 km'. The tests for the program are written using chai and mocha. You can run the tests with 'npm test' or setting the 'NODE_ENV=test' in the '.env' file. When you enter an invalid number or unit, the API sends the text 'invalid unit' or 'invalid number' or 'invalid number and unit'. This project was done as a part of the Quality Assurance course on Freecodecamp and is an exact replica of [https://metric-imperial-converter.freecodecamp.rocks/](https://metric-imperial-converter.freecodecamp.rocks/).",
  },
  {
    projectID: 27,
    project: 'Issue Tracker',
    title: 'Issue Tracker',
    link: 'https://issue-tracker-project.sathishkannan16.repl.co/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      "In this project:\n\n- The backend of the web page was built, and tests are written using chai, mocha, and zombie.\n- MongoDB was used as the database server, and mongoose is used to validate documents.\n- There is a sample form on the homepage in which you can create, update, close, and delete issues.\n- You can also visit '{homeURL}/{project}' to go to a project page in which you can create, close, and delete issues. All the issues will be shown as cards below the form.\n- In this project, you can send:\n  - GET requests to '/api/issues/{project}' to get the list of all issues in a project.\n    - You can do queries in the GET request to get only issues that meet certain conditions.\n  - POST requests with all IDs or only required IDs, and the issue will be saved to the database.\n  - PUT requests can update issues.\n  - DELETE requests with _id will delete the issue.\n\nThis project was done as a part of the Quality Assurance course on Freecodecamp and is an exact replica of [https://issue-tracker.freecodecamp.rocks/](https://issue-tracker.freecodecamp.rocks/).",
  },
  {
    projectID: 28,
    project: 'Personal Library',
    title: 'Personal Library',
    link: 'https://personal-library-project.sathishkannan16.repl.co/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      "This project was built using express. Tests for this project were written using chai, chai-http, and mocha. UI tests were written using the headless browser zombie.js along with former packages. The database used here is MongoDB, and mongoose was used for the validation of records that are sent to the database.\n\nYou can send GET, POST, and DELETE requests to the server on '/api/books' and '/api/books/[_id]'. Using them, you can add books, add comments to books, get data on a specific book or all books, delete a single book or all books. Refer to the user stories below for instructions on how to use them.\n\nCheck out the package.json for different scripts that can be run. To start the server with tests, you need to uncomment the 'NODE_ENV=test' in your .env file.\n\nThis project was done as a part of the Quality Assurance course on Freecodecamp and is an exact replica of [https://personal-library.freecodecamp.rocks/](https://personal-library.freecodecamp.rocks/).",
  },
  {
    projectID: 29,
    project: 'Sudoku Solver',
    title: 'Sudoku Solver',
    link: 'https://sudoku-solver-project.sathishkannan16.repl.co/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      "**Attribution:**\n\nThis project solves a sudoku given as input by the user. It can also detect whether the sudoku can be solved. In the puzzle string, replace the empty values with '.' and press 'Solve' after inserting the puzzle string in the text area. The solution will be shown in the grid below.\n\nYou can also check whether a number can be placed at a specific position in the grid for the puzzle string given by the user. If there is a conflict, the conflict (row, column, region, or combinations of them) will be shown below after clicking the 'Check Placement' button.\n\nYou can use the API by sending POST requests to '/api/solve' and '/api/check' to the server.\n\nThis project was done as a part of the Quality Assurance course on Freecodecamp and is an exact replica of [https://sudoku-solver.freecodecamp.rocks/](https://sudoku-solver.freecodecamp.rocks/).",
  },
  {
    projectID: 30,
    project: 'American British English Translator',
    title: 'American British English Translator',
    link: 'https://american-british-english-translator-project.sathishkannan16.repl.co/',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      "You can input a text in American English and get the text translated into British English. The words that are translated are highlighted in green.\n\nYou can also send an API request to '/api/translate' with the text field as the text that needs to be translated and the locale field as 'american-to-british' or 'british-to-american', and the response will be a translated text in the translation field.\n\n**Attribution:** This project was done as a part of the Quality Assurance course on Freecodecamp and is an exact replica of [https://american-british-translator.freecodecamp.rocks/](https://american-british-translator.freecodecamp.rocks/).",
  },
  {
    projectID: 31,
    project: 'AI Alexa Project',
    title: 'Chat with AI',
    link: 'https://sathishkannan162.github.io/chatbot-voice-frontend',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      "It can transcribe the user's voice and input it into the chat. The response will be provided by the OpenAI GPT-3.5 chat completion model.",
  },
  {
    projectID: 32,
    project: 'Portfolio Design',
    title: 'Portfolio Website',
    link: '',
    thumbnail: 'https://loquacious-cupcake-7add80.netlify.app/project_8.jpeg',
    content:
      'This is the code for my portfolio website. I used React and Chakra UI to construct the website.',
  },
];
export default projects.reverse();
