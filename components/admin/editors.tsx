"use client";

import { useState } from "react";
import type {
  PortfolioContent,
  Experience,
  Project,
  Certification,
  Education,
  SkillGroup,
  SocialLink,
  Stat,
} from "@/lib/content";
import {
  TextField,
  TextArea,
  StringList,
  EntryCard,
  AddButton,
} from "./fields";

type Patch = (patch: Partial<PortfolioContent>) => void;

/* ------------------------------------------------------------------ */
/* Profile photo picker (URL or uploaded file stored as a data URI)    */
/* ------------------------------------------------------------------ */

/**
 * Downscales the chosen image to fit Firestore's 1 MB document limit
 * comfortably (max 640px, JPEG at 85%).
 */
async function fileToDataUrl(file: File): Promise<string> {
  const url = URL.createObjectURL(file);
  try {
    const img = document.createElement("img");
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Could not read that image file."));
      img.src = url;
    });
    const max = 640;
    const scale = Math.min(1, max / Math.max(img.width, img.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.85);
  } finally {
    URL.revokeObjectURL(url);
  }
}

function PhotoField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [error, setError] = useState<string | null>(null);

  const pick = async (file: File | undefined) => {
    if (!file) return;
    setError(null);
    try {
      onChange(await fileToDataUrl(file));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    }
  };

  return (
    <div>
      <label className="label">Profile photo</label>
      <div className="flex flex-wrap items-start gap-5">
        {value ? (
          /* eslint-disable-next-line @next/next/no-img-element -- previews arbitrary URLs/data URIs */
          <img
            src={value}
            alt="Profile preview"
            className="aspect-4/5 w-28 rounded-xl border border-(--border) object-cover"
          />
        ) : (
          <div className="flex aspect-4/5 w-28 items-center justify-center rounded-xl border border-dashed border-(--border) text-xs text-(--muted)">
            No photo
          </div>
        )}
        <div className="min-w-56 flex-1 space-y-3">
          <label className="inline-block cursor-pointer rounded-full border border-(--border) px-5 py-2.5 text-xs font-semibold transition-colors hover:border-cyan-400/40 hover:text-(--accent)">
            Upload image…
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                pick(e.target.files?.[0]);
                e.target.value = "";
              }}
            />
          </label>
          <input
            className="input"
            value={value.startsWith("data:") ? "(uploaded image)" : value}
            placeholder="…or paste an image URL, e.g. https://…"
            onChange={(e) => onChange(e.target.value)}
            onFocus={(e) => {
              if (value.startsWith("data:")) e.target.select();
            }}
          />
          <div className="flex gap-4 text-xs">
            <button
              type="button"
              onClick={() => onChange("/avatar.svg")}
              className="text-(--muted) hover:text-(--foreground)"
            >
              Use dummy avatar
            </button>
            <button
              type="button"
              onClick={() => onChange("")}
              className="text-(--muted) hover:text-red-600 dark:hover:text-red-300"
            >
              Remove photo
            </button>
          </div>
          {error && (
            <p className="text-xs text-red-600 dark:text-red-300">{error}</p>
          )}
          <p className="text-xs leading-relaxed text-(--muted)">
            Uploads are resized and saved with the rest of the content — no
            extra storage setup needed.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Generic helpers for array sections                                  */
/* ------------------------------------------------------------------ */

function useListOps<T>(list: T[], set: (next: T[]) => void) {
  return {
    update: (i: number, item: T) =>
      set(list.map((old, j) => (j === i ? item : old))),
    remove: (i: number) => set(list.filter((_, j) => j !== i)),
    move: (i: number, dir: -1 | 1) => {
      const j = i + dir;
      if (j < 0 || j >= list.length) return;
      const next = [...list];
      [next[i], next[j]] = [next[j], next[i]];
      set(next);
    },
    add: (item: T) => set([...list, item]),
  };
}

/* ------------------------------------------------------------------ */
/* Section editors                                                     */
/* ------------------------------------------------------------------ */

