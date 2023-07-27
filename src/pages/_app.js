import "@/styles/globals.css";
import userContext from "@/components/context";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import { MantineProvider, Button } from "@mantine/core";
export default function App({ Component, pageProps }) {
  const user = useState(null);
  return (
    <userContext.Provider value={user}>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </userContext.Provider>
  );
}
