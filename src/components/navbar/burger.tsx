"use client";

import { createPortal } from "react-dom";
import { useState, useRef } from "react";
import { useClickOutside } from "@src/hooks/useClickOutside";

interface Props {
	children: React.ReactNode;
}

export function Burger({ children }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const ref = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useClickOutside({
		ref,
		callback: () => setIsOpen(false),
		ignore: [buttonRef],
		parrentOnly: true,
	});

	function toggle() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<button
				onClick={toggle}
				ref={buttonRef}
				className={isOpen ? "active" : undefined}
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
				<span>{isOpen ? "Close" : "Menu"}</span>
			</button>
			{isOpen &&
				createPortal(
					<div
						className="absolute inset-0 bottom-16 flex flex-col z-10 bg-base-100"
						ref={ref}
					>
						<button
							onClick={toggle}
							className="absolute top-1 right-1 p-4 btn-ghost btn-circle flex justify-center items-center"
						>
							<svg
								className="w-10 h-10"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={4}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						{children}
					</div>,
					document.body
				)}
		</>
	);
}
