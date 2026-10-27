# useAwaitThenable false positive on a named function type unioned with undefined

Reproduction for https://github.com/biomejs/biome/issues/12705.

```sh
npm install
npm run lint
```

Biome 2.6.3 reports "`await` used on a non-Promise value." on the three functions marked "Reported" in `src/index.ts`, and nothing on the two marked "Not reported". Every awaited call returns a `Promise<string>`.
