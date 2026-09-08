"use client";

/* Small reusable form controls shared by the admin section editors. */

export function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function TextArea({
  label,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <textarea
        className="input mt-1.5 resize-y leading-relaxed"
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

/** Editable list of strings (roles, bullet points, tech chips, skills). */
export function StringList({
  label,
  values,
  onChange,
  multiline = false,
  addLabel = "Add item",
}: {
  label: string;
  values: string[];
  onChange: (v: string[]) => void;
  multiline?: boolean;
  addLabel?: string;
}) {
  const update = (i: number, v: string) =>
    onChange(values.map((old, j) => (j === i ? v : old)));
  const remove = (i: number) => onChange(values.filter((_, j) => j !== i));
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= values.length) return;
    const next = [...values];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <label className="label">{label}</label>
      <div className="space-y-2">
        {values.map((v, i) => (
          <div key={i} className="flex items-start gap-2">
            {multiline ? (
              <textarea
                className="input resize-y leading-relaxed"
                rows={2}
                value={v}
                onChange={(e) => update(i, e.target.value)}
              />
            ) : (
              <input
                className="input"
                value={v}
                onChange={(e) => update(i, e.target.value)}
              />
            )}
            <RowControls
              onUp={() => move(i, -1)}
              onDown={() => move(i, 1)}
              onRemove={() => remove(i)}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...values, ""])}
          className="text-xs font-medium text-(--accent) hover:underline"
        >
          + {addLabel}
        </button>
      </div>
    </div>
  );
}

export function RowControls({
  onUp,
  onDown,
  onRemove,
}: {
  onUp: () => void;
  onDown: () => void;
  onRemove: () => void;
}) {
  const btn =
    "flex size-7 items-center justify-center rounded border border-(--border) text-xs text-(--muted) transition-colors hover:text-(--foreground)";
  return (
    <div className="flex shrink-0 gap-1">
      <button type="button" className={btn} onClick={onUp} title="Move up">
        ↑
      </button>
      <button type="button" className={btn} onClick={onDown} title="Move down">
        ↓
      </button>
      <button
        type="button"
        className={`${btn} hover:border-red-400/40 hover:text-red-400`}
        onClick={onRemove}
        title="Remove"
      >
        ✕
      </button>
    </div>
  );
}

/** Card wrapper for one entry inside a list editor (a job, a project…). */
export function EntryCard({
  title,
  onUp,
  onDown,
  onRemove,
  children,
}: {
  title: string;
  onUp: () => void;
  onDown: () => void;
  onRemove: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="card space-y-4 p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="truncate text-sm font-semibold">{title || "Untitled"}</p>
        <RowControls onUp={onUp} onDown={onDown} onRemove={onRemove} />
      </div>
      {children}
    </div>
  );
}

export function AddButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-xl border border-dashed border-(--border) py-3 text-sm font-medium text-(--muted) transition-colors hover:border-cyan-400/40 hover:text-(--accent)"
    >
      + {label}
    </button>
  );
}
