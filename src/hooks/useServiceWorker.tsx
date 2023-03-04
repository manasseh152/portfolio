import { createContext, useContext, useState, useEffect } from "react";

const ServiceWorkerContext = createContext<ServiceWorkerRegistration | null>(
	null
);

export function ServiceWorkerProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [registration, setRegistration] =
		useState<ServiceWorkerRegistration | null>(null);

	useEffect(() => {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
				.register("/service-worker.js")
				.then(registration => {
					setRegistration(registration);
				});
		}
	}, []);

	return (
		<ServiceWorkerContext.Provider value={registration}>
			{children}
		</ServiceWorkerContext.Provider>
	);
}

export const useServiceWorker = () => {
	return useContext(ServiceWorkerContext);
};
