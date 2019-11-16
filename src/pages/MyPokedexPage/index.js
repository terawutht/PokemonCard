import React, { Component } from 'react'
import { removeItem } from '../../actions/index'
import { connect } from 'react-redux'
import MyPokedex from '../../components/MyPokedex'
import HeaderText from '../../components/HeaderText'
import OpenModalButton from '../../components/OpenModalButton'
import PokedexListModal from '../../components/PokedexListModal'
import './MyPokedex.css'

class MyPokedexPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myPokemonList: []
        }

        this.modal = React.createRef();
        this.cloesModal = React.createRef();
    }

    componentDidMount(){

    }

    render() {

        let { onRemoveCard, myPokedex } = this.props
         console.log('this.modal:::', this.modal) 

        return (
            <React.Fragment>
                <HeaderText
                    valueText="My Pokedex" />
                <MyPokedex
                    myPokedexCard={myPokedex}
                    removePokedexCard={onRemoveCard} />
                <OpenModalButton
                    refModal={this.modal}
                />
                <PokedexListModal
                    refModal={this.modal}
                    refCloesModal={this.cloesModal} />
            </React.Fragment >
        )
    }
}

const mapStateToProps = state => {
    return { myPokedex: state.Card }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCard: id => dispatch(removeItem(id)),
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(MyPokedexPage)

