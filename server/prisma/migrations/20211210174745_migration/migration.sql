-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "blog" TEXT NOT NULL,
    "public_repos" TEXT NOT NULL,
    "followers" TEXT NOT NULL,
    "following" TEXT NOT NULL,
    "twitter_username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "followers" TEXT NOT NULL,
    "following" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
