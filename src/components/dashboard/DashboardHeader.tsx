import Image from "next/image";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-outline-variant bg-white sticky top-0 z-40 flex items-center justify-between px-8">
      <div className="flex items-center gap-4 flex-grow max-w-xl">
        <span className="material-symbols-outlined text-on-surface-variant">
          search
        </span>
        <input
          className="bg-transparent border-none focus:ring-0 w-full text-body-md"
          placeholder="Search buckets, stocks, or themes..."
          type="text"
        />
      </div>
      <div className="flex items-center gap-6">
        <button type="button" className="relative">
          <span className="material-symbols-outlined text-on-surface-variant">
            notifications
          </span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border border-white" />
        </button>
        <div className="flex items-center gap-3 border-l border-outline-variant pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold leading-tight">Alex Rivera</p>
            <p className="text-xs text-on-surface-variant">Premium Member</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiXeN6A2CBSD-dwKXzyIx-JtJm7xOP_icRvSn2TsholXMTUCSE2PztccGIk_xMBopaJ9sSqQ12aod7Mv6lz2NeXwKPcqSEU56JAQa-_QAjzMr0jBFoSuvDPWkOrGGUbyzsRMj3Zd-Guf0wkLL8DVTv0G3teOwHPNkuMMqpPnAxFfEhY_ezxS4lUHXzvVdnTBkVvaCDghUUtNtrIshRuY5xZ-L7LVkfCtUweAa8QJtQMNueAbZQMKBj7D2y_AnnqCEvJfoKFLXWh50"
              alt="Avatar"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
