import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Tabular from 'meteor/aldeed:tabular';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Books } from './collections/Books';

import './main.html';
import '../imports/ui/body.html';
import '../imports/ui/admin.html';
import '../imports/ui/lga.html';
import '../imports/ui/faci.html';
import '../imports/ui/admin.css';
import '../imports/api/admin.js';


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

  // new Tabular.Table({
  //   name: "Books",
  //   collection: Books,
  //   columns: [
  //     {data: "title", title: "Title"},
  //     {data: "author", title: "Author"},
  //     {data: "copies", title: "Copies Available"},
  //     {
  //       data: "lastCheckedOut",
  //       title: "Last Checkout",
  //       render: function (val, type, doc) {
  //         if (val instanceof Date) {
  //           return moment(val).calendar();
  //         } else {
  //           return "Never";
  //         }
  //       }
  //     },
  //     {data: "summary", title: "Summary"},
  //     {
  //       tmpl: Meteor.isClient && Template.bookCheckOutCell
  //     }
  //   ]
  // });