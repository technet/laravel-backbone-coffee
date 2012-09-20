
class Category extends app.BaseModel
	urlRoot:'/api/category'
	default:
		code:''
		name:''

class CategorySearchModel extends app.BaseModel


@app = window.app ? {}
@app.Category = Category
@app.CategorySearchModel = CategorySearchModel

