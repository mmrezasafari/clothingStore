export default function Shop({ children }) {
  return (
    <section>
      <h1 className="text-3xl font-medium text-orange-300">Body spinner clothings for every one</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {children}
      </ul>
    </section>
  )
}
