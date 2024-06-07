// @ts-check

import { Actor, Color, Direction, Engine, FadeInOut, Keys, Resource, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";



export class gamificationScene extends Scene {
    elementoHTML?: HTMLElement

     // Método para esmaecer um elemento html
     fadeOutElement(elemento: HTMLElement) {
        // pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)
        
        // o intervalo de repeticao da opacidade
        setInterval(() => {
            // se elemento ainda esta visivel 
            if (opacidade > 0) {
                // diminuir a opacidade
                opacidade -= opacidade - 0.01
    
                // atualizar a opacidade do elemento 
                elemento.style.opacity = opacidade.toString()
    
            }

        },  20)


    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.ExcaliburBlue,
            

        this.elementoHTML = document.createElement("div") as HTMLElement
        this.elementoHTML.style.opacity = "1"

        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementoHTML)

        this.elementoHTML.innerHTML = `<h2>Oque é gamificação</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.😉</p>
        `
        this.elementoHTML.classList.add("gamificacao")

        // carregando imagem 
        let spritequalquer = Resources.Qualquer.toSprite()
        spritequalquer.scale = vec(0.7, 0.7)

        // criacao do actor para imagem 
        let actorqualquer = new Actor({
            pos: vec(300,engine.halfDrawHeight)

        })

        actorqualquer.graphics.add(spritequalquer)

        this.add(actorqualquer)

        // configurar a cena para detectar a tecla enter e ir para a proxima cena
        this.input.keyboard.on("press", (event) => {
            if(event.key == Keys.Enter || event.key == Keys.NumpadEnter) {
                this.fadeOutElement(this.elementoHTML!)
                engine.goToScene("exposicao")
            }
        })
    }
    
    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementoHTML?.remove()
    }

    
}


