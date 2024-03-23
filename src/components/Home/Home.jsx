// import banner from "../../assets/Clothing.png"

import { useState } from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
    const [textValue, setTextValue] = useState("");

    const handleSearch = searchText => {
        setTextValue(searchText);
    }
    return (
        <div>
            {/* banner */}
            <Banner handleSearch={handleSearch}></Banner>

            {/* categories */}
            <CategoryList textValue={textValue}></CategoryList>
        </div>
    );
};

export default Home;