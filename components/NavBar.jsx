import Link from "next/link";
function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            className="font-bold font-orbitron text-orange-900 hover:underline"
          >
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/reviews" className="text-orange-900 hover:underline">
            Reviews
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-orange-900 hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
