"use client";

import type { Toast } from "@src/hooks/useToasts";

import Icon from "./Icon";

export default function Toast(toast: Toast) {
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
			<div className="flex justify-between gap-3">
				<Icon type={toast.type} />
				{toast.children(toast)}
			</div>
		</div>
	);
}
