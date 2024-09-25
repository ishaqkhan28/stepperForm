import Link from 'next/link';

export default function Submission() {
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
          <div className="h-2 bg-green-500" style={{ width: "100%" }}>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Main Content */}
        <main className="flex flex-1 justify-center items-center px-4">
          <div className="text-center">
            {/* Placeholder for icon or image */}
            <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-6"></div>

            <h1 className="text-4xl font-semibold mb-4">
              Your Request for a Proposal Has <br /> Been Submitted!
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida <br /> parturient urna tristique congue. Curabitur volutpat nulla convallis eget <br />pellentesque. Luctus tellus eu ultrices egestas.
            </p>

            <Link href="/">
              <button className="px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition">
                Return Home
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
