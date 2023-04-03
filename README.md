# Matcha 🔥

_Matcha_ is a full-stack dating app made with ReactJS, Redux, Node.js, Express.js, PostgreSQL & Tailwind CSS. It was the second project of web branch at Hive Helsinki, done as a group project with two schoolmates of mine - [Juho Kangas](https://github.com/JuhoKangas) and [Alba Castaño](https://github.com/acastanome). We didn't have previous experience with the mentioned stack and we learned everything by doing. Building this app took us two months, during which we not only improved our coding skills, but also our teamwork skills, prioritizing tasks and organizing work efficiently to meet a set deadline. <br />

## Project description
_This project introduces you to a more advanced tool for creating your web applications: the micro-framework. You will have to create, in the language of your choice, a dating site. Interactions between users will be at the very heart of the project!_

## Keywords
- Micro-framework
- Advanced user accounts
- Real-time web
- Geolocation
- Security / Data validation

## Skills
- Security (SQL injection & XSS attack prevention)
- DB & Data
- Web

## Stack
- ReactJS
- Redux
- Node.js
- Express.js
- TailwindCSS
- PostgreSQL
- JSON web tokens
- Axios for API requests
- Websockets (socket.io) for real-time messaging and receiving notifications
- IP Geolocation

## What can you do on Matcha?
[Screen Shot 2023-04-03 at 3.25.14 PM.zip](https://github.com/Katarina-Slotova/matcha/files/11138505/Screen.Shot.2023-04-03.at.3.25.14.PM.zip)

### Registration and Signing-in
User can register providing an email address, a username, a last name, a first name and a password that is encrypted in the database. After the registration, an e-mail with an unique link is sent to the registered user to verify their account. The user can then connect with their username and password. They can request password reinitialization if they forget it via a unique link sent in an email to them.

<img width="530" alt="Screen Shot 2023-04-03 at 3 25 29 PM" src="https://user-images.githubusercontent.com/66918113/229517897-c4dc0832-13e5-4925-9add-d2e91608f889.png">

### User profile
Once connected, a user fills their profile, adding their gender, sexual preferences, bio, list of their interests, profile picture and optionally 4 other pictures. User can modify their own information. 
The user can see who looked at their profile as well as who “liked” them in real-time notifications.
On the home page, the user gets a list of suggestions that match profile based on their sexual preference, age, interests and location.

### Search
The user must can run an advanced research selecting one or a few criterias such as age, location or interests.

### Profiles of other users
The user can check other users' profiles, where they can see all the information available about the other user, except for the email and the password.
User can also see if the other user is online, and if not see the date and time of the last connection. They can also report the user as a “fake account”. and block the user. A blocked user won’t appear anymore in the research results.

### Chat
When two users like each other, they can start chatting in real time.

### Notifications
The user is notified in real time of the following events:
- the user was liked by another user
- the user’s profile has been checked
- the user received a message
- a “liked” user “liked” back

## Run the app
1. You will need to install PostgreSQL (e.g. with [Homebrew](https://wiki.postgresql.org/wiki/Homebrew))
2. React runs on port 3000, Node runs on port 3001.
3. Run `npm i` on both client-side and server-side in order to install all the necessary dependencies.
4. You will also need to create an env file on the server-side with structure like this: 
`PORT=3001
EMAIL_PASSWORD (admin's email's password)
EMAIL_ADDRESS (admin's email)
PGUSER
PGHOST=localhost
PGPASSWORD
PGDATABASE
PGPORT=5432
SECRET`

5. Run `npm run dev` on server side to start server and `npm start` on client side to start front-end of the application.
