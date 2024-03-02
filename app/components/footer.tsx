

export default function Footer() {
    return (
        <div className="text-[#a8a6a2] bg-dark flex items-center flex-col default-px py-20">
            <h1 className="text-2xl mb-5">Legacy Painting Company, LLC</h1>
                <ul className="flex text-xl mb-5 [&_li]:cursor-pointer">
                    <li className="mr-5">About</li>
                    <li className="mr-5">Contact</li>
                    <li>Reviews</li>
                </ul>
                <p className="text-white mb-2">Stephen@LegacyPaintSD.com</p>
                <p className="text-white">(602)739-6604</p>
        </div>
    )
}