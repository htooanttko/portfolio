import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex items-center justify-center bg-blue-500 text-white text-3xl">
      Tailwind is working! 🎉
    </div>
  )
}

export default App
