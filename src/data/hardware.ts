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
    estPrice: 250,
    officialProductPage: "https://store.google.com/product/nest_hub_max"
  },
  {
    category: "Bedroom",
    productName: "Nest Hub (2nd Gen)",
    primaryRole: "Sleep & breathing radar",
    estPrice: 100,
    officialProductPage: "https://store.google.com/product/nest_hub_2nd_gen"
  },
  {
    category: "Audio",
    productName: "Nest Audio",
    primaryRole: "Whole-home Gemini interface",
    estPrice: 100,
    officialProductPage: "https://store.google.com/product/nest_audio"
  },
  {
    category: "Safety",
    productName: "Aqara FP2",
    primaryRole: "Invisible fall detection radar",
    estPrice: 100,
    officialProductPage: "https://www.aqara.com/us/product/fp2"
  },
  {
    category: "Security",
    productName: "Yale Smart Lock",
    primaryRole: "Key-free home access",
    estPrice: 280,
    officialProductPage: "https://www.yalehome.com/us/en/products/smart-locks"
  },
  {
    category: "Entry",
    productName: "Nest Doorbell",
    primaryRole: "Familiar face announcements",
    estPrice: 190,
    officialProductPage: "https://store.google.com/product/nest_doorbell"
  },
  {
    category: "Fire/CO",
    productName: "Nest Protect",
    primaryRole: "Smart emergency alerts",
    estPrice: 130,
    officialProductPage: "https://store.google.com/product/nest_protect"
  },
  {
    category: "Satellite",
    productName: "Nest Mini",
    primaryRole: "Voice access in small rooms",
    estPrice: 60,
    officialProductPage: "https://store.google.com/product/nest_mini"
  },
  {
    category: "Medical",
    productName: "Milesight VS373 Fall Radar",
    primaryRole: "99% accurate radar fall detection",
    estPrice: 200,
    officialProductPage: "https://www.milesight.com/iot/product/lorawan-sensor/vs373"
  },
  {
    category: "Climate",
    productName: "Nest Thermostat",
    primaryRole: "Smart climate control",
    estPrice: 280,
    officialProductPage: "https://store.google.com/product/nest_thermostat"
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
    id: "essential-plan",
    name: "Essential Plan",
    hardwareItems: [
      { productName: "Nest Hub (2nd Gen)", quantity: 1 },
      { productName: "Milesight VS373 Fall Radar", quantity: 1 },
      { productName: "Aqara FP2", quantity: 2 },
      { productName: "Nest Mini", quantity: 2 }
    ],
    laborHours: 10,
    laborRate: 125,
    stewardshipMonthly: 99
  },
  {
    id: "comfort-plan",
    name: "Comfort Plan",
    hardwareItems: [
      { productName: "Nest Hub (2nd Gen)", quantity: 1 },
      { productName: "Milesight VS373 Fall Radar", quantity: 1 },
      { productName: "Aqara FP2", quantity: 2 },
      { productName: "Nest Doorbell", quantity: 1 },
      { productName: "Yale Smart Lock", quantity: 1 },
      { productName: "Nest Mini", quantity: 3 }
    ],
    laborHours: 15,
    laborRate: 125,
    stewardshipMonthly: 149
  },
  {
    id: "complete-plan",
    name: "Complete Plan",
    hardwareItems: [
      { productName: "Nest Hub (2nd Gen)", quantity: 1 },
      { productName: "Milesight VS373 Fall Radar", quantity: 1 },
      { productName: "Aqara FP2", quantity: 3 },
      { productName: "Nest Doorbell", quantity: 1 },
      { productName: "Yale Smart Lock", quantity: 1 },
      { productName: "Nest Thermostat", quantity: 1 },
      { productName: "Nest Hub Max", quantity: 1 },
      { productName: "Nest Mini", quantity: 4 },
      { productName: "Nest Audio", quantity: 2 }
    ],
    laborHours: 20,
    laborRate: 150,
    stewardshipMonthly: 199
  }
];

export const PROCUREMENT_STEWARDSHIP_FEE = 0.25; // Increased slightly for profit
export const AUDIT_FEE = 99;
export const AUDIT_CREDIT = 99;
export const LOYALTY_CREDIT_THRESHOLD = 199;
