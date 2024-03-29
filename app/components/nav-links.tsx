'use client';

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

  const links = [
    { name: 'Home', href: '/home', icon: HomeIcon },
    {
      name: 'Usados',
      href: '/home/use',
      icon: DocumentDuplicateIcon,
    },
    { name: 'Novos', href: '/home/news', icon: UserGroupIcon },
  ];
  
  export default function NavLinks() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-aquagray hover:text-black md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-aquagray text-black': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  