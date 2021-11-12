//business logic
const speak= (msg) =>{
    const sp= new
    SpeechSynthesisUtterance(msg);
    [sp.voice]= speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
}

//user interface
$(document).ready(function(){
    $(".data").submit(function(event){
    
        const firstName = $("#firstname").val();
        const middleName = $("#middlename").val();
        const lastName = $("#lastname").val();
        const email = $("#email").val();
        const phonenumber =parseInt($("#phonenumber").val());
        let fullName = (`${firstName} ${middleName} ${lastName}`);
        //let details = (`${firstName} ${middleName} ${lastName} ${email} ${phonenumber}`);


event.preventDefault();
$("#table").toggle();
//$("#sub").text(details)
$(".m").text(fullName)
$(".e").text(phonenumber)
$(".t").text(email)


$(".speak").click(function(){
 speak(fullName);
 speak(phonenumber);
 speak(email);
});
 /*function printElem(){
     var mywindow = window.open('', 'PRINT');
     mywindow.document.write('<html><head><title>address-book</title>')
     mywindow.document.write('</head></html>');
     mywindow.print();
     mywindow.close();
     return true;
 }
printElem();*/
    });
});