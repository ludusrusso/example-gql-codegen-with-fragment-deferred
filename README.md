# Demonstrating bug with isFragmentReady with fragment with deferred nested fragment

The problem is that meta data deffered Fields are not generated for nested fragments.

```typescript
export type SlowFieldDeferredFragmentFragment = { __typename?: "Query" } & ({
  __typename?: "Query";
} & {
  " $fragmentRefs"?: {
    SlowFragmentFragment: Incremental<SlowFragmentFragment>;
  };
}) & { " $fragmentName"?: "SlowFieldDeferredFragmentFragment" };
```
