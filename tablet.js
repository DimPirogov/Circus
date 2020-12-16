// Function to increment and decrement Count of each food item 
function plus(selector,status) {
    //get parent - item by id
    var parent=document.getElementById(selector);
    //get child <input> by id 
    var total=parent.querySelector("#count").value;
    
    //get food item value
    var price =parseInt(parent.querySelector("#foodid").value);

    //To calculate final count and display
    var find =document.getElementById("footer");
    var findtotal=parseInt(find.querySelector("#total-price").value);
    console.log(findtotal);

    //Based on status - increment and decrement count - update total also
    if(status){
        //increment
        ++total;
        findtotal += price;
    }
    else{
        //decrement
        if(total!=0)
            --total;
            findtotal -= price;
    }

    // display total in child <input>
    parent.querySelector("#count").value=total;
    
    //calculate total price of each item based on count
    var tprice = parseInt( total * price);

    //get child <span> for item description
    var itemname=parent.querySelector("#sname").textContent;
    
    //To display final total in total textbox
    find.querySelector("#total-price").value = findtotal;

    //Table body
    var obj=document.getElementById("orderbody");
    var tablerow;

    //remove row from table - if already exists and total is 0
    var row=document.getElementById(itemname);
    if(row!=null||total=="0")
    {
        obj.removeChild(row);
        console.log("removed");
    }

    //if item not exists - create row in table TR - with name , total and tprice as TD
    if(total!=0){
    //TR
    tablerow = document.createElement("TR");
    tablerow.setAttribute("id", itemname);
    obj.appendChild(tablerow);
    //TD  
    var name = document.createElement("TD");
    var iname = document.createTextNode(itemname);
    name.appendChild(iname);
    document.getElementById(itemname).appendChild(name)
    //TD
    var count = document.createElement("TD");
    count.setAttribute("id", "tot");
    var icount = document.createTextNode(total);
    count.appendChild(icount);
    document.getElementById(itemname).appendChild(count)
    //TD
    var pris = document.createElement("TD");
    pris.setAttribute("id", "pris");
    var ipris = document.createTextNode(tprice);
    pris.appendChild(ipris);
    document.getElementById(itemname).appendChild(pris)
    }
}

//Function to display food items based menu click
function menu(menu)
{
var divs = document.querySelectorAll('.container');
[].forEach.call(divs, function(div) {  
  if (div.id === menu)
  {
        div.classList.add("display");
        div.classList.remove("hidden");
  }
  else
  {
    div.classList.add("hidden");
    div.classList.remove("display");
  }
});
}

//Function to fix header and footer
window.onscroll = function() {myFunction()};

function myFunction() {
    var header = document.getElementById("myHeader");
    var footer = document.getElementById("footer");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    footer.classList.add("sticky-footer");
    } else {
    header.classList.remove("sticky");
    footer.classList.remove("sticky-footer");
    }
}

//Function for confirm button click
function confirm() 
{
    alert("Order Placed!");
}




