import { useState } from "react";
import ProductList from "./ProductList";


function Products() {
    
     const [currentFilter] = useState<string>("");
    return (
        <div className="products">
            <div className="products-container">
                <div className="section-header">
                    <h1 className="products-title">- New Products -</h1>
                </div>
                <ProductList currentFilter={currentFilter} />
            </div>
        </div>
    );
}

export default Products;