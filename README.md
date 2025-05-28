# Worker Template

`Drizzle` with `postgres` and `R2 Bucket`、`Hono`

```bash
npm install
```

Config The [wrangler.toml](./wrangler.toml), Then run `npm run cf-typegen` and `wrangler types`

```bash
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `Env` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: Env }>();
```
