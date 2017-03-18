import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Initialize the Express App
const app = new Express();

// Import required modules
import serverConfig from './config';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({
  limit: '20mb',
}));
app.use(bodyParser.urlencoded({
  limit: '20mb',
  extended: false,
}));
app.use(Express.static(path.resolve(__dirname, '../dist')));

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));

  app.get('*', function (req, res) {
    const memoryFs = compiler.outputFileSystem;
    const index = path.join(config.output.path, 'index.html');
    const html = memoryFs.readFileSync(index);
    res.status(200).end(html);
  });
} else {
  // react router
  app.get('*', (req, res) => {
      res.status(200).sendFile(path.join(process.cwd(), 'dist', 'index.html'));
  });
}

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`WMS proj. is running on port: ${serverConfig.port}!`); // eslint-disable-line
  }
});

export default app;
