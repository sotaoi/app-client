import { ViewComponent, ViewPromises } from '@sotaoi/client/components';

abstract class HomeView extends ViewComponent<{}> {
  public promises(): ViewPromises<{}> {
    return {};
  }
}

export { HomeView };
