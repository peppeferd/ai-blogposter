"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
 

export default function Index() {
  const { user, error, isLoading } = useUser();
 
  return (
    <section className="w-full flex flex-col">
      <title>AI Nextjs</title>
      {user ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="mt-4 text-4xl font-bold text-center text-indigo-600">
            Hi, {user?.nickname || user?.name || "dear user"}!
          </h1>
          <h2 className="text-xl max-w-lg text-center text-gray-600">
            Welcome to Bloggify, where you can easily create full blog posts
            with just one click!
          </h2>
          <Link  
            href="profile"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-all cursor-pointer"
          >
            Get started
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="mt-4 text-4xl font-bold text-center">Hello!</h1>
          <h2 className="text-xl max-w-lg text-center text-gray-600">
            Welcome to Bloggify, where you can easily create full blog posts
            with just one click!
          </h2>

          <a
            href="/api/auth/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-all cursor-pointer"
          >
            Login to get started
          </a>
        </div>
      )}
    </section>
  );
}
