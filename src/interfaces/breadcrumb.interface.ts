const menu = {
  id: 10,
  name: "Siro ho ABC",
  breadcrumbs: [
    {
      id: 1,
      name: "Hô hấp",
    },
    {
      id: 5,
      name: "Thuốc ho",
    },
    {
      id: 10,
      name: "Siro ho ABC",
    },
  ],
};

export interface IBreadcrumb {
  id: number;
  name: string;
  breadcrumbs: [
    {
      id: number;
      name: string;
    },
  ];
}
