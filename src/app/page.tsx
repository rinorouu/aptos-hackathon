"use client";

import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroHomeOne from "@/components/hero/HeroHomeThree";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";

// export const metadata = {

function index() {
  const { connected } = useWallet();
  return (
    <Wrapper>
      <AptosWalletAdapterProvider>
        <HeaderOne />
        {connected}
      </AptosWalletAdapterProvider>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeOne />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
