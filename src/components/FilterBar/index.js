import { useState } from 'react';
import { Box, Checkbox, Text, Heading, CheckboxGroup, Collapse, Button } from '@chakra-ui/react';

const Filter = ({ brands, category, setBrandFilters, setCategoryFilters }) => {
  const [ collapseBrand, setCollapseBrand ] = useState(false);
  const [ collapseCategory, setCollapseCategory ] = useState(false);

  const toggleBrandCollapse = () => setCollapseBrand(!collapseBrand);
  const toggleCategoryCollapse = () => setCollapseCategory(!collapseCategory);

  const updateBrandFilter = (brands) => {
    setBrandFilters(brands);
  }

  const updateCategoryFilter = (brands) => {
    setCategoryFilters(brands);
  }

  if (brands.length === 0 && category.length === 0) {
    return null;
  }

  return (
    <Box w="20%" position="fixed" top="0" left="0" borderRightWidth="1px">
      <Box overflowY="scroll" maxH="100vh" p="5">
      <Heading mb="5px" as="h3" size="lg">Filter By</Heading>

      {brands && brands.length > 0 &&
        <Box mb="5">
        <Collapse mb="5" startingHeight={410} in={collapseBrand}>
          <Text>Brand</Text>
          <CheckboxGroup onChange={updateBrandFilter}>
            {brands.map((item, index) => {
              return (
              <Box key={item}>
                <Checkbox value={item}>{item}</Checkbox>
              </Box>
            )})}
          </CheckboxGroup>
        </Collapse>
        <Button colorScheme="teal" onClick={toggleBrandCollapse} size="sm" variant="link" mt="2">
          Show {collapseBrand ? "Less" : "More"}
        </Button>
        </Box>
      }

      {category && category.length > 0 &&
        <Box>
        <Collapse startingHeight={410} in={collapseCategory}>
          <Text>Category</Text>
          <CheckboxGroup onChange={updateCategoryFilter}>
            {category.map((item, index) => {
              return (
                <Box key={item}>
                  <Checkbox value={item}>{item}</Checkbox>
                </Box>
            )})}
          </CheckboxGroup>
        </Collapse>
        <Button colorScheme="teal" onClick={toggleCategoryCollapse} size="sm" variant="link" mt="2">
          Show {collapseCategory ? "Less" : "More"}
        </Button>
        </Box>
      }
      </Box>
    </Box>
  )
}

export default Filter;
