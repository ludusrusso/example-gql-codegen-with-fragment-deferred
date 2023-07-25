/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Query = {
  __typename?: "Query";
  alphabet: Array<Scalars["String"]["output"]>;
  /** A field that resolves fast. */
  fastField: Scalars["String"]["output"];
  /**
   * A field that resolves slowly.
   * Maybe you want to @defer this field ;)
   */
  slowField: Scalars["String"]["output"];
};

export type QuerySlowFieldArgs = {
  waitFor?: Scalars["Int"]["input"];
};

export type SlowFragmentFragment = {
  __typename?: "Query";
  slowField: string;
} & { " $fragmentName"?: "SlowFragmentFragment" };

export type SlowFieldDeferredFragmentFragment = { __typename?: "Query" } & ({
  __typename?: "Query";
} & {
  " $fragmentRefs"?: {
    SlowFragmentFragment: Incremental<SlowFragmentFragment>;
  };
}) & { " $fragmentName"?: "SlowFieldDeferredFragmentFragment" };

export type SlowAndFastFieldWithDeferQueryVariables = Exact<{
  [key: string]: never;
}>;

export type SlowAndFastFieldWithDeferQuery = {
  __typename?: "Query";
  fastField: string;
} & {
  " $fragmentRefs"?: {
    SlowFieldDeferredFragmentFragment: SlowFieldDeferredFragmentFragment;
  };
};

export const SlowFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SlowFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Query" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "slowField" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "waitFor" },
                value: { kind: "IntValue", value: "5000" },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SlowFragmentFragment, unknown>;
export const SlowFieldDeferredFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SlowFieldDeferredFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Query" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "SlowFragment" },
            directives: [
              { kind: "Directive", name: { kind: "Name", value: "defer" } },
            ],
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SlowFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Query" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "slowField" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "waitFor" },
                value: { kind: "IntValue", value: "5000" },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SlowFieldDeferredFragmentFragment, unknown>;
export const SlowAndFastFieldWithDeferDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "SlowAndFastFieldWithDefer" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "fastField" } },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "SlowFieldDeferredFragment" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SlowFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Query" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "slowField" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "waitFor" },
                value: { kind: "IntValue", value: "5000" },
              },
            ],
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SlowFieldDeferredFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Query" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "SlowFragment" },
            directives: [
              { kind: "Directive", name: { kind: "Name", value: "defer" } },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SlowAndFastFieldWithDeferQuery,
  SlowAndFastFieldWithDeferQueryVariables
>;