export function HeroEditor({
  content,
  patch,
}: {
  content: PortfolioContent;
  patch: Patch;
}) {
  const hero = content.hero;
  const set = (field: Partial<typeof hero>) =>
    patch({ hero: { ...hero, ...field } });

  return (
    <div className="space-y-4">
      <PhotoField
        value={hero.photoUrl}
        onChange={(v) => set({ photoUrl: v })}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Name" value={hero.name} onChange={(v) => set({ name: v })} />
        <TextField
          label="Headline"
          value={hero.headline}
          onChange={(v) => set({ headline: v })}
        />
      </div>
      <StringList
        label="Rotating roles (typing effect)"
        values={hero.roles}
        onChange={(v) => set({ roles: v })}
        addLabel="Add role"
      />
      <TextArea
        label="Tagline"
        value={hero.tagline}
        onChange={(v) => set({ tagline: v })}
        rows={3}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Email" value={hero.email} onChange={(v) => set({ email: v })} />
        <TextField label="Phone" value={hero.phone} onChange={(v) => set({ phone: v })} />
        <TextField
          label="Location"
          value={hero.location}
          onChange={(v) => set({ location: v })}
        />
        <TextField
          label="Availability badge"
          value={hero.availability}
          onChange={(v) => set({ availability: v })}
        />
      </div>
      <TextField
        label="Resume URL (optional — shows a Download CV link)"
        value={hero.resumeUrl}
        onChange={(v) => set({ resumeUrl: v })}
        placeholder="https://…"
      />
    </div>
  );
}

export function AboutEditor({
  content,
  patch,
}: {
  content: PortfolioContent;
  patch: Patch;
}) {
  const about = content.about;
  const setStats = (stats: Stat[]) => patch({ about: { ...about, stats } });
  const ops = useListOps(about.stats, setStats);

  return (
    <div className="space-y-5">
      <TextArea
        label="Summary"
        value={about.summary}
        onChange={(v) => patch({ about: { ...about, summary: v } })}
        rows={7}
      />
      <div>
        <label className="label">Stats</label>
        <div className="space-y-3">
          {about.stats.map((s, i) => (
            <EntryCard
              key={i}
              title={`${s.value} — ${s.label}`}
              onUp={() => ops.move(i, -1)}
              onDown={() => ops.move(i, 1)}
              onRemove={() => ops.remove(i)}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                  label="Value"
                  value={s.value}
                  onChange={(v) => ops.update(i, { ...s, value: v })}
                />
                <TextField
                  label="Label"
                  value={s.label}
                  onChange={(v) => ops.update(i, { ...s, label: v })}
                />
              </div>
            </EntryCard>
          ))}
          <AddButton
            label="Add stat"
            onClick={() => ops.add({ value: "", label: "" })}
          />
        </div>
      </div>
    </div>
  );
}

export function SkillsEditor({
  content,
  patch,
}: {
  content: PortfolioContent;
  patch: Patch;
}) {
  const setSkills = (skills: SkillGroup[]) => patch({ skills });
  const ops = useListOps(content.skills, setSkills);

  return (
    <div className="space-y-3">
      {content.skills.map((group, i) => (
        <EntryCard
          key={i}
          title={group.category}
          onUp={() => ops.move(i, -1)}
          onDown={() => ops.move(i, 1)}
          onRemove={() => ops.remove(i)}
        >
          <TextField
            label="Category"
            value={group.category}
            onChange={(v) => ops.update(i, { ...group, category: v })}
          />
          <StringList
            label="Skills"
            values={group.items}
            onChange={(v) => ops.update(i, { ...group, items: v })}
            addLabel="Add skill"
          />
        </EntryCard>
      ))}
      <AddButton
        label="Add skill category"
        onClick={() => ops.add({ category: "", items: [] })}
      />
    </div>
  );
}

