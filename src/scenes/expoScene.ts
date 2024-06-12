import { Actor, CollisionType, Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
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


        // adicionar colisao com cada objeto
        // pegar a camada de objetos colisores
        let camadaObjetosColisores = tiledMap.getObjectLayers("ObjetosColisores")[0]


        console.log(camadaObjetosColisores);

        // percorrer os objetos com foreach e para cada objeto renderizar um actor
        camadaObjetosColisores.objects.forEach(objeto =>{
            // configurar o actor
            const ObjetoAtual = new Actor({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
                width: objeto.tiledObject.width,
                height: objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
                // color: Color.Red,
                // z: 99
            })

            // adicionar o colisor do objeto na cena
            this.add(ObjetoAtual)
        })


    }
}
