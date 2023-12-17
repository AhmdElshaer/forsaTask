import { useEffect, useState } from "react";
import ProductItem from "../components/products/ProductItem";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Waiting from "../components/ui/Waiting";

function Products() {
  const [waiting, setWaiting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsData, setProductsData] = useState([]);

  const ProductsEP = `https://forsa-staging.bit68.com/api/v1/stores/real_estate/?page=${currentPage}`;
  const paginationCount = Number(productsData?.count) / 10;

  useEffect(() => {
    setWaiting(true);
    const getProductsData = () => {
      axios
        .get(ProductsEP)
        .then((resp) => {
          setProductsData(resp?.data);
          setWaiting(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProductsData();
  }, [currentPage, ProductsEP]);

  const handleOnPageChange = (event) => {
    console.log(event.selected);
    setCurrentPage(event.selected + 1);
  };

  return (
    <>
      {waiting ? (
        <Waiting />
      ) : (
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[53px]">
            {productsData?.results &&
              productsData?.results?.map((item) => (
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
