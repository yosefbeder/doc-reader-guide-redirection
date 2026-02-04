import Image from "next/image";

import Logo from "@/public/logo.png";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="my-8 mx-auto max-w-96 flex flex-col gap-4 items-center"
    >
      <Image src={Logo} width={128} alt="Logo" suppressHydrationWarning />
      <span className="text-4xl font-extrabold text-cyan-700">
        DocReader Guide
      </span>
      <h1 className="text-2xl font-bold text-rose-600">🚨 Domain Changed!</h1>
      <p>تم تغيير اسم النطاق إلى:</p>
      <a
        href="https://doc-reader-guide.com/"
        className="inline-block underline text-cyan-600 hover:text-cyan-700 active:text-cyan-800 transition-colors"
      >
        https://doc-reader-guide.com/
      </a>
      <p>إذا كنت قمت بتثبيت البرنامج من قبل يرجى اتباع الخطوات الآتية:</p>
      <ul className="list-decimal list-inside">
        <li>قم بالضغط على الثلاث نقاط في أعلى اليمين أو اليسار</li>
        <li>قم بالضغط على إلغاء التثبيت</li>
        <li>
          قم بزيارة{" "}
          <a
            href="https://doc-reader-guide.com/"
            className="inline-block underline text-cyan-600 hover:text-cyan-700 active:text-cyan-800 transition-colors"
          >
            https://doc-reader-guide.com/
          </a>
        </li>
        <li>قم بالضغط على الثلاث نقاط في أعلى اليمين أو اليسار</li>
        <li>قم بالضغط على تثبيت</li>
      </ul>
    </main>
  );
}
