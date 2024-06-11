import { Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";

export class expoScene extends Scene{
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
 
    }

    onInitialize(engine: Engine<any>): void {
        // carregar o mapa
        let tiledMap = Resources.Mapa

        // definir offset para renderizacao do mapa
        let offsetX = 138
        let offsetY = 100

        // adicionar o mapa na cena 
        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY),
        })

        // Definir zoom da camera para aumentar um pouco a visualizacao
        this.camera.zoom = 1.3

        // criacao e configuracao
        let jogador = new Player()

        // define z-index do player, util se algum outro elemento ficar "por cima" do jogador
        jogador.z = 1

        //  adicionar o player na cena
        this.add(jogador)
    }
}
