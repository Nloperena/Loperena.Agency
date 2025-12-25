import { MASTER_HARDWARE_TABLE, BUNDLE_CONFIGS, HARDWARE_MARKUP, AUDIT_FEE, AUDIT_CREDIT, type HardwareItem, type BundleConfig } from "@/data/hardware";

export interface PricingBreakdown {
  hardwareItems: Array<{
    item: HardwareItem;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }>;
  hardwareSubtotal: number;
  hardwareMarkup: number;
  hardwareTotal: number;
  laborHours: number;
  laborRate: number;
  laborTotal: number;
  auditFee: number;
  auditCredit: number;
  totalSetup: number;
  stewardshipMonthly: number;
}

export function calculateBundlePricing(bundleId: string): PricingBreakdown | null {
  const bundle = BUNDLE_CONFIGS.find(b => b.id === bundleId);
  if (!bundle) return null;

  const hardwareItems: PricingBreakdown["hardwareItems"] = [];
  let hardwareSubtotal = 0;

  bundle.hardwareItems.forEach(({ productName, quantity }) => {
    const item = MASTER_HARDWARE_TABLE.find(h => h.productName === productName);
    if (item) {
      const unitPrice = item.estPrice * (1 + HARDWARE_MARKUP);
      const totalPrice = unitPrice * quantity;
      hardwareSubtotal += totalPrice;
      
      hardwareItems.push({
        item,
        quantity,
        unitPrice,
        totalPrice
      });
    }
  });

  const hardwareMarkup = hardwareSubtotal * (HARDWARE_MARKUP / (1 + HARDWARE_MARKUP));
  const hardwareTotal = hardwareSubtotal;
  const laborTotal = bundle.laborHours * bundle.laborRate;
  const totalSetup = hardwareTotal + laborTotal + AUDIT_FEE - AUDIT_CREDIT;

  return {
    hardwareItems,
    hardwareSubtotal: hardwareSubtotal / (1 + HARDWARE_MARKUP),
    hardwareMarkup,
    hardwareTotal,
    laborHours: bundle.laborHours,
    laborRate: bundle.laborRate,
    laborTotal,
    auditFee: AUDIT_FEE,
    auditCredit: AUDIT_CREDIT,
    totalSetup,
    stewardshipMonthly: bundle.stewardshipMonthly
  };
}

export function getHardwareByCategory(category: string): HardwareItem[] {
  return MASTER_HARDWARE_TABLE.filter(item => item.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(MASTER_HARDWARE_TABLE.map(item => item.category)));
}

