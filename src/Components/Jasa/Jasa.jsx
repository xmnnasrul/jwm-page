/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Footer from './../Footer/Footer'
import './Jasa.css'
function Jasa() {
    return (
        <>
            <div className="Jasa">

                <div className="Title">
                    <h2>Jasa Joki</h2>
                </div>

                <div className="Jasa-Content">
                    <div className="Card">
                        <div className="Card-Title">
                            <h5>Jasa Joki Per Bintang</h5>
                        </div>
                        <div className='Card-Center'>
                        <form action="#">
                            <input type="text" placeholder='Username' />
                            <div className="Server">
                                <input type="number" placeholder='ID' />
                                <input type="number" placeholder='Server' />
                            </div>
                            <input type="text" placeholder='Rank' />
                            <input type="text" placeholder='Jumlah Bintang' /><br></br>
                            <div className="Submit">
                            <button >Submit</button >
                            </div>
                            <button style={{ display: "none" }}>
                                <a href="#" className='Pembayaran'>Wa</a>
                            </button>
                        </form>
                        </div>
                    </div>

                    {/* Joki paketan */}
                    <div className="Card">
                        <div className="Card-Title">
                            <h5>Jasa Joki Paket</h5>
                        </div>
                        <div className='Card-Center'>
                        <form action="#">
                            <input type="text" placeholder='Username' />
                            <div className="Server">
                                <input type="number" placeholder='ID' />
                                <input type="number" placeholder='Server' />
                            </div>
                            <input type="text" placeholder='Pilih Rank' /><br></br>
                            <div className="Submit">
                            <button >Submit</button >
                            </div>
                            <button style={{ display: "none" }}>
                                <a href="#" className='Pembayaran'>Wa</a>
                            </button>
                        </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Jasa