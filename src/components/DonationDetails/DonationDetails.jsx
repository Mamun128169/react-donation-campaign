import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonationDetails = ({ catObj }) => {
    const navigate = useNavigate();

    const {
    id,
    donation_cover,
    category_bg,
    title,
    category,
    text_color,
    price,
    } = catObj;

    const handleViewDetails = () => {
        navigate(`/category/${id}`);
    }
  return (
    <div
      className="flex gap-6 bg-base-100 shadow-xl"
      style={{ backgroundColor: category_bg }}
    >
      <figure>
        <img src={donation_cover} className="" alt="Shoes" />
      </figure>
      <div className="py-4 space-y-4">
        <span
          style={{ color: text_color, background: category_bg }}
          className="px-3 py-1 font-medium rounded"
        >
          {category}
        </span>
        <div className="space-y-3">
          <h2 className="text-xl font-bold">{title}</h2>
          <p
            style={{ color: text_color }}
            className="font-bold"
          >{`$${price}`}</p>
        </div>
        <div>
          <button
            onClick={handleViewDetails}
            style={{ backgroundColor: text_color }}
            className="btn btn-primary py-2 px-4 border-none"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

DonationDetails.propTypes = {
    catObj: PropTypes.object.isRequired,
}

export default DonationDetails;
