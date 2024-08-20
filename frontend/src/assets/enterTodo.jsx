import { useEffect, useRef } from "react";

export default function useEnter(ref,cb) {
	const callBackRef = useRef(cb);
	useEffect(() => {
		callBackRef.current = cb;
	});

	useEffect(() => {
		function handle(event) {
			if (event.code === "Enter") {
				callBackRef.current(event);
			}
		}

		document.addEventListener("keypress", handle);
		return () => document.removeEventListener("keypress", handle);
	}, []);
}
