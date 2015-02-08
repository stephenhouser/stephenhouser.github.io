<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Emergency Messaging | University of Southern Maine</title>
<c:import url="http://usm.maine.edu//includes/sniffer3_valid.js" />
<!--#include virtual="/includes/sniffer3_valid.js"-->
<style type="text/css">
    body { 
        font-size:small;
        padding:0;
        margin:0;
        font-family:Verdana, Arial, Helvetica, sans-serif;
    }
    * html body { 
        font-size:x-small; /* for IE5 Win */
        f\ont-size:small; /* for other IE */
    }
    #wrapper {
        padding:10px 20px 50px;
    }
    h1 { font-family:Arial, Helvetica, sans-serif; font-size:2em; }
    * html h1 { font-size:1.95em } /* for ie */
    table.bluetable { border-top:4px solid #465F99; margin:2em; }
    table.bluetable tr.alternate { background-color:#E6ECF3; }
    table.bluetable th { text-align:right; }
    table.bluetable th, table.bluetable td { padding:0.4em 1em; }
    input { background-color:#FFF !important; }
    input.button {
        font-family:Arial, Helvetica, sans-serif;
        font-size:0.9em;
        background-color:#465F99 !important;
        color:#FFFFFF;
        border-color:#E6ECF3;
        padding:0.1em .75em;
        width:auto; /* for  ie */
        overflow:visible; /* for  ie */
    }   
    input.button:hover { 
        background-color:#BCC5DA !important; 
        color:#1E3B78; 
    }

span.hint {
    font:normal 11px/14px verdana;
    background:#eee url(images/bg-span-hint-gray.gif) no-repeat top left;
    color:#444;
    border:1px solid #888;
    padding:5px 5px 5px 40px;
    width:250px;
    position:absolute;
    margin: -12px 0 0 14px;
    display:none;
}


td.welldone span.hint {
    background:#9fd680 url(images/bg-span-hint-welldone.jpg) no-repeat top left;
    border-color:#749e5c;
    color:#000;
}
td.kindagood span.hint {
    background:#ffffcc url(images/bg-span-hint-kindagood.jpg) no-repeat top left;
    border-color:#cc9933;
}

td.welldone {
    background:transparent url(images/bg-fieldset-welldone.gif) no-repeat right;
}
td.kindagood {
    background:transparent url(images/bg-fieldset-kindagood.gif) no-repeat right;
    X: 194px;
}

</style>
<script type="text/javascript">
function checkPhoneNumber(whatYouTyped) {
  var fieldset = whatYouTyped.parentNode;
  var txt = whatYouTyped.value;
    if ( /^[0-9]{10}$/.test(txt)) {
        fieldset.className = "welldone";
    } else if (txt.length != 0) {
        fieldset.className = "kindagood";
    } else {
        fieldset.className ="";
    }
}

function checkCellPhoneNumber(cpn) {
    checkPhoneNumber(cpn);
}

function checkCellPhoneProvider(cpp) {
    var txt = cpp.value;
    if (/^0$/.test(txt)) {
        fieldset.className = "kindagood";
    } else {
        fieldset.className = "welldone";
    }
}

function checkEmail(whatYouTyped) {
    var fieldset = whatYouTyped.parentNode;
    var txt = whatYouTyped.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(txt)) {
        fieldset.className = "welldone";
    } else {
        fieldset.className = "kindagood";
    }
}

function checkNameForLength(whatYouTyped) {
    var fieldset = whatYouTyped.parentNode;
    var txt = whatYouTyped.value;
    if (txt.length >= 2) {
        fieldset.className = "welldone";
    }
    else {
        fieldset.className = "kindagood";
    }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function preCheckFields() {
    checkNameForLength(document.getElementById("firstName"));
    checkNameForLength(document.getElementById("lastName"));
    checkEmail(document.getElementById("eMailAddress"));
    checkEmail(document.getElementById("confirmEMailAddress"));
    checkPhoneNumber(document.getElementById("voiceNumber"));
    checkCellPhoneNumber(document.getElementById("cellNumber"));
}

function prepareInputsForHints() {
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++){
    inputs[i].onfocus = function() {
      this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
    }
    
    inputs[i].onblur = function() {
      this.parentNode.getElementsByTagName("span")[0].style.display = "none";
    }
  }
    preCheckFields();
}

addLoadEvent(prepareInputsForHints);
</script>
</head>

<body>
<!-- begin header -->
<c:import url="http://usm.maine.edu/includes/header_hf_nospace_xhtmlvalid_accessible.htm" />
<!--#include virtual="/includes/header_hf_nospace_xhtmlvalid_accessible.htm"-->
<!-- end header -->
<div id="wrapper">
    <h1>Emergency Messaging</h1>
    <p>To receive emergency text and email messages, you must be registered</p>
    <p>You must include an area code in your phone number for the alert system to work.</p>
    <p>The information collected is not immediately available to the notification
    system. It may be several days before your information is transmitted and included in the
    notification system. You will not receive any notifications during that time.</p>
    
    <p><b>Register Here!</b></p>
    <c:if test="${!empty param.errorMessage}">
        <span style="color: #FF1010; display: block; border: 1px solid; padding: 5px; margin: 10px;">
        <strong><c:out value="${param.errorMessage}"/></strong>
        </span>
    </c:if>
    <form name="messaging" method="post" action="register.jsp">
    <table cellpadding="0" cellspacing="0" summary="Emergenct Alert subscription form" id="subscription-form" class="bluetable">
        <tr class="alternate">
            <th><label for="firstName">First Name</label></th>
            <td class="kindagood"><input type="text" id="firstName" name="firstName" 
                        onkeyup="checkNameForLength(this);"
                        value="<c:out value='${param.firstName}' />"/>
                <span class="hint">First name is required and must be at least 2 letters.</span>
            </td>
        </tr>
        <tr>
            <th><label for="lastName">Last Name</label></th>
            <td class="kindagood"><input type="text" id="lastName" name="lastName" 
                    onkeyup="checkNameForLength(this);"
                    value="<c:out value='${param.lastName}' />"/>
                <span class="hint">Last name is required and must be at least 2 letters.</span>
            </td>
        </tr>
        <tr class="alternate">
            <th><label for="voiceNumber">Voice Phone #</label></th>
            <td><input type="text" id="voiceNumber" name="voiceNumber" 
                        maxlength="10" onkeyup="checkPhoneNumber(this);"
                        value="<c:out value='${param.voiceNumber}' />"/>
                <span class="hint">Phone numbers must be exactly 10 digits in length and contain only digits.</span>
            </td>
        </tr>
        <tr>
            <th><label for="cellNumber">Cell Phone #</label></th>
            <td>
                <input type="text" id="cellNumber" name="cellNumber" 
                        maxlength="10" onkeyup="checkCellPhoneNumber(this);"
                        value="<c:out value='${param.cellNumber}' />"/>
                <select id="cellProvider" name="cellProvider">                  
                    <option value="0">Select Carrier&hellip;</option>
                    <option value="txt.att.net">AT&amp;T</option>
                    <option value="cingularme.com">Cingular</option>
                    <option value="messaging.nextel.com">Nextel</option>
                    <option value="messaging.sprintpcs.com">Sprint</option>
                    <option value="tmomail.net">T-Mobile</option>
                    <option value="email.uscc.net">US Cellular</option>
                    <option value="vtext.com">Verizon</option>
                    <option value="vmobl.com">Virgin Mobile</option>
                </select>
                <span class="hint">Phone numbers must be exactly 10 digits in length and contain only digits. Cell phones must also select a provider.</span>
                </td>
        </tr>
        <tr class="alternate">
            <th><label for="eMailAddress">E-Mail</label></th>
            <td class="kindagood">
            <input type="text" id="eMailAddress" name="eMailAddress" 
                    onkeyup="checkEmail(this);"
                    value="<c:out value='${param.eMailAddress}' />"/>
                <span class="hint">E-Mail address is required and must valid and contain your e-mail address.</span>
            </td>
        </tr>
        <tr>
            <th><label for="confirmEMailAddress">Confirm E-Mail</label></th>
            <td class="kindagood">
            <input type="hidden" id="email" name="email"/>
            <input type="text" id="confirmEMailAddress" name="confirmEMailAddress"
                    onkeyup="checkEmail(this);"
                    value=""/>
                <span class="hint">Confirmation E-Mail address is required and must match E-Mail address.</span>
            </td>
        </tr>
        <tr class="alternate">
            <th>Optional Groups</th>
            <td><input type="checkbox" name="weather" id="weather" /> <label for="weather">Cancellations due to inclement weather (Portland &amp; Gorham)</label><br />
                <input type="checkbox" name="weather-lac" id="weather-lac" /> <label for="weather-lac">Cancellations due to inclement weather (Lewiston-Auburn)</label><br />
                <input type="checkbox" name="emergency" id="emergency" /> <label for="emergency">Emergency notifications</label></td>
        </tr>
        <tr>
            <th><label for="stopDate">Opt-out By</label></th>
            <td><select id="stopDate" name="stopDate">                  
                    <option value="2007-12-31">December 31, 2007 (Fall 2007)</option>
                    <option value="2008-05-30">May 31, 2008 (Spring 2008)</option>
                    <option value="2008-12-31">December 31, 2008 (Fall 2008)</option>
                    <option value="2009-05-30">May 31, 2009 (Spring 2009)</option>
                    <option value="never">Never</option>            
                </select></td>
        </tr>
        <tr class="alternate">
            <td>&nbsp;</td>
            <td><input type="submit" class="button" value="Submit"/></td>
        </tr>
    </table>
    </form>
    <center>
    <address><img src="images/bg-fieldset-kindagood.gif" border="0"/> denotes required fields
                <img src="images/bg-fieldset-welldone.gif" border="0"/> denotes valid fields</address>
    </center>
</div>
<!-- begin footer -->
<div id="footer">
<c:import url="http://usm.maine.edu//includes/footer_hf_nospace_xhtmlvalid_accessible.htm" />
<!--#include virtual="/includes/footer_hf_nospace_xhtmlvalid_accessible.htm"--></div>
<!-- end footer -->
</body>
</html>
