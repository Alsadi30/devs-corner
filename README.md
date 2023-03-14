# Dev's Corner

## LIVE-LINK: https://devs-corner-client.onrender.com/

Dev's Corner is a web application that provides a platform for developers to create an account and manage their profiles based on their skills and experience. The application allows users to build and print their resumes, search for jobs, and apply for them. Recruiters can also manage their company accounts, create job posts for various positions, search for targeted candidates, view their profiles, and conduct small screening tests such as quiz contests, as per their requirements.

## Tools Used

### Front End

-   TypeScript
-   Lerna
-   RestAPI
-   React Hook Form
-   Material-UI (MUI)
-   React Router
-   React Query / Redux RTK
-   React PDF

### Back End

-   TypeScript
-   Express
-   Postgres
-   TypeORM

## Resources

-   Draw.io: https://app.diagrams.net/#G1aiU4_yZKKlOSzDAfQlC6LGNHvk7LBpY-
-   Figma File: https://www.figma.com/file/BqZffIdxFbkIICvETdD6oY/Dev's-Corner-Dashboard?node-id=0%3A1&t=91CNu4igW3uBsnrR-1

## Project Implementation Rules:-

-   An explanation must be provided when implementing a feature.
-   Code smells are not allowed.
-   Comments should be added wherever possible.
-   Code should be made reusable wherever possible.
-   The project should be submitted to Nayem Vai, and his conventions should be followed.
-   If there are multiple ways to build a feature, the best or the way Nayem Vai has done it should be followed.
-   If a convention is implemented that is better than Nayem Vai's, an explanation should be provided.

## How to Run the Project

1. Clone the repository from the GitHub page.
2. Navigate to the root folder and install the dependencies by running the following command in the terminal: yarn install
3. Create a .env file in the root folder with the following variables:

4. makefile

```Copy code
    PORT=<port_number>
    JWT_SECRET=<jwt_secret_key>
    DATABASE_URL=<postgres_database_url>
```

5. Navigate to the client folder and install the dependencies by running the following command in the terminal: yarn install
6. Navigate back to the root folder and start the application by running the following command in the terminal: yarn dev
7. The application can now be accessed at http://localhost:3000.

## Conclusion

    Dev's Corner is a comprehensive web application that provides developers and recruiters with a platform to interact and connect with each other. It is built using a modern tech stack and follows best practices to ensure that the codebase is clean, maintainable, and scalable.