export function ExperienceEditor({
  content,
  patch,
}: {
  content: PortfolioContent;
  patch: Patch;
}) {
  const setExperience = (experience: Experience[]) => patch({ experience });
  const ops = useListOps(content.experience, setExperience);

  return (
    <div className="space-y-3">
      {content.experience.map((job, i) => (
        <EntryCard
          key={i}
          title={`${job.role} @ ${job.company}`}
          onUp={() => ops.move(i, -1)}
          onDown={() => ops.move(i, 1)}
          onRemove={() => ops.remove(i)}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              label="Company"
              value={job.company}
              onChange={(v) => ops.update(i, { ...job, company: v })}
            />
            <TextField
              label="Role"
              value={job.role}
              onChange={(v) => ops.update(i, { ...job, role: v })}
            />
            <TextField
              label="Period"
              value={job.period}
              onChange={(v) => ops.update(i, { ...job, period: v })}
            />
            <TextField
              label="Location"
              value={job.location}
              onChange={(v) => ops.update(i, { ...job, location: v })}
            />
          </div>
          <StringList
            label="Bullet points"
            values={job.points}
            onChange={(v) => ops.update(i, { ...job, points: v })}
            multiline
            addLabel="Add point"
          />
        </EntryCard>
      ))}
      <AddButton
        label="Add position"
        onClick={() =>
          ops.add({ company: "", role: "", period: "", location: "", points: [] })
        }
      />
    </div>
  );
}

export function ProjectsEditor({
  content,
  patch,
}: {
  content: PortfolioContent;
  patch: Patch;
}) {
  const setProjects = (projects: Project[]) => patch({ projects });
  const ops = useListOps(content.projects, setProjects);

  return (
    <div className="space-y-3">
      {content.projects.map((p, i) => (
        <EntryCard
          key={i}
          title={p.title}
          onUp={() => ops.move(i, -1)}
          onDown={() => ops.move(i, 1)}
          onRemove={() => ops.remove(i)}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              label="Title"
              value={p.title}
              onChange={(v) => ops.update(i, { ...p, title: v })}
            />
            <TextField
              label="Tag (e.g. Fintech · GovTech)"
              value={p.tag}
              onChange={(v) => ops.update(i, { ...p, tag: v })}
            />
            <div>
              <label className="label">Category</label>
              <select
                className="input"
                value={p.category}
                onChange={(e) =>
                  ops.update(i, {
                    ...p,
                    category: e.target.value as Project["category"],
                  })
                }
              >
                <option value="Mobile">Mobile</option>
                <option value="Web">Web</option>
              </select>
            </div>
            <TextField
              label="Link (optional)"
              value={p.link}
              onChange={(v) => ops.update(i, { ...p, link: v })}
              placeholder="https://…"
            />
          </div>
          <TextArea
            label="Description"
            value={p.description}
            onChange={(v) => ops.update(i, { ...p, description: v })}
            rows={3}
          />
          <StringList
            label="Tech stack"
            values={p.tech}
            onChange={(v) => ops.update(i, { ...p, tech: v })}
            addLabel="Add tech"
          />
          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-(--muted)">
            <input
              type="checkbox"
              checked={p.featured}
              onChange={(e) => ops.update(i, { ...p, featured: e.target.checked })}
              className="size-4 accent-cyan-400"
            />
            Featured (shown first)
          </label>
        </EntryCard>
      ))}
      <AddButton
        label="Add project"
        onClick={() =>
          ops.add({
            title: "",
            category: "Web",
            tag: "",
            description: "",
            tech: [],
            link: "",
            featured: false,
          })
        }
      />
    </div>
  );
}

