export default function ResumePage() {
  return (
    <div className="grid gap-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Download my latest resume as a PDF, or view it in your browser.
        </p>
        <div className="flex gap-3">
          <a
            href="/Pavan_Kapoor_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            View PDF
          </a>
          <a
            href="/Pavan_Kapoor_Resume.pdf"
            download
            className="inline-flex items-center rounded-md border border-black/10 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
          >
            Download
          </a>
        </div>
      </header>

      <iframe
        src="/Pavan_Kapoor_Resume.pdf#view=FitH"
        className="w-full h-[80vh] rounded-xl border border-black/10 dark:border-white/10"
        title="Pavan Kapoor Resume"
      />
    </div>
  );
}



