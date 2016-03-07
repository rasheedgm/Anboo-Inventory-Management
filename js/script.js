function pad(number) {
    var n= 5-number.toString().length;
  for(var i=0;i<n;i++){      
      number = "0"+ number;
      }
    return(number);
}
function emptySale(){
    var a ={
        "SalesNo":"",
        "Customer": "",
        "Date": "",
        "Items":[],
        "Discount": "",
        "TotalAmount": 0,
        "PaymentMethod": "Cash",
        "PaymentAmount": "" 
    };
    return a;
}
function emptyPurchase(){
    var a ={
        "PurchasesNo":"",
        "Supplier": "",
        "Date": "",
        "Items":[],
        "Discount": "",
        "TotalAmount": 0,
        "PaymentMethod": "Cash",
        "PaymentAmount": "" 
    };
    return a;
}
function emptyCustomer(){
    var a= {"Id": "","Name":"","Address":{"ShopName":"","Line1":"","Line2":"","Place":"","Pin":""},"Phone":"","InitialCredit": ""};
    return(a);
}
function emptySupplier(){
    var a= {"Id": "","Name":"","Address":{"Line1":"","Line2":"","Place":"","Pin":""},"Phone":"","InitialCredit": ""};
    return(a);
}