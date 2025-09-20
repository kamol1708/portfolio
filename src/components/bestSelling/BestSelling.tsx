import { useState } from "react";
import FilterCategories from "../product/FilterCategories"
import useProducts from "../../hooks/useProducts";
import { Rating } from "@mui/material";

function BestSelling() {
    const [currentFilter, setCurrentFilter] = useState<string>("");
    const { productQuery } = useProducts(currentFilter);

  return (
    <div className="best-selling">
        <div className="best-selling-container">
            <div className="best-selling-right text-center">
               <div className="best-selling-title">
                    <h1 >- Best Selling -</h1>
                    <FilterCategories currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
               </div>
                <div className="best-selling-products">
                    {productQuery.data?.map((product) => (
                        <div key={product.id} className="best-selling-product-card">
                            <div className="best-selling-product-image">
                                <img src={product.imageUrl} alt={product.name} />
                            </div>
                            <div className="best-selling-product-info">
                                <h6>{product.name}</h6>
                                <p><span className="old-price">${product.oldPrice}</span>${product.price}</p>
                                <button>Buy Now</button>
                                <Rating className="rating" name="read-only" value={product.rating} size="small" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestSelling