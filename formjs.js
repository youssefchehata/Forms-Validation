 // <script type="text/javascript">
	// function writehere(){
let element ;
element = document;
element = document.all;
	
    
 function validateForm()
     {
       var  firstname =document.getElementById("firstname").value
 	var lastname =document.getElementById("lastname").value
 	var  email =document.getElementById("email").value
 	var  password =document.getElementById("password").value
 	
    
       if (firstname==null || firstname=="",lastname==null || lastname=="",email==null || email=="",password==null || password=="")
     {          alert("One of the inputs is empty! Please Fill All Required Field");
          return false;
      }
   }

function verifMail()
    {
      var email3=document.getElementById("email").value;
       var f = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
       if(!f.test(email3))
        { alert('Please provide a valid email address !!');
         // email.focus;
         document.getElementById("email").style.borderColor = "red";
         return false;
         }
        else {
            document.getElementById("email").style.borderColor = "#0d244e";
             return true}
    }
    function verifpassword(){
	var passw=document.getElementById("password").value;
	var re =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
	 if(!re.test(password)){
	 	alert("The password has less than 8 characters or must be a combination of charatacters , numbers and at least a capital letter!!!")
   
            document.getElementById("password").style.borderColor = "red";
             

   }else
	     alert ("saved")
	 
}


  //  function verifPassword()
  //  {
  //        var password = document.getElementById("password").value;
  //        var m =new RegExp("(?=.[!@#-_\$%\^&])");
  //        var h =new RegExp("(?=.*[0-9])");
  //        var l = new RegExp("(?=.*[A-Z])");
  // if( password.length < 8){ 
  //     alert('The password has less than 8 characters !!');
        
  //       document.getElementById("password").style.borderColor = "red";
  // return false; }
  // else if(!m.test(password))
  // {      alert('Please provide a charatacter');
        
  //       document.getElementById("password").style.borderColor = "red";
  // return false;}
  
  // else {
  //     document.getElementById("password").style.borderColor = "#0d244e"; 
  //     return true}
  // }


	

