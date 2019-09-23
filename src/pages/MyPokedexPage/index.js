import React, { Component } from 'react'
import { removeItem } from '../../actions/index'
import { connect } from 'react-redux'
import MyPokedex from '../../components/MyPokedex'
import TextHeader from '../../components/TextHeader'
import Footer from '../../components/Footer'
import ModelPokemon from '../../components/ModelPokemon'
import './MyPokedex.css'

class MyPokedexPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myPokemonList: []
        }

        this.modal = React.createRef();
        this.cloesModel = React.createRef();
    }

    render() {

        let { onRemoveCard, myPokemon } = this.props
        // { console.log('myPokemon', myPokemon) }

        return (
            <React.Fragment>
                <TextHeader
                    text="My Pokedex TEST2" />
                <MyPokedex
                    myPokemon={myPokemon}
                    handlerRemoveCard={onRemoveCard} />
                <Footer
                    handlerClick={() => this.modal.current.style.display = "block"} />
                <ModelPokemon
                    refModel={this.modal}
                    refCloesModel={this.cloesModel}
                    handlerCloesModel={() => this.modal.current.style.display = "none"} />
            </React.Fragment >
        )
    }
}

const mapStateToProps = state => {
    return { myPokemon: state.Card }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCard: id => dispatch(removeItem(id)),
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(MyPokedexPage)

