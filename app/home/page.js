import Image from "next/image";
import SideNav from '../components/sidenav'


export default function HomePage() {
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
           <ul>
            <li>
                <a>Comprar</a>
                <a>Vender</a>
                <a>Blog</a>
            </li>
           </ul>
        </div>
      </header>

      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12"></div>
    </div>

    </main>
  );
}
