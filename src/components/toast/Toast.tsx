"use client";

import { useEffect } from "react";

import type { Toast } from "@src/hooks/useToasts";

import Icon from "./Icon";

export default function Toast(toast: Toast) {
	useEffect(() => {
		if (toast.lifespan == null) return;
		const timeout = setTimeout(() => {
			toast.destroy();
		}, toast.lifespan);

		return () => clearTimeout(timeout);
	}, [toast]);

	return (
		<div
			className={
				"flex alert h-min " +
				(toast.type === "info"
					? "alert-info"
					: toast.type === "success"
					? "alert-success"
					: toast.type === "warning"
					? "alert-warning"
					: toast.type === "error"
					? "alert-error"
					: "")
			}
		>
			<div className="flex gap-3 max-w-sm w-full">
				<Icon type={toast.type} />
				{toast.children(toast)}
			</div>
		</div>
	);
}
