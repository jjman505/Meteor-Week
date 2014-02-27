Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'lander',
    layoutTemplate: '',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('topicsIndex', {
    path: '/topics',
    template: 'topicsIndex',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('whyMeteor', {
    path: '/topics/why-meteor',
    template: 'whyMeteor',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('gettingStarted', {
    path: '/topics/getting-started',
    template: 'gettingStarted',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('firstTemplate', {
    path: '/topics/first-template',
    template: 'firstTemplate',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('routingBasics', {
    path: '/topics/routing-basics',
    template: 'routingBasics',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('introCollections', {
    path: '/topics/intro-collections',
    template: 'introCollections',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('videos', {
    path: '/videos',
    template: 'videos',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('challenges', {
    path: '/challenges',
    template: 'challenges',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('signup', {
    path: '/signup',
    template: 'signup',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('about', {
    path: '/about',
    template: 'about',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('jobs', {
    path: '/jobs',
    template: 'jobs',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('blog', {
    path: '/blog',
    template: 'blog',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
  this.route('blog', {
    path: '/blog/:slug',
    template: 'blog'
  });
  this.route('contact', {
    path: '/contact',
    template: 'contact',
    after: function() {
      $('.content-inner').scrollTop(0);
      $(window).scrollTop(0);
    }
  });
});