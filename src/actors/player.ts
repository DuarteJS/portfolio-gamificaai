// import { Actor, Animation, CollisionType, Color, Engine, Keys, Sprite, SpriteSheet, Vector, vec } from "excalibur";
// import { Resources } from "../resources";

// export class Player extends Actor {
//     // propriedades do player
//     private velocidade: number = 180
//     private ultimaDirecao: string = "down"  


//     // configuracao do player 
//     constructor(posicao: Vector) {
//         super({
//             pos: posicao,
//             width: 32,
//             height: 32,
//             name: "jogador",
//             color: Color.Red,
//             collisionType: CollisionType.Active

//         })
//     }

//     onInitialize(engine: Engine<any>): void {
//         // configurar sprite do player
//         const PlayerSpriteSheet = SpriteSheet.fromImageSource({
//             image: Resources.PlayerSpriteSheet,
//             grid: {
//                 spriteWidth: 32,
//                 spriteHeight: 64,
//                 columns: 56,
//                 rows: 20
//             },
//             spacing: {
//                 originOffset: {
//                     y: 0

//                 }
//             }
//         })
//         // criar as animacoes
//         const duracaoFrameAnimacao = 70

//         // Animacoes idle
//         //  idle esquerda
//         const leftIdle = new Animation({
//             frames: [
//                 { graphic: PlayerSpriteSheet.getSprite(12, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(13, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(14, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(15, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(16, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(17, 1) }
//             ],
//             frameDuration: duracaoFrameAnimacao
//         })
//         this.graphics.add("left-idle", leftIdle)
//         // this.graphics.use("left-idle")

//         // idle direita
//         const RightIdle = new Animation({
//             frames: [
//                 { graphic: PlayerSpriteSheet.getSprite(0, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(1, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(2, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(3, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(4, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(5, 1) }
//             ],
//             frameDuration: duracaoFrameAnimacao
//         })
//         this.graphics.add("right-idle", RightIdle)
//         // this.graphics.use("right-idle")


//         // idle cima
//         const upIdle = new Animation({
//             frames: [
//                 { graphic: PlayerSpriteSheet.getSprite(6, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(7, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(8, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(9, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(10, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(11, 1) }
//             ],
//             frameDuration: duracaoFrameAnimacao
//         })
//         this.graphics.add("up-idle", upIdle)
//         // this.graphics.use("up-idle")

//         // idle baixo
//         const downtIdle = new Animation({
//             frames: [
//                 { graphic: PlayerSpriteSheet.getSprite(18, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(19, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(20, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(21, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(22, 1) },
//                 { graphic: PlayerSpriteSheet.getSprite(23, 1) }
//             ],
//             frameDuration: duracaoFrameAnimacao
//         })
//         this.graphics.add("down-idle", downtIdle)
//         // this.graphics.use("down-idle")

//         // definir animacao inicial
//         this.graphics.use("down-idle")

//         // definir zoom
//         // this.graphics.current!.scale = vec(1.6, 1.6)s

//         // animacoes walk
//         // andar para a esquerda
//         const leftwalk = new Animation({
//             frames: [
//                 { graphic: PlayerSpriteSheet.getSprite(12, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(13, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(14, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(15, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(16, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(17, 2) }
//             ],
//             frameDuration: duracaoFrameAnimacao
//         })
//         this.graphics.add("left-walk", leftwalk)
//         // this.graphics.use("left-walk")


//         // andar para a direita
//         const rightwalk = new Animation({
//             frames: [
//                 { graphic: PlayerSpriteSheet.getSprite(0, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(1, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(2, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(3, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(4, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(5, 2) }
//             ],
//             frameDuration: duracaoFrameAnimacao
//         })
//         this.graphics.add("right-walk", rightwalk)
//         // this.graphics.use("right-walk")

