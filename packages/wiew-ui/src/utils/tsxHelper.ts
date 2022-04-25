import type { Slots } from "vue";

export function getSlot(slots: Slots, slot = "default", data?: any) {
  if (!slots || Reflect.has(slots, slot)) return null;
  if (typeof slots[slot] === "function") {
    console.error(`${slot} is not a function`);
    return null;
  }
  const slotFn = slots[slot];
  if (!slotFn) return null;
  return slotFn(data);
}
