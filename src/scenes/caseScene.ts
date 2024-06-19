import { Actor, Color, DefaultLoader, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any


    private textoDaCena?: string = ""
    caseTexto?: HTMLElement
    private actorFeliz?: Actor
 
    // arrei guardar varios valores na lista com imagem
   

    // //  Método para esmaecer um elemento html
    //  fadeOutElement(elemento: HTMLElement) {
    //     // pegar opacidade do elemento HTML
    //     let opacidade = parseFloat(elemento.style.opacity)
        
    //     // o intervalo de repeticao da opacidade
    //     setInterval(() => {
    //         // se elemento ainda esta visivel 
    //         if (opacidade > 0) {
    //             // diminuir a opacidade
    //             opacidade -= opacidade - 0.01

    
    //             // atualizar a opacidade do elemento 
    //             elemento.style.opacity = opacidade.toString()
    
    //         }

    //     },  20)

        
    // }


    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#AFA083")
        // criar elemento com descricao da empresa
        this.caseTexto = document.createElement("div") as HTMLElement
        // Adicionar classe na div criada (caseTexto)
        this.caseTexto.classList.add("texto-case")

        // defiinir opacidade do elemento para 1 = visivel
        this.caseTexto.style.opacity = "1"

        // inserir caseTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.caseTexto)

            // valor da imagem se for mais de uma
            // this.listaImagem = [actorFeliz?]
       
        
        
        // criacao do actor para imagem 
        let actorfeliz = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight - 50)
         })
        // carregando imagem 
        let spritefeliz = Resources.Feliz.toSprite()
        spritefeliz.scale = vec(0.2, 0.2)

        // zoom da imagem
        // this.actorFeliz!.graphics.current!.scale = vec(0.4,0.4)
        
        
        //  mostrar actor na tela
         actorfeliz.graphics.add(spritefeliz)
        this.add(actorfeliz)

         this.input.keyboard.on("press", (event) => {
            if(event.key == Keys.Esc ) {
                // this.fadeOutElement(this.caseTexto!)
                engine.goToScene("exposicao")
            }
        })

    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // fazer a caixa aparecer
        this.caseTexto!.style.opacity = "1"

        // pegar dados vindo da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        //  se for a mesa a 
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.textoDaCena = " é a descrição do case A"
            // adicionar titulo e paragrafo dentro do conteudo da div
            this.caseTexto!.innerHTML = ` <h2>${this.textoDaCena}😉  </h2>`

            // inserir as imagens em determinado espaco especifico
            // this.actorFeliz?.graphics.add(this.listaImagem![0]) 
            // 0 = image 1,comecar a contar sempre do zero
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
        // faz a caixa de texto desaparecer ao mudar cena
         this.caseTexto!.style.opacity = "0"
       
        
             }

}
