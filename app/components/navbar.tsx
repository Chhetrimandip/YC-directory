import React from 'react'
import Link from 'next/link';
import { signIn, signOut, auth  } from '@/auth';
import Image from 'next/image';
const Navbar = async() => {
    const session = await auth();
    return ( 
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans text-black'>
            <nav className='flex justify-between items-center'>
                <Link href='/'>
                <Image src='/logo.png' alt='logo' width={144} height={44} className='w-20 h-10'/>
                </Link>
                <div className='flex items-center gap-5'>
                    {session  && session?.user ? (
                        <>
                            <Link href="/startup/create">
                            <span>Create</span>
                            </Link>
                                <form action={async () => {
                                "use server"
                                await signOut()
                            }
                            } >
                             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                Signout
                            </button>
                            </form>   
                            <Link href={`/user/${session?.user?.id}`}>
                            <span className='text-blue-500 hover:underline'>{session?.user?.name}</span>
                            </Link>
                        </>
                        
                    ) : (
                        <form action={async () => {
                            "use server"
                            await signIn("github")
                        }
                        } >
                         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Signin with Github
                        </button>
                            
                            </form>
                    )}
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;