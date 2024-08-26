import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

const App = () => {
  return (
    <div className='font-inter flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>main here</main>
      <Footer />
    </div>
  )
}

export default App
