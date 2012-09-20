<?php
class BaseModel extends Eloquent {
	
	public function toJson() {
		return json_encode($this->to_array());
	}
	
	public static function allToJson($array) {
		$temp = array();
		foreach($array as $t) {
			$temp[] = $t->to_array();				
		}
		
		return json_encode($temp);					
	}
}
?>