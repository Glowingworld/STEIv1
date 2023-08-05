import "@/styles/globals.css";
import userContext from "@/components/context";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import { MantineProvider, Button } from "@mantine/core";
import { Provider } from "react-redux";
import store from "@/store";
export default function App({ Component, pageProps }) {
  const user = useState(null);

  return (
    <Provider store={store}>
      <userContext.Provider value={user}>
        <ProSidebarProvider>
          <Component {...pageProps} />
        </ProSidebarProvider>
      </userContext.Provider>
    </Provider>
  );
}
