import { Actor, CollisionType, Engine, SpriteSheet, Vector, Animation, Sprite } from "excalibur";
import { Resources } from "../resources";

export class Npc extends Actor {
   

    constructor(posicao: Vector, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            collisionType: CollisionType.Fixed
        })
    }
    onInitialize(engine: Engine<any>): void {
        // Configurar spritesheet do npc
        const spritesNpcA = SpriteSheet.fromImageSource({
            image: Resources.NpcSpriteSheet,
            grid: {
                spriteWidth: 32,    // 32
                spriteHeight: 64,   // 64
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0            // 8
                }
            }
        })
        // Configurar spritesheet do npc
        const spritesNpcC = SpriteSheet.fromImageSource({
            image: Resources.NpcSpriteSheet,
            grid: {
                spriteWidth: 32,    // 32
                spriteHeight: 64,   // 64
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0            // 8
                }
            }
        })
        // Configurar spritesheet do npc
        const spritesNpcB = SpriteSheet.fromImageSource({
            image: Resources.NpcSpriteSheet,
            grid: {
                spriteWidth: 32,    // 32
                spriteHeight: 64,   // 64
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0            // 8
                }
            }
        })
         
        let spriteDefinido

        if (this.name == "npc_a") {
            spriteDefinido = spritesNpcA
        }else if (this.name == "npc_b") {
            spriteDefinido = spritesNpcB
        }else if (this.name == "npc_c") {
            spriteDefinido = spritesNpcC
        }else {
            console.log("Nome do NPC nao previsto:", this.name);
            
        }

        // Criar as animações
        // const duracaoFrameAnimacao = 70
        // Animações Idle
        // Idle down
        if (spriteDefinido){
        const downIdle = new Animation({
            frames: [
                { graphic: spriteDefinido.getSprite(18, 1) },
                { graphic: spriteDefinido.getSprite(19, 1) },
                { graphic: spriteDefinido.getSprite(20, 1) },
                { graphic: spriteDefinido.getSprite(21, 1) },
                { graphic: spriteDefinido.getSprite(22, 1) },
                { graphic: spriteDefinido.getSprite(23, 1) }
            ],
            frameDuration: 70
        })
        this.graphics.add( downIdle)
    }
    }
}
