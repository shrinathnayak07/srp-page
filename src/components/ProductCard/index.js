import { Box, Image, Flex, Text, Badge, Heading } from '@chakra-ui/react';

const ProductCard = ({ data }) => {
  return (
    <Box borderRadius="md" p="5" maxW="300px" minH="500px" maxH="500px" borderWidth="1px" mb="10" mr="10">
      <Image borderRadius="md" src={data.searchImage} loading="lazy" />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="pink">{data.brand}</Badge>
      </Flex>
      <Text mt={2} mb="2" fontSize="mg" fontWeight="semibold" lineHeight="short">
        {data.productName}
      </Text>
      <Flex>
        <Heading as="h4" size="md" mr="2">₹ {data.price}</Heading>
        <Text as="del" mr="2">₹ {data.mrp}</Text>
        {data.discountDisplayLabel &&
          <Text color="tomato">{data.discountDisplayLabel}</Text>
        }
      </Flex>
    </Box>
  )
}

export default ProductCard;
