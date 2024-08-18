import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css'

import SideBar from "./components/SideBar.tsx";
import CVEditor from "./components/CVEditor.tsx";

const queryClient = new QueryClient();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <SideBar />
            <CVEditor />
        </QueryClientProvider>
    )
}

export default App
