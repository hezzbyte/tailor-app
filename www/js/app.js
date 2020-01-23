// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';

$(document).on('page:init', function (e) {
	if(localStorage.loginstatus == 'true'){	
		loadContent();
	}
});


// Init App
var app = new Framework7({
  id: 'com.tailorapp.app',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        appName: 'TailorFit',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  	view: {
		pushState :true,
		stackPages: true,            
	},
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});


function gotopage($url){
	mainView.router.navigate($url);
}

var mainURL = 'https://www.coquitech.website/tailorfit/app/';



$(document).on('page:init', function (e) {
});


//Load user details
function loadContent(){
	$('.appFullName').text(localStorage.appFullName);
	//$('.appUserName').text(localStorage.appUserName);
	$('.accountLink1').show();
	$('.accountLink').hide();
	$('.lgot').show();
}

function logout(){
	$('.lgot').hide();
	$('.appFullName').text('Esteem User');
	//$('.appUserName').text('');
	$('.accountLink').show();
	$('.accountLink1').hide();
	$('.lgot').hide();

  localStorage.loginstatus = 'false';
  app.dialog.alert('Successfully logged out');
}

