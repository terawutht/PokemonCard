import React, { Component } from 'react'
import { addCard } from '../../actions/index'
import { connect } from 'react-redux'
import ShowList from './ShowList'
import FindPokemon from './FindPokemon'

const axios = require('axios');

const config = {
    headers: { 'content-type': 'application/json; charset=utf-8' },
}

class PokemonList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemonList: []
        }

        this.handleFind = this.handleFind.bind(this)
    }

    handleFind = value => {
        axios.get(`https://api.pokemontcg.io/v1/cards?name=${value}`,config)
            .then((res) => this.setState({ pokemonList: res.data.cards }))
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    componentDidMount() {
        axios.get('https://api.pokemontcg.io/v1/cards', config)
            .then((res) => this.setState({ pokemonList: res.data.cards }))
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        let { onAddCard, myPokemon } = this.props
        let { pokemonList } = this.state

        myPokemon.forEach((e, i) => {
            pokemonList = pokemonList.filter((val, index) => val.id != e.id);
        })

        return (
            <React.Fragment>
                <FindPokemon handleFind={this.handleFind} />
                <ShowList pokemonList={pokemonList} onAddCard={onAddCard} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return { myPokemon: state.Card }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCard: data => dispatch(addCard(data)),
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(PokemonList)