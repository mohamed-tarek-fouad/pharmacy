/*
  Warnings:

  - Added the required column `role` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('user', 'admin') NOT NULL;
