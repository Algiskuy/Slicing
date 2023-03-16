import FtHustler from "../../assets/img/Hustler.png";

export default function PopUpHustler({ setShowHustler }) {
  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-[99999] bg-[rgba(0,0,0,0.25)]">
        <div className="animate-zoom-out relative mx-5 flex gap-3 max-w-xl sm:bg-[#ffffff] rounded-2xl sm:px-10 sm:py-8">
          <div className="relative mx-auto max-w-lg bg-[#DDEEF3] rounded-2xl p-5">
            <div className="text-end">
              <button
                className="relative p-2"
                type="button"
                onClick={() => setShowHustler(false)}
              >
                X
              </button>
            </div>
            <div>
              <img src={FtHustler} alt="Hustler" className="m-auto w-64" />
            </div>
            <h1 className="text-4xl text-[#22A6B3] text-center font-black mb-2 ">
              Hustler
            </h1>
            <p className="text-xl text-center">Si Ahli Marketing dan Bisnis</p>
            <p className="">
              Hustler dituntut dapat menjual ide ke investor, melakukan pitching
              produk ke konsumen, membentuk networking hingga fokus pada masalah
              dalam manajemen perusahaan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
