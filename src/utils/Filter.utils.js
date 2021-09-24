export const getFiltersFromProducts = (arr) => {
  if (arr && arr.length > 0) {
    const brands = [];
    const category = [];
    arr.forEach(item => {
      if (!brands.includes(item.brand)) {
        brands.push(item.brand);
      }
      if (!category.includes(item.category)) {
        category.push(item.category);
      }
    })
    return { brands, category };
  }
}