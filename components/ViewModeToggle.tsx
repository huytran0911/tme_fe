"use client";

export type ViewMode = "grid" | "list" | "compact";

interface ViewModeToggleProps {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
}

// Grid icon
function GridIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

// List icon
function ListIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="18" height="4" x="3" y="4" rx="1" />
      <rect width="18" height="4" x="3" y="10" rx="1" />
      <rect width="18" height="4" x="3" y="16" rx="1" />
    </svg>
  );
}

// Compact/Gallery icon (smaller grid)
function CompactIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="5" height="5" x="3" y="3" rx="0.5" />
      <rect width="5" height="5" x="10" y="3" rx="0.5" />
      <rect width="5" height="5" x="17" y="3" rx="0.5" />
      <rect width="5" height="5" x="3" y="10" rx="0.5" />
      <rect width="5" height="5" x="10" y="10" rx="0.5" />
      <rect width="5" height="5" x="17" y="10" rx="0.5" />
      <rect width="5" height="5" x="3" y="17" rx="0.5" />
      <rect width="5" height="5" x="10" y="17" rx="0.5" />
      <rect width="5" height="5" x="17" y="17" rx="0.5" />
    </svg>
  );
}

const modes: { key: ViewMode; icon: typeof GridIcon; label: string }[] = [
  { key: "grid", icon: GridIcon, label: "Grid" },
  { key: "list", icon: ListIcon, label: "List" },
  { key: "compact", icon: CompactIcon, label: "Compact" },
];

export default function ViewModeToggle({ value, onChange }: ViewModeToggleProps) {
  return (
    <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm">
      {modes.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          title={label}
          className={`flex h-8 w-8 items-center justify-center rounded-md transition ${
            value === key
              ? "bg-[#EE4D2D] text-white shadow-sm"
              : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
          }`}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}
