import { useLoaderData, useParams } from 'react-router-dom'

const SingleCategory = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const intId = parseInt(id)

  const category = data.find((category) => category.id === intId)

  const { text_color, description, price, cover, title } = category

  return (
    <div className="container px-3 mx-auto my-12 min-h-screen">
  <div className="w-full h-full flex justify-center relative">
    <img className="w-full h-[50%]" src={cover} alt={title} />
    <div className='opacity-70 bg-gray-800 w-full absolute rounded px-2 py-12 bottom-0 z-0'>
    </div>
      <button
        style={{background: text_color}}
        className={`bottom-1 left-2 btn btn-primary border-none my-4 z-10 text-white text-lg font-semibold absolute`}>{`Donate $${price}`}
      </button>
  </div>
  <div className="mt-8 space-y-5">
    <h2 className="text-3xl font-semibold">{title}</h2>
    <p className="text-base text-gray-500 ">{description}</p>
  </div>
</div>

  )
}

export default SingleCategory
