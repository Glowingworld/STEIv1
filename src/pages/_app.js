import "@/styles/globals.css";
import userContext from "@/components/utils/context";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import { MantineProvider, Button } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <DefaultSeo
        title="Stei"
        description="Stei is for renting house in Tanzania, nyumba za kupagisha Tanzania"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://stei.co.tz",
          siteName: "SiteName",
        }}
      />

      <SessionProvider session={pageProps.session}>
        <ProSidebarProvider>
          <Component {...pageProps} />
        </ProSidebarProvider>
      </SessionProvider>
    </>
  );
}
