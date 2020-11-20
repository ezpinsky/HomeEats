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
  - [Conclusion & Next Steps](#conclusion--next-steps)

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

The backbone of our application was based off our database schema and therefore we made sure to accurately create the tables and all the relationships between them. We generated test data to seed the database with and additional entries were created through submissions on forms on our frontend.

This is our database schema:
ADD SCHEMA HERE^^^
![Meadium Database Schema](./db_schema_screenshot.png)

**Notes on the schema**:

- Foreign keys are denoted by FK
- Users have a One-Many relationship with cheers, comments, stories, and pins
- String data types are in orange, numbers in yellow, dates in turquoise
- As of now, Meadium has not implemented the Pinned functionality but a table was created for future implementation

## Conclusion & Next Steps

ADD DESIRED FEATURES AND STRETCH GOALS
This was our very first group full-stack application and it was a challenging, yet rewarding experience. The process sharpened our problem-solving and communicative skills. While the project is deployed, there are various features that still need to be added and revised:

- Pin feature to save stories
- Follow authors feature
- Refine search feature
- Refine comment feature
- Thoroughly test to handle all errors that may occur

Thank you reading, now go get a bite to eat!
