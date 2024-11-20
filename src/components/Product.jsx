export default function Product({ image, title, price, description }) {
  return (
    <article className="flex flex-col text-red-950 bg-orange-200 h-full">
      <img src={image} alt={title} />
      <div className="p-5 h-full flex flex-col">
        <h2 className="text-xl font-extrabold">{title}</h2>
        <p className="text-xl font-extrabold mb-2">${price}</p>
        <p>{description}</p>
        <div className="flex items-end justify-end h-full relative mt-5">
          <button className="p-3 rounded bg-red-950 h-fit text-orange-200">Add to cart</button>
        </div>
      </div>
    </article>
  )
}
