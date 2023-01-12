# plantDex

# Credits:
Sarah Moosa : (https://github.com/Sbethm)


# Motivations: 
When you become a dedicated plant parent, you may find yourself tucking plants into every viable ray of sunlight in your home. After collecting more plants than you can count, it bcomes difficult to rememebr exactly what plants you have and when to water them.

# Description: 
plantDex is a web application that allows users to keep track of their house plants and their watering schedules. 

# Technologies: 
This project was built utilizing a combination of Webpack, React, Node.js, Express, MongoDB and TypeScript. 

  - **React** was utilized to create the front end of the application as it was felt to be an efficient and lightweight method of providing seamless functionality and a responsive user interface. It allows for a great deal of modularity through reusable components and, with the aid of React Hooks and the Context API, it was quite easy to manage state and pass necessary data between components. 

  - **Sass** was used to style the application as it allowed for a more efficient and organized way of styling components compared to traditional CSS. It provided us with the ability to use variables and mixins which made it easier to maintain a consistent theme throughout the application that helped users differentiate between the various components for a better user experience.

  - **Node.js and Express** were used to build out the back end of the application due to their ability to handle asynchronous requests and their ability to provide a robust framework for building out the server. The use of these technologies allowed us to create a RESTful API that could be used to interact with the PostgreSQL database for efficient and sensible management of user data.

  - **MongoDB** was used as the database for this application as due to its flexibility as a database that was inherently well-suited to managing user data in an easily scalable manner. Specifically, it allowed us to create a relational database that could be used to store user data, and through the use of join tables, it was possible to create a one-to-many relationship between users and their various subscriptions. 

  - **Webpack** was used to bundle the application as it allowed us to build an efficient and modular base for the application. It allowed us to use a variety of loaders to handle different file types and it also provided us with the ability to use plugins to optimize the application for production.

  - **Babel** was used to transpile the application as it allowed us to use the latest version of JavaScript and utilize features such as arrow functions and async/await. It also allowed us to use the latest version of React and JSX.


# Future Goals:

  - **Security**: Presently, the application does not have any security features implemented. In the future, we would like to implement a login system that securely hashes passwords and stores them in the database. An extension of this would be implementing a password reset system that allows users to reset their passwords if they forget them. 

  - **OAuth**: We would also like to implement OAuth to allow users to login using their Google or Facebook accounts. This would allow users to login to the application without having to create a new account and would also allow them to login to the application from any device without having to remember their password. We feel this would be a great improvement for the user experience. 

  - **Filtering**: A minor feature that could be useful, particularly for users with many plants, would be the ability to filter plants by categories such as water schedule, sunlight, propogation type, and sunlight. 

