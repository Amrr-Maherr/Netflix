import { motion } from "framer-motion";
import Logo from "../../../public/Assets/netflix-3.svg";
import Footer from "../Components/Footer";

export default function Actors() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex justify-center items-center">
            <div className="max-w-xl lg:max-w-lg text-center">
              <img src={Logo.src} alt="Netflix Logo" />
              <p className="mt-4 text-lg text-gray-300">
                Unveil the stars. Seek your cherished stage presence.
              </p>
              <form className="mt-6 flex  gap-x-4">
                <input
                  id="text"
                  name="text"
                  type="text"
                  required
                  className="w-100% min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  placeholder="Whisper their name..."
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Illuminate Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
