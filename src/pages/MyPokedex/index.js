import React, { Component } from 'react'
import { removeItem } from '../../actions/index'
import { connect } from 'react-redux'
import ItemList from '../../components/ItemList'
import './MyPokedex.css'
import PokemonList from '../../components/PokemonList'

class MyPokedex extends Component {
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
                <h1 style={{ textAlign: "center" }}>My Pokedex</h1>
                <div className="flexColumn box-list" style={{ marginBottom: "100px" }}>
                    {(myPokemon.length > 0) &&
                        myPokemon.map((e, i) => {
                            return <div key={i} className="flexRow item">
                                <div style={{ width: "80%" }}>
                                    <ItemList name={e.name} pic={e.pic} imageUrl={e.imageUrl} hp={e.hp} />
                                </div>
                                <div style={{ width: "20%" }}>
                                    <button className="btn-light"
                                        onClick={() => onRemoveCard(e.id)}>Delete</button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="footer">
                    <div className="div-circle" onClick={() => this.modal.current.style.display = "block"}>
                        <img src={require('../../assets/icon/add.png')} 
                        style={{ width: "70px", height: "70px", color: "#FFF",marginTop:"36px",marginLeft:"36px" }} />
                    </div>
                </div>
                <div id="myModal" className="modal" ref={this.modal}>
                    <div className="modal-content">
                        <span className="close" ref={this.cloesModel} onClick={() => this.modal.current.style.display = "none"}>×</span>
                        <PokemonList />
                    </div>
                </div>
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
)(MyPokedex)

