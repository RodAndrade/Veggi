// ** Routes Imports
import UsersRoutes from './Users';
import TasksRoutes from './Tasks';

// ** Merge Routes
const Routes = [
    ...UsersRoutes,
    ...TasksRoutes,
];

export default Routes;
