# InterNations-UsersManagement
Coding challange task for managing users in groups. 

The project is based on `react-admin` library as it takes care of a lot of the boilerplating to run a general crud app. 

The app has a mocked api using `local-storage` so updates are persisted and remain saved even after refreshing the page. If you want to restart the app - clear your browser's `local-storage`.

# Run the project

```sh
npm install
npm run start

#or

yarn install
yarn start
```
Run tests
```sh
npm run test

#or

yarn test
```

# Folders structure
- *theme.js* - configurations of the theme
- *components* - stores all react based components
    - *design*
        - stores all generic components reused between multiple components
        - exports everything at root level to allow changes to the structure inside without affecting the rest of the imports in the pages'components
    - *groups* 
        - stores the crud components related to groups and other internally shared components 
    - *users* 
        - stores the crud components related to users and other internally shared components
    - *ra-providers*
        - plugins handling different abstract layers of the application (e.g. api handling, translation, etc.)

### Important files
- *theme.js* - configurations of the theme
- *Routes.js* - configurations of the routes


# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.


### `yarn lint`

Analyzes the code for any es-lint rules vialoations

### `yarn prettier`

Applies prettier config options to all files in /src and saves changes.