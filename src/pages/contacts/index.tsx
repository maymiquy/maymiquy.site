"use client";

import HomeLayout from "@/layouts/home-layout";
import { useRouter } from "next/navigation";

const ContactPage = () => {
 const router = useRouter();
 return (
  <HomeLayout>
   <div className="max-w-md w-full space-y-8 text-center mx-auto px-12 sm:px-4">
    <div>
     <h1 className="font-extrabold text-white tracking-tight">
      <span className="block text-2xl sm:text-4xl">Opps,</span>
      <span className="inline text-xl sm:text-3xl">Under Maintenance</span>
     </h1>
     <p className="mt-3 text-xs sm:text-sm font-sans text-gray-300 sm:mt-5">
      Currently working on adding improvements to this page.
     </p>
     <p className="text-xs sm:text-sm font-sans text-gray-300">
      Please check back soon!
     </p>
    </div>
    <div className="mt-8 flex justify-center">
     <button
      onClick={() => router.back()}
      className="w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs sm:text-sm font-semibold rounded-md text-white bg-zinc-600 hover:bg-zinc-700"
     >
      Return Back
     </button>
    </div>
    <div className="flex items-center justify-center my-8">
     <div className="flex-grow border-t border-gray-700"></div>
     <span className="flex-shrink mx-4 text-gray-500">or</span>
     <div className="flex-grow border-t border-gray-700"></div>
    </div>
    <div>
     <p className="text-xs sm:text-sm font-sans text-gray-300 mb-4">
      If you have any business inquiries, please don't hesitate to contact me
      directly:
     </p>
     <a
      href="mailto:miqhambali@gmail.com"
      className="w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs sm:text-sm font-semibold rounded-md text-zinc-900 bg-white hover:bg-zinc-200"
     >
      Contact me
     </a>
    </div>
    <div className="mt-8">
     <p className="text-xs sm:text-sm text-gray-400">
      Expected completion: <time dateTime="2025-02-29">Feb 29, 2025</time>
     </p>
    </div>
   </div>
  </HomeLayout>
 );
};

export default ContactPage;
