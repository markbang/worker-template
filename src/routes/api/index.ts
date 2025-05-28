import { Hono } from 'hono';
import health from './health';

const app = new Hono();

app.route('/v1/health', health);

export default app;