export function CertificationsEditor({
  content,
  patch,
}: {
  content: PortfolioContent;
  patch: Patch;
}) {
  const certifications = content.certifications || [];
  const setCertifications = (certs: Certification[]) => patch({ certifications: certs });
  const ops = useListOps(certifications, setCertifications);

  return (
    <div className="space-y-3">
      {certifications.map((cert, i) => (
        <EntryCard
          key={i}
          title={cert.title || "Untitled Certification"}
          onUp={() => ops.move(i, -1)}
          onDown={() => ops.move(i, 1)}
          onRemove={() => ops.remove(i)}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              label="Certification Title"
              value={cert.title}
              onChange={(v) => ops.update(i, { ...cert, title: v })}
            />
            <TextField
              label="Issuing Organization (e.g. Meta, Google, AWS)"
              value={cert.issuer}
              onChange={(v) => ops.update(i, { ...cert, issuer: v })}
            />
            <TextField
              label="Issue Date / Validity"
              value={cert.issueDate}
              onChange={(v) => ops.update(i, { ...cert, issueDate: v })}
            />
            <TextField
              label="Badge / Level (e.g. Professional Certificate)"
              value={cert.badge ?? ""}
              onChange={(v) => ops.update(i, { ...cert, badge: v })}
            />
            <TextField
              label="Credential ID (optional)"
              value={cert.credentialId ?? ""}
              onChange={(v) => ops.update(i, { ...cert, credentialId: v })}
            />
            <TextField
              label="Verification URL (optional)"
              value={cert.credentialUrl ?? ""}
              onChange={(v) => ops.update(i, { ...cert, credentialUrl: v })}
              placeholder="https://…"
            />
          </div>
          <TextArea
            label="Description (optional)"
            value={cert.description ?? ""}
            onChange={(v) => ops.update(i, { ...cert, description: v })}
            rows={2}
          />
          <StringList
            label="Skills & Competencies Covered"
            values={cert.skills || []}
            onChange={(v) => ops.update(i, { ...cert, skills: v })}
            addLabel="Add skill"
          />
        </EntryCard>
      ))}
      <AddButton
        label="Add certification"
        onClick={() =>
          ops.add({
            title: "",
            issuer: "",
            issueDate: "",
            credentialId: "",
            credentialUrl: "",
            badge: "Verified Credential",
            description: "",
            skills: [],
          })
        }
      />
    </div>
  );
}

export function EducationEditor({
  content,
  patch,
}: {
  content: PortfolioContent;
  patch: Patch;
}) {
  const setEducation = (education: Education[]) => patch({ education });
  const ops = useListOps(content.education, setEducation);

  return (
    <div className="space-y-3">
      {content.education.map((edu, i) => (
        <EntryCard
          key={i}
          title={edu.school}
          onUp={() => ops.move(i, -1)}
          onDown={() => ops.move(i, 1)}
          onRemove={() => ops.remove(i)}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              label="School"
              value={edu.school}
              onChange={(v) => ops.update(i, { ...edu, school: v })}
            />
            <TextField
              label="Period"
              value={edu.period}
              onChange={(v) => ops.update(i, { ...edu, period: v })}
            />
          </div>
          <TextField
            label="Degree"
            value={edu.degree}
            onChange={(v) => ops.update(i, { ...edu, degree: v })}
          />
          <TextField
            label="Details (optional)"
            value={edu.details}
            onChange={(v) => ops.update(i, { ...edu, details: v })}
          />
        </EntryCard>
      ))}
      <AddButton
        label="Add education"
        onClick={() => ops.add({ school: "", degree: "", period: "", details: "" })}
      />
    </div>
  );
}

export function SocialsEditor({
  content,
  patch,
}: {
  content: PortfolioContent;
  patch: Patch;
}) {
  const setSocials = (socials: SocialLink[]) => patch({ socials });
  const ops = useListOps(content.socials, setSocials);

  return (
    <div className="space-y-3">
      {content.socials.map((s, i) => (
        <EntryCard
          key={i}
          title={s.label}
          onUp={() => ops.move(i, -1)}
          onDown={() => ops.move(i, 1)}
          onRemove={() => ops.remove(i)}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              label="Label"
              value={s.label}
              onChange={(v) => ops.update(i, { ...s, label: v })}
            />
            <TextField
              label="URL"
              value={s.url}
              onChange={(v) => ops.update(i, { ...s, url: v })}
              placeholder="https://… or mailto:…"
            />
          </div>
        </EntryCard>
      ))}
      <AddButton
        label="Add link"
        onClick={() => ops.add({ label: "", url: "" })}
      />
    </div>
  );
}
