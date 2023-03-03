"use client";

import { ViewportProvider } from "@src/hooks/useViewport";
import { ToastProvider } from "@src/hooks/useToasts";

interface WrapperProps {
	children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
	return (
		<ViewportProvider>
			<ToastProvider>{children}</ToastProvider>
		</ViewportProvider>
	);
}
