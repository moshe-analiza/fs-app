import { useStore } from "./store/zustand";

export default function ClickDec() {
    const decCounter= useStore((state)=> state.decCounter)

  return (
    <div>
        <button className='cursor-pointer p-3 rounded bg-[#d99595]' onClick={decCounter}>Dec</button>
    </div>
  )
}
