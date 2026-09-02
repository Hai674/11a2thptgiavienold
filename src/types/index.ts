export type Role =
  | "Lớp trưởng"
  | "Phó lớp"
  | "Tổ trưởng"
  | "Thành viên"
  | "Ban học tập"
  | "Ban văn nghệ";

export interface Member {
  id: string;
  fullName: string;
  nickname?: string;
  birthDate?: string; // YYYY-MM-DD
  gender?: "Nam" | "Nữ";
  team?: number; // Tổ 1, 2, 3...
  role: Role;
  avatarUrl?: string;
  quote?: string;
  bio?: string;
}

export interface Memory {
  id: string;
  title: string;
  content: string;
  date: string; // YYYY-MM-DD
  authorName: string;
  authorId?: string;
  imageUrls?: string[];
  videoUrl?: string;
  createdAt: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export interface VisitLocation {
  id: string;
  latitude: number;
  longitude: number;
  visitedAt: string;
  city?: string;
  country?: string;
}
