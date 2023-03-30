let product_details = JSON.parse(localStorage.getItem("product_details"));

let product_parent = document.getElementById("product_parent");

function show_product(data) {
  console.log(data.related);
  let { name, img, loc, posting_date, price } = data.product;
  console.log(data);

  let div = document.createElement("div");
  div.classList.add("detail_image");
  let div1 = document.createElement("div");
  div1.classList.add("detail_image_fix");

  div1.style.background = `url(${img})`;
  div1.innerHTML = `
    <img id="abcd"
      src="${img}"
      alt=""
    />`;

  div.innerHTML = `
    <div class="product_detail">
      <div class="product_desc">
        <h1>${name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ea
          nostrum consectetur maxime reiciendis laboriosam rerum quo atque
          vero doloremque.
        </p>
      </div>
      <div class="product_price">
        <h1>${price}</h1>
        <button class="seller offer" >Make Offer</button>
      </div>
    </div>
    <div class="product_Overview">
      <div class="product_location">
        <h1>overview</h1>
        <div class="overview">
          <p>${loc}</p>
          <p>${posting_date}</p>
        </div>
      </div>
      <div class="product_seller">
        <h1>Adil Khan</h1>
        <button class="seller" >Chat With Seller</button>
      </div>
    </div>`;
  product_parent.append(div1, div);

  // let image = document.getElementById('abcd')
}
show_product(product_details);

