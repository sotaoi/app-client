import React from 'react';
import { RouteComponent, RouteData } from '@sotaoi/client/components';
import { UpdateUserView } from '@app/client/components/main-layout/views/user/update-user-view';

interface Props {
  uuid: string;
}
class UpdateUserRoute extends RouteComponent<Props> {
  public display({ params }: RouteData<Props>): null | React.ReactElement {
    return <UpdateUserView uuid={params.uuid} />;
  }
  public web(props: RouteData<Props>): null | React.ReactElement {
    return this.display(props);
  }

  public mobile(props: RouteData<Props>): null | React.ReactElement {
    return this.display(props);
  }

  public electron(props: RouteData<Props>): null | React.ReactElement {
    return this.display(props);
  }
}

export { UpdateUserRoute };
