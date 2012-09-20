
class CategoryCollection extends app.BaseCollection
	url:'/api/category'
	model: app.Category


@app = window.app ? {}
@app.CategoryCollection = CategoryCollection

