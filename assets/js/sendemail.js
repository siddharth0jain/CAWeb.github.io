

    
    function formValid() {
        if (document.dataform.txtname.value == '') {
        alert("Please Enter Your Name. ");
        document.dataform.txtname.focus();
        return (false);
        }

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.dataform.txtemail.value;
    if (reg.test(address) == false) {
        alert('Invalid Email Address');
        document.dataform.txtemail.focus();
        return false;
    }
    
    if (document.dataform.txtphone.value == '') {
        alert("Please Enter Your Phone No.");
        document.dataform.txtphone.focus();
        return (false);
    }
    
    if (document.dataform.txtmsg.value == '') {
        alert("Enter Your Message");
        document.dataform.txtmsg.focus();
        return (false);
    }
    return(true);
}

