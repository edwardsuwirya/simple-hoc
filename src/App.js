import ProductList from "./features/product/ProductList";
import data from './product.json';
import WithSearch from "./components/WithSearch";

function App() {
    const ProductListWithSearch = WithSearch(ProductList, data)
    return (
        <>
            <ProductListWithSearch/>
        </>
    );
}

export default App;
