import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useFetchLocal from '@/hooks/useFetchLocal';
import '@/css/App.scss';

const theme = createTheme({
   fontFamily: 'Fredoka',
   palette: {
    primary: {
      main: '#ffcc00',
      contrastText: '#fff',
    }
  },
});

const KidInfoContext = createContext(null);
function App() {
  const kidInfo =  useFetchLocal('kidInfo', 'kidGradeAndLevel');
  return (
    <KidInfoContext.Provider value={kidInfo}>
    <ThemeProvider theme={theme}>
    <div className="App">
     <Outlet />
    </div>
    </ThemeProvider>
    </KidInfoContext.Provider>
  );
}
export { KidInfoContext };
export default App;