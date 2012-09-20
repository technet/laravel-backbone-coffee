(function() {
  var CategoryRouter, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  CategoryRouter = (function(_super) {

    __extends(CategoryRouter, _super);

    function CategoryRouter() {
      CategoryRouter.__super__.constructor.apply(this, arguments);
    }

    CategoryRouter.prototype.routes = {
      '': 'showCategoryView',
      'main': 'showCategoryView'
    };

    CategoryRouter.prototype.showCategoryView = function() {
      var catView;
      return catView = new app.CategoriesView;
    };

    return CategoryRouter;

  })(app.BaseRouter);

  this.app = (_ref = window.app) != null ? _ref : {};

  this.app.CategoryRouter = CategoryRouter;

  jQuery(function() {
    app.categoryRouter = new app.CategoryRouter;
    return Backbone.history.start();
  });

}).call(this);
