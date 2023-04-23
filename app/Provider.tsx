'use client'; // MEMO: ChakraProviderをClient Componentとして扱うためのラッパー

import { ChakraProvider } from '@chakra-ui/react';

export default function Provider({ children }: { children: React.ReactNode }) {
	return <ChakraProvider>{children}</ChakraProvider>;
}
