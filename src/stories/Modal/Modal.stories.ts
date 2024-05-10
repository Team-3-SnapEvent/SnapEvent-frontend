import { type Meta } from "@storybook/react";
import { fn } from "@storybook/test";
import  Modal  from "./Modal";

const meta = {
  title: "Example/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    logIn: fn(),
    joinIn: fn(),
    deleteFollowing: fn(),
    deleteSubscribing: fn(),
    fixAlarming: fn(),
    deleteAlarming: fn(),
    fixPersonalInfo: fn(),
    withdrawMembership: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
