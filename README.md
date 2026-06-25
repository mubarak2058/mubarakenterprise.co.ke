index.html
style.css
script.js
assets/# mubarakenterprise.co.ke
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
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mubarak Enterprise POS</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f4f6f9;
}

.header{
background:#0b7a0b;
color:white;
padding:15px 20px;
display:flex;
justify-content:space-between;
align-items:center;
}

.sidebar{
position:fixed;
left:0;
top:60px;
width:240px;
height:100vh;
background:#1f2937;
color:white;
}

.sidebar h2{
padding:20px;
text-align:center;
border-bottom:1px solid #374151;
}

.sidebar ul{
list-style:none;
}

.sidebar ul li{
padding:18px 20px;
border-bottom:1px solid #374151;
cursor:pointer;
}

.sidebar ul li:hover{
background:#374151;
}

.sidebar ul li a{
color:white;
text-decoration:none;
display:block;
}

.main{
margin-left:240px;
padding:20px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:15px;
margin-bottom:20px;
}

.card{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 2px 5px rgba(0,0,0,.1);
}

.card h3{
color:#666;
margin-bottom:10px;
}

.card p{
font-size:24px;
font-weight:bold;
color:#0b7a0b;
}

.search{
background:white;
padding:15px;
border-radius:10px;
margin-bottom:20px;
box-shadow:0 2px 5px rgba(0,0,0,.1);
}

.search input{
width:100%;
padding:12px;
border:1px solid #ddd;
border-radius:6px;
}

