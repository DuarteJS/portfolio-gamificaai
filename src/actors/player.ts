import { Actor, Color, Engine, Keys, vec } from "excalibur";

export class Player extends Actor {
    // propriedades do player
    private velocidade: number = 180


    // configuracao do player 
    constructor() {
        super({
            pos: vec(500, 500),
            width: 32,
            height: 32,
            name: "jogador",
            color: Color.Red,

        })
    }

    onInitialize(engine: Engine<any>): void {
        // configurar player para monitorar evento "hold" -> segurar a tecla
        engine.input.keyboard.on("hold", (event) => {
            // detectar qual tecla esta pressionada
            switch (event.key) {
                case Keys.Left: 
                case Keys.A:
                    // mover para a esquerda 
                    // define a velociade x para negativa ,que significa movimentar o player para a esquerda
                    this.vel.x = -this.velocidade
                    break;

                case Keys.Right:
                case Keys.D:
                    // mover para a direita 
                    // defina a  velocidade x para positiva = movimentar para a direita
                    this.vel.x = this.velocidade
                    break;

                case Keys.Up:
                case Keys.W:
                    // mover para cima
                    // defina a velocidade y para negativa ,que significa movimentar o player para cima
                    this.vel.y = -this.velocidade
                    break;

                case Keys.Down:
                    case Keys.S:
                    // mover para baixo
                    // defina a velocidade de y para positivo para ir para baixo
                    this.vel.y = this.velocidade
                    break;


                default:
                    // zera a velocidade do player ,PARA a movimentacao
                    this.vel.x = 0
                    this.vel.y = 0
                    break;

            }

        })
        // configurar o player para monitorar evento "release " -> soltar
        engine.input.keyboard.on("release" , (event) => {
            // fazer o player parar ao soltar as teclas de movimentacao lateral
            if(
                event.key == Keys.A || 
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right
            ){
                // zerar velocidade horizontal
                this.vel.x = 0

            }
            // para a movimentacao vertical ao soltar as teclas de movimentacao
            if(
                event.key == Keys.W || 
                event.key == Keys. Up ||
                event.key == Keys.S ||
                event.key == Keys. Down
            ){
                // zerar velocidade vertical
                this.vel.y = 0
            }
        })

    }



}