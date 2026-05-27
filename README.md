> [!IMPORTANT]
> This repository has been consolidated into the new [resend-examples](https://github.com/resend/resend-examples) monorepo, which contains updated examples for all languages and frameworks.
>
> **[View the SvelteKit examples here](https://github.com/resend/resend-examples/tree/main/sveltekit-resend-examples)**

---


# Resend with SvelteKit

This example shows how to use Resend with [SvelteKit](https://svelte.dev/docs/kit).

## Prerequisites

To get the most out of this guide, you’ll need to:

* [Create an API key](https://resend.com/api-keys)
* [Verify your domain](https://resend.com/domains)

## Instructions

1. Define environment variables in `.env`

```
cp .env.example .env
```

2. Update the `RESEND_API_KEY` in `.env` with your API key.

You can create an API key in the [Resend dashboard](https://resend.com/api-keys).

3. Install dependencies:

  ```sh
pnpm install
  ```

4. Execute the following command:

  ```sh
pnpm dev
  ```

5. Make a curl request:

  ```sh
curl -X POST http://localhost:5173/send
  ```

## License

MIT License
