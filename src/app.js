import express from'express';
import routes from './routes/index.routes.js';
import globalErrorHandler from './middlewares/globalErrorHandler.js';

const app = express();
routes(app);

app.use(globalErrorHandler);

export default app;