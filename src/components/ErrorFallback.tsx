import Link from "next/link";

export default function ErrorFallback({
  title = "Something went wrong",
  message = "Please try again.",
  retryHref = "/",
}: {
  title?: string;
  message?: string;
  retryHref?: string;
}) {
  return (
    <div className="border border-[#161616]/15 rounded p-6 flex items-center justify-center flex-col gap-3 bg-white">
      <h2 className="text-base font-semibold text-[#161616]">{title}</h2>
      <p className="text-sm text-[#161616]/70">{message}</p>
      <div>
        <Link
          href={retryHref}
          className="inline-block text-sm bg-[#161616] text-white px-3 py-2 rounded"
        >
          Retry
        </Link>
      </div>
    </div>
  );
}
