var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // About page
  {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  },
  {
    path: '/tailor-by-age/',
    url: './pages/tailor-by-age.html',
    name: 'tailor-by-age',
  },
  {
    path: '/tailor-by-gender/',
    url: './pages/tailor-by-gender.html',
    name: 'tailor-by-gender',
  },
  {
    path: '/tailor-by-location/',
    url: './pages/tailor-by-location.html',
    name: 'tailor-by-location',
  },


  // Components
  {
    path: '/accordion/',
    url: './pages/accordion.html',
  },
  {
    path: '/action-sheet/',
    componentUrl: './pages/action-sheet.html',
  },
  {
    path: '/appbar/',
    componentUrl: './pages/appbar.html',
  },
  {
    path: '/autocomplete/',
    componentUrl: './pages/autocomplete.html',
  },
  {
    path: '/badge/',
    componentUrl: './pages/badge.html',
  },
  {
    path: '/buttons/',
    url: './pages/buttons.html',
  },
  {
    path: '/calendar/',
    componentUrl: './pages/calendar.html',
  },
  {
    path: '/calendar-page/',
    componentUrl: './pages/calendar-page.html',
  },
  {
    path: '/cards/',
    url: './pages/cards.html',
  },
  {
    path: '/cards-expandable/',
    url: './pages/cards-expandable.html',
  },
  {
    path: '/checkbox/',
    componentUrl: './pages/checkbox.html',
  },
  {
    path: '/chips/',
    componentUrl: './pages/chips.html',
  },
  {
    path: '/color-picker/',
    componentUrl: './pages/color-picker.html',
  },
  {
    path: '/contacts-list/',
    url: './pages/contacts-list.html',
  },
  {
    path: '/content-block/',
    url: './pages/content-block.html',
  },
  {
    path: '/data-table/',
    componentUrl: './pages/data-table.html',
  },
  {
    path: '/dialog/',
    componentUrl: './pages/dialog.html',
  },
  {
    path: '/elevation/',
    url: './pages/elevation.html',
  },
  {
    path: '/fab/',
    url: './pages/fab.html',
  },
  {
    path: '/fab-morph/',
    url: './pages/fab-morph.html',
  },
  {
    path: '/form-storage/',
    url: './pages/form-storage.html',
  },
  {
    path: '/gauge/',
    componentUrl: './pages/gauge.html',
  },
  {
    path: '/grid/',
    url: './pages/grid.html',
  },
  {
    path: '/icons/',
    componentUrl: './pages/icons.html',
  },
  {
    path: '/infinite-scroll/',
    componentUrl: './pages/infinite-scroll.html',
  },
  {
    path: '/inputs/',
    url: './pages/inputs.html',
  },
  {
    path: '/lazy-load/',
    url: './pages/lazy-load.html',
  },
  {
    path: '/list/',
    url: './pages/list.html',
  },
  {
    path: '/list-index/',
    componentUrl: './pages/list-index.html',
  },
  {
    path: '/login-screen/',
    componentUrl: './pages/login-screen.html',
  },
  {
    path: '/login-screen-page/',
    componentUrl: './pages/login-screen-page.html',
  },
  {
    path: '/login/',
    componentUrl: './pages/login.html',
  },
  {
    path: '/menu/',
    componentUrl: './pages/menu.html',
  },
  {
    path: '/messages/',
    componentUrl: './pages/messages.html',
  },
  {
    path: '/new-post/',
    componentUrl: './pages/new-post.html',
  },
  {
    path: '/new-product/',
    componentUrl: './pages/new-product.html',
  },
  {
    path: '/add-to-gallery/',
    componentUrl: './pages/add-to-gallery.html',
  },
  {
    path: '/my-services/',
    componentUrl: './pages/my-services.html',
  },
  {
    path: '/my-posts/',
    componentUrl: './pages/my-posts.html',
  },
  {
    path: '/my-products/',
    componentUrl: './pages/my-products.html',
  },
  {
    path: '/navbar/',
    url: './pages/navbar.html',
  },
  {
    path: '/navbar-hide-scroll/',
    url: './pages/navbar-hide-scroll.html',
  },
  {
    path: '/notifications/',
    componentUrl: './pages/notifications.html',
  },
  {
    path: '/panel/',
    url: './pages/panel.html',
  },
  {
    path: '/photo-browser/',
    componentUrl: './pages/photo-browser.html',
  },
  {
    path: '/picker/',
    componentUrl: './pages/picker.html',
  },
  {
    path: '/popup/',
    componentUrl: './pages/popup.html',
  },
  {
    path: '/popover/',
    url: './pages/popover.html',
  },
  {
    path: '/preloader/',
    componentUrl: './pages/preloader.html',
  },
  {
    path: '/progressbar/',
    componentUrl: './pages/progressbar.html',
  },
  {
    path: '/pull-to-refresh/',
    componentUrl: './pages/pull-to-refresh.html',
  },
  {
    path: '/radio/',
    url: './pages/radio.html',
  },
  {
    path: '/range/',
    componentUrl: './pages/range.html',
  },
  {
    path: '/searchbar/',
    url: './pages/searchbar.html',
  },
  {
    path: '/searchbar-expandable/',
    url: './pages/searchbar-expandable.html',
  },
  {
    path: '/sheet-modal/',
    componentUrl: './pages/sheet-modal.html',
  },
  {
    path: '/skeleton/',
    componentUrl: './pages/skeleton.html',
  },
  {
    path: '/smart-select/',
    url: './pages/smart-select.html',
  },
  {
    path: '/sortable/',
    url: './pages/sortable.html',
  },
  {
    path: '/statusbar/',
    componentUrl: './pages/statusbar.html',
  },
  {
    path: '/stepper/',
    componentUrl: './pages/stepper.html',
  },
  {
    path: '/subnavbar/',
    url: './pages/subnavbar.html',
  },
  {
    path: '/subnavbar-title/',
    url: './pages/subnavbar-title.html',
  },

  {
    path: '/swipeout/',
    componentUrl: './pages/swipeout.html',
  },
  {
    path: '/tabs/',
    url: './pages/tabs.html',
  },
  {
    path: '/tabs-static/',
    url: './pages/tabs-static.html',
  },
  {
    path: '/tabs-animated/',
    url: './pages/tabs-animated.html',
  },
  {
    path: '/tabs-swipeable/',
    url: './pages/tabs-swipeable.html',
  },

  {
    path: '/toggle/',
    url: './pages/toggle.html',
  },


  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: './pages/color-themes.html',
  },
  {
    path: '/watch-free-video/:vidId/',
    componentUrl: './pages/watch-free-video.html',
  },

  {
    path: '/free-videos/',
    componentUrl: './pages/free-videos.html',
  },


  {
    path: '/watch-premium-video/:vidId/',
    componentUrl: './pages/watch-premium-video.html',
  },

  {
    path: '/post/:postId/',
    componentUrl: './pages/post.html',
  },

  {
    path: '/readpost/:postId/',
    componentUrl: './pages/readpost.html',
  },

  {
    path: '/posts/:catId/',
    componentUrl: './pages/posts.html',
  },

  {
    path: '/premium-videos/',
    componentUrl: './pages/premium-videos.html',
  },

  {
    path: '/blog/',
    componentUrl: './pages/blog.html',
  },
  {
    path: '/forum/',
    componentUrl: './pages/forum.html',
  },
  {
    path: '/account/',
    componentUrl: './pages/account.html',
  },
  {
    path: '/my-pictures/',
    componentUrl: './pages/my-pictures.html',
  },

  {
    path: '/english-designs/',
    url: './pages/english-designs.html',
  },

  {
    path: '/cultural-designs/',
    url: './pages/cultural-designs.html',
  },

  {
    path: '/designs/',
    url: './pages/designs.html',
  },
  {
    path: '/tailors/',
    url: './pages/tailors.html',
  },


  
  
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
