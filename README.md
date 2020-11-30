# HomeEats

_By EzraPinsky_

**Table of Contents**

- [HomeEats](#homeEats)
  - [HomeEats at a Glance](#homeeats-at-a-glance)
  - [Application Architecture and Technologies Used](#application-architecture-and-technologies-used)
  - [Frontend Overview](#frontend-overview)
    - [React and Redux](#react-and-redux)
  - [Backend Overview](#backend-overview)
    - [Authentication and Application Security](#authentication-and-application-security)
    - [Relational Database Design](#relational-database-design)
  - [Conclusion & Stretch Goals](#conclusion--next-steps)

## HomeEats at a Glance

HomeEats is an online food marketplace modeled on etsy.com, where users can buy and sell homemade foods locally. A user can create an account, browse a list of local home chefs, see a home chef's menus, add menu items to a basket and finally make a purchase. Users can also register themselves as a home chef to create a chef's page with menus.

## Application Architecture and Technologies Used

HomeEats was built with a frontend server using React and Redux that that communicates via RESTful APIs with a backend express server.

The backend server was created using the Express NodeJS framework. The express server makes use of a PostgreSQL database to store all data and uses [Sequelize ORM](https://sequelize.org/) to create relationships between data points for easy data retrieval. The application uses [csurf](https://www.npmjs.com/package/csurf) and [JWT](https://www.npmjs.com/package/jsonwebtoken) (Jason Web Token) to maintain user sessions and the security of the API.

The frontend user interface was created using [react](https://www.npmjs.com/package/react) and [redux](https://www.npmjs.com/package/redux) as well ass styled with vanilla CSS.

## Frontend Overview

HomeEats is a CRUD platform, utilizing react and redux to create a single page application that allow users to interact with various features.

### React and Redux

The most challenging and satisfying aspect of this project was the difficult plunge into organizing and implementing the data flow from react and redux to the express server. Persisting data using the redux store  with react hooks and allowing dynamic updates to the page without refreshing was tricky but gives the app a polished and smooth feel.

## Backend Overview

### ^look at backend project for inspiration for what to write here.^

To render the correct information I needed for the redux store, I used various RESTful APIs to sequrely query the express server for relevant data. I utilized Sequelize ORM to generate the database tables using join tables and foreign key constraints to associate where necessary.

### Authentication and Application Security

For authentication, I used the redux store and react hooks to authenticate and restore the user. If a user is not logged on they will be redirected to the splash page to login or signup. i user that was logged in previously can still access the app without loggin in again if the cookie has not expired. 

The application uses csrf cookies and JSON Web Tokens for secure access to the app. I used bcrypt hashing in order to encrypt user credentials to protect the apps integrity.

### Relational Database Design

The backbone of this application was based off the database schema. I took care to accurately create all the tables and relationships between them. I generated some test data for seeding and manually entered the rest through the frontend forms connected to the database.

This is the database schema:
![HomeEats Database Schema](https://drawsql.app/ezra-pinsky/diagrams/homeeats-db)

**Notes on the schema**:

- Primary keys are indicated by a key symbol
- Unique data types are indicated by a snowflake
- The Favorite_Home_Chef and Review tables are created for future implementation
## Conclusion & Stretch Goals

This was my first solo using react and redux to build a full-stack application from front-end to back-end. It was extremely challenging and pushed me to work relentlessly in order to complete this project in limited time. Creating HomeEats has cemented my knowlegde of React and Redux using hooks with the store and dramatically increased my css understanding. But in truth no project is ever finished. Projects and ideas grow and mutate to become something that they were not inittialy vizualized as, and I still have many features that I would like to implement and hopefully one day commericialy with.

- Users can leave reviews and rate items
- Users can favorite Home Chefs
- Users can find local chefs using google maps api
- Home Chefs can make posts to a feed
- Add categories to search

Thank you reading, now go get a bite to eat!