.pos{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.panel{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 2px 5px rgba(0,0,0,.1);
}

.product{
display:flex;
justify-content:space-between;
padding:12px;
margin-bottom:10px;
border:1px solid #eee;
border-radius:6px;
cursor:pointer;
}

.product:hover{
background:#f0fdf4;
}

button{
padding:12px 18px;
border:none;
border-radius:6px;
cursor:pointer;
color:white;
margin:5px;
}

.green{background:#16a34a;}
.blue{background:#2563eb;}
.red{background:#dc2626;}
.orange{background:#f59e0b;}

table{
width:100%;
border-collapse:collapse;
margin-top:15px;
}

table th,table td{
border-bottom:1px solid #ddd;
padding:10px;
text-align:left;
}

.total{
font-size:28px;
font-weight:bold;
color:#0b7a0b;
margin-top:15px;
}

@media(max-width:900px){

.sidebar{
display:none;
}

.main{
margin-left:0;
}

.pos{
grid-template-columns:1fr;
}
}
</style>
</head>

<body>

<div class="header">
<h2>Mubarak Enterprise POS</h2>
<div id="date"></div>
</div>

<div class="sidebar">
<h2>MENU</h2>
<ul>
<li><a href="index.html">Dashboard</a></li>
<li><a href="pos.html">POS</a></li>
<li><a href="inventory.html">Inventory</a></li>
<li><a href="customers.html">Customers</a></li>
<li><a href="savings.html">Savings</a></li>
<li><a href="reports.html">Reports</a></li>
<li><a href="users.html">Users</a></li>
<li><a href="settings.html">Settings</a></li>
</ul>
</div>

<div class="main">

<div class="cards">
<div class="card">
<h3>Today's Sales</h3>
<p>KES 0</p>
</div>

<div class="card">
<h3>Products</h3>
<p>6</p>
</div>

<div class="card">
<h3>Customers</h3>
<p>0</p>
</div>

<div class="card">
<h3>Inventory</h3>
<p>100%</p>
</div>
</div>

<div class="search">
<input type="text" placeholder="Search Product / Barcode">
</div>

<div class="pos">

<div class="panel">

<h3>Sales Cart</h3>

<table>
<thead>
<tr>
<th>Product</th>
<th>Price</th>
</tr>
</thead>
<tbody id="cart"></tbody>
</table>

<div class="total">
KES <span id="total">0</span>
</div>

<button class="orange">Suspend</button>
<button class="green">M-Pesa</button>
<button class="blue">Checkout</button>
<button class="red" onclick="clearCart()">Cancel</button>

</div>

<div class="panel">

<h3>Products</h3>

<div class="product" onclick="addProduct('Sugar 2kg',250)">
<span>Sugar 2kg</span>
<span>KES 250</span>
</div>

<div class="product" onclick="addProduct('Milk 500ml',70)">
<span>Milk 500ml</span>
<span>KES 70</span>
</div>

<div class="product" onclick="addProduct('Bread',60)">
<span>Bread</span>
<span>KES 60</span>
</div>

<div class="product" onclick="addProduct('Cooking Oil',350)">
<span>Cooking Oil</span>
<span>KES 350</span>
</div>

<div class="product" onclick="addProduct('Rice 1kg',180)">
<span>Rice 1kg</span>
<span>KES 180</span>
</div>

<div class="product" onclick="addProduct('Soap',120)">
<span>Soap</span>
<span>KES 120</span>
</div>

</div>

</div>

</div>

<script>
document.getElementById("date").innerHTML =
new Date().toLocaleString();

let total = 0;

function addProduct(name,price){

const row =
`<tr>
<td>${name}</td>
<td>KES ${price}</td>
</tr>`;

document.getElementById("cart").innerHTML += row;

total += price;

document.getElementById("total").innerHTML = total;
}

function clearCart(){
document.getElementById("cart").innerHTML="";
total=0;
document.getElementById("total").innerHTML="0";
}
</script>

</body><div style="width:220px;height:100vh;background:#1f2937;color:white;padding:20px;position:fixed;left:0;top:0;">
<h2>Mubarak POS</h2>
<p><a href="pos.html" style="color:white;">POS</a></p>
<p><a href="inventory.html" style="color:white;">Inventory</a></p>
<p><a href="customers.html" style="color:white;">Customers</a></p>
<p><a href="reports.html" style="color:white;">Reports</a></p>
</div>
</html><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mubarak Enterprise POS</title>

<style>
body{
margin:0;
font-family:Arial,sans-serif;
background:#f4f6f9;
}

.sidebar{
position:fixed;
left:0;
top:0;
width:230px;
height:100%;
background:#1f2937;
color:white;
}

.sidebar h2{
text-align:center;
padding:20px;
background:#0b7a0b;
margin:0;
}

.sidebar a{
display:block;
color:white;
padding:15px 20px;
text-decoration:none;
}

.sidebar a:hover{
background:#374151;
}

.main{
margin-left:230px;
padding:20px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:15px;
}

.card{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 2px 5px rgba(0,0,0,.1);
}

.card h3{
margin:0 0 10px;
color:#555;
}

.card p{
font-size:28px;
font-weight:bold;
color:#0b7a0b;
margin:0;
}

.header{
background:white;
padding:15px;
border-radius:10px;
margin-bottom:20px;
box-shadow:0 2px 5px rgba(0,0,0,.1);
}

table{
width:100%;
border-collapse:collapse;
background:white;
margin-top:20px;
}

th,td{
padding:12px;
border:1px solid #ddd;
text-align:left;
}

th{
background:#0b7a0b;
color:white;
}
</style>
</head>
<body>

<div class="sidebar">
<h2>Mubarak POS</h2>

<a href="index.html">Dashboard</a>
<a href="pos.html">POS</a>
<a href="inventory.html">Inventory</a>
<a href="customers.html">Customers</a>
<a href="savings.html">Savings</a>
<a href="reports.html">Reports</a>
<a href="users.html">Users</a>
<a href="settings.html">Settings</a>
</div>

<div class="main">

<div class="header">
<h1>Mubarak Enterprise Dashboard</h1>
<p>Welcome to your POS Management System</p>
</div>

<div class="cards">

<div class="card">
<h3>Today's Sales</h3>
<p>KES 25,000</p>
</div>

<div class="card">
<h3>Products</h3>
<p>120</p>
</div>

<div class="card">
<h3>Customers</h3>
<p>85</p>
</div>

<div class="card">
<h3>Savings</h3>
<p>KES 350K</p>
</div>

</div>

<table>
<tr>
<th>Date</th>
<th>Transaction</th>
<th>Amount</th>
</tr>

<tr>
<td>26/06/2026</td>
<td>POS Sale</td>
<td>KES 2,500</td>
</tr>

<tr>
<td>26/06/2026</td>
<td>Savings Deposit</td>
<td>KES 5,000</td>
</tr>

<tr>
<td>26/06/2026</td>
<td>Customer Payment</td>
<td>KES 1,200</td>
</tr>

</table>

</div>

</body>
</html>
