// Routing within the templates



Router.route('/viewsessions', function(){
    this.render('viewsessions')
});

Router.route('/editsessions', function(){
    this.render('editsessions')
});

Router.route('/viewlga', function(){
    this.render('viewlga')
});

Router.route('/addlga', function(){
    this.render('addlga')
});

Router.route('/viewfaci', function(){
    this.render('viewfaci')
});

Router.route('/faciviewsessions', function(){
    this.render('faciviewsessions')
});

Router.route('/faciviewgroups', function(){
    this.render('faciviewgroups')
});

Router.route('/facigroupattend', function(){
    this.render('facigroupattend')
});

Router.route('/enrolled-courses', function(){
    this.render('enrolled-courses')
});

Router.route('/parent-search', function(){
    this.render('parent-search')
});
Router.route('/addcourse', function(){
    this.render('addcourse')
});

Router.route('/viewcourse', function(){
    this.render('viewcourse')
});
Router.route('/view-session', function(){
    this.render('view-session')
});

Router.route('/parent-profile', function(){
    this.render('parent-profile')
});


Router.route('/lgaviewsessions', function(){
    this.render('lgaviewsessions')
});

Router.route('/lgaeditsessions', function(){
    this.render('lgaeditsessions')
});

Router.route('/lgaaddsessions', function(){
    this.render('lgaaddsessions')
});

Router.route('/lgaviewgroups', function(){
    this.render('lgaviewgroups')
});

Router.route('/lgaeditgroups', function(){
    this.render('lgaeditsessions')
});

Router.route('/lgaaddgroups', function(){
    this.render('lgaaddsessions')
});


AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    required: true,
    displayName: "Mobile Number",
    errStr: 'Invalid Mobile number!',
    minLength: 10,
    maxLength: 10,
});


AccountsTemplates.addField({
    _id: "gender",
    type: "select",
    displayName: "Gender",
    select: [
        {
            text: "Male",
            value: "male",
        },
        {
            text: "Female",
            value: "female",
        },
    ],
});


AccountsTemplates.addField({
    _id: "role",
    type: "radio",
    displayName: "Your Role",
    select: [
         {
        text: "LGA",
        value: "LGA",
      }, {
        text: "Parent",
        value: "Parent",
      },
    ],
});
