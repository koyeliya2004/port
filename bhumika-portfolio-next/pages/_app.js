import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import AnimatedBackground from '../components/AnimatedBackground'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatedBackground />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
