// import banner from "../../assets/Clothing.png"

import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>

            {/* categories */}
            <CategoryList></CategoryList>
        </div>
    );
};

export default Home;