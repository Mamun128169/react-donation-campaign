import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const Category = ({ categoryObj }) => {
  const { id, cover, category, category_bg, title, text_color } = categoryObj;

  // Navigates to selected category pages
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/category/${id}`);
  }

  return (
    <div
    onClick={handleCardClick} 
    className="card card-compact shadow-xl cursor-pointer" 
    style={{backgroundColor: category_bg}}>
      <figure>
        <img
          src= {cover}
          className='w-full h-[220px]'
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title w-[40%] font-bold rounded px-2" style={{backgroundColor: category_bg, color: text_color}} >{category}</h2>
        <h2 className='text-lg font-bold' style={{color: text_color}}>{title}</h2>
      </div>
    </div>
  )
}

Category.propTypes = {
  categoryObj: PropTypes.object,
}

export default Category
