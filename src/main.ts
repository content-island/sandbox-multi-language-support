import "./style.css";
import type { Language } from "./model";
import { getProducts } from "./api";

const displayProducts = async (language: Language) => {
  const products = await getProducts(language);

  const appContainer = document.getElementById("app");
  if (!appContainer) {
    console.error("App container (#app) not found in the DOM.");
    return;
  }

  let productsContainer = document.getElementById("products");
  if (!productsContainer) {
    productsContainer = document.createElement("div");
    productsContainer.id = "products";
    appContainer.appendChild(productsContainer);
  }

  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
      <img src="${product.image.url}" alt="${product.name}" style="max-width:300px" />
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <small>Price: ${product.price}</small>
    `;
    productsContainer.appendChild(productElement);
  });
};

const setupLanguageSelector = () => {
  const appContainer = document.getElementById("app");
  if (!appContainer) {
    console.error("App container (#app) not found.");
    return;
  }

  const languageSelector = document.createElement("select");
  languageSelector.id = "language-selector";
  languageSelector.innerHTML = `
    <option value="en">English</option>
    <option value="es">Español</option>
  `;

  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = (event.target as HTMLSelectElement)
      .value as Language;
    displayProducts(selectedLanguage);
  });

  appContainer.prepend(languageSelector);
};

setupLanguageSelector();
displayProducts("en");
