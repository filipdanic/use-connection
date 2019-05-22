export const getNavigatorConnection = () => {
  if (typeof navigator !== 'object') {
    return undefined;
  }
  return navigator.connection || navigator.mozConnection || navigator.webkitConnection;
};

export const getNetworkInformation = () => {
  const connectionObject = getNavigatorConnection();
  if (!connectionObject) {
    return {
      data: {
        networkInformationSupported: false,
      },
    };
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
  const { downlink, downlinkMax, effectiveType, type, rtt, saveData } = connectionObject;
  return {
    data: {
      networkInformationSupported: true,
      downlink,
      downlinkMax,
      effectiveType,
      type,
      rtt,
      saveData,
    },
    connectionObject: connectionObject,
  };
};

export const handleOnline = (setState) => () => {
  setState(state => ({
    ...state,
    online: true,
    since: new Date().getTime(),
  }));
};

export const handleOffline = (setState) => () => {
  setState(state => ({
    ...state,
    online: false,
    since: new Date().getTime(),
  }));
};

export const onNetworkInformationChange = (setState) => () => {
  setState(state => ({
    ...state,
    ...getNetworkInformation(),
  }));
};
