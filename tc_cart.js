"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Melinda Chirila
   Date:   2/28/2019
   
   Filename: tc_cart.js
	
*/
//the order total is going to start at zero 0.
var orderTotal = 0;


//this has the text string below,the cartHTML is going t o be made
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";
//the loop is going to continue for the length of the items array. It starts at zero
for (var i = 0; i <= 3; i++) {
    // this cartHTML is going to update with the the item #
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    //this is going to change the items price and the quantity and the desc. of the item.
    cartHTML += "<td>" + itemDescription[i] + "</td>" + "<td>" + "$" + itemPrice[i] + "</td>" + "<td> " + itemQty[i] + "</td>";
    //the final items cost is going to be multiplied ny the quantity
    var itemCost = itemPrice[i] * itemQty[i];
    //the cartHTML is going to update only based on the items cost thats above.
    cartHTML += "<td>" + "$" + itemCost + "</td></tr>"
    //this is the order cost
    orderTotal += itemCost;
}

//The cartHTML will update the bases on the total cost of the order of the item
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>" + "$" + orderTotal + "</td>" + "</tr></table>";

//The document is going to change so that it includes all the changes.
document.getElementById("cart").innerHTML = cartHTML;