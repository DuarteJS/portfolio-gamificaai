import { Actor, Color, DefaultLoader, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any

    private textoDaCena?: string = ""
    caseTexto?: HTMLElement

    //  Método para esmaecer um elemento html
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


    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray
        // criar elemento com descricao da empresa
        this.caseTexto = document.createElement("div") as HTMLElement
        // defiinir opacidade do elemento para 1 = visivel
        this.caseTexto.style.opacity = "1"
        // inserir caseTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.caseTexto)

        // Adicionar classe na div criada (caseTexto)
        this.caseTexto.classList.add("sobre-case")
         // carregando imagem 
         let spritefeliz = Resources.Feliz.toSprite()
         spritefeliz.scale = vec(0.2, 0.2)
 
         // criacao do actor para imagem 
         let actorfeliz = new Actor({
             pos: vec(950, 400)
 
         })
 
         actorfeliz.graphics.add(spritefeliz)

 
         this.add(actorfeliz)

         this.input.keyboard.on("press", (event) => {
            if(event.key == Keys.Enter || event.key == Keys.NumpadEnter) {
                this.fadeOutElement(this.caseTexto!)
                engine.goToScene("exposicao")
            }
        })

    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // pegar dados vindo da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        //  se for a mesa a 
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A"
            // adicionar titulo e paragrafo dentro do conteudo da div
            this.caseTexto!.innerHTML = ` <h2>${this.textoDaCena}😉  </h2>`
        }

        // se for b
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"
            // adicionar titulo e paragrafo dentro do conteudo da div
            this.caseTexto!.innerHTML = ` <h2>${this.textoDaCena}😉  </h2>`

        }
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"
            // adicionar titulo e paragrafo dentro do conteudo da div
            this.caseTexto!.innerHTML = ` <h2>${this.textoDaCena}😉  </h2>`
        }

    
    
     }
     onDeactivate(context: SceneActivationContext<undefined>): void {
         this.caseTexto!.remove()
       
        
             }

            //  onPreLoad(loader: DefaultLoader): void {
            //      this.caseTexto
            //  }
}
