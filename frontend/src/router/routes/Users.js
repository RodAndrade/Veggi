import List from '../../pages/Users/list';
import View from '../../pages/Users/view';

const UsersRoutes = [
  {
    path: "/users",
    exact: true,
    component: List,
  },
  {
    path: "/users/create",
    exact: true,
    component: View,
  },
  {
    path: "/users/:id",
    component: View,
  },
];

export default UsersRoutes;
