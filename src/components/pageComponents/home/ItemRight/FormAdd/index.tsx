import { useRef, useState } from "react"
import { BsThreeDots } from "react-icons/bs"
const imageTheme = [
    {
        url: "https://images.unsplash.com/photo-1679041006302-cf5e318da08c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        url: "https://images.unsplash.com/photo-1679214523859-c78a0bea016d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        url: "https://images.unsplash.com/photo-1679245883026-adea0f43e6f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        url: "https://images.unsplash.com/photo-1678938940744-0fc1c7953b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400"
    }
]
const colorTheme = [
    {
        url: ""
    },
    {
        url: ""
    },
    {
        url: ""
    },
    {
        url: ""
    },
    {
        url: ""
    },
]
export interface FormAddProps { }
export default function FormAdd(props: FormAddProps) {
    const [inputValue, setInputValue] = useState("")
    const buttonRef = useRef(null)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    return (
        <div>
            <form >
                <div className="px-4 py-2">
                    <div className="border-b pb-2 mb-2">
                        <p className="text-center text-sm text-gray-500 ">Tạo bảng</p>
                        {/* <AiOutlineClose className=""/> */}
                    </div>
                    <div className="flex mb-3 justify-center bg-[url('https://images.unsplash.com/photo-1679041006302-cf5e318da08c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400')] py-2">
                        <img className="" src="https://a.trellocdn.com/prgb/assets/14cda5dc635d1f13bc48.svg" alt="" />
                    </div>
                    <p className="text-xs text-gray-500 font-bold">Phông nền</p>
                    <div className="flex items-center mb-1">
                        {imageTheme.map((item) => (
                            <button className="p-1  ">
                                <img className="h-10 w-16 rounded-lg cursor-pointer hover:bg-gray-400" src={item.url} alt="" />
                            </button>
                        ))}
                    </div>
                    <div className="flex mb-3">
                        {colorTheme.map((item) => (
                            <button><img className="w-10 h-8 rounded-lg cursor-pointer hover:bg-gray-200" src={item.url} alt="" /></button>
                        ))}
                        <div className="w-10 h-8 rounded-lg bg-gray-100 flex items-center cursor-pointer hover:bg-gray-300"><BsThreeDots className="w-full" /></div>
                    </div>
                    <div className="flex">
                        <p className="text-xs text-gray-500 font-bold">Tiêu đề bảng </p>
                        <p className="text-red-600">*</p>
                    </div>
                    <input onChange={handleInputChange} value={inputValue} className="border-2 border-gray-100 focus:border-blue-500 w-full" type="text" />
                    <p className="text-sm mb-4">👋 tiêu đề là bắt buộc</p>
                    <p className="text-xs font-bold text-gray-500 mb-2"> Quyền xem</p>
                    <select className="border-gray-100 border-2 w-full mb-3 text-sm">
                        <option>Riêng tư</option>
                        <option>Không gian làm việc</option>
                        <option>Công Khai</option>
                    </select>
                    <button
                        ref={buttonRef}
                        disabled={!inputValue.trim()}
                        className={`w-full mb-2 bg-colorrightbtn text-gray-500 text-sm p-1 rounded-sm ${inputValue.trim() ? 'bg-navbar text-white' : ''}`}>
                            Tạo mới
                    </button>
                    <button className="w-full bg-colorrightbtn text-gray-500 text-sm p-1 rounded-sm">Bắt đầu với mẫu</button>
                </div>
            </form>
        </div>
    )
}