<?php

class Api_Category_Controller extends Base_Controller {

	public $restful = true;
	
	// curl -X GET http://lbc.dev/api/category 
	public function get_index($id = null) {
		if (is_null($id )) {
			$allCats = Category::all();
			return BaseModel::allToJson($allCats);
		}
		else {
			$cat = Category::find($id);
			return $cat->toJson();			
		}
	}
	
	// curl -X POST http://lbc.dev/api/category -H "Content-Type: application/json" -d '{"code":"cat1", "name":"Category One"}'
	public function post_index() {
		$cat = Input::json();
		$dbCat = new Category();
		$dbCat->code = $cat->code;
		$dbCat->name = $cat->name;
		$dbCat->save();
		return $dbCat->toJson();
	}
	
	//curl -X PUT http://lbc.dev/api/category -H "Content-Type: application/json" -d '{"id":"1","code":"catupdate", "name":"Category Two"}'
	public function put_index() {
		$cat = Input::json();
		$dbCat = Category::find($cat->id);
		$dbCat->code = $cat->code;
		$dbCat->name = $cat->name;
		$dbCat->save();
		return $dbCat->toJson();
	}
	
	// curl -X DELETE http://lbc.dev/api/category/2 
	public function delete_index($id = null) {
		$dbCat = Category::find($id);
		$dbCat->delete();		
	}	
}
?>