import Hustler from "../../assets/img/Hustler.png";
import Hacker from "../../assets/img/Hacker.png";
import Hipster from "../../assets/img/Hipster.png";
import bgHipster from "../../assets/img/Ellipse 4.png";
import Left from "../../assets/icons/left.png";
import Right from "../../assets/icons/right.png";
import X from "../../assets/icons/X.png";

export default function ShowModal({ setShowModal }) {
  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 430;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 430;
  };

  return (
    <>
      <div className="flex justify-between ">
        <div className="flex justify-center items-center fixed inset-0 z-[99999] bg-[rgba(0,0,0,0.25)]">
          <div
            onClick={sliderLeft}
            className="animate-zoom-out absolute z-10 left-24 lg:left-[27%] opacity-40 hover:opacity-100 cursor-pointer hidden sm:block p-1"
          >
            <img src={Left} alt="scroll left" />
          </div>
          <div
            id="slider"
            className="animate-zoom-out relative overflow-x-auto scrollbar-thin snap-x sm:snap-none mx-1 flex gap-3 max-w-2xl bg-[#ffffff] border-2 shadow-lg rounded-2xl px-5 sm:px-24 pt-10 pb-8 sm:py-12"
          >
            {/* Hustler */}
            <div className="relative mx-auto max-w-max bg-[#DDEEF3] rounded-2xl p-5 sm:px-5 snap-center sm:snap-none">
              <div className="m-auto w-64">
                <img src={Hustler} className="relative z-10" />
              </div>
              <h1 className="text-4xl text-[#22A6B3] text-center font-black mb-2 ">
                Hustler
              </h1>
              <p className="text-xl text-center">
                Si Ahli Marketing dan Bisnis
              </p>
              <p className="w-[280px] sm:w-[370px] pt-5">
                Hustler dituntut dapat menjual ide ke investor, melakukan
                pitching produk ke konsumen, membentuk networking hingga fokus
                pada masalah dalam manajemen perusahaan.
              </p>
            </div>

            {/* Hacker */}
            <div className="relative mx-2 sm:mx-10 max-w-max bg-[#DDEEF3] rounded-2xl pl-5 sm:px-5 snap-center sm:snap-none">
              <div className="m-auto w-64">
                <img src={Hacker} className="relative z-10" />
              </div>
              <h1 className="text-4xl text-[#22A6B3] text-center font-black mb-2 ">
                Hacker
              </h1>
              <p className="text-xl text-center">Si Exsekutor</p>
              <p className="w-[300px] sm:w-[370px] pt-5">
                Seorang eksekutor ide melalui kemampuan teknikal yang berfokus
                pada seluruh tahap dalam membangun produk untuk merealisasikan
                ide dengan kualitas terbaik.
              </p>
            </div>

            {/* Hipster */}
            <div className="relative mx-auto max-w-max bg-[#DDEEF3] rounded-2xl pl-5 sm:px-5 snap-center sm:snap-none">
              <div className="mx-auto w-64">
                <img src={Hipster} className="relative z-10" />
                <img
                  src={bgHipster}
                  alt="bg-hipster"
                  className="-mt-48 ml-7 w-48"
                />
              </div>
              <h1 className="text-4xl text-[#22A6B3] text-center font-black mb-2 mt-10 ">
                Hipster
              </h1>
              <p className="text-xl text-center">Si Ahli Desainer</p>
              <p className="w-[300px] sm:w-[370px] pt-5">
                Seorang ahli di bidang desain pengalaman pengguna yang berfokus
                pada kesenangan pelanggan hingga perusahaan melalui visualisasi
                menarik serta interaksi yang baik.
              </p>
            </div>
          </div>
          <button
            className="animate-zoom-out absolute z-10 p-2 top-[9.5%] right-4 sm:top-[19.5%] sm:right-[8%] lg:right-[26%] lg:top-16"
            type="button"
            onClick={() => setShowModal(false)}
          >
            <img src={X} alt="X" />
          </button>
          <div
            onClick={sliderRight}
            className="animate-zoom-out absolute z-10 right-24 lg:right-[27%] opacity-40 hover:opacity-100 cursor-pointer hidden sm:block p-1"
          >
            <img src={Right} alt="scroll right" />
          </div>
        </div>
      </div>
    </>
  );
}
