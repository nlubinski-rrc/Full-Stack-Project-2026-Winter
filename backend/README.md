# My API:
This API is made a review system that makes reviews of courses sections of courses

# Steps to start:
1. npm install
2. connect to firebase
3. Populate env file
4. user createClaims to asssign roles to accounts
5. Have fun!

# For the ENV file setup you need to populate:
- EMAIL: The email you want to send the updates from
- EMAIL_PASS: The email password of the email your recieving stuff from
- EMAIL_RECIEVER: Whos reciving the email
- PORT: The port you want this application to run on (3000 is default)
- NODE_ENV: development or production depending on security
- FIREBASE_PROJECT_ID: Can be taken from your .json you get from your service account
- FIREBASE_CLIENT_EMAIL: Can be taken from your .json you get from your service account
- FIREBASE_PRIVATE_KEY: The massive key in the .json file

# Roles that each stature hold:
## user:
- Create reviews

## manager
- Create a course
- Get a list of all courses
- Can get a course by its id
- Get a list of all reviews
- Get reviews by a review ID
- Create a section
- Get all sections
- Get a section by its id

## admin
- Create a course
- Get a list of all courses
- Can get a course by its id
- Update a course
- Delete a course
- Get a list of all reviews
- Get reviews by a review ID
- Update a review
- Delete reviews
- Get all sections
- Get a section by its id
- Update a section
- Delete a section

# For security:
it requries a token from a firebase user