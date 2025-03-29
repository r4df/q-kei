import React, { Component } from 'react'
import ContainerType1 from '../../../component/ContainerType1'


export class TicTacToe extends Component {
    render() {
        return (
            <div className='container'>
                <ContainerType1>
                    <h1 className="m-0">Tic-Tac-Toe</h1>
                </ContainerType1>

                <ContainerType1>
                    <div className='container border border-1 border-secondary' style={{ width: 200 }}>
                        <div className='row'>
                            <div className=' col-4'>
                                <input type="button" value="1" />
                            </div>
                            <div className=' col-4'>
                                <input type="button" value="2" />
                            </div>
                            <div className=' col-4'>
                                <input type="button" value="3" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className=' col-4'>
                                <input type="button" value="4" />
                            </div>
                            <div className=' col-4'>
                                <input type="button" value="5" />
                            </div>
                            <div className=' col-4'>
                                <input type="button" value="6" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className=' col-4'>
                                <input type="button" value="7" />
                            </div>
                            <div className=' col-4'>
                                <input type="button" value="8" />
                            </div>
                            <div className=' col-4'>
                                <input type="button" value="9" />
                            </div>
                        </div>

                    </div>
                </ContainerType1>

            </div>
        )
    }
}

export default TicTacToe
