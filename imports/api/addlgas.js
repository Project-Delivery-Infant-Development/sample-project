import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Schemas = {};
// Create a simple Schema
Template.registerHelper('Schemas', Schemas);

Schemas.Person = new SimpleSchema({
  firstName: {
    type: String
  },
  lastName: {
    type: String,
    optional: true
  },
  email: {
    type: String,
    optional: true,
    autoform:{
      type: 'email'
    }
  },
  zip: {
    type: String,
    optional: true
  }
}, { tracker: Tracker });

const Collections = {};

Template.registerHelper('Collections', Collections);

People = Collections.People = new Mongo.Collection('People');
People.attachSchema(Schemas.Person);



People.allow({
  insert() {
    return true;
  },
  remove() {
    return true;
  }
});

// Template.updateaf.helpers({
//   autoSaveMode() {
//     return Session.get("autoSaveMode") ? true : false;
//   },
//   selectedPersonDoc() {
//     return People.findOne(Session.get("selectedPersonId"));
//   },
//   isSelectedPerson() {
//     return Session.equals("selectedPersonId", this._id);
//   },
//   formType() {
//     if (Session.get("selectedPersonId")) return "update";
//     return "disabled";
//   },
//   disableButtons() {
//     return !Session.get("selectedPersonId");
//   }
// });
//
// Template.updateaf.events({
//   'click .person-row'() {
//     Session.set("selectedPersonId", this._id);
//   },
//   'change .autosave-toggle'() {
//     Session.set("autoSaveMode", !Session.get("autoSaveMode"));
//   }
// });
