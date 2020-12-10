$("document").ready(function(){
	//$("body").html("<h1> Hello from jQuery </h1>");
	//$("body").append("<h1> Hello from jQuery </h1>");
	
	/** Basic Selector **/
	// $("*").css("border","3px solid yellowgreen");
	// $("p").css("border","3px solid green");
	// $(".head").css("border","3px solid red");
	// $("#price").css("border","3px solid blue");
	// $("p.head").css("border","3px solid gray");
	// $("p:first").css("border","3px solid orange");
	// $(".head:first").css("border","3px solid orange");
	// $("p:last").css("border","3px solid yellow");
	// $("#first p:last").css("border","3px solid yellow");
	// $(".head:even").css("border","3px solid red");
	// $(".head:odd").css("border","3px solid pink");
	// $(".head:eq(1)").css("border","3px solid purple");
	// $(".head:gt(1)").css("border","3px solid black");
	// $(".head:lt(1)").css("border","3px solid yellowgreen");
	// $(".head:not(p)").css("border","3px solid cyan");
	// $(".head:not(.head:eq(1))").css("border","3px solid cyan");
	
	
	/** Advanced Selector **/
	//$("#first p").css("border","3px solid yellowgreen"); //descendent selector
	//$("#first > p").css("border","3px solid red");  //parent > child
	//$("p ~ span").css("border","3px solid green"); //Sibling
	//$("p + span").css("border","3px solid blue");  //Adjacent Sibling
	
	/** attribute filter **/
	// $("p[class]").css("border","3px solid purple");  //general class attribute
	// $("p[class='not-head']").css("border","3px solid red"); //specific class attribute
	// $("p[class ^='head']").css("border","3px solid orange"); // ^= means starts with
	//$("p[class ^='head'][data-color*= 'y']").css("border","3px solid yellowgreen"); // multiple attributes *= means contains retrive 1
	//$("p[class *='head'][data-color*= 'y']").css("border","3px solid yellowgreen"); // retrive 2
	
	
	
	
	/** Advanced Filters **/
	//$("#first :contains('3')").css("border","3px solid red"); //get elements contains value 3
	//$("#first :contains('3')").css("border","3px solid yellow"); //get the element that contains value 3
			
	// $("p :parent").css("border","3px solid green"); //get p which is parent
	// $("p:parent").css("border","3px solid blue"); //get p which has parent
			
	// $("div:has(p)").css("border","3px solid yellowgreen");//get the div that has paragraph
			
	// $("div :first-child").css("border","3px solid gray"); //get the first child of the div 
	// $("div:first-child").css("border","3px solid black"); //get the div that is first child
	// $("div :last-child").css("border","3px solid gray"); //get the last child of the div 
	// $("span:last-child").css("border","3px solid black"); //get the div that is last child 
			
	// $("#first :last-of-type").css("border","3px solid gray"); //get all elements that is last of their types 
	//$("#first p:last-of-type").css("border","3px solid black"); //get the paragraph that is last type in its content 
			
	//$("#first :nth-child(1)").css("border","3px solid blue"); //any child is first for his parent in this section
	//$("#first p:nth-child(1)").css("border","3px solid blue"); // the paragraph that is first child in this section 
	//$(".sp span:nth-child(1)").css("border","3px solid red"); //will get nothing as there is no span is first child
	//$(".sp span:nth-child(3)").css("border","3px solid red"); //will get the first span as the first span is second child
	//$(".sp :nth-child(1)").css("border","3px solid red");
	//$(".sp :nth-child(3n)").css("border","3px solid blue");
	
	
	
	/** traversing document **/
	/** Traversing Documents **/
	//$("#first").children("span").css("border","2px solid green"); //get all childern of this section 
			
	//var sp = $("span:contains('n3')").css("border","3px solid yellow"); //just get the wanted element
	//sp.prev().css("border","2px solid blue"); //previous element
	//sp.next().css("border","2px solid pink"); //next element
	//sp.parents().css("border","2px solid green"); //all parents of element(here is the body and html)
	// sp.parentsUntil($("body")).css("border","2px solid black"); //all parents of element until body tag 
	// sp.parent().css("border","2px solid red");//the parent of element

	//$("#first").find("p").css("border","2px solid red");
	//$("#first").find(":contains('3')").css("border","2px solid red"); //will select two items
			
	// $("#first div span").each(function(index,element){
			// $(element).text("span changed"+index);
			// $(element).css("color","red");
		// });
	//$("#first div span").text("span changed again").css("color","green"); //more faster


	
	/** create & change content **/
	//var h1Tag = $("<h1>");  //create element in js
	//var h1Tag = $("<h1 class='head'>");  //what will happen
	//h1Tag.append("Hello Everyone");
	//$("#content").html(h1Tag);  //clear all in content and put the new content
	$("#content").html("<h1> HELLO HLLO </h1>");
	//$("#content").text("<h1> HELLO HLLO </h1>"); //escape html tag(put to the content directly).
	
	//$("#content h1").append(" text after  "); // put new content to the end of the selector
	// $("#content h1").append("<h1>text after </h1>"); // put another h1
	//$("#first h3").appendTo("#content h1"); // put new element to the end of the selector
	
	//$("#content h1").prepend(" text before "); // put new content to the beginning  of the selector
	//$("#first h4").prependTo("#content h1"); // put new element to the beginning of the selector
	
	//$("#content h1").before("<p> text before </p>");
	//$("<p> text before </p>").insertBefore("#content h1");
	
	//$("#content h1").after(" text after ");
	//$("#first h4").insertAfter("#content h1");

	
	/** altering page **/
	// $("#content h1").unwrap();
	// $("#content h1").wrap("<div class='bg-danger' ></div>");
	// $("#first span").wrapAll("<div class='bg-danger' ></div>");
	// $("#first>span").wrapAll("<div class='bg-danger' ></div>");
	// $("#first span").empty();
	// $("#first>span").empty();
	// $("#first>span").remove();
	// $("#first span").remove();
	// $("#first span").detach();
	// $("#first>span").detach();
	// $("#first span").replaceWith("<article>ahmed</article>");
	// $("#first>span").replaceWith("<article>aaa</article>");
	// $("<article>aaa</article>").replaceAll("#first span");
	// $("<article>aaa</article>").replaceAll("#first>span");

	/** attributes **/
		
	/** get **/
	//console.log($("#first h1").attr("class"));
	// console.log($("#first p").attr("class"));//Will get just the firt element
	// $("#first p").each(function(){
		// console.log($(this).attr("class"));
	// });
	// $("#first p").each(function(){
		// console.log($(this).attr("data-color"));
	// });
	
	/** set & create **/
	//$("#first p").attr("data-color","brown");
	//var color = $("[data-color='black']").attr("data-color");
	//$("#first p").attr({"data-color": color+" ,brown", "data-type":"type", "data-secret":"secret",});
	
	/** remove **/
	// $("#first p").each(function(){
		// $(this).removeAttr("data-color");
	// });
	//$("#first p").removeAttr("data-color");

	/** embedding data **/
		
		
		/** embedding data **/
		/** get data **/
		//console.log($("#first p").data());
		// $("#first p").each(function(){
			// console.log($(this).data());
		// });
		
		 // $("#first p").each(function(){
			 // console.log($(this).data("ahmed"));
		 // });
		
		// /** set & create **/
		// $("#first").data("date","12/3/2020");
		// $("#first p").each(function(){
			// $(this).data("date","12/3/2020");
			// $(this).data("color","pink");
			// console.log($(this).data());
		// });
		
		
		/** events  mouse hover **/
		//$("#mouse-hover").hover(mouseHover);
		// $("#mouse-hover").click(clicked);
		// $("#mouse-hover").dblclick(dblclicked);
		// $("#mouse-hover").mouseover(mouseHover);
		// $("#mouse-hover").mouseenter(function(){$(this).html("mouse entered");});
		// $("#mouse-hover").mouseleave(function(){$(this).html("mouse leaved");});
		// function mouseHover()
		// {
			// $(this).toggleClass("mouse-hover");
		// }
		//function clicked()
		//{
			//$("#mouse-hover").html("clicked");
		// }
		// function dblclicked()
		// {
			// $("#mouse-hover").html("dblclicked");
		// }
		//	function mouseOver(el)
		// {
			// el.html("mouse over now ");
		// }
		
		
		/** div example1**/
		// $("button[data-color='red']").click(function(){
			// $(".square").css("backgroundColor","red");
		// });

		// $("button[data-color='green']").one("click",function(){
			// $(".square").css("backgroundColor","green");
		// });
		
		// $("button[data-color='blue']").on("click",function(){
			// $(".square").css("backgroundColor","blue");
		// });
		// $("button[data-color='yellow']").on("click",function(){
			// $(".square").css("backgroundColor","yellow");
			// $("button[data-color='blue']").off("click");
			// $("button[data-color='red']").off("click");
		// });
		
		/**form  example2**/
		
			/** add classes bootstrap **/
		$("#register-form input").wrap("<div class='form-group'></div>");
		$("input:not([type='checkbox'],[type='submit'])").addClass("form-control");
		// //$(".form-control").parent().prev().css("border","2px solid red");
		// //$(".form-control").parent().prev().prependTo(".form-group");// bad
		// $(".form-control").parent().prev().each(function(index,item){
			// console.log(item);
			// $(this).addClass("form-control-label");
			// let next = $(this).next();
			// $(this).prependTo(next);
		// });
		
		// let checkContainer = $("input[type='checkbox']").parent();
		// checkContainer.next().appendTo(checkContainer);
		
		// $("input[type='submit']").addClass("btn btn-primary");
		// $("input[type='submit']").parent().addClass("text-right");
		
			// /** add tooltip attribute and popover **/
		// $("input:not([type='submit'])").attr("data-toggle","tooltip");
		// $('[data-toggle="tooltip"]').tooltip({ //activating tooltip
			// placement:"left",
		// });
		
		// $("input[type='submit']").attr("data-toggle","popover");
		
		// /**validation**/
		// $("#register-form input:not([type='submit'])").on("focus",function(){
			// $(this).css("border","2px solid cyan");
		// });
		
		// $("#register-form input:not([type='submit'])").on("blur",function(){toValidate($(this))});
		
		// $("#register-form").on("submit",function(){
			let inputs = $(this).children().children("input:not([type='submit'])");
			// let inputs = $(this).find("input:not([type='submit'])");
			// toValidate(inputs);
			
		// });
		
		// function toValidate(el)
		// {
			// console.log(el);
			// if(!validate(el))
			// {
				// el.css("border","2px solid red");
				// el.tooltip('show');
			// }
			// else
			// {
				// el.css("border","2px solid green");
				// el.tooltip('hide');
			// }
		// }

		
		// function validate(el)
		// {
			// console.log(el.attr("name"));
			// if(el.attr("name") == "name_ar")
			// {
				// if(el.val().trim().match(/^[\u0621-\u064A ]+$/) == null)//only arabic letters
				// return false;
			// }
			// else if(el.attr("name") == "name_en")
			// {
				// if(el.val().trim().match(/^[a-zA-Z ]+$/) == null)
				// return false;
			// }
			// else if(el.attr("name") == "email")
			// {
				// if(el.val().trim().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) == null)
				// return false;
			// }
			// else if(el.attr("name") == "address")
			// {
				// if(el.val().trim().match(/^([\u0621-\u064A0-9\-, ]{3,})|([a-zA-Z0-9\-, ]{3,})+$/) == null)
				// return false;
			// }
			// else if(el.attr("name") == "phone")
			// {
				// if(el.val().trim().match(/^\+?\d{10,}$/) == null)
				// return false;
			// }
			// else if(el.attr("name") == "password")
			// {
				// if(el.val().trim().length < 8 )
				// return false;
			// }
			// else if(el.attr("name") == "confirm-password")
			// {
				// if(el.val().trim().length < 8 && el.val().trim() != $("#register-form input[name='password']"))
				// return false;
			// }
			// else if(el.attr("name") == "agree")
			// {
				// if(!el.attr("checked"))
				// return false;
			// }
			// else if(el.has("required").val() == "")
			// {
				// return false;
			// }
			// return true;
		// }














	
	
	$('[data-toggle="tooltip"]').tooltip({
		placement:"left",
		html: true,
		delay: { "show": 100, "hide": 1000 },

	});
	
	$("[data-toggle='popover']").popover({
		trigger:"hover",
		placement:"top",
		
	}); //activate popover
	
	
	$("#register-form ").on("submit",function(event){
		event.preventDefault();
		console.log("aaa");
		$('#register-form input').tooltip('show');
		$('#register-form input').css("border","2px solid red");
	});

	$("#register-form input").on("blur",function(event){
		
		$(this).css("border","2px solid red");
		
	});
	
	$("#register-form input").on("focus",function(event){
		
		$(this).css("border","2px solid cyan");
	});
	

});



