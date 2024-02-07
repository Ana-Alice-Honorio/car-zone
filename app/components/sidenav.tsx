import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from './nav-links';
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col py-4 md:px-2">
      <Link
        className="mb-2 w-full flex h-20 justify-start bg-aquagray p-4 md:h-40"
        href="/"
      >
        <div className="flex items-center">
          <Image
              src="/logo-car-zone.svg"
              alt="Car Zone Logo"
              width={100}
              height={20}
              priority
              className="h-20 w-20 mb-5"
            />
            <p className="text-xl font-medium text-black">Cars Zone</p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-aquagray hover:text-black md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
