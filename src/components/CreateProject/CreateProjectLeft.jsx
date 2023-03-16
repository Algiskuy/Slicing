import { useState } from "react";

const CreateProjectLeft = () => {
  // ~~~Tentang Rekrutmen~~~
  const [hustler, setHustler] = useState(0);
  const [hacker, setHacker] = useState(0);
  const [hipster, setHipster] = useState(0);
  const [showHipster, setShowHipster] = useState(0);
  const [showHacker, setShowHacker] = useState(0);
  const [showHustler, setShowHustler] = useState(0);
  const [showSuccees, setShowSuccees] = useState(false);
  const [showModal, setShowModal] = useState();
  const [detailRekutmen, setDetailRekutmen] = useState("");
  const [dataDetailRekutmen, setDataDetailRekutmen] = useState([]);

  // ~~~Hustler~~~
  const HustlerPlus = (e) => {
    e.preventDefault();
    setHustler(hustler + 1);
  };
  const HustlerMint = (e) => {
    e.preventDefault();
    if (hustler <= 0) {
      return false;
    } else {
      setHustler(hustler - 1);
    }
  };
  function Hustlers(e) {
    e.preventDefault();

    setShowHustler(true);
  }
  // ~~~Hacker~~~
  const HackerPlus = (e) => {
    e.preventDefault();
    setHacker(hacker + 1);
  };
  const HackerMint = (e) => {
    e.preventDefault();
    if (hacker > 0) {
      setHacker(hacker - 1);
    }
  };
  function Hackers(e) {
    e.preventDefault();

    setShowHacker(true);
  }
  // ~~~Hispter~~~
  const HipsterPlus = (e) => {
    e.preventDefault();
    setHipster(hipster + 1);
  };
  const HipsterMint = (e) => {
    e.preventDefault();
    if (hipster > 0) {
      setHipster(hipster - 1);
    }
  };
  function Hipsters(e) {
    e.preventDefault();

    setShowHipster(true);
  }

  function ShowModall(e) {
    e.preventDefault();
    setShowModal(true);
  }

  function saveDataLeft(e) {
    e.preventDefault();

    {
      setDataDetailRekutmen(detailRekutmen);
    }
    const kumpulanData = [hustler, hacker, hipster, dataDetailRekutmen];
    setHustler(0);
    setHacker(0);
    setHipster(0);
    setDetailRekutmen("");
    setData(kumpulanData);
    setShowSuccees(true);
    return;
  }

  return (
    <>
      <form onSubmit={saveDataLeft}>
        <div className="w-full md:w-[50%] mt-[45px]">
          {/* Role yang dibutuhkan dalam project */}
          <p className="text-2xl text-[#22A6B3] font-bold ">
            Tentang Rekrutmen
          </p>
          <br />
          <div>
            <p>
              Personil yang di butuhkan
              <span className="text-[#F63333]"> *</span>
            </p>
            <div className="pt-3">
              <button
                type="submit"
                onClick={HustlerMint}
                className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-l-[10px]"
              >
                -
              </button>
              <span
                type="submit"
                className="border border-y-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] py-2 px-4"
              >
                {hustler}
              </span>
              <button
                type="submit"
                onClick={HustlerPlus}
                className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-r-[10px]"
              >
                +
              </button>
              <span className="ml-2">
                Sebagai
                <a href="/" onClick={Hustlers} className="ml-2 text-[#22A6B3]">
                  Hustler
                </a>
              </span>
              {showHustler ? (
                <PopUpHustler setShowHustler={setShowHustler} />
              ) : null}
            </div>
            <div className="pt-2">
              <button
                type="submit"
                onClick={HackerMint}
                className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-l-[10px]"
              >
                -
              </button>
              <span
                type="submit"
                className="border border-y-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 py-2 px-4"
              >
                {hacker}
              </span>
              <button
                type="submit"
                onClick={HackerPlus}
                className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-r-[10px]"
              >
                +
              </button>
              <span className="ml-2">
                Sebagai
                <a href="/" onClick={Hackers} className="ml-2 text-[#22A6B3]">
                  Hacker
                </a>
              </span>
              {showHacker ? (
                <PopUpHacker setShowHacker={setShowHacker} />
              ) : null}
            </div>
            <div className="pt-2">
              <button
                type="submit"
                onClick={HipsterMint}
                className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-l-[10px]"
              >
                -
              </button>
              <span
                type="submit"
                className="border border-y-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 py-2 px-4"
              >
                {hipster}
              </span>
              <button
                type="submit"
                onClick={HipsterPlus}
                className="border border-[#22A6B3] text-[#22A6B3] bg-[#FCFBFF] p-2 rounded-r-[10px]"
              >
                +
              </button>
              <span className="ml-2">
                Sebagai
                <a href="/" onClick={Hipsters} className="ml-2 text-[#22A6B3] ">
                  Hipster
                </a>
              </span>
              {showHipster ? (
                <PopUpHipster setShowHipster={setShowHipster} />
              ) : null}
            </div>
            <br />
            <span>
              <a href="/" onClick={ShowModall} className="text-[#22A6B3]">
                Link
              </a>
            </span>
            {showModal ? <ShowModal setShowModal={setShowModal} /> : null}
            <p className=" mb-2">
              Detail Rekrutmen <span className="text-[#F63333]">*</span>
            </p>

            {/* Detail role */}
            <textarea
              type="text"
              value={detailRekutmen}
              onChange={(e) => setDetailRekutmen(e.target.value)}
              placeholder="Ceritakan detail rekrutmen dan persyaratan"
              className="w-full h-[126px] px-2 py-1 border border-[#22A6B3] rounded-lg outline-none bg-[#FCFBFF] scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-200"
              style={{ resize: "none" }}
            ></textarea>
          </div>

          {/* Unggah project */}
          <button
            type="submit"
            className="bg-[#22A6B3] px-3 py-1 rounded-lg text-[#FCFBFF] my-7 "
          >
            Unggah project
          </button>
          {showSuccees ? <Succees /> : null}
        </div>
      </form>
    </>
  );
};

export default CreateProjectLeft;
