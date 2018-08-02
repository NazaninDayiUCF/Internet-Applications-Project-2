
function checkPhone(){
		   
checkEmail();		   
				var phoneNumber = document.getElementById("phone").value;
				var regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
				var correct = phoneNumber.match(regEx);
				if(correct){
					alert("yes");
					return true;
				}
				else{
					alert("Invalid phone number please follow one of these formats :321-854-8977, (123)355-7865,021-45456545 and 321.987.8547");
					return false;
				}
			} 
			
			
function checkEmail() {
	var email= document.getElementById("email");
	var filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	if (! filter.test (email.value)){
		alert("please enter a valid email");
		email.focus;
		return false;
	}
}			
function isNumber(evt){
	evt= (evt)? evt: window.event;
	var charCode=(evt.which)? evt.which :evt.keyCode;
	if (charCode >31 && (charCode <48 || charCode >57)){
		return false;
	}
	if(document.getElementById("phone").value.length >= 10){
		return false;
	}
	return true;
}
//$(document).ready(function($){
//	$("#phone").mask("999-240-9999", {placeholder:""});
	
//});
/*$('phone').on('keydown', function(){
	alert('salam');
	var sanitized =  $(this).val.replace(/[^0-9]/g, '');
	$(this).val(sanitized);
});
*/
/*			
function checkPhone() {
    alert("checkPhone");
	var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
		

}



		
			
}
$('#first-name').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

function writeDateAndTime()
{
	document.write("Today is: " + Date());
};

}  
$('#phone').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if($.isNumeric(is_name)){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

$('#email').on('input', function() {
	var input=$(this);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
*/
