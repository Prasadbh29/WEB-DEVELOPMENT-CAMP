
/*
basic syantax:
$(select).action()

where
$ = denotes Jquery(it can be also denoted by word "jQuery")
selector= to uniquely identify HTML element that is we want to manipulate 
            (.class,#id)
action()= various operations that we want to perform             
*/ 

//to manipulate the style use $(selector).css(property,value)
// $("h1").css("color","red");


// //to manipulate the style by adding/remving classes classes
// //use addClass(clasname),removeClass(clasname),toggleClass(clasname)

// $("h1").addClass("style")//add css class to an element
// $("h1").removeClass("style")//remove css class of an element
// $("h1").toggleClass("style")//add if that class is not associated to element otherwise remove it

// //note:to add multiple classes just keep space between the name of classes within the quotation marks("")
// //ex. $("h1").addClass("class1 class2")
// $("h1").addClass("style margin");

// //to check whether an class is associated to an HTML element, use hasClass(classname)
// //this methods returns true if the specified class is associated to element

// $("h1").hasClasss("margin");


// //to select the text content of an element use text() 
// //syntax:$(selector).text("new text")
$(".btn#first").text("Ok");// change the text content of button with class="btn" and id="first"


//to change the html tags within element use html()
//syntax: $(selector).html("newHTMLContent")
$("h1").html("<em>Hello world</em>")
console.log($("h1").html())

