import React from 'react'

function SectionTop({first,snd}) {
  return (
    <div className="first w-full lg:h-[10rem] flex items-center justify-between p-10">
  <h1 className="text-5xl font-bold">{first}</h1>

  <h1 className="max-w-[40ch]  leading-tight">
    {(() => {
      const words = snd.split(" ");
      const firstLine = words.slice(0, 6).join(" ");
      const secondLine = words.slice(6).join(" ");

      return (
        <>
          <span className="block">{firstLine}</span>
          {secondLine && <span className="block">{secondLine}</span>}
        </>
      );
    })()}
  </h1>
</div>


  )
}

export default SectionTop
