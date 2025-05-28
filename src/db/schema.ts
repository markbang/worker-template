import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const artifactsTable = pgTable('artifacts', {
  id: varchar('id', { length: 36 }).primaryKey(),
  upload_time: integer('upload_time').notNull(),
  update_time: integer('update_time').notNull(),
  upload_user: varchar('upload_user', { length: 36 }),
});
