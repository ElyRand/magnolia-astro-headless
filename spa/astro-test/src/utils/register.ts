import { DesignSystem } from "@microsoft/fast-foundation";
import Test from "../components/Test";
import { fastButton } from "@microsoft/fast-components";
import Headline from "../components/Headline";
import Image from "../components/Image";

export default function provideCivicUiDesignSystem(
  element?: HTMLElement
): DesignSystem {
  return DesignSystem.getOrCreate(element).withPrefix("oc");
}
provideCivicUiDesignSystem().register(Headline(), Image());
