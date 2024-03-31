import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Category/Category";
import PropTypes from 'prop-types';

const CategoryList = ({textValue}) => {
    const [categories, setCategories] = useState([]);
    const [displayCategories, setDisplayCategories] = useState([]);

    // load category data
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/donation.json");
            const data = res.data;
            setCategories(data);
            setDisplayCategories(data);
        }
    
        fetchData();
    }, []);

    // updating the Categories card by search functionality
    useEffect(() => {
        if (textValue.trim() === "") {
            setDisplayCategories(categories);
        } else {
            const filteredCategories = categories.filter(cat => cat.category.toLowerCase() === textValue);

            if (filteredCategories.length === 0) {
                alert(`No results found on search ${textValue}`);
                return;
            }

            setDisplayCategories(filteredCategories);
        }
    }, [textValue, categories])

    return (
        <div className="container mx-auto mt-8 my-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 md:px-2 ">
                {displayCategories.map(category => <Category 
                key={category.id}
                categoryObj={category}
                ></Category>)}
            </div>
        </div>
    );
};

CategoryList.propTypes = {
    textValue: PropTypes.string,
} 

export default CategoryList;