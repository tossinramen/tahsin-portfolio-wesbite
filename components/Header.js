import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <div className="text-4xl font-bold tracking-tight">
              <span className="text-accent">Tahsin</span>{" "}
              <span className="text-gray-300">Rahman</span>
              <span className="text-red-500">.</span>

            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
