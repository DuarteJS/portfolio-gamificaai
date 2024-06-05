// extends = heranca.

import { Actor, Color, Engine, FadeInOut, Font, Keys, Label, Scene, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class welcomeScene extends Scene {

    iniciarJogo?: Label
    // metodo inicio de vida.



    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        // this = essa classe, ou seja, essa cena
        this.backgroundColor = Color.Black

        // configura com o objeto para ser a frase de Bem-Vindo
        let fraseBemVindo = new Label({
            text: "Bem vindo ao portfòlio",
            width: 400,
            height: 50,
            // posicao = X metade da tela, eixo y = 300
            pos: vec(engine.drawWidth / 2, 300),
            font: new Font({
                color: Color.White,
                size: 40,
                textAlign: TextAlign.Center,
                family: "Anta"
            })
        })
        this.iniciarJogo = new Label({
            text: 'Pressione \"Enter"\ para iniciar...',
            pos: vec(engine.halfDrawWidth, 550),
            font: new Font({
                color: Color.White,
                size: 20,
                textAlign: TextAlign.Center,
                family: "Anta",

            })
        })



        // adiciona a frase na cena, tela 
        this.add(fraseBemVindo)

        // configurar actor = ator da logo
        let actorLogo = new Actor({
            pos: vec(engine.drawWidth / 2, 430)
        })


        // Utilizar iamgem logo
        let imagemLogo = Resources.Logo.toSprite()

        // Aplicar zoom na imagem
        imagemLogo.scale = vec(0.4, 0.4)

        // Configurar o actor para usar a imagem
        actorLogo.graphics.add(imagemLogo)

        // adicionando Actor Logo na tela 
        this.add(actorLogo)

        // desafio2
        this.add(this.iniciarJogo)




        // configurar para ficar piscando
        this.iniciarJogo?.actions.repeatForever(context => {
            context.fade(0, 1000)
            context.fade(1, 1000)
        })

        this.input.keyboard.on("press", (event) => {
            //  casoa tecla pressionada for "Enter, deve ir para a proxima Scene"
            if (event.key == Keys.Enter || event.key == Keys.NumpadEnter) {
                // direciona para a cena historia (historiaScene)
                engine.goToScene("historia")
            }
        })
    }
    // forma de fazer o efeito opacidade.
    // onPostUpdate(engine: Engine<any>, delta: number): void {
    //       this.iniciarJogo?.actions.fade(0, 1000)
    //       this.iniciarJogo?.actions.fade(1000 , 1)
    // }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}