import Link from 'next/link';
import Image from 'next/image';
import { signIn,auth, signOut } from '@/auth';  // Make sure to import these

const Navbar = async () => {
    const session = await auth();

    return ( 
        <header className="flex justify-between items-center p-4 bg-gray-100 text-black">
            <nav className="flex items-center space-x-4">
                <Link href="/">
                    <Image src="/Logo.png" alt="Logo" width={144} height={30} />
                </Link>
                
                <div className='flex items-center space-x-4'>
                    {session && session?.user ? (
                        <>
                            <Link href={'/dashboard/${session?.id}'}>
                            <span>
                              Dashboard  {session?.user?.name}
                    
                            </span>
                            </Link>
                            <Link href="/profile">Profile</Link>
                            <form action={async () => {
                                "use server"
                                await signOut()
                            }
                            } >
                           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                Signout
                            </button>
                                
                                </form>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server"
                            await signIn("github")
                        }}>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                Sign In with GitHub
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;
