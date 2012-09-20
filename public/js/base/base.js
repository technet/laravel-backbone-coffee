(function() {
  var BaseCollection, BaseModel, BaseRouter, BaseView, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BaseModel = (function(_super) {

    __extends(BaseModel, _super);

    function BaseModel() {
      BaseModel.__super__.constructor.apply(this, arguments);
    }

    BaseModel.prototype.dump = function() {
      return console.log(JSON.stringify(this));
    };

    return BaseModel;

  })(Backbone.Model);

  BaseCollection = (function(_super) {

    __extends(BaseCollection, _super);

    function BaseCollection() {
      BaseCollection.__super__.constructor.apply(this, arguments);
    }

    BaseCollection.prototype.dump = function() {
      return console.log(JSON.stringify(this));
    };

    return BaseCollection;

  })(Backbone.Collection);

  BaseView = (function(_super) {

    __extends(BaseView, _super);

    function BaseView() {
      BaseView.__super__.constructor.apply(this, arguments);
    }

    return BaseView;

  })(Backbone.View);

  BaseRouter = (function(_super) {

    __extends(BaseRouter, _super);

    function BaseRouter() {
      BaseRouter.__super__.constructor.apply(this, arguments);
    }

    return BaseRouter;

  })(Backbone.Router);

  this.app = (_ref = window.app) != null ? _ref : {};

  this.app.BaseModel = BaseModel;

  this.app.BaseCollection = BaseCollection;

  this.app.BaseView = BaseView;

  this.app.BaseRouter = BaseRouter;

}).call(this);
