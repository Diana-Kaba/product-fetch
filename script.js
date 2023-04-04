let phonesBlock = document.querySelector("#phones");
fetch("phones.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    insertBooks(data);
  });
function insertBooks(phones) {
  let str = `<div class="container p-5 my-5 border bg-dark bg-gradient">`;
  for (let i = 0; i < phones.length; i++) {
    str += `<div class="card mt-3">`;
    str += `<div class="card-body">`;
    str += `<h2 class="card-title text-center mt-3">${phones[i].title}</h2>`;
    str += `<img class="card-img-top mx-auto d-block mb-3" src="${phones[i].imageCover}" alt="Card image" style="width:300px">`;
    str += `<p class="card-text">${phones[i].description}</p>`;
    str += `<p class="card-text"><span class="badge bg-dark">${phones[i].price}</span></p>`;
    str += `<p class="card-text">In stock: <span class="badge bg-secondary">${phones[i].stocked}</span></p>`;
    str += `</div>`;
    str += `</div>`;
  }
  str += `</div>`;
  phonesBlock.innerHTML = str;
}
