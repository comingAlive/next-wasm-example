# Next.js + WebAssembly example

This example shows how to build a typed and optimized WebAssembly module from Rust and dynamically import it inside of Next.js.

## How to use

Clone repo and install dependencies:

```bash
npm install
# or
yarn
```

To compile Rust code `src/lib.rs` to `pkg` module you'll have to [install](https://www.rust-lang.org/learn/get-started)
Rust. Then run:

```bash
npm run build-rust
# or
yarn build-rust
```

Start Next.js app:

```bash
npm run dev
# or
yarn dev
```
