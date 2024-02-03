import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
  
export default function LoginPage() {

  return (
    <main className="flex items-center justify-center md:h-screen">    
      <div className="px-8 py-8 rounded-lg bg-gray w-100">
        <form>
        <div className="w-full flex justify-between items-center gap-2">
          <div>
            <label
              className="mb-3 mt-5 block text-sm font-medium text-black"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray py-[9px] pl-10 text-sm outline-2 placeholder:text-gray focus:outline-none focus:border-aquagray focus:ring-1 focus:ring-aquagray"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
               <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray" />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-sm font-medium text-black"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray py-[9px] pl-10 text-sm outline-2 placeholder:text-gray focus:outline-none focus:border-aquagray focus:ring-1 focus:ring-aquagray"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
               <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray" />
            </div>
          </div>
         </div>
         <LoginButton />
        </form>
      </div>
    </main>
  );
}

function LoginButton() {
    return (
        <button class="flex justify-center items-center bg-aquagray transition-colors hover:bg-lightgray text-black font-medium p-2 mt-3 rounded  w-full">Login
            <ArrowRightIcon className="h-5 w-5 text-gray-50" />
        </button>
    );
  }
