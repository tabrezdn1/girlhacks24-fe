import PlayerBar from '../components/PlayerBar'
import Sidebar from '../components/Sidebar'
import { ThemeProvider } from '../context/themeContext'
import { AudioProvider } from '../context/appState'
import './disco-ball.css'
import { getSession } from '@auth0/nextjs-auth0'
export default async function RootLayout({

  children
}: {
  children: React.ReactNode
}) {
  const session = await getSession();
  const email = session?.user.email ? session?.user.email : null;

  return (
    <div className="text-black dark:text-zinc-300 transition-colors duration-500">
      <ThemeProvider>
        <AudioProvider>
          <Sidebar email={email} />
          {children}
          <PlayerBar />
        </AudioProvider>
      </ThemeProvider>
    </div>
  )
}
