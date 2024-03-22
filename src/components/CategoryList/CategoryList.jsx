import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    // load category data
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("../../../public/donation.json");
            const data = res.data;
            setCategories(data);
        }
    
        fetchData();
    }, []);

    console.log(categories);

    return (
        <div className="container mx-auto mt-8 my-12 px-4">
            <h2>Category Lists: {categories.length} </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 md:px-2 ">
                {categories.map(category => <Category 
                key={category.id}
                categoryObj={category}
                ></Category>)}
            </div>
        </div>
    );
};

export default CategoryList;