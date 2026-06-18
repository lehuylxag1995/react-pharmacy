const a = [
  // =========================
  // CẤP 2 (CON CỦA THUỐC)
  // =========================
  {
    id: 11,
    parentId: 1,
    name: "Thuốc kê đơn",
    isActive: true,
    childrenCount: 3,
  },
  {
    id: 12,
    parentId: 1,
    name: "Thuốc không kê đơn",
    isActive: true,
    childrenCount: 0,
  },
  {
    id: 13,
    parentId: 1,
    name: "Thuốc đông y",
    isActive: true,
    childrenCount: 0,
  },
  {
    id: 14,
    parentId: 1,
    name: "Vitamin - Khoáng chất",
    isActive: true,
    childrenCount: 0,
  },

  // =========================
  // CẤP 3 (CON CỦA THUỐC KÊ ĐƠN)
  // =========================
  {
    id: 111,
    parentId: 11,
    name: "Thuốc tim mạch",
    isActive: true,
    childrenCount: 4,
  },
  {
    id: 112,
    parentId: 11,
    name: "Thuốc tiểu đường",
    isActive: true,
    childrenCount: 0,
  },
  {
    id: 113,
    parentId: 11,
    name: "Thuốc huyết áp",
    isActive: true,
    childrenCount: 0,
  },

  // =========================
  // CẤP 4 (CON CỦA THUỐC TIM MẠCH)
  // =========================
  {
    id: 1111,
    parentId: 111,
    name: "Aspirin",
    isActive: true,
    childrenCount: 0,
  },
  {
    id: 1112,
    parentId: 111,
    name: "Clopidogrel",
    isActive: true,
    childrenCount: 0,
  },
  {
    id: 1113,
    parentId: 111,
    name: "Atorvastatin",
    isActive: true,
    childrenCount: 0,
  },
  {
    id: 1114,
    parentId: 111,
    name: "Rosuvastatin",
    isActive: false,
    childrenCount: 0,
  },

  // =========================
  // CẤP 2 (TPCN)
  // =========================
  {
    id: 21,
    parentId: 2,
    name: "Vitamin tổng hợp",
    isActive: true,
    childrenCount: 0,
  },
  {
    id: 22,
    parentId: 2,
    name: "Omega 3",
    isActive: true,
    childrenCount: 0,
  },
  {
    id: 23,
    parentId: 2,
    name: "Canxi",
    isActive: true,
    childrenCount: 0,
  },

  // =========================
  // CẤP 2 (CHĂM SÓC CÁ NHÂN)
  // =========================
  {
    id: 31,
    parentId: 3,
    name: "Sữa tắm",
    isActive: true,
    childrenCount: 0,
  },
  {
    id: 32,
    parentId: 3,
    name: "Dầu gội",
    isActive: true,
    childrenCount: 0,
  },
];
