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

HomeEats was built with a frontend server that that communicates via RESTful APIs with a backend server.

The backend server was created using the Express NodeJS framework. The express server makes use of a PostgreSQL database to store all data and uses [Sequelize ORM](https://sequelize.org/) to create relationships between data points for easy data retrieval. The application uses [csurf](https://www.npmjs.com/package/csurf) and [JWT](https://www.npmjs.com/package/jsonwebtoken) (Jason Web Token) to maintain user sessions and the security of the API.

The frontend user interface was created using [react](https://www.npmjs.com/package/react) and [redux](https://www.npmjs.com/package/redux) with jsx and vanilla CSS.

## Frontend Overview

HomeEats is a CRUD platform, utilizing react and redux to create a single page application that allow users to interact with various features.

### React and Redux

The most challenging and satisfying aspect of this project was implementing react and redux to create a store for global state that each react component could access and use to update the page without refreshing. I utilized react hooks to implement seamless feature interaction for the user.

Here is a code snippet of a particularly difficult thunk action 'thunk action name':

```js
("example of code snippet)
```

Here is a code snippet of a different particularly difficult thing:

```js
("example of code snippet)
```

## Backend Overview

### ^look at backend project for inspiration for what to write here.^

To render the information we needed on the frontend, we used various RESTful APIs to query for relevant data pertaining to the user and the story. We utilized Sequelize ORM to generate different tables for our data and created joined tables and foreign key constraints to connect them.

### Authentication and Application Security

### ^look at project for what was used here.^

For authentication, we used the express-session library in order to determine that a user was logged in, and if not, redirect him/her to the login page.

For application security, we used the csurf and cookie-parser packages that generated a token that was passed through each form submission for validation. We used bcrypt hashing library in order to encrypt our users' password and protect their privacy.

### Relational Database Design

The backbone of this application was based off the database schema. I took care to accurately create all the tables and relationships between them. I generated some test data for seeding and manually entered the rest through the frontend forms connected to the database.

This is the database schema:
![HomeEats Database Schema](https://drawsql.app/ezra-pinsky/diagrams/homeeats-db)

**Notes on the schema**:

- Primary keys are indicated by a key symbol
- Unique data types are indicated by a snowflake
- The Favorite_Home_Chef and Review tables are created for future implementation
## Conclusion & Stretch Goals

This was my first solo and first react and redux full-stack application. It was extremely challenging and pusehd me to work relentlessly in order to complete this project in only 4 days. Creating HomeEats has cemented my knowlegde of React and Redux using hooks with the store and dramatically increased my css understanding. Being that I had limited time to complete this porject there are still many features that I would like to implement and hopefully one day launch HomeEats with.

- Users can leave reviews and rate items
- Users can favorite Home Chefs
- Users can find local chefs using google maps api
- Home Chefs can make posts to a feed
- Add categories to search

Thank you reading, now go get a bite to eat!
