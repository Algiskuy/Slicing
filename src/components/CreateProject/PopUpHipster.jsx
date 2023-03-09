import FtBgHipster from "../../assets/img/Ellipse 4.png";
import FtHipster from "../../assets/img/Hipster.png";

export default function PopUpHipster({ setShowHipster }) {
  return (
    <>
      <div className="animate-zoom-out flex justify-center items-center fixed inset-0 z-[99999] bg-[rgba(0,0,0,0.25)]">
        <div className="relative mx-5 flex gap-3 max-w-xl sm:bg-[#ffffff] rounded-2xl sm:px-10 sm:py-8">
          <div className="relative mx-auto max-w-lg bg-[#DDEEF3] rounded-2xl p-5">
            <div className="text-end">
              <button
                className="relative p-2 mb-12 sm:mb-4"
                type="button"
                onClick={() => setShowHipster(false)}
              >
                X
              </button>
            </div>
            <div>
              <img
                src={FtBgHipster}
                alt="BgHipster"
                className="m-auto w-48 -mb-60 sm:w-[50%] sm:-mb-[60.6%]"
              />
              <img src={FtHipster} alt="Hipster" className="m-auto w-80 " />
            </div>
            <p className="text-4xl text-[#22A6B3] text-center font-black mb-2">
              Hipster
            </p>
            <p className="text-xl text-center mb-4">Si Desainer</p>
            <p className="">
              Seorang ahli di bidang desain pengalaman pengguna yang berfokus
              pada kesenangan pelanggan hingga perusahaan melalui visualisasi
              menarik serta interaksi yang baik.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
