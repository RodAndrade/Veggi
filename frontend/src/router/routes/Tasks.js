import Tasks from '../../pages/Tasks';

const TasksRoutes = [
  {
    path: "/",
    exact: true,
    component: Tasks,
  },
  {
    path: "/tasks",
    exact: true,
    component: Tasks,
  },
  {
    path: "/tasks/:user",
    component: Tasks,
  },
];

export default TasksRoutes;
