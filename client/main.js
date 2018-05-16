import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tasks } from '../imports/api/tasks.js';

import './main.html';
import '../imports/ui/body.html';
import '../imports/ui/admin.html';
import '../imports/api/tasks.js';
import '../imports/ui/admin.css';
import '../imports/api/admin.js';


Router.route('/', function(){
    this.render('start')
  });

Router.route('/admin', function(){
    this.render('admin')
  });

 
Template.viewlga.helpers({
    tasks() {
      return Tasks.find({}, { sort: { createdAt: -1 } });
    },
  });

  Template.addlga.events({
    'submit .new-task'(event) {
      // Prevent default browser form submit
      event.preventDefault();
      

      // Get value from form element
      const target = event.target;
      const name = target.name.value;

      //const email = event.target.email.value;

      console.log(name);
     //console.log(email);
      // Insert a task into the collection
      Tasks.insert({
        name,
        createdAt: new Date(), // current time
      });
   
      // Clear form
      target.name.value = '';
    },
  });