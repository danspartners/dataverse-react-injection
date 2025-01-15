import { useState } from "react";
import Fab from "@mui/material/Fab";
import HelpIcon from "@mui/icons-material/Help";
import Drawer from "@mui/material/Drawer";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelpDrawer />
    </QueryClientProvider>
  );
}

const HelpDrawer = () => {
  const { isLoading, error, data } = useQuery("helpData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
  );

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Fab
        variant="extended"
        sx={{ position: "fixed", bottom: "1rem", left: "1rem", fontSize: 14, fontWeight: 700 }}
        onClick={toggleDrawer(true)}
        color="primary"
      >
        <HelpIcon sx={{ mr: 1, fontSize: 22 }} />
        Help
      </Fab>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{ zIndex: 10000 }}>
        <Box
          sx={{
            width: 500,
            maxWidth: "85vw",
            p: 4,
          }}
        >
          {isLoading ? (
            <CircularProgress />
          ) : error ? (
            <>Whoops, could not load data from API. Got {(error as Error).message}</>
          ) : (
            <>
              <h1>Loaded via api call using React Query</h1>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
              <strong>👀 {data.subscribers_count}</strong>{" "}
              <strong>✨ {data.stargazers_count}</strong>{" "}
              <strong>🍴 {data.forks_count}</strong>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default App;
