(function() {
  var CategoryCollection, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  CategoryCollection = (function(_super) {

    __extends(CategoryCollection, _super);

    function CategoryCollection() {
      CategoryCollection.__super__.constructor.apply(this, arguments);
    }

    CategoryCollection.prototype.url = '/api/category';

    CategoryCollection.prototype.model = app.Category;

    return CategoryCollection;

  })(app.BaseCollection);

  this.app = (_ref = window.app) != null ? _ref : {};

  this.app.CategoryCollection = CategoryCollection;

}).call(this);
