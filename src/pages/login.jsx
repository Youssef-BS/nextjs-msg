import React from "react";
import Image from "next/image";


function Login() {
  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="whatsapp" width={300} height={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
    </div>
  );
}

export default Login;
