import { Color, Engine, Scene } from "excalibur";

export class gamificationScene extends Scene{
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.ExcaliburBlue
    }
}

// Ao entrsr ou sair da cena,utilizando transicao lenta
onTransition(direction: "in" | "out"): Transition | undefined {
    return new FadeInOut({
        direction: direction,
        color: Color.Black,
        duration: 1000
    })
}
