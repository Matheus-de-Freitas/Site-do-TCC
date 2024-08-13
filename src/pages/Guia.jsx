import Header from "../components/Header"

import Globo from"../assets/referencias/globo.png"
import Planta from "../assets/referencias/folha.png"
import Planta2 from "../assets/referencias/folha2.png"
import Gota from "../assets/referencias/gota.png"
import Relogio from "../assets/referencias/relogio.png"
import Retangulo from "../assets/retangulo.png"

export default function Guia(){
    return(
        <section className='bg-gradient-to-t from-bg-blue to-slate-900'>
            <Header />
            <section>

        <h1 className="lg:text-6xl font-inter-900 text-3xl font-bold text-tittle-green flex flex-col items-center justify-center m-10 mb-10 lg:text-6xl lg:pl-8
        ">Guia de Uso</h1>

        <div className="lg:flex items-center justify-center mt-32">

        <div className="flex flex-col items-center justify-center mb-12 mt-6">
            <img src={Planta2} className="w-max lg:w-14" alt="icone da planta2" />

            <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green  mb-4 lg:text-xl3">Tanques de abastecimento</h2>
            <p className="lg:text-x29 text-white pl-7 lg:max-w-96 lg:pl-8">A estufa dispõe de 3 tanques: um para a água, um para a solução nutritiva em pó e outro
                    para misturá-las.</p>
        </div>

        <div  className="flex flex-col items-center justify-center mb-12">
            <img src={Gota} className="w-max lg:w-14" alt="icone da gota" />

            <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green mb-4 lg:text-xl3 ">Solução Nutritiva</h2>
            <p className="lg:text-x29 text-white pl-7 lg:max-w-96 lg:pl-8">Coloque a solução nutritiva  em pó e a água nos seus devidos tanques e pronto.</p>
        </div>

        <div  className="flex flex-col items-center justify-center mb-12 ">
            <img src={Planta} className="w-max lg:w-14" alt="icone da planta " />

            <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green mb-3 lg:text-xl3">Reabastecendo</h2>
            <p className="lg:text-x29 text-white pl-7 lg:max-w-96 lg:pl-8">Você receberá uma notificação através do aplicativo quando a estufa precisar ser reabastecida</p>
        </div>

        </div>


        <div className="lg:flex items-center justify-center mt-20 gap-12">
        <div  className="flex flex-col items-center justify-center mb-12">
            <img src={Relogio} className="w-max lg:w-14" alt="icone do relogio" />

            <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green mb-4 lg:text-xl3 ">Estimulando o crescimento</h2>
            <p className="lg:text-x29 text-white pl-7 lg:max-w-96 lg:pl-8">Existem luzes especiais na estufa que simulam a luz do sol, tornando o crescimento das plantas mais eficiente</p>
        </div>

        <div  className="flex flex-col items-center justify-center mb-12">
            <img src={Globo} className="w-max lg:w-14" alt="icone do globo" />

            <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green mb-4 lg:text-xl3 ">Como plantar</h2>
            <p className="lg:text-x29 text-white pl-7 lg:max-w-80 lg:pl-8">Apenas coloque a semente ou muda em um pedaço de esponja e em seguida a coloque na estufa.</p>
        </div>

        <div  className="flex flex-col items-center justify-center mb-12">
            <img src={Relogio} className="w-max lg:w-14" alt="icone do relogio" />

            <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green mb-4 lg:text-xl3 ">Plante e esqueça</h2>
            <p className="lg:text-x29 text-white pl-7 lg:max-w-96 lg:pl-8">Com a HydroGreen, tudo o que você precisa fazer para cuidar de suas plantas é reabastecer a estufa, e nada mais.</p>
        </div>

        
        </div>
        <div className="lg:mt-20 flex flex-col items-center justify-between pb-12">
            <button className="lg:max-w-xl max-w-56">
                <img src={Retangulo}  alt="icone do play" />
            </button>

        </div>

       

        
    </section>
        </section>
    )
}