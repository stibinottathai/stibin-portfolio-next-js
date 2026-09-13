import {
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
  type Firestore,
} from "firebase/firestore";
import { app } from "./firebase-core";
import {
  cacheContent,
  DEFAULT_CONTENT,
  loadCachedContent,
  mergeWithDefaults,
  type PortfolioContent,
} from "./content";

const db: Firestore =
  typeof window !== "undefined"
    ? getFirestore(app)
    : (null as unknown as Firestore);
const getPortfolioDoc = () => doc(db, "portfolio", "content");

export async function loadContent(): Promise<PortfolioContent> {
  try {
    const snap = await getDoc(getPortfolioDoc());
    return mergeWithDefaults(
      snap.exists() ? (snap.data() as Partial<PortfolioContent>) : undefined,
    );
  } catch {
    return DEFAULT_CONTENT;
  }
}

/** Live subscription used by the public site so edits appear without a redeploy. */
export function subscribeContent(
  onChange: (content: PortfolioContent) => void,
): () => void {
  return onSnapshot(
    getPortfolioDoc(),
    (snap) => {
      const data = snap.exists()
        ? (snap.data() as Partial<PortfolioContent>)
        : undefined;
      cacheContent(data);
      onChange(mergeWithDefaults(data));
    },
    () => onChange(loadCachedContent() ?? DEFAULT_CONTENT),
  );
}

export async function saveContent(content: PortfolioContent): Promise<void> {
  await setDoc(getPortfolioDoc(), content);
}
