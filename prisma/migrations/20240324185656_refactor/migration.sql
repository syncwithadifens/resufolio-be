-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "birthday" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "avatar" DROP NOT NULL,
ALTER COLUMN "avatar" SET DEFAULT 'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg';
