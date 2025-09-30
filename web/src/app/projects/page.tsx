import Image from "next/image";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
};

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch("https://api.github.com/users/pavankapoor31/repos?per_page=100", {
    // Revalidate every hour
    next: { revalidate: 3600 },
    headers: {
      Accept: "application/vnd.github+json",
    },
  });
  if (!res.ok) return [];
  const data = (await res.json()) as Repo[];
  // Basic filtering for showcase
  const pinnedPriority = [
    "AI-Ads-analyzer",
    "json-editor",
    "secret-santa",
    "alter-feeds",
    "react-chat-app",
  ];
  const sorted = data
    .filter((r) => !r.name.includes(".github"))
    .sort((a, b) => {
      const aIdx = pinnedPriority.indexOf(a.name);
      const bIdx = pinnedPriority.indexOf(b.name);
      if (aIdx !== -1 || bIdx !== -1) return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
      return (b.stargazers_count || 0) - (a.stargazers_count || 0);
    });
  return sorted;
}

export default async function ProjectsPage() {
  const repos = await fetchRepos();

  return (
    <div className="grid gap-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-gray-600 dark:text-gray-300">
          A curated selection of open-source work and experiments. See more on my {""}
          <a className="underline" href="https://github.com/pavankapoor31" target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.slice(0, 12).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-transparent hover:shadow-xl transition flex flex-col"
          >
            <div className="relative h-40 bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800">
              <Image src="/images/banner.jpg" alt="repo banner" fill className="object-cover mix-blend-multiply" />
            </div>
            <div className="p-4 space-y-2 flex-1">
              <h3 className="font-semibold group-hover:underline">{repo.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {repo.description || "No description provided."}
              </p>
            </div>
            <div className="px-4 pb-4 text-xs text-gray-500 flex items-center gap-4">
              <span>⭐ {repo.stargazers_count}</span>
              {repo.language && <span>{repo.language}</span>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}



