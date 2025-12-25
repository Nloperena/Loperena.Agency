export interface HardwareItem {
  category: string;
  productName: string;
  primaryRole: string;
  estPrice: number;
  officialProductPage: string;
}

export const MASTER_HARDWARE_TABLE: HardwareItem[] = [
  {
    category: "Main Hub",
    productName: "Nest Hub Max",
    primaryRole: "Family portal & video calls",
    estPrice: 229,
    officialProductPage: "https://store.google.com/product/nest_hub_max"
  },
  {
    category: "Bedroom",
    productName: "Nest Hub (2nd Gen)",
    primaryRole: "Sleep & breathing radar",
    estPrice: 99,
    officialProductPage: "https://store.google.com/product/nest_hub_2nd_gen"
  },
  {
    category: "Audio",
    productName: "Nest Audio",
    primaryRole: "Whole-home Gemini interface",
    estPrice: 99,
    officialProductPage: "https://store.google.com/product/nest_audio"
  },
  {
    category: "Safety",
    productName: "Aqara FP2",
    primaryRole: "Invisible fall detection radar",
    estPrice: 83,
    officialProductPage: "https://www.aqara.com/us/product/fp2"
  },
  {
    category: "Security",
    productName: "Nest x Yale Lock",
    primaryRole: "Key-free home access",
    estPrice: 249,
    officialProductPage: "https://store.google.com/product/nest_yale_lock"
  },
  {
    category: "Entry",
    productName: "Nest Doorbell",
    primaryRole: "Familiar face announcements",
    estPrice: 179,
    officialProductPage: "https://store.google.com/product/nest_doorbell"
  },
  {
    category: "Fire/CO",
    productName: "Nest Protect",
    primaryRole: "Smart emergency alerts",
    estPrice: 119,
    officialProductPage: "https://store.google.com/product/nest_protect"
  },
  {
    category: "Satellite",
    productName: "Nest Mini",
    primaryRole: "Voice access in small rooms",
    estPrice: 50,
    officialProductPage: "https://store.google.com/product/nest_mini"
  },
  {
    category: "Medical",
    productName: "Xandar Kardian Vitals Radar",
    primaryRole: "Medical-grade vital sign monitoring",
    estPrice: 299,
    officialProductPage: "https://www.xandar-kardian.com/products/vitals-radar"
  },
  {
    category: "Security",
    productName: "Nest Cam (Wired)",
    primaryRole: "Outdoor security monitoring",
    estPrice: 99,
    officialProductPage: "https://store.google.com/product/nest_cam_wired"
  }
];

export interface BundleConfig {
  id: string;
  name: string;
  hardwareItems: { productName: string; quantity: number }[];
  laborHours: number;
  laborRate: number;
  stewardshipMonthly: number;
}

export const BUNDLE_CONFIGS: BundleConfig[] = [
  {
    id: "safety-net",
    name: "Safety Net Entry Bundle",
    hardwareItems: [
      { productName: "Nest Hub (2nd Gen)", quantity: 1 },
      { productName: "Nest Mini", quantity: 2 },
      { productName: "Aqara FP2", quantity: 1 },
      { productName: "Nest Doorbell", quantity: 1 }
    ],
    laborHours: 4,
    laborRate: 125,
    stewardshipMonthly: 49
  },
  {
    id: "independence-suite",
    name: "Independence Suite",
    hardwareItems: [
      { productName: "Nest Hub (2nd Gen)", quantity: 1 },
      { productName: "Nest Mini", quantity: 2 },
      { productName: "Aqara FP2", quantity: 1 },
      { productName: "Nest Doorbell", quantity: 1 },
      { productName: "Nest Hub Max", quantity: 1 },
      { productName: "Nest x Yale Lock", quantity: 1 },
      { productName: "Nest Protect", quantity: 1 },
      { productName: "Aqara FP2", quantity: 1 }
    ],
    laborHours: 8,
    laborRate: 125,
    stewardshipMonthly: 99
  },
  {
    id: "concierge-estate",
    name: "Concierge Estate Package",
    hardwareItems: [
      { productName: "Nest Hub (2nd Gen)", quantity: 1 },
      { productName: "Nest Mini", quantity: 2 },
      { productName: "Aqara FP2", quantity: 1 },
      { productName: "Nest Doorbell", quantity: 1 },
      { productName: "Nest Hub Max", quantity: 1 },
      { productName: "Nest x Yale Lock", quantity: 1 },
      { productName: "Nest Protect", quantity: 1 },
      { productName: "Aqara FP2", quantity: 1 },
      { productName: "Xandar Kardian Vitals Radar", quantity: 1 },
      { productName: "Nest Audio", quantity: 2 },
      { productName: "Nest Cam (Wired)", quantity: 2 }
    ],
    laborHours: 16,
    laborRate: 150,
    stewardshipMonthly: 199
  }
];

export const HARDWARE_MARKUP = 0.20; // 20% Procurement & Logistics fee
export const AUDIT_FEE = 99;
export const AUDIT_CREDIT = 99;

