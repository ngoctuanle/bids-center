import { Routes, Route } from '@models/route';
import { reduce, flatten } from 'lodash-es';

export function flattenRoutes(routes: Routes): Routes {
  return reduce(
    routes,
    (result: Routes, route: Route) => {
      if (route.children) {
        const { children, ...rest } = route;
        result.push({ ...rest, path: '/' + rest.path });
        return flatten([
          ...result,
          flattenRoutes(
            children?.map((item) => ({
              ...item,
              path: [rest.path, item.path].join('/'),
            }))
          ),
        ]);
      }
      result.push({ ...route, path: '/' + route.path });
      return result;
    },
    []
  );
}
