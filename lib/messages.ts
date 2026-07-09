import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  type Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Timestamp | null;
  read: boolean;
}

const MESSAGES = collection(db, "messages");

/** Called by the public contact form — allowed for anyone by the rules. */
export async function sendMessage(data: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  await addDoc(MESSAGES, {
    name: data.name.trim().slice(0, 100),
    email: data.email.trim().slice(0, 200),
    message: data.message.trim().slice(0, 3000),
    createdAt: serverTimestamp(),
    read: false,
  });
}

/** Admin-only inbox subscription (rules reject non-admin readers). */
export function subscribeMessages(
  onChange: (messages: ContactMessage[]) => void,
  onError: (error: Error) => void,
): () => void {
  const q = query(MESSAGES, orderBy("createdAt", "desc"));
  return onSnapshot(
    q,
    (snap) => {
      onChange(
        snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<ContactMessage, "id">),
        })),
      );
    },
    onError,
  );
}

export async function setMessageRead(id: string, read: boolean): Promise<void> {
  await updateDoc(doc(db, "messages", id), { read });
}

export async function deleteMessage(id: string): Promise<void> {
  await deleteDoc(doc(db, "messages", id));
}
