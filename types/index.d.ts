export as namespace Navbar;
export default Navbar;

import Navbar from "navbar.js/src/js/navbar";

declare enum NavbarEvents {
  show = "show.navbar",
  shown = "shown.navbar",
  hide = "hide.navbar",
  hidden = "hidden.navbar",
}

export interface Event {
  /** e.type */
  readonly type: NavbarEvents;
}

declare global {
  interface HTMLElement {
    addEventListener(
      type: Navbar.Event,
      listener: (this: HTMLElement, ev: Navbar.Event) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
  }
}
