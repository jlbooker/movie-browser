# Movie Browser Demo Project

This quick React demo app for searching and filtering with a movie API.

## Minimum Requirements

- [x] I can search for movies and see a paginated list of results
- [x] I can navigate through the next and previous pages of the paginated results
- [x] I can filter search results by genre
- [x] I see the total count of search results
- [x] I see notable information for each search result, such as the summary, poster,
      duration, rating, etc.
- [x] README Updates (interesting/significant, proud of, v2 features)
- [x] Deploy to GitHub Pages: https://jlbooker.github.io/movie-browser/

### Something Interesting / Significant

I'm reminded (again) of how efficient react-query is. The way it manages all of the fetching states and edge cases
allowed me to quickly move past the basic API fetches and start adding UI around the results.

### Most Pleased / Proud of with this implementation

I'd mention a few things here:

- The component structure is fairly clean. State is kept localized where possible. I was even able to reuse a few components.
- There's no brute-forcing the API. Given the API structure, it would've been easy to fetch results in a loop (for-each movie, genre, etc),
  but I was able to carefully avoid that.
- It doesn't look too shabby. I'm pleased with how the layout and usability turned out.

## TODO

Given more time, I'd tackle the following features/enhancements:

- [x] Zero state
- [ ] GitHub action to build & deploy to GitHub Pages
- [ ] Unit test (Jest)
- [ ] Loading animation for pending queries
- [ ] Accessibility audit / react-axe
- [ ] React-router
- [ ] Better star-emoji component for ratings (@smastrom/react-rating looks promising)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
