


export default function ContactForm() {
    return (
        <div className="">
            <h1 className="text-4xl font-normal mb-10">Complete the estimate form below for the fastest quote possible.</h1>
            <form className="[&_input]:border-none [&_input]:shadow-lg [&_input]:bg-[#F5F5F5] [&_input]:outline-none [&_textarea]:outline-none content-max [&_input]:p-3 [&_input]:rounded [&_label]:text-xl [&_label]:py-3 ">
                <div className="flex mb-5">
                    <div className="flex flex-col mr-5">
                        <label>First Name *</label>
                        <input type="text" name="first-name" required />
                    </div>
                    <div className="flex flex-col">
                        <label>Last Name *</label>
                        <input type="text" name="last-name" required />
                    </div>
                </div>
                <div className="flex flex-col mb-5">
                    <label>Phone *</label>
                    <input type='text' name="phone" required />
                </div>
                <div className="flex flex-col mb-5">
                    <label>Email *</label>
                    <input type='email' name="email" required />
                </div>
                <div>
                    <div className="flex flex-col mb-5">
                        <label>Address Line 1 *</label>
                        <input type="text" name="address-1" required />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label>Address Line 2</label>
                        <input type="text" name="address-2" />
                    </div>
                    <div className="flex flex-col md:flex-row mb-5">
                        <div className="flex flex-col md:mr-5">
                            <label>City *</label>
                            <input type="text" name="city" required />
                        </div>
                        <div className="flex flex-col md:mr-5">
                            <label>State *</label>
                            <input type="text" name="state" required />
                        </div>
                        <div className="flex flex-col">
                            <label>Zip *</label>
                            <input type="text" name="zip" required />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-5">
                    <label>Describe your painting project (Include # of rooms & bathrooms) *</label>
                    <textarea name="message" className="bg-[#F5F5F5] border-none rounded p-3"></textarea>
                </div>
                <div className="flex flex-col mb-5">
                    <label>How many sq. ft. is the property being painted?</label>
                    <input type="text" name="square-ft" />
                </div>
                <div className="flex flex-col mb-5">
                    <label>Is you project an exterior job, interior job or both?</label>
                    <input type="text" name="int-or-ext" />
                </div>
            </form>
        </div>
    )
}