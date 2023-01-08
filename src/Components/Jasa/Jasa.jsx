/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Jasa.css'
function Jasa() {
    return (
        <>
            <div className="Jasa">
                <div className="Title">
                    Lorem, ipsum.
                </div>
                <div className="Jasa-Content">
                    <div className="Card">
                        <div className="Card-Title">
                            <h3>Jasa Joki Per Bintang</h3>
                        </div>
                        <form action="#">
                            <input type="text" placeholder='Username' />
                            <div className="Server">
                                <input type="number" placeholder='ID' />
                                <input type="number" placeholder='Server' />
                            </div>
                            <input type="text" placeholder='Rank' />
                            <input type="text" placeholder='Jumlah Bintang' />
                            <input type="button" placeholder='Submit' />
                            <a href="#" className='Pembayaran'>Wa</a>
                        </form>
                    </div>

                    {/* Joki paketan */}
                    <div className="Card">
                        <div className="Card-Title">
                            <h3>Jasa Joki Paket</h3>
                        </div>
                        <form action="#">
                            <input type="text" placeholder='Username' />
                            <div className="Server">
                                <input type="number" placeholder='ID' />
                                <input type="number" placeholder='Server' />
                            </div>
                            <input type="text" placeholder='Pilih Rank' />
                            <input type="button" placeholder='Submit' />
                            <a href="#" className='Pembayaran'>Wa</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jasa