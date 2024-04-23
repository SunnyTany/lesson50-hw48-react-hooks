# hooks in React

## Мемоізація:

- мемоізація значення функції виконана в компоненту [OptimizedComputeComponent](https://github.com/vitejs) за допомогою хука useMemo;
- мемоізація компонентів MemoizedCounter та MemoizedSetText виконана за допомогою memo;
- мемоізація функції виконана в компоненту [OptimizedComponent](https://github.com/) за допомогою хука useCallback

- також використані в додатку такі хуки:
  - useMatch для перевірки активної лінки;
  - useReducer для складного управління станом компонента;
  - useSearchParams для считування параментрів url.