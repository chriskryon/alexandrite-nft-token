"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Languages from "@/components/Language";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Providers } from "./providers";
import { AuthProvider } from "./contexts/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./wagmiConfig";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {   

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>Alexandrite Token</title>
        <meta name="description" content="Token by PR Ativos" />        
        <meta property="og:title" content="Alexandrite Token" />
        <meta property="og:url" content="#" />
        <meta property="og:image" content="https://i.imgur.com/v8zokUg.png" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        {/* <NextIntlClientProvider messages={messages}> */}
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <Providers>
                <AuthProvider>
                  <Header />
                  {children}
                  <Footer />
                  <ScrollToTop />
                  <Languages />
                </AuthProvider>
              </Providers>
            </QueryClientProvider>
          </WagmiProvider>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}