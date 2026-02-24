import { useStore } from "./store/zustand";

export default function Momo() {
    const counter  = useStore((state) => state.counter);
    return (
        <div>
            {counter}
        </div>
    )
}
