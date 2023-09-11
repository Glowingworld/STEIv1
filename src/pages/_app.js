import "@/styles/globals.css";
import userContext from "@/components/utils/context";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import { MantineProvider, Button } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={pageProps.session}>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </SessionProvider>
  );
}
