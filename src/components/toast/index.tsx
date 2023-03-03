"use client";
import { useToast } from "@src/hooks/useToasts";

import Toast from "./Toast";

export default function ToastContainer() {
	const { toasts } = useToast();

	return (
		<div className="toast toast-center w-full sm:max-w-sm sm:toast-end">
			{toasts.map(toast => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
}
