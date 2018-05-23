import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/ui/body.html';
import '../imports/ui/admin.html';
import '../imports/ui/lga.html';
import '../imports/ui/faci.html';
import '../imports/ui/admin.css';
import '../imports/ui/parent.html';
import '../imports/api/admin.js';
import '../imports/api/parent/importables.js';




Router.route('/', function(){
    this.render('start')
  });

Router.route('/admin', function(){
    this.render('admin')
  });

Router.route('/lga', function(){
      this.render('lga')
  });

Router.route('/faci', function(){
          this.render('faci')
  });

  Router.route('/parent', function(){
    this.render('parent')
});

  Router.route('/dbtrial', function(){
            this.render('dbtrial')
    });