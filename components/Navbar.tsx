'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const { status, data: session } = useSession()

  return (
    <nav className="flex justify-between items-center bg-blue-900 px-8 py-4">
      <Link href="/" className="text-white text-lg font-bold">
        I am Shin Ji Young
      </Link>
      <Link
        href="/addTopic"
        className="bg-yellow-400 hover:bg-yellow-200 text-white font-bold px-4 py-2 rounded-md"
      >
        Add Project
      </Link>
      <Link
        href="/about"
        className="bg-yellow-400 hover:bg-yellow-200 text-white font-bold px-4 py-2 rounded-md"
      >
        About Me
      </Link>
      <Link
        href="/advices"
        className="bg-yellow-400 hover:bg-yellow-200 text-white font-bold px-4 py-2 rounded-md"
      >
        Advice For Me
      </Link>
      <div className="flex gap-4">
        {status === 'authenticated' ? (
          <>
            <div className="flex gap-2 items-center">
              <Image
                src={session?.user?.image ?? '/default-avatar.png'}
                width={40}
                height={40}
                alt={session?.user?.name ?? 'user'}
                className="rounded-full"
              />
              <span className="text-white font-bold">
                {session?.user?.name}
              </span>
              <button
                onClick={() => signOut()}
                className="bg-red-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-bold"
              >
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="bg-blue-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-lg font-bold"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
