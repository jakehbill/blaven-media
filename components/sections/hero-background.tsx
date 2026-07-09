import Image from "next/image";

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-x-0 bottom-0 h-[70%] opacity-[0.08]">
        <Image
          src="/images/ben-blaven-mountain.svg"
          alt=""
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-background/88" />
    </div>
  );
}

export { HeroBackground };
