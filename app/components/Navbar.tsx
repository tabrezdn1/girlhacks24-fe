import Link from "next/link";
import { MusicNoteAdd } from "iconoir-react";
export interface NavProps {
  email: string | null;
}
export default function Navbar({ email }: NavProps) {
  return (
    <header className="absolute top-0 left-0 inline-flex items-center gap-4 w-full justify-between p-3">
      <Link href="/" className="flex text-xl font-bold ml-8">
        Discofy <MusicNoteAdd />
      </Link>
      <div className="inline-flex items-center gap-4">
        <Link
          href="/tech"
          className="text-zinc-900 w-max px-10 py-3 hover:bg-zinc-900/5 active:translate-y-0.5 active:bg-zinc-900/10 outline-none rounded-md font-semibold transition-all duration-200"
        >
          Tech Stack
        </Link>
        <Link
          href="/team"
          className="text-zinc-900 w-max px-10 py-3 hover:bg-zinc-900/5 active:translate-y-0.5 active:bg-zinc-900/10 outline-none rounded-md font-semibold transition-all duration-200"
        >
          Meet the team
        </Link>
        {email ? (
          <Link
            className="w-max px-10 py-3 bg-zinc-900 hover:bg-zinc-900/90 active:translate-y-0.5 active:bg-black outline-none customShadowMedium text-white rounded-md font-semibold transition-all duration-200"
            href="/api/auth/logout"
          >
            Logout
          </Link>
        ) : (
          <Link
            className="w-max px-10 py-3 bg-zinc-900 hover:bg-zinc-900/90 active:translate-y-0.5 active:bg-black outline-none customShadowMedium text-white rounded-md font-semibold transition-all duration-200"
            href="/api/auth/login"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
