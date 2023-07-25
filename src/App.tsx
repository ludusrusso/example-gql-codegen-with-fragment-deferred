import { useQuery } from "@apollo/client";

import { FragmentType, graphql, isFragmentReady, useFragment } from "./gql";

export const slowFragment = graphql(/* GraphQL */ `
  fragment SlowFragment on Query {
    slowField(waitFor: 5000)
  }
`);

export const slowFieldDeferredFragment = graphql(/* GraphQL */ `
  fragment SlowFieldDeferredFragment on Query {
    ...SlowFragment @defer
  }
`);

const alphabetQuery = graphql(/* GraphQL */ `
  query SlowAndFastFieldWithDefer {
    fastField
    ...SlowFieldDeferredFragment
  }
`);

const SlowDataComponent = (props: {
  data: FragmentType<typeof slowFragment>;
}) => {
  const data = useFragment(slowFragment, props.data);
  return <p>{data.slowField}</p>;
};

const SlowDataField = (props: {
  data: FragmentType<typeof slowFieldDeferredFragment>;
}) => {
  const data = useFragment(slowFieldDeferredFragment, props.data);
  if (!isFragmentReady(slowFieldDeferredFragment, slowFragment, data)) {
    return <p>Loading...</p>;
  }
  return <SlowDataComponent data={data} />;
};

function App() {
  const { data } = useQuery(alphabetQuery);

  return (
    <div className="App">
      {data && (
        <>
          <p>{data.fastField}</p>
          <SlowDataField data={data} />
        </>
      )}
    </div>
  );
}

export default App;
