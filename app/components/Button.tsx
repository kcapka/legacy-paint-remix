

export default function Button ({children}:any) {
    return (
        <button className="py-5 px-10 bg-button text-white md:text-xl hover:bg-[#888683] duration-300 shadow-inner">
            {children}
        </button>
    )
}