"use client";

// Internal components
import { useToast } from "@/components/wallet/ui/use-toast";
// Internal constants
import { NETWORK } from "./constants";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import type { PropsWithChildren } from "react";

export function WalletProvider({ children }: PropsWithChildren) {
  const { toast } = useToast();

  return (
    <AptosWalletAdapterProvider
      autoConnect={true}
      dappConfig={{ network: NETWORK }}
      optInWallets={["Petra", "Nightly", "Pontem Wallet"]}
      onError={(error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error || "Unknown wallet error",
        });
      }}>
      {children}
    </AptosWalletAdapterProvider>
  );
}
