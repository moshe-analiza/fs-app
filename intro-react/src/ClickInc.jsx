import { useStore } from "./store/zustand";

export default function ClickInc() {
  const increaseCounter = useStore((state) => state.increaseCounter);

  return (
    <div>
      <button className='cursor-pointer p-3 rounded bg-[#acd995]' onClick={() => { increaseCounter() }}>Inc</button>
    </div>
  )
}
