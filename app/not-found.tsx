import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F4EF] flex flex-col items-center justify-center px-8">
      <p className="font-serif text-[120px] font-light text-[#EDEAE2] leading-none select-none">
        404
      </p>
      <h1 className="font-serif text-[32px] font-light text-[#0A0A08] mt-4 mb-4">
        Page not found.
      </h1>
      <p className="text-[15px] font-light text-[#8A8A80] mb-10">
        Like a pre-mixed peptide, this page has degraded. Let's start fresh.
      </p>
      <Link href="/" className="btn-pill btn-primary">
        Return home
      </Link>
    </main>
  );
}
