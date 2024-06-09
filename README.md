# The Informer Project Overview

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Styling:** Tailwind, CSS

## Features
- **User Authentication:** Includes login and signup functionality.
- **News Management:** Allows users to add, delete, update, and view news articles.
- **Multi-User:** Supports multiple users with individual accounts.

## Project Structure
- **The Informer/**
  - **client/**: Contains the client-side code for the project.
    - **node_modules/**: Contains the installed npm packages.
    - **public/**: Contains the public files for the React app.
    - **src/**: Contains the source code for the React app.
      - **components/**: Contains React components.
      - **pages/**: Contains different pages of the app.
      - **App.js**: Main component where the app is initialized.
      - **index.js**: Entry point for the React app.
    - **.gitignore**: Git ignore file for the client-side code.
    - **package.json**: Contains metadata about the project and its dependencies.
    - **package-lock.json**: Automatically generated for any operations where npm modifies either the node_modules tree or package.json.
    - **README.md**: Contains information about the client-side code.
    - **tailwind.config.js**: Configuration file for Tailwind CSS.

  - **backend/**: Contains the server-side code for the project.
    - **models/**: Contains MongoDB models for the application.
    - **node_modules/**: Contains the installed npm packages.
    - **routes/**: Contains the API routes for the application.
    - **.gitignore**: Git ignore file for the server-side code.
    - **dbConnect.js**: File for connecting to the MongoDB database.
    - **package.json**: Contains metadata about the project and its dependencies.
    - **package-lock.json**: Automatically generated for any operations where npm modifies either the node_modules tree or package.json.
    - **README.md**: Contains information about the server-side code.
    - **server.js**: Main file for setting up the Node.js server.

## Setup Instructions

### 1. Create the Informer Folder
Create a folder named "The Informer" to house the project.

```sh
mkdir "The Informer"
cd "The Informer"
```

### 2. Download NPM Modules
Navigate into the `client` and `backend` folders and download the necessary npm modules for each.

#### Client
```sh
cd client
npm install
```

#### Backend
```sh
cd ../backend
npm install
```

### 3. Start the Project
To start the project, you need to start both the client and the backend servers.

#### Start Client
Navigate to the `client` folder and start the client server.

```sh
cd ../client
npm run start
```

#### Start Backend
Navigate to the `backend` folder and start the backend server.

```sh
cd ../backend
npm run start
```

The project should now be running. You can access the client-side application at `http://localhost:3000` and the server-side API at `http://localhost:8000`.

### 4. Setup MongoDB
Ensure that you have MongoDB installed and running. Configure the database connection in the `dbConnect.js` file of the `backend` folder according to your MongoDB setup.

## Additional Information
- For development, you can use `npm run dev` in the `backend` folder to run both the client and backend servers concurrently.
- Refer to the individual README files in the `client` and `backend` folders for more specific instructions on development and deployment.
- Make sure to secure your MongoDB database with proper authentication and access controls.
