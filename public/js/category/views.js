(function() {
  var CategoriesView, CategoryResultView, CategoryRowDisplayView, CategoryRowEditView, CategorySearhView, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  CategorySearhView = (function(_super) {

    __extends(CategorySearhView, _super);

    function CategorySearhView() {
      CategorySearhView.__super__.constructor.apply(this, arguments);
    }

    CategorySearhView.prototype.el = '#search-area';

    CategorySearhView.prototype.events = {
      'click .btn-search': 'search',
      'click .btn-clear': 'clear'
    };

    CategorySearhView.prototype.initialize = function() {
      this.$el.empty();
      this.$el.html($('#tpl-category-search').html());
      return this.render();
    };

    CategorySearhView.prototype.render = function() {};

    CategorySearhView.prototype.search = function(e) {
      e.preventDefault();
      return this.model.trigger('search');
    };

    CategorySearhView.prototype.clear = function(e) {
      e.preventDefault();
      return this.model.trigger('reset');
    };

    return CategorySearhView;

  })(app.BaseView);

  CategoryResultView = (function(_super) {

    __extends(CategoryResultView, _super);

    function CategoryResultView() {
      CategoryResultView.__super__.constructor.apply(this, arguments);
    }

    CategoryResultView.prototype.el = '#result-area';

    CategoryResultView.prototype.events = {
      'click #btn-add': 'create'
    };

    CategoryResultView.prototype.initialize = function() {
      this.collection.on('reset', this.render, this);
      this.$el.empty();
      this.$el.html($('#tpl-category-results').html());
      return this.render();
    };

    CategoryResultView.prototype.render = function() {
      var $tbody, $this;
      $tbody = this.$('tbody');
      $tbody.empty();
      $this = this;
      this.collection.each(function(item) {
        var displayView;
        item.on('save', $this.itemSave, $this);
        item.on('delete', $this.itemDelete, $this);
        item.on('edit', $this.itemEdit, $this);
        item.on('cancel', $this.cancelEdit, $this);
        displayView = new app.CategoryRowDisplayView({
          model: item
        });
        return $tbody.append(displayView.render().el);
      });
      return this;
    };

    CategoryResultView.prototype.create = function() {
      var editView, newItem;
      newItem = new app.Category({
        code: '',
        name: ''
      });
      newItem.on('save', this.itemSave, this);
      newItem.on('delete', this.itemDelete, this);
      newItem.on('edit', this.itemEdit, this);
      newItem.on('cancel', this.cancelEdit, this);
      editView = new app.CategoryRowEditView({
        model: newItem
      });
      return this.$('tbody').prepend(editView.render().el);
    };

    CategoryResultView.prototype.itemSave = function(view) {
      var model;
      model = view.model;
      return model.save(null, {
        wait: true,
        success: function(rmodel, response) {
          var $editViewEl, rowView;
          rowView = new CategoryRowDisplayView({
            model: model
          });
          $editViewEl = view.$el;
          $editViewEl.replaceWith(rowView.render().el);
          return $editViewEl.attr('id', model.id);
        },
        error: function(rmodel, errors) {
          return console.log(errors);
        }
      });
    };

    CategoryResultView.prototype.itemDelete = function(view) {
      var model;
      model = view.model;
      if (model.isNew()) {
        return view.remove();
      } else {
        return model.destroy({
          wait: true,
          success: function() {
            return view.remove();
          },
          error: function(rmodel, errors) {
            return console.log(errors);
          }
        });
      }
    };

    CategoryResultView.prototype.itemEdit = function(view) {
      var $rowViewEl, editView, model;
      $rowViewEl = view.$el;
      model = view.model;
      editView = new app.CategoryRowEditView({
        model: model
      });
      $rowViewEl.replaceWith(editView.render().el);
      return $rowViewEl.attr('id', model.id);
    };

    CategoryResultView.prototype.cancelEdit = function(view) {
      var model;
      model = view.model;
      if (model.isNew()) return view.remove();
    };

    return CategoryResultView;

  })(app.BaseView);

  CategoriesView = (function(_super) {

    __extends(CategoriesView, _super);

    function CategoriesView() {
      CategoriesView.__super__.constructor.apply(this, arguments);
    }

    CategoriesView.prototype.initialize = function() {
      this.searchModel = new app.CategorySearchModel;
      this.searchModel.on('search', this.search, this);
      this.searchModel.on('reset', this.reset, this);
      this.categoryCollection = new app.CategoryCollection;
      this.searchView = new app.CategorySearhView({
        model: this.searchModel
      });
      return this.resultView = new app.CategoryResultView({
        collection: this.categoryCollection
      });
    };

    CategoriesView.prototype.search = function() {
      return this.categoryCollection.fetch();
    };

    CategoriesView.prototype.reset = function() {
      return this.categoryCollection.reset([]);
    };

    return CategoriesView;

  })(app.BaseView);

  CategoryRowDisplayView = (function(_super) {

    __extends(CategoryRowDisplayView, _super);

    function CategoryRowDisplayView() {
      CategoryRowDisplayView.__super__.constructor.apply(this, arguments);
    }

    CategoryRowDisplayView.prototype.tagName = 'tr';

    CategoryRowDisplayView.prototype.template = _.template($('#tpl-category-row').html());

    CategoryRowDisplayView.prototype.events = {
      'click .btn-edit': 'edit',
      'click .btn-delete': 'delete'
    };

    CategoryRowDisplayView.prototype.render = function() {
      this.$el.html(this.template({
        m: this.model.toJSON()
      }));
      this.$el.attr('id', this.model.id);
      return this;
    };

    CategoryRowDisplayView.prototype.edit = function() {
      return this.model.trigger('edit', this);
    };

    CategoryRowDisplayView.prototype["delete"] = function() {
      return this.model.trigger('delete', this);
    };

    return CategoryRowDisplayView;

  })(app.BaseView);

  CategoryRowEditView = (function(_super) {

    __extends(CategoryRowEditView, _super);

    function CategoryRowEditView() {
      CategoryRowEditView.__super__.constructor.apply(this, arguments);
    }

    CategoryRowEditView.prototype.tagName = 'tr';

    CategoryRowEditView.prototype.template = _.template($('#tpl-category-edit').html());

    CategoryRowEditView.prototype.events = {
      'click .btn-save': 'save',
      'click .btn-cancel': 'cancel'
    };

    CategoryRowEditView.prototype.render = function() {
      this.$el.html(this.template({
        m: this.model.toJSON()
      }));
      this.$el.attr('id', this.model.id != null ? this.model.id : this.model.cid);
      return this;
    };

    CategoryRowEditView.prototype.save = function() {
      this.model.set({
        code: this.$('.code-edit').val(),
        name: this.$('.name-edit').val()
      });
      return this.model.trigger('save', this);
    };

    CategoryRowEditView.prototype.cancel = function() {
      return this.model.trigger('cancel', this);
    };

    return CategoryRowEditView;

  })(app.BaseView);

  this.app = (_ref = window.app) != null ? _ref : {};

  this.app.CategorySearhView = CategorySearhView;

  this.app.CategoryResultView = CategoryResultView;

  this.app.CategoriesView = CategoriesView;

  this.app.CategoryRowDisplayView = CategoryRowDisplayView;

  this.app.CategoryRowEditView = CategoryRowEditView;

}).call(this);
