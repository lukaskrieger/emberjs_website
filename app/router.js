import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome', {path: '/'});
  this.route('about');
  this.route('404', {path:'/*'});
  this.route('science');
});

export default Router;
