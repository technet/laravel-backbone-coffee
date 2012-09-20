class CategoryRouter extends app.BaseRouter
	routes:
		'':'showCategoryView'
		'main':'showCategoryView'
		
	showCategoryView: ->
		catView = new app.CategoriesView
		
@app = window.app ? {}
@app.CategoryRouter = CategoryRouter

jQuery ->
	app.categoryRouter = new app.CategoryRouter
	Backbone.history.start()
	
	