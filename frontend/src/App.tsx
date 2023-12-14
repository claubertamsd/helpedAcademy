import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./contexts";
import AppRoutes from "./routes";
import { DrawerProvider } from "./contexts/DrawerContext";

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
