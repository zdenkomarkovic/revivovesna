export function trackPhoneConversion() {
  if (typeof window === "undefined") return;
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", "conversion", {
    send_to: "AW-18126386464/7HIjCOrx16scEKDqqsND",
    value: 1.0,
    currency: "RSD",
  });
}
