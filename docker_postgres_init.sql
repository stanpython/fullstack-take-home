-- Create tables for PostgresDB
CREATE TABLE "users" (
    "id" serial NOT NULL,
    "name" varchar NOT NULL,
    "email" varchar NOT NULL,
    CONSTRAINT "PK_users" PRIMARY KEY ("id")
);
CREATE TABLE "courses" (
    "id" INT NOT NULL,
    "name" varchar NOT NULL,
    "description" varchar NOT NULL,
    CONSTRAINT "PK_courses" PRIMARY KEY ("id")
);
CREATE TABLE "sessions" (
    "id" serial NOT NULL,
    "course_id" INT NOT NULL,
    "session_number" INT NOT NULL,
    "name" varchar NOT NULL,
    "description" varchar NOT NULL,
    CONSTRAINT "PK_sessions" PRIMARY KEY ("id")
);
CREATE TABLE "sections" (
    "id" serial NOT NULL,
    "course_id" INT NOT NULL,
    "nickname" varchar NOT NULL,
    "start_date" date NOT NULL,
    CONSTRAINT "PK_sections" PRIMARY KEY ("id")
);
CREATE TABLE "sign_ups" (
    "id" serial NOT NULL,
    "section_id" INT NOT NULL,
    "user_id" INT NOT NULL,
    CONSTRAINT "PK_signups" PRIMARY KEY ("id")
);
ALTER TABLE "sign_ups"
ADD CONSTRAINT "sections_fk" FOREIGN KEY ("section_id") REFERENCES "sections"("id");
ALTER TABLE "sign_ups"
ADD CONSTRAINT "users_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "sections"
ADD CONSTRAINT "courses_fk" FOREIGN KEY ("course_id") REFERENCES "courses"("id");
ALTER TABLE "sessions"
ADD CONSTRAINT "courses_fk" FOREIGN KEY ("course_id") REFERENCES "courses"("id");
-------------------------------------------------------------------------------------------------------------------------
-- Insert data provided in data folder
INSERT INTO "courses"
VALUES (
        1,
        'How To Write a Book',
        'Ever wondered how you could write a book? Well now is your chance! Take this course to learn how to become the next Toni Morrison.'
    );
INSERT INTO "courses"
VALUES (
        2,
        'The Physics of Time',
        'Time is just a construct - or is it? Take this course to dive deep into the space-time continuum.'
    );
---Insert into sessions table-----------------------------------------------------------------------------------------------------
INSERT INTO "sessions"
VALUES (
        1,
        1,
        1,
        'Decide on a topic',
        'Time to brainstorm on that idea you''ve been wanting to write about for ages. What will you say? Do you have enough to write about? Let''s find out!'
    );
INSERT INTO "sessions"
VALUES (
        2,
        1,
        2,
        'Write your first chapter',
        'Now that you''ve decided what you''ll write about, it''s time to dive in and knock that first chapter out! They say that once you''ve jumped the first hurdle of writing the first chapter, the rest will come naturally!'
    );
INSERT INTO "sessions"
VALUES (
        3,
        1,
        3,
        'Decide on a title',
        'Whether you want it to be clever, hard-hitting, or mysterious, the title of your book is the first thing people will see of your book. We''ll spend this lesson ideating on titles that make an impact.'
    );
INSERT INTO "sessions"
VALUES (
        4,
        1,
        4,
        'Finding an Editor',
        'We''ll wrap up this course by setting you up for success and finding an editor to for you to continue to work with as your writing journey continues.'
    );
INSERT INTO "sessions"
VALUES (
        5,
        2,
        1,
        'What is Space-Time?',
        'Is it space? Is it time? Why are these 2 words now linked together? Let''s dive into the mystery!'
    );
INSERT INTO "sessions"
VALUES (
        6,
        2,
        2,
        'What is a Light-Year?',
        'Have you ever wondered how we see stars so brightly, but can never visit them? We''ll introduce the concept of light-years and why objects in mirror are WAY farther than they appear.'
    );
INSERT INTO "sessions"
VALUES (
        7,
        2,
        3,
        'Wormholes - not the ones in your garden',
        'Are there other universes out there? Are they using the same time we are? What is their construct of time? How do wormholes play into this?'
    );
INSERT INTO "sessions"
VALUES (
        8,
        2,
        4,
        'Stargazing!',
        'We''ll wrap up this course by going on a stargazing adventure and talking about the expansion of space. Where is space expanding to? Exactly.'
    );
----- Insert into sections table ------------------------------------------------------------------
INSERT INTO "sections"
VALUES (1, 1, 'Section 1', '2020-10-30');
INSERT INTO "sections"
VALUES (2, 1, 'Section 2', '2020-11-13');
INSERT INTO "sections"
VALUES (3, 1, 'Section 3', '2020-11-27');
INSERT INTO "sections"
VALUES (4, 2, 'Section 1', '2020-10-15');
INSERT INTO "sections"
VALUES (5, 2, 'Section 2', '2020-10-29');
INSERT INTO "sections"
VALUES (6, 2, 'Section 3', '2020-11-12');
---------Insert Users into Users Table----------------------------------------------------------------------
INSERT INTO "users" (name, email)
VALUES ('stan', 'stan@test.com');
INSERT INTO "users" (name, email)
VALUES ('George', 'test@test.com');
INSERT INTO "users" (name, email)
VALUES ('bob', 'test@test.com');
INSERT INTO "users" (name, email)
VALUES ('john', 'test@test.com');
INSERT INTO "users" (name, email)
VALUES ('jane', 'test@test.com');
INSERT INTO "users" (name, email)
VALUES ('jack', 'test@test.com');
INSERT INTO "users" (name, email)
VALUES ('jess', 'test@test.com');
INSERT INTO "users" (name, email)
VALUES ('joyce', 'test@test.com');
INSERT INTO "users" (name, email)
VALUES ('jason', 'test@test.com');
INSERT INTO "users" (name, email)
VALUES ('david', 'test@test.com');
INSERT INTO "users" (name, email)
VALUES ('sara', 'test@test.com');
---------Insert Signups into Signups Table----------------------------------------------------------------------
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (1, 1);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (2, 2);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (3, 3);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (4, 1);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (4, 2);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (4, 3);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (4, 4);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (4, 5);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (4, 6);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (4, 7);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (4, 8);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (4, 9);
INSERT INTO "sign_ups" (section_id, user_id)
VALUES (4, 10);