import { useEffect, useState } from 'react';
import { Box, Flex, Center, Spinner } from '@chakra-ui/react';
import { getAllProducts } from '../utils/api';
import { getFiltersFromProducts } from '../utils/Filter.utils';

// components
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

const SRP = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);

  useEffect(() => {
    getAllProducts().then(res => {
      if (res && res?.status === 200) {
        setProducts(res?.data?.products);
      }
    })
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      const { brands, category } = getFiltersFromProducts(products);
      setCategory(category);
      setBrands(brands);
      setFilteredProducts(products);
    }
  }, [products]);

  useEffect(() => {
    if ((brandFilters && brandFilters.length > 0) || (categoryFilters && categoryFilters.length > 0)) {
      if (brandFilters.length > 0 && categoryFilters.length > 0) {
        setFilteredProducts(
          [...products].filter(item => brandFilters.includes(item.brand) && categoryFilters.includes(item.category))
        );
      } else {
        setFilteredProducts(
          [...products].filter(item => brandFilters.includes(item.brand) || categoryFilters.includes(item.category))
        );
      }
    } else {
      setFilteredProducts(products);
    }
  }, [brandFilters, categoryFilters, products]);

  if (products.length === 0 && (categoryFilters.length === 0 && brandFilters.length === 0)) {
    return (
      <Center fontSize="28" fontWeight="bold" mt="10">
        Loading products
      </Center>
    )
  }

  return (
    <Flex overflowY="scroll">
      <FilterBar
        brands={brands}
        category={category}
        setBrandFilters={setBrandFilters}
        setCategoryFilters={setCategoryFilters}
      />
      <Box w="79%" left="20%" position="relative" p="5">
        
          {filteredProducts && filteredProducts.length > 0 ? (
            <Flex wrap="wrap" align="center">
              {filteredProducts.map(item => {
                return (
                  <ProductCard
                    data={item}
                    key={item.productId}
                  />
                )
              })}
            </Flex>
          ) : (
            <Center fontSize="28" fontWeight="bold" mt="10">
              No items found for this criteria.
            </Center>
          )}
        
      </Box>
    </Flex>
  )
}

export default SRP;
