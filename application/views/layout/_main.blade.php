<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>{{ $viewName }}</title>
	<meta name="viewport" content="width=device-width">
	@section('css')	
	{{ HTML::style('css/bootstrap.min.css') }}
	{{ HTML::style('css/bootstrap-responsive.min.css') }}
	@yield_section
</head>
<body>
	<div class="wrapper">
		<div class="row-fluid header" >
			<h2>::{{ $viewName }}</h2>
		</div>
			
		</div>
		<div class="row-fluid">
		@yield('content')
		</div>
	</div>

	<!-- Java script libraries --> 
	@section('js')
	{{ HTML::script('js/lib/jquery-1.8.1.min.js')}}
	{{ HTML::script('js/lib/underscore-min.js')}}
	{{ HTML::script('js/lib/bootstrap.min.js')}}
	{{ HTML::script('js/lib/backbone-min.js')}}
	
	{{ HTML::script('js/base/base.js')}}
	@yield_section
	<!-- Javascript application -->	
</body>
</html>		