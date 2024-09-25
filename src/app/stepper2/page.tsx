import Link from "next/link";

export default function Step2Form() {
  return (
    <div>
      <div className="relative">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-white border-b-2">
          <Link href={"stepper2"} className="text-gray-600 text-lg">&larr; Go Back</Link>
          <Link href={"/stepper1"} className="text-gray-600 text-lg">Exit &times;</Link>
        </header>
        {/* Progress Bar */}
        <div className="absolute mt-5 w-full bg-gray-200">
          <div className="h-2 bg-green-500" style={{ width: "66.6%" }}>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        {/* Form Container */}
        <div className="w-full max-w-lg p-8 mt-10">

          <h2 className="text-center text-2xl font-semibold mb-2">Step # 2</h2>
          <h3 className="text-center text-xl font-semibold mb-4">Details</h3>
          <p className="text-center text-gray-500 mb-8">
            Were thrilled at the opportunity to help you grow your business
            online. Please let us know the best way to reach you.
          </p>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500 required"
              />
            </div>

            <div className="mb-4 flex gap-5">
              <div>
                <label htmlFor="email" className="block font-bold">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-bold">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block font-bold">
                Anything else you like to share?
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-5 mt-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500"

              ></textarea>
            </div>
            <div className="w-full  flex justify-center items-center">
              <Link href={"/stepper3"}
                type="submit"
                className="px-4 py-3 bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                Send Request
              </Link>
            </div>
          </form>
          <div className="w-full flex justify-center items-center mt-6 gap-2">
            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 4.5V6.5H10.5V4.5C10.5 2.84375 9.15625 1.5 7.5 1.5C5.84375 1.5 4.5 2.84375 4.5 4.5ZM3.5 6.5V4.5C3.5 2.3125 5.28125 0.5 7.5 0.5C9.6875 0.5 11.5 2.3125 11.5 4.5V6.5H12C13.375 6.5 14.5 7.625 14.5 9V14C14.5 15.4062 13.375 16.5 12 16.5H3C1.59375 16.5 0.5 15.4062 0.5 14V9C0.5 7.625 1.59375 6.5 3 6.5H3.5ZM1.5 9V14C1.5 14.8438 2.15625 15.5 3 15.5H12C12.8125 15.5 13.5 14.8438 13.5 14V9C13.5 8.1875 12.8125 7.5 12 7.5H3C2.15625 7.5 1.5 8.1875 1.5 9Z" fill="#6B7280" />
            </svg>
            <p className="text-gray-500 text-xs">
              We promise never to share your information or spam your inbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


