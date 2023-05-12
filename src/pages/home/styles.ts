import { Heading, Text, styled } from "@ignite-ui/react";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  height: "100vh",
  gap: "$20",

  maxWidth: "calc(100vw - (100vw - 1160px) / 2)",
  marginLeft: "auto",
  // ? Estou tentando desconsiderar o espaço lateral esquerdo, já que a home fica encostada no canto direito
});

export const Hero = styled("div", {
  maxWidth: "500px",
  padding: "0 $10",

  [`> ${Heading}`]: {
    "@media (max-width: 600px)": {
      fontSize: "$6xl",
    },
  },

  [`> ${Text}`]: {
    marginTop: "$2",
    color: "$gray200",
  },
});

export const Preview = styled("div", {
  padding: "$8",
  overflow: "hidden",

  "@media (max-width: 600px)": {
    display: "none",
  },
});
