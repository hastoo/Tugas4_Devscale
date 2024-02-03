import { FaPlus } from "react-icons/fa6";

export const AddTask = () => {
  return (
    <div>
        <button className='btn btn-primary w-full text-white'>
            Tambah Tugas <FaPlus className="ml-2" size={15} />
        </button>
    </div>
  )
}
