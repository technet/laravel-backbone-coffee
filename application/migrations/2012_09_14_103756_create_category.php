<?php

class Create_Category {

	/**
	 * Make changes to the database.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('tbl_category', function($table){
			$table->increments('id');
			$table->string('code', 20);
			$table->string('name', 100);
			$table->timestamps();
		});
	}

	/**
	 * Revert the changes to the database.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('tbl_category');
	}

}