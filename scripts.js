const list = document.querySelector("ul");
const logomarc = document.querySelector(".logomarc");
const buttonShowall = document.querySelector(".showAll");
let myLi = "";


function formatCurrency(value) {
  const valorFormatadoMoeda = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return valorFormatadoMoeda
}
function showAll(productsArray) {
  myLi = "";
  productsArray.forEach((product) => {
    myLi += `
      <li>
      <img src= ${product.src}>
      <p>${product.name}</p>
      <p class="item-price"> ${formatCurrency (product.price)}</p>
      </li>
      `;
  });
  logomarc.remove();
  list.innerHTML = myLi;
}
function mapAll() {
  const allitens = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));
  showAll(allitens);
}
function sumAllItems() {
  const totalValue = menuOptions.reduce((acumulador, product) => {
    return acumulador + Number(product.price);
  }, 0);
  logomarc.remove();
  list.innerHTML = `
    <li>
    <p> O Valor total dos itens é ${formatCurrency(totalValue)}</p>
    </li>
    `;
}
function filterAll() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan);
  showAll(filterJustVegan);
}

buttonShowall.addEventListener("click", () => showAll(menuOptions));
