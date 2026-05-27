



export default function GlassCard( {imageSrc, alt} ) {
  return (
    <div className="flex items-center justify-center">
        <div className="[@media(min-width:1024px)]:hover:-translate-y-2.5 transition-transform duration-300">
            <div className="relative w-80 h-80 rounded-[48px] overflow-hidden
                bg-white/10
                border:[1px] border-black/10
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(0,0,0,0.35)]
            ">

                {/* lumière haut */}
                <div className="absolute inset-x-6 top-0 h-0.5
                bg-white/60 blur-sm"
                />

                {/* lumière bas */}
                <div className="absolute inset-x-6 bottom-0 h-0.5
                bg-white/40 blur-sm"
                />

                {/* reflet diagonal principal */}
                <div className="absolute -left-20 top-[-23%] w-24 h-[140%]
                rotate-35
                bg-white/40"
                />

                <div className="absolute left-12 top-[-20%] w-4 h-[140%]
                rotate-215
                bg-linear-to-t from-transparent via-white/35 to-white/35"
                />

                <div className="absolute left-25 top-[-20%] w-3 h-[140%]
                rotate-215
                bg-linear-to-t from-transparent via-white/35 to-white/35"
                />

                <div className="absolute left-30 top-[-18%] w-24 h-[140%]
                rotate-35
                bg-white/35"
                />

                <div className="absolute left-58 top-[-20%] w-3 h-[140%]
                rotate-35
                bg-linear-to-t from-transparent via-white/35 to-white/35"
                />

                {/* reflet coin bas droit */}
                <div className="absolute right-0 bottom-[-15%] w-12 h-40
                rotate-35
                bg-white/60"
                />

                <div className="absolute right-9 bottom-[-7%] w-3 h-40
                rotate-35
                bg-white/40"
                />

                {/* contour lumineux */}
                <div className="absolute inset-0 rounded-[48px]
                border border-white/20
                shadow-[inset_0_0_20px_rgba(255,255,255,0.15)]"
                />
                {/* Image */}
                <img
                src={imageSrc}
                alt={alt}
                className="
                    w-full h-full
                    object-cover
                    opacity-80
                "
                />
            </div>
        </div>
    </div>
  )
}