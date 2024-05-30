"use client";

import React from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const manifestUrl =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

export default function TonProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      {children}
    </TonConnectUIProvider>
  );
}
