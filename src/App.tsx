import { BottomSheetProvider } from './contexts/bottom-sheet'
import Homepage from './pages/homepage'

function App() {
  return (
    <BottomSheetProvider>
      <Homepage />
    </BottomSheetProvider>
  )
}

export default App
