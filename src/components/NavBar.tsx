import { Link, Outlet } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="flex h-full w-64">
      <div className="flex-col">
        <div className="flex items-center gap-2 px-6 py-4">
          <Link to="/all" className="flex items-center gap-2">
            <span className="text-lg font-semibold">CreatorVerse</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-2 px-4 py-6">
          <Link
            to="/add"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
          >
            Add Creator
          </Link>
          <Link
            to="/all"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
          >
            View All
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}


export default NavBar
