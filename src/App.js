import { ColorModeContext, useMode } from "./theme";
import {Routes, Route} from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import MainSidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/Index.jsx"
import Invoices from "./scenes/invoices/index.jsx";
import Contacts from "./scenes/contact/index.jsx";
import Bar from "./scenes/bar/index.jsx";
import Form from "./scenes/form/index.jsx";
//import Line from "./scenes/line";
//import Pie from "./scenes/pie";
import Faq from "./scenes/faq/index.jsx";
//import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/index.jsx";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}> 
          <CssBaseline />
          <div className="app">
            <MainSidebar/>
            <main className="content">
              <TopBar />
              <Routes>
                <Route path = "/" element={<Dashboard/>}/>  
                <Route path="/team" element={<Team />} /> 
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/bar" element={<Bar />} />
                 {/*
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/geography" element={<Geography />} />
                */}
                </Routes> 
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default App;
