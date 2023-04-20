export function SignIn() {
  return (
    <div className=" flex flex-col items-center justify-center  text-center w-3/5 h-fit bg-gray-700 py-36 rounded-lg">
      <h1 className="text-white text-5xl mt-5 font-mono">Acesse sua conta</h1>

      <button
        className="p-2 bg-orange-600 text-white mt-10 rounded-lg 
                         hover:bg-orange-500 hover:translate-y-[-10px] transition-all"
      >
        Entrar com Google
      </button>
    </div>
  );
}
