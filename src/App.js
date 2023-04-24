import logo from "./logo.svg";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignOut from './pages/SignOut';
import Introduction from './pages/Introduction/Introduction';
import Overview from './pages/Overview/Overview';
import Setup from './pages/Setup/Setup'; 
import EC2 from "./pages/EC2/EC2";
import S3 from "./pages/S3/S3";
import Lambda from "./pages/Lambda/Lambda";

import "@aws-amplify/ui-react/styles.css";
import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
    return (
        <Router>
        <View className="App">
            <Card>
                <Button onClick={signOut}>Sign Out</Button>
                <Navbar />
                <Sidebar />
                
            </Card>
            </View>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignOut" element={<SignOut />} />
                <Route path="/Overview/Introduction" element={<Introduction />} />
                <Route path="/Overview/Setup" element={<Setup />} />
                <Route path="/Overview/EC2" element={<EC2 />} />
                <Route path="/Overview/S3" element={<S3 />} />
                <Route path="/Overview/Lambda" element={<Lambda />} />
                <Route path="/Overview" element={<Overview />} />
            </Routes>
        </Router>
    );
}

export default withAuthenticator(App);
