
	$('#assignment1').click(function(){
		$('#myModal .modal-title').html('Assignment 1: Basic HTML/CSS');
		$('#myModal .modal-body').html('In this assignment we created an index page that contained relative links to all of our other pages as well as an elements page which contained examples of practicing basic tags in html including html, head, body, title etc...  We also had files to show use of inline styles, internal styles, and external styles.  Finally we had a document which showed use of html forms and examples of html entities! ');
		$('#myModal').modal('show');
		});
	$('#assignment1b').click(function(){
		$('#myModal .modal-title').html('Assignment 1b');
		$('#myModal .modal-body').html('In part b of assignment 1 we practiced our CSS. Our task was to replicate the CSS of the wesbite given to us by the professor! ');
		$('#myModal').modal('show')});
	$('#assignment2').click(function(){
		$('#myModal .modal-title').html('Assignment 2: Simple Site and JS Calculator');
		$('#myModal .modal-body').html('In this assignment we created a simple website that had a simple calculator that was created with javascript.  The site also has a registration form, feedback form, and a FAQ page. The calculator had to have basic calculator functions and there had to be validation on the forms! ');
		$('#myModal').modal('show')});
	$('#assignment3').click(function(){
		$('#myModal .modal-title').html('Assignment 3: TicTacToe and Git Walkthrough');
		$('#myModal .modal-body').html('In this assignment the task was to develop a tic tac toe game.  It had to have the basic functions of any tictactoe game using javascript event handlers and jQuery.  Along witht he tictactoe game we had to have a FAQ page, Registration Form, and Contact page these had to be validated using jquery and the FAQ had to be filterable using jquery datbase!');
		$('#myModal').modal('show')});
	$('#assignment4').click(function(){
		$('#myModal .modal-title').html('Assignment 4: Bootstrap and Less');
		$('#myModal .modal-body').html('In this assignment we were first introduced to Bootstrap.  We had to create a 3 page site with consistent content and style from bootstrap.  The site had to have a bootstrap nav bar for the 3 sites and we had to have 3 components on each page.  This was also the first time that we added our site to github and we started learning more about that awesome site!');
		$('#myModal').modal('show')});
	$('#assignment5').click(function(){
		$('#myModal .modal-title').html('Assignment 5: Angular.js');
		$('#myModal .modal-body').html('In this assignment we got our first tast of Angular JS.  We had to complete a tutorial on code school and then post all the code we did in the tutorial into github!  Angular JS is pretty cool!');
		$('#myModal').modal('show')});
	$('#assignment6').click(function(){
		$('#myModal .modal-title').html('Assignment 6: Angular Blog Post');
		$('#myModal .modal-body').html('In this Assignment we first created a custom blog about what Angular JS is and what we learned about it.  The second part of the assignment was to make an Angular Site using the tutorials provided to us by the professor!');
		$('#myModal').modal('show')});
	$('#assignment7').click(function(){
		$('#myModal .modal-title').html('Assignment 7: Node.js Post');
		$('#myModal .modal-body').html('In this assignment we had to create a Node blog post that answered 3 questions...  What is node.js, What makes node different than developing with more traditional server side languages? , and What is the concept of non blocking IO?');
		$('#myModal').modal('show')});
	$('#assignment8').click(function(){
		$('#myModal .modal-title').html('Assignment 8: MVC');
		$('#myModal .modal-body').html('In this assignment we created a basic MVC project form a tutorial and posted our repo on github!');
		$('#myModal').modal('show')});

$('#myModal').on('hidden.bs.modal', function () {
 
  $('#myModal .modal-body').html('');
}); 
