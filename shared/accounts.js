AccountsTemplates.configure({
	    // Behavior
	    confirmPassword: true,
	    enablePasswordChange: true,
	    overrideLoginErrors: true,
	    sendVerificationEmail: true,
	    forbidClientAccountCreation: false,
	    lowercaseUsername: false,
	    focusFirstInput: true,
  		sendVerificationEmail:true,

	    // Appearance
	    showAddRemoveServices: false,
	    showForgotPasswordLink: true,
	    showLabels: true,
	    showPlaceholders: true,
	    showResendVerificationEmailLink: true,
	    
	    // Redirects
	    homeRoutePath: '/',
	    redirectTimeout: 4000,
})
/*
	    // Client-side Validation
	    continuousValidation: false,
	    negativeFeedback: false,
	    negativeValidation: true,
	    positiveValidation: false,
	    positiveFeedback: true,
	    showValidating: false,

	    // Privacy Policy and Terms of Use
	    privacyUrl: 'privacy',
	    termsUrl: 'terms-of-use',


	    // Hooks
	    onLogoutHook: myLogoutFunc,
	    onSubmitHook: mySubmitFunc,
	    preSignUpHook: myPreSubmitFunc,
	    postSignUpHook: myPostSubmitFunc,
	    
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
	        changePwd: "Change password",
	        enrollAccount: "Enroll",
	        forgotPwd: "Forgot password",
	        resetPwd: "Reset password",
	        signIn: "Sign In",
	        signUp: "Sign Up",
	        verifyEmail: "Verify Email",
	      },

        navSignIn: "signIn",
        navSignOut: "signOut",
        optionalField: "optional",
        pwdLink_pre: "",
        pwdLink_link: "forgotPassword",
        pwdLink_suff: "",
        resendVerificationEmailLink_pre: "Verification email lost?",
        resendVerificationEmailLink_link: "Send again",
        resendVerificationEmailLink_suff: "",
        sep: "OR",
        signInLink_pre: "ifYouAlreadyHaveAnAccount",
        signInLink_link: "signin",
        signInLink_suff: "",
        signUpLink_pre: "dontHaveAnAccount",
        signUpLink_link: "signUp",
        signUpLink_suff: "",
        socialAdd: "add",
        socialConfigure: "configure",
        socialIcons: {
            "meteor-developer": "fa fa-rocket",
        },
        socialRemove: "remove",
        socialSignIn: "signIn",
        socialSignUp: "signUp",
        socialWith: "with",
        termsPreamble: "clickAgree",
        termsPrivacy: "privacyPolicy",
        termsAnd: "and",
        termsTerms: "terms",
    
	    },
	});
/*
	Accounts.emailTemplates.siteName = 'croARTia';
	Accounts.emailTemplates.from = 'croARTia Admin <admin@croartia.org>';

	Accounts.emailTemplates.enrollAccount.subject = (user) => {
	  return `Welcome to croARTia, ${user.profile.name}`;
	};
	Accounts.emailTemplates.enrollAccount.text = (user, url) => {
	  return 'You have been invited to participate in building the croARTia database!'
	    + ' To activate your account, simply click the link below:\n\n'
	    + url;
	};
	Accounts.emailTemplates.resetPassword.from = () => {
	  // Overrides the value set in `Accounts.emailTemplates.from` when resetting
	  // passwords.
	  return 'croARTia Password Reset <no-reply@croartia.org>';
	};

	Accounts.emailTemplates.verifyEmail = {
	   subject() {
	      return "Activate croARTia account!";
	   },
	   text(user, url) {
	      return `Welcome to croARTia, ${user}! Verify your e-mail by following this link: ${url}`;
	   }
	};

	Accounts.emailTemplates.verifyEmail = {
	  subject() {
	    return "[croARTia] Verify Your Email Address";
	  },
	  text( user, url ) {
	    let emailAddress   = user.emails[0].address,
	        urlWithoutHash = url.replace( '#/', '' ),
	        supportEmail   = "support@croartia.org",
	        emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

	    return emailBody;
	  }
	};
*/