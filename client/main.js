import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/ui/body.html';
import '../imports/ui/admin.html';
import '../imports/ui/admin.css';
import '../imports/api/admin.js';

Router.route('/', function(){
    this.render('start')
  });

Router.route('/admin', function(){
    this.render('admin')
  });

  Template.viewlga.helpers({
    tasks: [
      { text: 'This is task 1' },
      { text: 'This is task 2' },
      { text: 'This is task 3' },
    ],
  });
