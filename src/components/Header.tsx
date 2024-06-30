import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";


export const Header: React.FC = () => {
  return (
    <nav className="flex items-center bg-black border-b-[1px] border-[#1B1C1B] justify-center py-[14px] px-10 w-screen">
      <div
        id="nav-content"
        className="flex justify-between items-center max-w-[1350px] w-full"
      >
        <div
          id="nav-links"
          className="flex w-full justify-between items-center gap-x-[46px]"
        >
          <Link href="/" className="relative z-10">
            <Image src="/Logo.svg" alt="X-ACK logo" width={96} height={44} />
          </Link>{" "}
          <div className="flex items-center gap-x-[54px] text-[19px] pl-5 leading-[25px]">
            <Link
              href="/"
              className="lg:flex hidden text-center text-white text-base font-normal"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="lg:flex hidden text-center text-white text-base font-normal"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="lg:flex hidden text-center text-white text-base font-normal"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="lg:flex hidden text-center text-white text-base font-normal"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="lg:flex hidden text-center text-white text-base font-normal"
            >
              Business
            </Link>
            <Link
              href="/"
              className="lg:flex hidden text-center text-white text-base font-normal"
            >
              Universities
            </Link>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <Link href="/" id="launch-app-btn">
                <div className="text-center text-white text-[14px] font-inter">
                  Log in
                </div>
            </Link>
            <Link href="/" id="launch-app-btn">
              <div className="px-[14px] py-[5px] rounded-full shadow border bg-[#191919] border-white border-opacity-60 flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-center text-white text-[14px] font-inter">
                  Sign up
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// export default Header;
