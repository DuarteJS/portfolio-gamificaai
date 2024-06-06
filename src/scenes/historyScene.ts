import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";



export class historyScene extends Scene {
    // declaracao do elementotexto
    elementotexto?: HTMLElement

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

    // Ao entrsr ou sair da cena,utilizando transicao lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c") // colocar cores customizadas (fromHex)

        // criar elemento com descricao da empresa
        this.elementotexto = document.createElement("div") as HTMLElement
        // defiinir opacidade do elemento para 1 = visivel
        this.elementotexto.style.opacity = "1"
        // inserir elementotexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementotexto)

        // Adicionar classe na div criada (elementotexto)
        this.elementotexto.classList.add("sobre-gamifica")

        // adicionar titulo e paragrafo dentro do conteudo da div
        this.elementotexto.innerHTML = ` <h2>Sobre o Gamifica Ai </h2>
        <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
         usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
         experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
         equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
         desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.😉 `


        // Desafio Imagem gamificaai nahistoryScene
        let actorG = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight)


        })
        // carregar imagem
        let ImagemG = Resources.ImagemG.toSprite()
        ImagemG.scale = vec(0.7, 0.7)





        // Configurar o actor para usar a imagem
        actorG.graphics.add(ImagemG)

        // adicionando Actor Logo na tela 
        this.add(actorG)

        // configurar a cena para monitorar o evento de tecla personalizada    
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter || event.key == Keys.NumpadEnter) {
                // criar transicao suave do elemento texto / ! = confia que nao ira nulo
                this.fadeOutElement(this.elementotexto!)

                // direcionar para a proxima cena
                engine.goToScene("gamificacao")
            }
        })
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // remover elemento texto da tela 
        this.elementotexto?.remove()
    }


}