//         // andar para a baixo
//         const downwalk = new Animation({
//             frames: [
//                 { graphic: PlayerSpriteSheet.getSprite(18, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(19, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(20, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(21, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(22, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(23, 2) }
//             ],
//             frameDuration: duracaoFrameAnimacao
//         })
//         this.graphics.add("down-walk", downwalk)
//         // this.graphics.use("down-walk")

//         // andar para cima
//         const upwalk = new Animation({
//             frames: [
//                 { graphic: PlayerSpriteSheet.getSprite(6, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(7, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(8, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(9, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(10, 2) },
//                 { graphic: PlayerSpriteSheet.getSprite(11, 2) }
//             ],
//             frameDuration: duracaoFrameAnimacao
//         })
//         this.graphics.add("up-walk", upwalk)
//         // this.graphics.use("up-walk")

//         // configurar player para monitorar evento "hold" -> segurar a tecla
//         engine.input.keyboard.on("hold", (event) => {
//             // detectar qual tecla esta pressionada
//             switch (event.key) {
//                 case Keys.Left:
//                 case Keys.A:
//                     // mover para a esquerda 
//                      // definir animacao
//                     this.graphics.use("left-walk")
//                     // define a velociade x para negativa ,que significa movimentar o player para a esquerda
//                     this.vel.x = -this.velocidade

//                     // guardar a ultimaDirecao
//                     this.ultimaDirecao = "left"
//                     break;

//                 case Keys.Right:
//                 case Keys.D:
//                     // mover para a direita 
//                      // definir animacao
//                     this.graphics.use("right-walk")
//                     // defina a  velocidade x para positiva = movimentar para a direita
//                     this.vel.x = this.velocidade
//                     // guadar ultima direcao
//                         this.ultimaDirecao = "right"
//                     break;


//                 case Keys.Up:
//                 case Keys.W:
//                     // mover para cima
//                 // definir animacao
//                     this.graphics.use("up-walk")

//                     // defina a velocidade y para negativa ,que significa movimentar o player para cima
//                     this.vel.y = -this.velocidade

//                     this.ultimaDirecao = "up"

//                     break;

//                 case Keys.Down:
//                 case Keys.S:
//                     // mover para baixo
//                      // definir animacao
//                     this.graphics.use("down-walk")
//                     // defina a velocidade de y para positivo para ir para baixo
//                     this.vel.y = this.velocidade

//                     this.ultimaDirecao = "down"

//                     break;


//                 default:
//                     // zera a velocidade do player, PARA a movimentacao
//                     this.vel.x = 0
//                     this.vel.y = 0
//                     break;

//             }

//         })
//         // configurar o player para monitorar evento "release " -> soltar
//         engine.input.keyboard.on("release", (event) => {
//             // fazer o player parar ao soltar as teclas de movimentacao lateral
//             if (
//                 event.key == Keys.A ||
//                 event.key == Keys.Left ||
//                 event.key == Keys.D ||
//                 event.key == Keys.Right
//             ) {
//                 // zerar velocidade horizontal
//                 this.vel.x = 0

//             }
//             // para a movimentacao vertical ao soltar as teclas de movimentacao
//             if (
//                 event.key == Keys.W ||
//                 event.key == Keys.Up ||
//                 event.key == Keys.S ||
//                 event.key == Keys.Down
//             ) {
//                 // zerar velocidade vertical
//                 this.vel.y = 0
//             }
            
//             // ao parar o player, definir animacao idle da ultima direcao
//                 if( this.vel.x == 0 && this.vel.y == 0 ) {
//                     // ultima direcao - left - up - right - down
//                     // colar a ultima direcao + -idle -> ex.left-idle,up-idle-down-idle, right-idle
//                     this.graphics.use(this.ultimaDirecao = "-idle")
//                     // this.graphics.current!.scale = vec(1.6,1.6)

//                 }
            
//         })

//     }




// }

