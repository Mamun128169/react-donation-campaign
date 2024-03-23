import PropTypes from 'prop-types';

const Banner = ({handleSearch}) => {
    const handleLocalSubmit = e => {
        e.preventDefault();
        const searchInput = e.target.search;
        const searchText = searchInput.value;

        handleSearch(searchText);
    }

    return (
        <div className="bg-slate-100">
            <div className="container mx-auto flex justify-center items-center flex-col text-center py-[140px]">
                <h2 className="text-3xl text-center font-bold">Grow By Helping People In Need</h2>
                <div className="my-10 flex justify-center items-center">
                    <form onSubmit={handleLocalSubmit}>
                        <input type="text"
                        className="rounded-bl-lg rounded-tl-lg border border-black-500 bg-white outline-none min-w-[270px] py-3 px-2 "
                        name="search"
                        placeholder="Search here..."/>
                     <button type="submit" className="btn btn-error text-white px-5 rounded-tl-none rounded-l-none">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}

export default Banner;

