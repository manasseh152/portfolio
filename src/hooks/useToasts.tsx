"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Childern = (toast: Toast) => React.ReactNode;
export type Type = "info" | "success" | "warning" | "error" | "default";

export interface Toast {
	id: string;
	type: Type;
	lifespan: number | null;
	children: Childern;
	destroy: () => void;
}

interface AddToast {
	type: Type;
	lifespan: number;
	children: Childern;
}

interface ToastContext {
	toasts: Toast[];
	addToast: (toast: AddToast) => void;
	removeToast: (id: string) => void;
}

interface ToastProviderProps {
	children: React.ReactNode;
}

const ToastContext = createContext<ToastContext>({
	toasts: [],
	addToast: () => {},
	removeToast: () => {},
});

export function useToast() {
	return useContext(ToastContext);
}

export function ToastProvider({ children }: ToastProviderProps) {
	const [toasts, setToasts] = useState<Toast[]>([]);

	function addToast(toast: AddToast, id = Math.random().toString(36)) {
		setToasts(toasts => [
			...toasts,
			{
				id: id,
				type: toast.type,
				lifespan: toast.lifespan == 0 ? null : toast.lifespan * 1000,
				children: toast.children,
				destroy: () => removeToast(id),
			},
		]);
	}

	function removeToast(id: string) {
		setToasts(toasts => toasts.filter(toast => toast.id !== id));
	}

	return (
		<ToastContext.Provider value={{ toasts, addToast, removeToast }}>
			{children}
		</ToastContext.Provider>
	);
}
