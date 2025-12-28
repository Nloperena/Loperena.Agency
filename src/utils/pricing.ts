import { MASTER_HARDWARE_TABLE, BUNDLE_CONFIGS, PROCUREMENT_STEWARDSHIP_FEE, AUDIT_FEE, AUDIT_CREDIT, LOYALTY_CREDIT_THRESHOLD, type HardwareItem, type BundleConfig } from "@/data/hardware";

export interface PricingBreakdown {
  hardwareItems: Array<{
    item: HardwareItem;
    quantity: number;
    msrpPrice: number;
    vettedPrice: number;
    totalPrice: number;
  }>;
  hardwareSubtotalMSRP: number;
  stewardshipBundleFee: number;
  loyaltyCredit: number;
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
  let hardwareSubtotalMSRP = 0;

  // Check if this bundle qualifies for loyalty credit
  const hasLoyaltyCredit = bundle.stewardshipMonthly >= LOYALTY_CREDIT_THRESHOLD;

  bundle.hardwareItems.forEach(({ productName, quantity }) => {
    const item = MASTER_HARDWARE_TABLE.find(h => h.productName === productName);
    if (item) {
      const msrpPrice = item.estPrice;
      const vettedPrice = item.estPrice * (1 + PROCUREMENT_STEWARDSHIP_FEE);
      // Calculate total price: if loyalty credit applies, use MSRP; otherwise use vetted price
      const unitPrice = hasLoyaltyCredit ? msrpPrice : vettedPrice;
      const totalPrice = unitPrice * quantity;
      hardwareSubtotalMSRP += msrpPrice * quantity;
      
      hardwareItems.push({
        item,
        quantity,
        msrpPrice,
        vettedPrice,
        totalPrice: totalPrice // This will be MSRP-based if loyalty credit applies
      });
    }
  });

  // Calculate stewardship bundle fee
  const stewardshipBundleFee = hardwareSubtotalMSRP * PROCUREMENT_STEWARDSHIP_FEE;
  
  // Apply loyalty credit for Complete Plan (removes procurement fee)
  const loyaltyCredit = hasLoyaltyCredit ? stewardshipBundleFee : 0;
  
  const hardwareTotal = hardwareSubtotalMSRP + stewardshipBundleFee - loyaltyCredit;
  const laborTotal = bundle.laborHours * bundle.laborRate;
  const totalSetup = hardwareTotal + laborTotal + AUDIT_FEE - AUDIT_CREDIT;

  return {
    hardwareItems,
    hardwareSubtotalMSRP,
    stewardshipBundleFee,
    loyaltyCredit,
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

