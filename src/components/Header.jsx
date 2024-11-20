import Cart from "./Cart";

export default function Header() {
  return (
    <header className="flex justify-between items-center my-10">
      <div className="flex items-center gap-5">
        <img className="w-32" src="logo.png" alt="store avater" />
        <h1 className="text-4xl font-medium text-orange-300">bodyspinner shop</h1>
      </div>
      <Cart />
    </header>
  )
}
