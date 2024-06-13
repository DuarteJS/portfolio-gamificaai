// recursos de jogos(loader= som,img).
import { ImageFiltering, ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import imagemG from "./images/logo-vertical.png";
import qualquer from "./images/png-transparent-lilo-stitch-lilo-pelekai-stitch-lilo-stitch-stitch-animals-carnivoran-dog-like-mammal-thumbnail.png"
// importe do mapa do jogo
import { TiledResource } from "@excaliburjs/plugin-tiled";


import pngTilesetPath from "./maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./maps/tileset_parede.tsx?url"
import tsxGenericPath from "./maps/tileset_generic.tsx?url"
import tsxEstoquePath from "./maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from "./maps/tileset_biblioteca?url"

import tmxMapaPath from "./maps/showroom_map.tmx?url"

// importar a imagem do player
import playerSpritePath from "./sprites/player.png"


export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  PlayerSpriteSheet: new ImageSource (playerSpritePath, {filtering: ImageFiltering.Pixel}),
  ImagemG: new ImageSource(imagemG),
  Qualquer: new ImageSource(qualquer),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      { path: "showroom_map.tmx", output: tmxMapaPath },
      { path: "Room_Builder_32x32.png", output: pngTilesetPath },
      { path: "tileset_parede.tsx", output: tsxParedesPath },
      { path: "tileset_generic.tsx", output: tsxGenericPath },
      { path: "tileset_estoque.tsx", output: tsxEstoquePath },
      { path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath }

    ]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}



