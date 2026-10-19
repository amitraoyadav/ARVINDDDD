/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import NewPage from './NewPage';

export default function App() {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const normalizedPath = pathname.replace(/\/+$/, '') || '/';

  if (normalizedPath === '/new-page') {
    return <NewPage />;
  }

  return (
    <main className="min-h-screen w-full bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center px-6 py-12 text-center selection:bg-zinc-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase leading-[1.05]">
          ANAND HAS CHEATED THE DEVELOPER MADE WEBSITE AT 1800 AND GIVEN 500 AND THEN NO RESPONSE 
          <span className="block mt-2 text-zinc-300">
            On It Soon
          </span>
        </h1>

        <p className="mt-8 text-lg sm:text-2xl text-zinc-400 font-normal max-w-2xl leading-relaxed">
          HE IS NOW NOT RESPONDING FOR JUST 1300 WE HAVE REMOVED HIS SITE HE WASTED OUR TIME MONEY. Everything will be back online shortly
        </p>
      </div>
    </main>
  );
}
