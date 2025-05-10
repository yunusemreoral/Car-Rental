import {AnimatePresence, motion} from "motion/react";
import { ICar } from "../../types"
import FormatData from "../../utils/formatData";
import Images from "./images";
import { FC } from "react";


type Props = {
    car:ICar;
    isOpen: boolean;
    close: () => void;
};

const Modal:FC<Props> = ({car,close,isOpen}) => {
  return (
    <AnimatePresence>
    {isOpen && (
    <div className="fixed inset-0 bg-black/50 backdrop:blur-[2px] grid place-items-center z-20">Modal
<motion.div 
initial={{
    scale: 0.1,
}}
animate={{
    scale: 1,
}}
exit={{
    scale: 0,
}}
className="bg-white p-6 relative max-w-xl max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto w-[95%] sm:min-w-[576px] min-h-[70vh]">
<button name="kapat" onClick={close} className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full">
    <img src="/close.svg" alt="kapat" />
    </button>    

    {/* fotograflar */}
<Images car={car}/>

    {/* bilgiler */}
    <div className="flex flex-col gap-5">{FormatData(car).map(([key, value]) => (
        <p className="flex justify-between gap-20">
            <span className="capitalize">{key} </span>
            <span className=" font-semibold capitalize">{value === "Y" || value === "T" ? "Yes" : value === "N" ? "No" : value || "-"} </span>
        </p>
    ))} 
    </div>
    </motion.div>
</div>  
)}
</AnimatePresence>
)
}

export default Modal
