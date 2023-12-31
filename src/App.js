import 'bulma/css/bulma.css'
import DogCard from './DogCard'
import aangImg from './images/aang.png'
import kataraImg from './images/katara.png'
import tophImg from './images/toph.png'
import zukoImg from './images/zuko.png'
import irohImg from './images/iroh.png'
import sokkaImg from './images/sokka.png'


function App () {
    return (
        <div>
            <section className="hero is-small is-black">
                <div className="hero-body">
                    <p className="title">Avatar Show</p>

                </div>
            </section>

            <div className="container">
                <section className='section'>
                    <div className="columns">
                        <div className="column is-4">
                        <DogCard 
                                name="Aang"
                                handle="@aang"
                                image={aangImg}
                                description="Aang is the avatar"
                            />
                        </div>
                        <div className="column is-4">
                        <DogCard 
                                name="Katara"
                                handle="@katara"
                                image={kataraImg}
                                description="Waterbending master"
                            />
                        </div>
                        <div className="column is-4">
                        <DogCard 
                                name="Toph"
                                handle="@toph"
                                image={tophImg}
                                description="Blind but powerful earth bender"
                            />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-4">
                        <DogCard 
                                name="Zuko"
                                handle="@zuko"
                                image={zukoImg}
                                description="Zuko is a firebender"
                            />
                        </div>
                        <div className="column is-4">
                        <DogCard 
                                name="uncle Iroh"
                                handle="@iroh"
                                image={irohImg}
                                description="Dont f*** with him"
                            />
                        </div>
                        <div className="column is-4">
                        <DogCard 
                                name="Sokka"
                                handle="@sokka"
                                image={sokkaImg}
                                description="The funniest one"
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default App