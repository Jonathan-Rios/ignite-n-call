import "../lib/dayjs";

import { globalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/react-query";
import { DefaultSeo } from "next-seo";

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps }, // ? Tirando session de dentro de pageProps se existir.
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "pt_BR",
            url: "https://ignite-call.rocketseat.com.br",
            siteName: "Ignite Call",
          }}
        />

        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
