"use client";

import { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";

const ToUp = () => {
  const [clas, setClas] = useState("");
  useEffect(() => {
    window.onscroll = function () {
      this.scrollY >= 500 ? setClas("show") : setClas("");
    };
  }, []);
  const scrlTop = () => {
    if (typeof window != undefined) {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div
      className={
        "scrollTop px-6 text-dark font-bold bg-lightAccent dark:bg-darkAccent hover:bg-darkAccent dark:hover:bg-lightAccent  " +
        clas
      }
      onClick={scrlTop}
    >
      <BiUpArrow className="text-[20px] text-black" />
    </div>
  );
};

/* let scrlTop = document.getElementById("scrlTop")
window.onscroll = function () {this.scrollY>=300?scrlTop.classList.add('show'):scrlTop.classList.remove('show')}
scrlTop.onclick=function(){window.scrollTo({top:0})} */

export default ToUp;
