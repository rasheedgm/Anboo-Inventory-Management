
<?php
$postData = file_get_contents("php://input");
$decodeData= json_decode($postData);
$sales[]=json_encode($decodeData->sales);
$purchases[]=json_encode($decodeData->purchases);
$customers[]=json_encode($decodeData->customers);
$products[]=json_encode($decodeData->products);
$suppliers[]=json_encode($decodeData->suppliers);
$transactions[]=json_encode($decodeData->transactions);
//$file=$decodeData->file;
//$filepath="data/". $file. ".json";
file_put_contents("data/sales.json", $sales);
file_put_contents("data/purchases.json", $purchases);
file_put_contents("data/customers.json", $customers);
file_put_contents("data/products.json", $products);
file_put_contents("data/suppliers.json", $suppliers);
file_put_contents("data/transactions.json", $transactions);
echo "Updated Database";
?>