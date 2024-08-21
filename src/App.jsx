import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
   fontFamily: 'Fredoka'
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <Outlet />
    </div>
    </ThemeProvider>
  );
}

export default App;