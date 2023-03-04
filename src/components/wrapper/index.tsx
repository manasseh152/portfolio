"use client";

import { ViewportProvider } from "@src/hooks/useViewport";
import { ToastProvider } from "@src/hooks/useToasts";
import { ServiceWorkerProvider } from "@src/hooks/useServiceWorker";

interface WrapperProps {
	children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
	return (
		<ServiceWorkerProvider>
			<ViewportProvider>
				<ToastProvider>{children}</ToastProvider>
			</ViewportProvider>
		</ServiceWorkerProvider>
	);
}
