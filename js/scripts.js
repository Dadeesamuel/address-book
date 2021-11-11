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

    });
});