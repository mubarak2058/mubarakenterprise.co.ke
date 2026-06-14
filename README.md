# mubarakenterprise.co.ke
A business account 
<!DOCTYPE html>
<html>
<head>
<title>Mubarak POS</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<section>
<h2>Wholesale Shop POS</h2>

<input type="text" id="item" placeholder="Item Name">
<input type="number" id="price" placeholder="Price">

<button onclick="addItem()">Add</button>

<ul id="list"></ul>

<h3>Total: KES <span id="total">0</span></h3>
</section>

<script>
let total=0;

function addItem(){
let item=document.getElementById("item").value;
let price=parseFloat(document.getElementById("price").value);

let li=document.createElement("li");
li.innerHTML=item+" - KES "+price;

document.getElementById("list").appendChild(li);

total+=price;
document.getElementById("total").innerHTML=total;
}
</script>

</body>
</html>
