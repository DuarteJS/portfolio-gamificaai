import { Actor, CollisionType, Color, Engine, SpriteSheet, Vector, Animation, Sprite } from "excalibur";
import { Resources } from "../resources";

export class Npc extends Actor {
   

    constructor(posicao: Vector, cor: Color, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            color: cor,
            collisionType: CollisionType.Fixed
        })
    }
    onInitialize(engine: Engine<any>): void {
        // Configurar spritesheet do npc
        const npcSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSpriteSheet,
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

        // Criar as animações
        const duracaoFrameAnimacao = 70
        // Animações Idle
        // Idle front
        const upIdle = new Animation({
            frames: [
                { graphic: npcSpriteSheet.getSprite(18, 1) },
                { graphic: npcSpriteSheet.getSprite(19, 1) },
                { graphic: npcSpriteSheet.getSprite(20, 1) },
                { graphic: npcSpriteSheet.getSprite(21, 1) },
                { graphic: npcSpriteSheet.getSprite(22, 1) },
                { graphic: npcSpriteSheet.getSprite(23, 1) }
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-idle", upIdle)
    }
}
