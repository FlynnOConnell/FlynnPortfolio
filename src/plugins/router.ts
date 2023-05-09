import { app } from './main-app';
import router from '../router/index';

router.onError((error) => {
  console.error('Router error:', error);
});

app.use(router);
