import { Link, usePathname } from "@/navigation";
import React from "react";
import Flag from "react-flagkit";

export default function Languages() {
  const pathname = usePathname();
  return (
    <div>      
      <div className="fixed bottom-8 left-8 z-[99] flex flex-col">

        <Link href={pathname} locale='en' aria-label="EN Website" className="flex h-10 w-100 cursor-pointer items-center justify-center text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
          <span className="mt-[6px] ml-3 mr-3">
            <Flag country="US" />
          </span>
        </Link>

        <Link href={pathname} locale='es' aria-label="ES Website" className="flex h-10 w-100 cursor-pointer items-center justify-center text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
          <span className="mt-[6px] ml-3 mr-3">
            <Flag country="ES" />
          </span>
        </Link>

        <Link href={pathname} locale='pt' aria-label="PT Website" className="flex h-10 w-100 cursor-pointer items-center justify-center text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
          <span className="mt-[6px] ml-3 mr-3">
            <Flag country="BR" />
          </span>
        </Link>
        
      </div>
    </div>
  );
}
