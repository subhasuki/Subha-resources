var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}


function readFormData() {
    var formData = {};
    formData["ccode"] = document.getElementById("ccode").value;
    formData["cname"] = document.getElementById("cname").value;
    formData["pcode"] = document.getElementById("pcode").value;
    formData["pname"] = document.getElementById("pname").value;
    formData["punit"] = document.getElementById("punit").value;
    formData["quan"] = document.getElementById("quan").value;
    formData["amount"] = document.getElementById("amount").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.pcode;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.pname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quan;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.punit;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.amount;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a class='fa fa-pencil-square-o edit_btn' onClick="onEdit(this)"></a>
                       <a class='fa fa-trash-o clricn clricn' onClick="onDelete(this)"></a>`;

    document.getElementById("pcode").value = '';
    document.getElementById("pname").value = '';
    document.getElementById("quan").value = '';
    document.getElementById("punit").value = '';
    document.getElementById("amount").value = '';
}

function resetForm() {
    document.getElementById("pcode").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("quan").value = "";
    document.getElementById("punit").value = "";
    document.getElementById("amount").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("pcode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("pname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("quan").value = selectedRow.cells[1].innerHTML;
    document.getElementById("punit").value = selectedRow.cells[1].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.pcode;
    selectedRow.cells[0].innerHTML = formData.pname;
    selectedRow.cells[1].innerHTML = formData.quan;
    selectedRow.cells[1].innerHTML = formData.punit;
    selectedRow.cells[2].innerHTML = formData.amount;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("pname").value == "") {
        isValid = false;
        document.getElementById("pnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("pnameValidationError").classList.contains("hide"))
            document.getElementById("pnameValidationError").classList.add("hide");
    }
    return isValid;
}


function pointfun(evt)
{
   var charCode = (evt.which) ? evt.which : evt.keyCode;
   if (charCode != 46 && charCode > 31 
     && (charCode < 48 || charCode > 57))
      return false;

   return true;
}

// -------------   Amount Calculation  --------------------------

function mulqun(){
    var qun = document.getElementById("quan").value;
 //    console.log(qun);
    var unitprc = document.getElementById("punit").value;
 //    console.log(unitprc);
    var total = qun * unitprc;
    var n = total.toFixed(2);
 //    console.log(total);
     document.getElementById("amount").value=n;

}

function mulunit(){
 mulqun();
}

function ValidateAlpha(evt)
{
    var keyCode = (evt.which) ? evt.which : evt.keyCode
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
                
    return false;
    return true;
}

function totbtn()  {

    var table = document.getElementById("productList"), sumVal = 0;
            
    for(var i = 1; i < table.rows.length; i++)
    {
        sumVal = sumVal + parseInt(table.rows[i].cells[4].innerHTML);
    }
    
    document.getElementById("val").innerHTML =  sumVal;
    // console.log(sumVal);

    // var GSTRate ="12%";

    const gstAmount = document.getElementById('gst-amount').innerHTML = (sumVal / 100 * 12).toFixed(2);
    // console.log(gstAmount);

    const totamt = document.getElementById('total-amount').innerHTML = parseInt(sumVal) + parseInt(gstAmount);
    // console.log(totamt);

    var value = parseInt(document.getElementById('ccode').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('ccode').value = value;

    // document.getElementById('ccode').value='';
    document.getElementById('cname').value='';
    document.getElementById('protbody').innerHTML='';

}

function printval(pvalid) {
    
    var printdata = document.getElementById(pvalid).innerHTML;
  
    var oldPage = document.body.innerHTML;
   
    document.body.innerHTML = 
      "<html><head><title></title></head><body>" + 
      printdata + "</body>";
   
    window.print();
   
    document.body.innerHTML = oldPage;

    document.getElementById('val').innerHTML='';
    document.getElementById('gst-amount').innerHTML='';
    document.getElementById('total-amount').innerHTML='';

}