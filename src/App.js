import React from 'react'
import { motion } from "motion/react"

const App = () => {
  return (
    <motion.h1 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-3xl font-bold underline">
      Hello world!
    </motion.h1>
  )
}

export default App