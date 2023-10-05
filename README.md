## Getting Started

Before testing you need to start the backend, if you haven't seen the backend initialization:: https://github.com/Gustavo-Venceslau/CreditCardValidator

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## how to test

### test success

You can copy the information above and try adding your own credit card:

 - full Name: your name
- credit card: 2720999989955578 or 3440215794378998 (AMEX)
- expiry date: 08/24
- cvv: 123 or 1234 (amex)

after that click and submit and see your credit card be successfully added!

### test fail

for test failure, you can change FAN to have the wrong length change the expiry date to be expired, or change CVV length to be wrong.

