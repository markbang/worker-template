import { Hono } from 'hono';
import { prettyJSON } from 'hono/pretty-json';
import { artifactsTable } from './db/schema';
import { drizzle } from 'drizzle-orm/node-postgres';
import routes from './routes';

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const app = new Hono<{ Bindings: Env }>();
app.route('/', routes);
app.use('*', prettyJSON());

app.get('/artifacts', async (c) => {
  const db = drizzle(c.env.DATABASE_URL);
  const artifacts = await db.select().from(artifactsTable).limit(10);
  return c.json(artifacts);
});

export default app;
