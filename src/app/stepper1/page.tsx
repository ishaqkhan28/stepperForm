// pages/step1.tsx
import Link from 'next/link';

const Step1 = () => {

  const options = [
    '< $1,000/mo',
    '$1,000 - $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 +',
  ];
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
          <div className="h-2 bg-green-500" style={{ width: "33.3%" }}>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        {/* Form Container */}
        <div className="w-full max-w-lg p-8 mt-10">
          <h2 className="text-center text-2xl font-semibold mb-2">Step # 1</h2>
          <p className="text-center text-xl font-bold mb-8">
            What is your monthly digital marketing budget?
          </p>
          <div className="space-y-4">
            <Link href="/stepper2">
              {options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full py-3 px-4 border bg-white mb-4 rounded-lg transition-colors max-w-md`}
                >
                  {option}
                </button>
              ))}
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Step1;

