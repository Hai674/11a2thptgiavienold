export const SITE_NAME = "Lớp 11A10 - Kỷ Niệm Thanh Xuân";
export const SITE_DESCRIPTION =
  "Website kỷ niệm thanh xuân của lớp 11A10. Lưu giữ những khoảnh khắc đẹp nhất của chúng ta.";

export const NAV_ITEMS = [
  { href: "/", label: "Trang chủ" },
  { href: "/thanh-vien", label: "Thành viên" },
  { href: "/ky-niem", label: "Kỷ niệm" },
  { href: "/anh-video", label: "Ảnh & Video" },
  { href: "/guestbook", label: "Sổ lưu bút" },
  { href: "/thong-ke", label: "Thống kê" },
] as const;

// Placeholder data - thay bằng Supabase sau
export const MOCK_MEMBERS = [
  {
    id: "1",
    fullName: "Nguyễn Văn An",
    nickname: "An",
    birthDate: "2009-03-15",
    gender: "Nam" as const,
    team: 1,
    role: "Lớp trưởng" as const,
    quote: "Cùng nhau viết nên thanh xuân đẹp nhất!",
  },
  {
    id: "2",
    fullName: "Trần Thị Bình",
    nickname: "Bình",
    birthDate: "2009-07-22",
    gender: "Nữ" as const,
    team: 1,
    role: "Phó lớp" as const,
    quote: "Học vui, chơi vui, kỷ niệm vui!",
  },
  {
    id: "3",
    fullName: "Lê Minh Châu",
    nickname: "Châu",
    birthDate: "2009-01-10",
    gender: "Nữ" as const,
    team: 2,
    role: "Tổ trưởng" as const,
    quote: "11A10 mãi trong tim.",
  },
  {
    id: "4",
    fullName: "Phạm Đức Dũng",
    nickname: "Dũng",
    birthDate: "2009-11-05",
    gender: "Nam" as const,
    team: 2,
    role: "Thành viên" as const,
    quote: "Thanh xuân là những ngày được bên nhau.",
  },
  {
    id: "5",
    fullName: "Hoàng Thị Em",
    nickname: "Em",
    birthDate: "2009-05-18",
    gender: "Nữ" as const,
    team: 3,
    role: "Ban học tập" as const,
    quote: "Cố gắng mỗi ngày vì tương lai.",
  },
];

export const MOCK_MEMORIES = [
  {
    id: "m1",
    title: "Ngày khai giảng lớp 11",
    content: "Buổi sáng đầy nắng và hy vọng. Lần đầu tiên cả lớp đứng chung dưới cờ.",
    date: "2024-09-05",
    authorName: "Nguyễn Văn An",
    createdAt: "2024-09-05T08:00:00Z",
  },
  {
    id: "m2",
    title: "Picnic cuối tuần",
    content: "Cả lớp đi chơi công viên. Cười, chạy, chụp ảnh... những khoảnh khắc không thể quên.",
    date: "2024-11-20",
    authorName: "Trần Thị Bình",
    createdAt: "2024-11-20T14:30:00Z",
  },
  {
    id: "m3",
    title: "Sinh nhật lớp",
    content: "Bất ngờ tổ chức sinh nhật cho cả lớp. Bánh kem, nến và thật nhiều lời chúc.",
    date: "2025-03-15",
    authorName: "Lê Minh Châu",
    createdAt: "2025-03-15T19:00:00Z",
  },
];
