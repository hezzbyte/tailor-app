// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';


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
		stackPages: false,            
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




