



Router.route('/menu-1', function(){
    this.render('menu-1')
});

Router.route('/menu-2', function(){
    this.render('menu-2')
});

Router.route('/viewlga', function(){
    this.render('viewlga')
});

Router.route('/addlga', function(){
    this.render('addlga')
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






AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: false,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/start',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});