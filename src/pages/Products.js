import { useCallback, useEffect, useState } from "react";
import ProductItem from "../components/products/ProductItem";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Waiting from "../components/ui/Waiting";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/product-slice";

function Products() {
  const [filteredHome, setfilteredHome] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsData, setProductsData] = useState([]);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.items);
  const filters = useSelector((state) => state.products.filters);

  const ProductsEP = `https://forsa-staging.bit68.com/api/v1/stores/real_estate/?page=${currentPage}`;
  const paginationCount = Number(productsData?.count) / 10;

  const getProductsData = useCallback(() => {
    let setProducts = [];
    setWaiting(true);
    axios
      .get(ProductsEP)
      .then((resp) => {
        let respResults = resp?.data.results;
        setProductsData(resp?.data);
        for (const key in respResults) {
          setProducts.push({
            id: respResults[key].id,
            title: respResults[key].title,
            price: respResults[key].price,
            area: respResults[key].area,
            home_type: respResults[key].home_type,
            bedrooms_no: respResults[key].bedrooms_no,
            bathrooms_no: respResults[key].bathrooms_no,
            furnished: respResults[key].furnished,
            image: respResults[key].image,
            address: respResults[key].address,
          });
        }
        dispatch(productActions.setProducts(setProducts));
        setWaiting(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ProductsEP, dispatch]);

  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  const filteredProduct = useCallback(() => {
    let updatedProducts = allProducts;
    if (filters.homeType.length !== 0) {
      updatedProducts = updatedProducts.filter((product)=> filters.homeType.includes(product.home_type));
      console.log("type", updatedProducts);
      // dispatch(productActions.setProducts(updatedProducts));
    }
    if (filters.bedrooms.length !== 0) {
      updatedProducts = updatedProducts.filter((product)=> filters.bedrooms.includes(String(product.bedrooms_no)));
      console.log("bed", updatedProducts);
      // dispatch(productActions.setProducts(updatedProducts));
    }
  }, [allProducts, filters]);

  useEffect(() => {
    filteredProduct();
  }, [filteredProduct]);

  const handleOnPageChange = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <>
      {waiting ? (
        <Waiting />
      ) : (
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[53px]">
            {allProducts.length !== 0 &&
              allProducts?.map((item) => (
                <ProductItem
                  key={item.id}
                  image={item.image}
                  price={item.price}
                  address={item.address}
                  bedrooms_no={item.bathrooms_no}
                  bathrooms_no={item.bathrooms_no}
                  area={item.area}
                />
              ))}
          </div>
          <ReactPaginate
            pageCount={Math.ceil(paginationCount)}
            previousLabel="<"
            nextLabel=">"
            onPageChange={handleOnPageChange}
            breakLabel="..."
            className="flex gap-2"
            disabledClassName="cursor-not-allowed"
            disabledLinkClassName="cursor-not-allowed"
            activeClassName="text-blue-500"
          />
        </div>
      )}
    </>
  );
}

export default Products;
