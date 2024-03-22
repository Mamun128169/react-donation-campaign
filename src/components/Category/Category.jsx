import PropTypes from 'prop-types'

const Category = ({ categoryObj }) => {

  const { card_bg, cover, category, category_bg, title, text_color } = categoryObj;

  console.log(card_bg, category_bg, text_color);

  return (
    <div className="card card-compact bg-base-100 shadow-xl" style={{backgroundColor: category_bg}}>
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
