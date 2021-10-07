import Tasks from '../../pages/tasks';

const TasksRoutes = [
  {
    path: "/tasks",
    exact: true,
    component: Tasks,
  },
  {
    path: "/tasks/:id",
    component: Tasks,
    location: '/tasks',
  },
];

export default TasksRoutes;
