// recursos de jogos(loader= som,img).
import { Actor, ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import imagemG from "./images/logo-vertical.png";
import qualquer from "./images/png-transparent-lilo-stitch-lilo-pelekai-stitch-lilo-stitch-stitch-animals-carnivoran-dog-like-mammal-thumbnail.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  ImagemG: new ImageSource(imagemG),
  Qualquer: new ImageSource(qualquer)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}



