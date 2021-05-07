
// reading file data from file uploader into base64 url   
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
    this.Source=e.target.result  //setting globally

     };
    reader.readAsDataURL(input.files[0]);
  }
};
//Data Container
products=[];

var product={
    name:"",
    price:0,
    description:"",
    image:""
};
function  AddrocordTotable(collection)
{   
     //creating table rows dynamically
    for(var i=0;i<collection.length;i++)
    {
        var tr=document.createElement("tr");   
    var image=document.createElement("img");  
    var tdname=document.createElement("td");
    var tdprice=document.createElement("td");
    var tddescription=document.createElement("td");
    var tdedit=document.createElement("td");

    image.id="id";
    image.style.width="100px"
    image.style.height="100px"
    image.className="class"; 

     //Adding entered data into table cells
     tdname.innerHTML=collection[i].name;
      tdprice.innerHTML=collection[i].price;
      tddescription.innerHTML=collection[i].description;
      tdedit.innerHTML=`<input type="button"  name="Remove"   value="delete" class="btn-btnm btn-danger " onclick="productremove(this);">
`
      var file  = document.querySelector('input[type=file]').files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
      image.src = e.target.result;
      tr.appendChild( image);
      tr.appendChild(tdname);
      tr.appendChild(tdprice);
      tr.appendChild(tddescription);
      tr.appendChild(tdedit);

      //clearing history

    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("description").value="";
    document.getElementById("image").value="";
    
     
    };
    reader.readAsDataURL(file);

  };
     //inserting new record into table
    document.getElementById("tablebody").appendChild(tr);
};

//deleting  record from sepecific row
function productremove(data)
{
    if(confirm('Are you sure to delete this record ?'))
    {
      var d=data.parentNode.parentNode;
          d.parentNode.removeChild(d);
                                   }
                              };

function addProduct()
{ //getting value of inpute field
  var  productName=document.getElementById("name").value;
  var  productPrice=document.getElementById("price").value;
  var  productDescription=document.getElementById("description").value;
  var  productImage=document.getElementById("image").value;

  var file  = document.querySelector('input[type=file]').files[0];
  if(file==undefined||file==="")
  {
      alert("plese upload a file");
  }
  

//adding productDetails into temperory Data container
  product.name=productName;
  product.price=productPrice;
  product.description=productDescription;
  product.image=this.Source;

//pushing data into Data container
products.push(product);

//calling Reusable function
AddrocordTotable(products); 
                              };
