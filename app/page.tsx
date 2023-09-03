import BackengineLogo from "@/components/BackengineLogo";
import NextJsLogo from "@/components/NextJsLogo";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="w-full flex flex-col items-center justify-center flex-1">
      <div className="animate-in flex flex-col opacity-0 max-w-4xl px-3 text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12">
          <div className="flex gap-8 justify-center items-center">
            <BackengineLogo />
            <span className="border-l rotate-45 h-6" />
            <NextJsLogo />
          </div>
          <h1 className="sr-only">Backengine and Next.js Starter Template</h1>
          <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
            The fastest way to start building apps with{" "}
            <strong>Backengine</strong> and <strong>Next.js</strong>
          </p>
          <div className="space-x-4 w-full flex items-center justify-center">
            <Link
              href="/project"
              className="bg-foreground py-3 px-6 rounded-lg text-sm text-background w-[150px] text-center hover:scale-105 transition-all duration-300"
            >
              Try API
            </Link>
          </div>
        </div>
        <div className="flex justify-center text-center text-xs mb-4">
          Generated by&nbsp;
          <Link
            href="https://backengine.dev/"
            target="_blank"
            className="font-bold italic"
          >
            Backengine
          </Link>
        </div>
      </div>
    </div>
  );
}
