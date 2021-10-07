import Users from '../../pages/users';

const UsersRoutes = [
  {
    path: "/users",
    exact: true,
    component: Users,
  },
  {
    path: "/users/:id",
    component: Users,
    meta: {
      navLink: "/users",
    },
  },
];

export default UsersRoutes;
