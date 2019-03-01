"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1
  
   Author: Melinda Chirila
   Date:   2/28/2019
     
   Filename: tc_order.js  

   The item array contains the ID numbers of the items ordered by the customer
   The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
   
*/
//these are the ID item numbers.
var item = [10582, 23015, 41807, 10041];

//this is the items description
var itemDescription = [
    "1975 Green Bay Packers Football (signed), Item 10582",
    "Tom Landry 1955 Football Card (unsigned), Item 23015",
    "1916 Army-Navy Game, Framed Photo (signed), Item 41807",
    "Protective Card Sheets, Item 10041"
];
//array for the prices of the items.
var itemPrice = [149.93, 89.98, 334.93, 22.67];

//this is the array for the itemQty, these are the quantities that the custoer ordered of each item : 1, 1, 1, 4.
var itemQty = [1, 1, 1, 4];