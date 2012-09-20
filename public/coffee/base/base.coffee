
class BaseModel extends Backbone.Model
	dump:->
		console.log JSON.stringify(@)


class BaseCollection extends Backbone.Collection
	dump:->
		console.log JSON.stringify(@)
		

class BaseView extends Backbone.View


class BaseRouter extends Backbone.Router
		

@app = window.app ? {}
@app.BaseModel = BaseModel
@app.BaseCollection = BaseCollection
@app.BaseView = BaseView
@app.BaseRouter = BaseRouter