import { Actor, Animation, Collider, CollisionContact, CollisionType, Color, Engine, Keys, Side, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    // Propriedades do player
    private velocidade: number = 180
    private ultimaDirecao: string = "down"

    private temObjetoProximo: boolean = false
    private ultimoColisor?: Collider

    // Configuração do Player
    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width: 32,  // 35
            height: 32, // 50
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active,
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Configurar spritesheet do player
        const playerSpriteSheet = SpriteSheet.fromImageSource({
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
        // Idle Esquerda
        const leftIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(12, 1) },
                { graphic: playerSpriteSheet.getSprite(13, 1) },
                { graphic: playerSpriteSheet.getSprite(14, 1) },
                { graphic: playerSpriteSheet.getSprite(15, 1) },
                { graphic: playerSpriteSheet.getSprite(16, 1) },
                { graphic: playerSpriteSheet.getSprite(17, 1) }
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-idle", leftIdle)

        // Idle Direita
        const rightIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(0, 1) },
                { graphic: playerSpriteSheet.getSprite(1, 1) },
                { graphic: playerSpriteSheet.getSprite(2, 1) },
                { graphic: playerSpriteSheet.getSprite(3, 1) },
                { graphic: playerSpriteSheet.getSprite(4, 1) },
                { graphic: playerSpriteSheet.getSprite(5, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-idle", rightIdle)

        // Idle Cima
        const upIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(6, 1) },
                { graphic: playerSpriteSheet.getSprite(7, 1) },
                { graphic: playerSpriteSheet.getSprite(8, 1) },
                { graphic: playerSpriteSheet.getSprite(9, 1) },
                { graphic: playerSpriteSheet.getSprite(10, 1) },
                { graphic: playerSpriteSheet.getSprite(11, 1) }
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-idle", upIdle)

        // Idle Baixo
        const downIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(18, 1) },
                { graphic: playerSpriteSheet.getSprite(19, 1) },
                { graphic: playerSpriteSheet.getSprite(20, 1) },
                { graphic: playerSpriteSheet.getSprite(21, 1) },
                { graphic: playerSpriteSheet.getSprite(22, 1) },
                { graphic: playerSpriteSheet.getSprite(23, 1) }
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-idle", downIdle)

        // Definir animação inicial do Player
        this.graphics.use("down-idle")

        // Definir zoom
        // this.graphics.current!.scale = vec(1.7, 1.7)

        // Animações Walk
        // Andar para esquerda
        const leftWalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(12, 2) },
                { graphic: playerSpriteSheet.getSprite(13, 2) },
                { graphic: playerSpriteSheet.getSprite(14, 2) },
                { graphic: playerSpriteSheet.getSprite(15, 2) },
                { graphic: playerSpriteSheet.getSprite(16, 2) },
                { graphic: playerSpriteSheet.getSprite(17, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-walk", leftWalk)

        // Andar para direita
        const rightWalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(0, 2) },
                { graphic: playerSpriteSheet.getSprite(1, 2) },
                { graphic: playerSpriteSheet.getSprite(2, 2) },
                { graphic: playerSpriteSheet.getSprite(3, 2) },
                { graphic: playerSpriteSheet.getSprite(4, 2) },
                { graphic: playerSpriteSheet.getSprite(5, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-walk", rightWalk)

        // Andar para cima
        const upWalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(6, 2) },
                { graphic: playerSpriteSheet.getSprite(7, 2) },
                { graphic: playerSpriteSheet.getSprite(8, 2) },
                { graphic: playerSpriteSheet.getSprite(9, 2) },
                { graphic: playerSpriteSheet.getSprite(10, 2) },
                { graphic: playerSpriteSheet.getSprite(11, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-walk", upWalk)

        // Andar para baixo
        const downWalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(18, 2) },
                { graphic: playerSpriteSheet.getSprite(19, 2) },
                { graphic: playerSpriteSheet.getSprite(20, 2) },
                { graphic: playerSpriteSheet.getSprite(21, 2) },
                { graphic: playerSpriteSheet.getSprite(22, 2) },
                { graphic: playerSpriteSheet.getSprite(23, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-walk", downWalk)



        // Configurar player para monitorar evento "hold" -> segurar tecla
        engine.input.keyboard.on("hold", (event) => {
            // Detectar qual tecla está pressionada
            switch (event.key) {
                case Keys.Left:
                case Keys.A:
                    // Mover para esquerda
                    // Define a velocidade x para negativa, que significa movimentar o player para a esquerda
                    this.vel.x = -this.velocidade

                    // Definir animação
                    this.graphics.use("left-walk")
                    // this.graphics.current!.scale = vec(1.7, 1.7)

                    // Guardar ultima direção
                    this.ultimaDirecao = "left"

                    break;

                case Keys.Right:
                case Keys.D:
                    // Mover para direita
                    // Define a velocidade x para positiva, que significa movimentar o player para a direita
                    this.vel.x = this.velocidade

                    // Definir animação
                    this.graphics.use("right-walk")
                    // this.graphics.current!.scale = vec(1.7, 1.7)

                    // Guardar ultima direção
                    this.ultimaDirecao = "right"

                    break;

                case Keys.Up:
                case Keys.W:
                    // Mover para cima
                    // Define a velocidade y para negativa, que significa movimentar o player para cima
                    this.vel.y = -this.velocidade

                    // Definir animação
                    this.graphics.use("up-walk")
                    // this.graphics.current!.scale = vec(1.7, 1.7)

                    // Guardar ultima direção
                    this.ultimaDirecao = "up"

                    break;

                case Keys.Down:
                case Keys.S:
                    // Mover para baixo
                    // Define a velocidade y para positiva, que significa movimentar o player para baixo
                    this.vel.y = this.velocidade

                    // Definir animação
                    this.graphics.use("down-walk")
                    // this.graphics.current!.scale = vec(1.7, 1.7)

                    // Guardar ultima direção
                    this.ultimaDirecao = "down"

                    break;

                default:
                    // Zera a velocidade do Player, PARA a movimentação
                    this.vel.x = 0
                    this.vel.y = 0

                    break;
            }
        })

        // Configura o player para monitorar evento "release" -> soltar
        engine.input.keyboard.on("release", (event) => {
            // Fazer o player parar ao soltar as teclas de movimentação
            // Parar movimentação lateral ao soltar as teclas de movimentação lateral
            if (
                event.key == Keys.A ||
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right
            ) {
                // Zerar velocidade horizontal
                this.vel.x = 0
            }

            // Parar movimentação vertical ao soltar as teclas de movimentação vertical
            if (
                event.key == Keys.W ||
                event.key == Keys.Up ||
                event.key == Keys.S ||
                event.key == Keys.Down
            ) {
                // Zerar velocidade vertical
                this.vel.y = 0
            }

            // Ao parar o player, definir animação idle da ultima direção
            if (this.vel.x == 0 && this.vel.y == 0) {
                // ultimaDirecao - left, right, up, down
                // Colar a ultimaDirecao + -idle -> ex. left-idle, right-idle, up-idle 
                this.graphics.use(this.ultimaDirecao + "-idle")
                // this.graphics.current!.scale = vec(1.6, 1.6)
            }

        })
    }

onPreCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
    // mostrar no console a colisao
    // console.log(other.owner.name);

    // indicar que tem um objeto proximo 
    this.temObjetoProximo = true
    // registrar o ultimo objeto colidido
    this.ultimoColisor = other
    
}

onPreUpdate(engine: Engine<any>, delta: number): void {
    // detectar se o player esta distante no ultimo objeto colidido
    if (this.ultimoColisor && this.pos.distance(this.ultimoColisor.worldPos) > 35) {
        // marcar que o objeto nao esta proximo
        this.temObjetoProximo = false

        console.log("Está longe");

        
    }
}

}

