import React, { Component, Suspense, lazy } from 'react'
import { addCard } from '../../actions/index'
import { connect } from 'react-redux'
import PokemonShowList from './PokedexShowList'
import PokemonFindInput from './PokedexFindInput'

// const PokedexShowList = React.lazy(() => import('./PokedexShowList'))

const axios = require('axios');

const config = {
    headers: { 'content-type': 'application/json; charset=utf-8' },
}

class PokedexList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokedexList: []
        }

        this.handleFind = this.handleFind.bind(this)
    }

    handleFind = value => {
        axios.get(`https://api.pokemontcg.io/v1/cards?name=${value}`, config)
            .then((res) => this.setState({ pokedexList: res.data.cards }))
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    componentDidMount() {
        axios.get('https://api.pokemontcg.io/v1/cards', config)
            .then((res) => this.setState({ pokedexList: res.data.cards }))
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        let { onAddCard, myPokedex } = this.props
        let { pokedexList } = this.state

        myPokedex.forEach((e, i) => {
            pokedexList = pokedexList.filter((val, index) => val.id != e.id);
        })
        // console.log('pokedexList:::', pokedexList)
        return (
            <React.Fragment>
                <Suspense fallback={<div>Loading...</div>}>
                    <PokemonFindInput handleFind={this.handleFind} />
                    <PokemonShowList pokedexList={pokedexList} addPokedexCard={onAddCard} />
                </Suspense>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return { myPokedex: state.Card }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCard: data => dispatch(addCard(data)),
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(PokedexList)