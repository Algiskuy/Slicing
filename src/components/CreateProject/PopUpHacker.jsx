import FtHacker from "../../assets/img/Hacker.png";

export default function PopUpHacker({ setShowHacker }) {
  return (
    <>
      <div className="animate-zoom-out flex justify-center items-center fixed inset-0 z-[99999] bg-[rgba(0,0,0,0.25)]">
        <div className="relative mx-5 flex gap-3 max-w-xl sm:bg-[#ffffff] rounded-2xl sm:px-10 sm:py-8">
          <div className="relative mx-auto max-w-lg bg-[#DDEEF3] rounded-2xl p-5">
            <div className="text-end">
              <button
                className="relative p-2"
                type="button"
                onClick={() => setShowHacker(false)}
              >
                X
              </button>
            </div>
            <div>
              <img src={FtHacker} alt="Hacker" className="m-auto w-64" />
            </div>
            <h1 className="text-4xl text-[#22A6B3] text-center font-black mb-2 ">
              Hacker
            </h1>
            <p className="text-xl text-center">Si Exsekutor</p>
            <p className="">
              Seorang eksekutor ide melalui kemampuan teknikal yang berfokus
              pada seluruh tahap dalam membangun produk untuk merealisasikan ide
              dengan kualitas terbaik.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
