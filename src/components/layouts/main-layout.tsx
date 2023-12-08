import { Footer } from '@/components/common/footer'
import { Navbar } from '@/components/common/navbar'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
