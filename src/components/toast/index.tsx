"use client";
import { useToast } from "@src/hooks/useToasts";

import Toast from "./Toast";

export default function ToastContainer() {
	const { toasts } = useToast();

	return (
		<div className="toast toast-end items-center xl:toast-end">
			{toasts.map(toast => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
}
