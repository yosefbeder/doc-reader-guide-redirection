import Image from "next/image";

import Logo from "@/public/logo.png";

export default function Home() {
  return (
    <main className="my-8 mx-auto max-w-96 flex flex-col gap-4 items-center text-center">
      <Image src={Logo} width={128} alt="Logo" suppressHydrationWarning />
      <span className="text-4xl font-extrabold text-cyan-700">
        DocReader Guide
      </span>
      <h1 className="text-2xl font-bold text-rose-600">🚨 Domain Changed!</h1>
      <p className="text-slate-700">
        The domain name of this web app has been changed to:
      </p>
      <a
        href="https://doc-reader-guide.com/"
        className="inline-block underline text-cyan-600 hover:text-cyan-700 active:text-cyan-800 transition-colors"
      >
        https://doc-reader-guide.com/
      </a>
      <p className="text-slate-700">
        If you already have the app installed, please uninstall it first and
        then reinstall it from the new domain.
      </p>
    </main>
  );
}
