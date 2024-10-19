import "@/styles/index.scss";

import { ReactQueryProvider } from "@/components/wallet/ReactQueryProvider";
import { WalletProvider } from "@/components/wallet/WalletProvider";
import { WrongNetworkAlert } from "@/components/wallet/WrongNetworkAlert";
import { Children } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        <title>Aptioon</title>
      </head>

      <body>
        <ReactQueryProvider>
          <div id="root">{children}</div>
          <WrongNetworkAlert />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
