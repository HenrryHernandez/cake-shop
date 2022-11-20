import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div>
      <header>
        <Image
          alt="Next.js logo"
          src="/../public/images/logo.png"
          width={1200}
          height={400}
          className="logo"
        />
        <nav>
          <ul className="nav">
            <li className="nav__item">
              <Link href="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link href="stock">Ready to go</Link>
            </li>
            <li className="nav__item">
              <Link href="#">Order</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
