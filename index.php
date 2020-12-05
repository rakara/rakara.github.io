<!DOCTYPE html>
<html>
<head>
	<title>Rakara Abila</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="manifest" href="manifest.json">
	<link rel="stylesheet" href="css/uikit.min.css" />
	<script src="js/jquery.min.js"></script>
	<script src="js/uikit.min.js"></script>
	<script src="js/uikit-icons.min.js"></script>
	<script>
		$(document).ready(function() { 
			/* code here */ 
			if (!('indexedDB' in window)) {
			  console.log('This browser doesn\'t support IndexedDB');
			  return;
			}
		});
		$(function() {
			 /* code here */ });
	</script>
	<style type="text/css">
		body {font-family: calibri; }
		h1, footer { text-align: center; }
	</style>
</head>
<body>
	<header>
		<nav class="uk-navbar-container" uk-navbar>
			<div class="uk-navbar-left">
        		<a class="uk-navbar-toggle" uk-navbar-toggle-icon href=""></a>
    		</div>
    		<div class="uk-navbar-right">
    		<a href="" class="uk-icon-button" uk-icon="twitter"></a>
			<ul class="uk-navbar-nav">
				<li><a href="" class="uk-icon-button" uk-icon="twitter"></a></li>
			</ul>
			</div>
		</nav>
	</header>
	<main>
		<h1>Rakara Web Studio</h1>
		<hr>
	</main>
	<footer>
		&copy; <?= date('Y') ?>
	</footer>
	<script type="text/javascript" src="app.js"></script>
</body>
</html>