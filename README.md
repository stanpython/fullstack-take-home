# Take Home Exercise

You will have **a week** to complete the following take-home exercise. Please use Javascript to code the following exercise. We know Javascript is not everyone's primary coding language.**We will NOT be grading you on how well you know Javascript**, but rather on the deeper technical knowledge of code design patterns and best practices.

When submitting your exercise please include:

- A Readme for how to run the application and any tests (including any dependencies that must be downloaded). Also feel free to include any notes or tidbits about thought process as you tackled the exercise.

- Any comments to explain particular logic or call out something cool!

To submit your exercise, please create a repository in Github and email the link to [eng@join-real.com](mailto:eng@join-real.com). Also please email with any questions you may have. Happy Coding!

---

## Exercise: Course Sign-up

Create an application (Frontend and Backend) that allows people to sign up for courses. Courses are structured in the following way:

- Each course has 4 sessions, and each session's content is released on a weekly basis.

- A new section of the course is opened for sign up every 2 weeks.

- There is a cap of 10 people per course section.

## Notes
- Make sure you have `yarn` installed on your machine. If you do not, please run:
```
brew install yarn
```

- A basic NodeJS `express` server is set up, though feel free to use any NodeJS framework you may be comfortable with. To run the app:

```
yarn && yarn start
```

- A `create-react-app` project is included to use for frontend, but again feel free to use whatever framework (or none) you are comfortable with! (We are not judging design/ your CSS skills). To run the app:

```
yarn && yarn start
```

- There is some test data included in `data/` as a starting point to seed your database.

## Requirements

- A Postgres database should be set up to store courses, sections, sessions, and sign ups. Included is a `docker-compose.yml` file that spins up a Postgres db on `localhost:5560`.

- All session titles and descriptions for a course should be visible to users before sign up.

- A session's content should be visible only by people who have signed up for the course.

- A list of users signed up for each course section should be visible.

- A user should be able to sign up and remove themselves from a course.
