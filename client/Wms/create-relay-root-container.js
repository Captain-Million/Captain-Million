import Relay from 'react-relay';
import React from 'react';

const inventoriesRoute = {
  queries: {
    inventories: () => Relay.QL`
      query { getMyInventories }
    `,
  },
  params: {},
  name: 'InventoriesRoute',
};

function createRelayRootContainer(WrappedComponent) {
  return function RelayWrapper(props) {
    return (
      <Relay.RootContainer
        Component={WrappedComponent}
        route={inventoriesRoute}
        renderFetched={data => <WrappedComponent {...props} {...data} />}
      />
    );
  };
}

export default createRelayRootContainer;

