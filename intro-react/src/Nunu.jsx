import { useStore } from "./store/zustand";

export default function Nunu() {
    const momo  = useStore((state) => state.momo)

    return (
        <div>{momo}</div>
    )
}
