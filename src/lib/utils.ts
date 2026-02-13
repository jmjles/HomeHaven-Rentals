import { animate, AnimationParams, TargetsParam } from "animejs";

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

export const fadeOut = (target: TargetsParam) => animate(target, {});
