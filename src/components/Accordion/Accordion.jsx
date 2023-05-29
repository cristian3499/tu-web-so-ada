import { useState } from "react";

const Accordion = (props) => {

    const [item, setItem] = useState(props.datas);

    const handletoggleActive = () =>{
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive})
    }

    return (
        <>
            <div className={`bg-[#e9e9e9] p-5 border mb-5 border-[#c9c6c655] rounded-md w-[80%] group 
            ${item.active === 1 ? 'is-active bg-white duration-500': '' } `}>
                <div className="flex items-center">
                    <div className="text-black w-full duration-500 group-[.is-active]:font-bold">
                        {item.title}
                    </div>
                    <div className="text-xl rotate-90 duration-500 cursor-pointer group-[.is-active]:rotate-[270deg]"
                    onClick={handletoggleActive}>
                        `{'>'}`
                    </div>
                    <div className="overflow-hidden max-h-0 duration-500 group-[.is-active]:max-h-[100px]">
                        {item.content}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion; 