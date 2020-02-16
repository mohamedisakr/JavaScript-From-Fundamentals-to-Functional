async function getProducts() {
  try {
    const result = await fetch("products.json");
    const data = await result.json();
    let products = data.items;
    products = products.map(item => {
      const id = item.sys.id;
      const { title, price } = item.fields;
      const imageUrl = item.fields.image.fields.file.url;
      return { id, title, price, imageUrl };
    });
    return products;
  } catch (error) {
    console.log(error);
  }
}

getProducts().then(products => console.log(products));
