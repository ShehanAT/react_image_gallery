# Create a Gallery App with React:star:
In this project, you'll build an image gallery using React and the Flickr API. After creating the project with create-react-app, you will build the gallery components, write the CSS and set up routing.

`npm install` to install dependencies.

Add a `config.js` file to `src` folder.
Format for config.js:

`const apiKey = "YOUR-API-KEY"; 
export default apiKey;`

Then `npm start` to run.

Requirements:
* Display at least 3 links that return a list of photos matching some criteria. For example: Dogs, Cats and Coffee (see demo video).
* Include a "Search" link that includes a search field to let users search for photos.
* Use React Router to set up routes for each navigation link in the directory app.
* Use the Fetch API or a tool like Axios to fetch data from the Flickr API.
* Do all data fetching from a container component that passes the data down to presentational components responsible for    displaying images
