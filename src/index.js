import { useState, useEffect } from 'react';
import {
  getNetworkInformation,
  handleOnline as _handleOnline,
  handleOffline as _handleOffline,
  onNetworkInformationChange as _onNetworkInformationChange,
} from './utils';

const useConnection = () => {
  const [ connection, setState ] = useState();

  useEffect(() => {
    const network = getNetworkInformation();
    const handleOnline = _handleOnline(setState);
    const handleOffline = _handleOffline(setState);
    const onNetworkInformationChange = _onNetworkInformationChange(setState);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (network.connectionObject && network.data.networkInformationSupported) {
      network.connectionObject.addEventListener('change', onNetworkInformationChange);
    }

    setState(state => ({
      ...state,
      online: navigator.onLine,
      since: new Date().getTime(),
      ...getNetworkInformation(),
    }));

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (network.connectionObject && network.data.networkInformationSupported) {
        network.connectionObject.removeEventListener('change', onNetworkInformationChange);
      }
    };
  }, []);

  return connection;
};

export default useConnection;
