export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await result.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`'https://api.mercadolibre.com/sites/MLB/'search?category=${categoryId}&q=${query}`)
    .then((response) => response.json()); 
}
