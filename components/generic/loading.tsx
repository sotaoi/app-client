import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Helper } from '@sotaoi/client/helper';

const Loading: React.FunctionComponent = () => {
  switch (true) {
    case Helper.isWeb():
      return (
        <section style={{ display: 'flex', flex: 1, fontSize: 75, justifyContent: 'center', alignItems: 'center' }}>
          ...
        </section>
      );
    case Helper.isMobile():
      return (
        <React.Fragment>
          <StatusBar barStyle={'dark-content'} />
          <View>
            <Text>...</Text>
          </View>
        </React.Fragment>
      );
    case Helper.isElectron():
      // nothing here yet
      return null;
    default:
      throw new Error('Unknown environment');
  }
};

export { Loading };
