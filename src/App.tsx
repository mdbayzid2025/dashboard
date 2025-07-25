import { ConfigProvider } from "antd"
import MainLayout from "./components/layout/MainLayout"


function App() {
  

  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#6DBD44"
      },
      components: {
        Input: {
          borderRadius: 5,
        }
      }
    }}
    >
      <MainLayout />
    </ConfigProvider>
  )
}

export default App
