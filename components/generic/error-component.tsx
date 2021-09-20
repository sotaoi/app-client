import React from 'react';
import { View, Text } from 'react-native';
import { Link } from '@sotaoi/client/router';
import { Errors } from '@app/client/errors';
import { Helper } from '@sotaoi/client/helper';

const ErrorComponent = (props: { error: Error | null }): null | React.ReactElement => {
  switch (true) {
    case Helper.isWeb():
      switch (true) {
        // gate errors
        case props.error instanceof Errors.InvalidGateRepository:
          return <section>Error: invalid register repository</section>;

        // generic errors
        case props.error instanceof Errors.NotFoundView:
          return (
            <section className={'p-4'}>
              <h2>Not Found</h2>
              <hr />
              <p>We did not find what you were looking for</p>
            </section>
          );
        case props.error instanceof Errors.ComponentFail:
          return <section>Error encountered</section>;
        case props.error instanceof Errors.NotFoundLayout:
          return (
            <section style={{ display: 'flex', flex: 1, fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Link to={'/'}>Page Not Found</Link>
            </section>
          );
        default:
          return (
            <section style={{ display: 'flex', flex: 1, fontSize: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Link to={'/'}>{props.error?.message || '???'}</Link>
            </section>
          );
      }
    case Helper.isMobile():
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 50 }}>{props.error?.message || '???'}</Text>
        </View>
      );
    case Helper.isElectron():
      // nothing here yet
      return null;
    default:
      throw new Error('Unknown environment');
  }
};

export { ErrorComponent };
