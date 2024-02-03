import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-lightgray">
       <header className="p-6 flex h-20 items-center bg-gray shadow-lg justify-between">
         <div className="flex items-center">
           <div className="shrink-0">
             <Image
              src="/logo-car-zone.svg"
              alt="Car Zone Logo"
              width={100}
              height={20}
              priority
              className="h-20 w-20 mb-5"
            />
          </div>
          <p className="text-xl font-medium text-black">Cars Zone</p>
        </div>

        <div>
          <Link
            href="/login"
            className="flex items-end gap-5 self-end rounded-lg bg-white px-6 py-2 text-xl font-medium text-black transition-colors hover:bg-lightgray"
          >
            <span>Log in</span>
          </Link>
        </div>
      </header>
    </main>
  );
}
