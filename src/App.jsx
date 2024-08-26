import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='font-inter flex flex-col min-h-screen'>
      <Header />
      <div className='flex-1 flex'>
        <Sidebar />
        <main className='px-6 py-4'>main here</main>
      </div>
      <Footer />
    </div>
  )
}

export default App
