import "@/styles/globals.css";
import userContext from "@/components/utils/context";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import { MantineProvider, Button } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <DefaultSeo
        title="Stei Homes, Renting rooms, kupangisha nyumba "
        description="Stei is for renting house in Tanzania, nyumba za kupagisha Tanzania"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://stei.co.tz",
          siteName: "SiteName",
        }}
      />
      <Head
        description="Nyumba ya kupaga, renting rooms "
        title="Stei renting Homes"
      >
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <SessionProvider session={pageProps.session}>
        <ProSidebarProvider>
          <Component {...pageProps} />
        </ProSidebarProvider>
      </SessionProvider>
    </>
  );
}
