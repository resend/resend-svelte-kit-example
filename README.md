# Resend with Example

This example shows how to use Resend with [Example](https://example.com).

## Prerequisites

To get the most out of this guide, you’ll need to:

* [Create an API key](https://resend.com/api-keys)
* [Verify your domain](https://resend.com/domains)

## Instructions

1. Define environment variables in `.env`

```
cp .env.example .env
```

2. Install dependencies:

  ```sh
pnpm install
  ```

3. Execute the following command:

  ```sh
pnpm dev
  ```

4. Make a curl request:

  ```sh
curl -X POST http://localhost:5173/send
  ```

## License

MIT License
