"use client";

import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import useMounted from "@/hooks/useMounted";

export default function ConnectWallet() {
  const mounted = useMounted();

  if (!mounted) {
    return <></>;
  }
  return <TonConnectButton />;
}
