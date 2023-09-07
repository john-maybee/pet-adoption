import { useState } from "react";
import {createRoot} from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdoptedPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, 
      cacheTime: Infinity,
    },
  },
}); // end of queryClient object that sets the defaultOptions for the queries to have a staleTime and cacheTime of Infinity so that the data is never stale and never cached and always fetched from the API when the component is mounted

const App = () => {
  const adoptedPetHook = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPetHook}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}; // end of App component function that returns a BrowserRouter component with a header with a Link to the home page and a Routes component with a Route to the Details component and a Route to the SearchParams component


const container = document.getElementById("root");
const root =  createRoot(container);
// root.render(React.createElement(App)); // this is the same as below but using JSX instead of React.createElement through Vite transpiling
root.render(<App />);
