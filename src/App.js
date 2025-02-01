import { ColorModeContext, useMode } from "./theme";
import {Routes, Route} from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import MainSidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
//import Team from "./scenes/team";
//import Invoices from "./scenes/invoices";
//import Contacts from "./scenes/conntacts";
//import Bar from "./scenes/bar";
//import Form from "./scenes/form";
//import Line from "./scenes/line";
//import Pie from "./scenes/pie";
//import Faq from "./scenes/faq";
//import Geography from "./scenes/geography";
//import Calendar from "./scenes/calendar";
//import Sidebar from "./scenes/global/Sidebar";

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
                {/* 
                <Route path="/team" element={<Team />} /> 
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/form" element={<Form />} />
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
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
