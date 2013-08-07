$(function(){


	$("a").bind("click", function(){
		var that = $(this);
		console.log(that);
		if(that === "#myWork"){
			console.log("I fire");
			$("myWork").toggle();
			return false;
		}else{
			$("#top").toggle();
		}
	});
});