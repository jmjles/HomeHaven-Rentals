import { animate, AnimationParams, TargetsParam } from "animejs";
import { DateTime } from "luxon";

export const toUSD = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
};

export const toFormattedNumber = (num: number) => num.toLocaleString("en-US");

const animateBackBtn = (animation: AnimationParams) =>
  animate(".BackButton", animation);

export const slideIn = (target: TargetsParam) => {
  animate(target, {
    left: { from: "-125vw", to: "0px", duration: 600, ease: "outBack" },
  });
  animateBackBtn({ visibility: "visible" });
  animateBackBtn({
    opacity: { from: 0, to: 1, duration: 300 },
  });
};

export const slideOut = () => {
  animate(".InformationPanel", {
    left: { from: "0px", to: "125vw", duration: 600, ease: "inBack" },
  });

  animateBackBtn({
    rotate: { from: 0, to: 360 },
    opacity: { from: 1, to: 0 },
    duration: 300,
    onComplete: () => animateBackBtn({ visibility: "hidden" }),
  });
};
export const availableNow: AvailableType = {
  text: "Available Now",
  color: "#25c25c",
};
export const getAvailabilityText = (
  available: boolean,
  availableAt: string,
): AvailableType => {
  const today = DateTime.now();
  const availableDate = DateTime.fromISO(availableAt);
  const { days } = availableDate.diff(today, "days").toObject();

  const notAvailable: AvailableType = {
    text: "Not Available",
    color: "#E53838",
  };
  const availableSoon: AvailableType = {
    text: "Available Soon",
    color: "#C1BD4C",
    tooltip: `Available in ${Math.floor(days || 0)} days`,
  };

  if (available) return availableNow;
  if (!days || days > 30) return notAvailable;

  return availableSoon;
};

type AvailableType = { text: string; tooltip?: string; color: string };
