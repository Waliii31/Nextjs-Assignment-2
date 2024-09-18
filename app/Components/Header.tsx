export default function Header() {
    return (
        <nav className="Navbar w-full bg-slate-800 flex justify-around items-center text-white p-3">
            <a className="text-2xl text-gray-200" href="/">Logo</a>
            <ul className="flex justify-center items-center gap-10 text-sm">
                <li><a className="hover:text-orange-300" href="/">Home</a></li>
                <li><a className="text-orange-300" href="/">About</a></li>
                <li><a className="hover:text-orange-300" href="/">Contact</a></li>
            </ul>
        </nav>
    )
}
