export default function Hero() {
  return (
    <div className="space-y-5">
      <div className="w-[428px] space-y-1">
        <h1 className="leading-light text-5xl font-bold">
          Nossa Capsula do tempo &#8987; &#128158;
        </h1>
        <p className="text-lg leading-relaxed">
          Conjunto de recordações e momentos dedicado à todo nosso passado e
          presente, em homenagem a todo o futuro que nos espera!
        </p>
      </div>

      <a
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-700"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}
