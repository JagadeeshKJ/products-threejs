import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#efbd48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./kj.png",
  fullDecal: "./fullnew.jpg",
});

export default state;
