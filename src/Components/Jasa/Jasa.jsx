import React, { useState } from 'react'
import Footer from './../Footer/Footer'
import './Jasa.css'
function Jasa() {
    const [selectedOptionPaket, setSelectedOptionPaket] = useState('');

    const handleChangePaket = (e) => {
        setSelectedOptionPaket(e.target.value);
    }
    const [selectedOptionBintang, setSelectedOptionBintang] = useState('');

    const handleChangeBintang = (e) => {
        setSelectedOptionBintang(e.target.value);
    }
    return (
        <div className='body'>
            <div className="Jasa">

                <div className="Title">
                    <h2>Jasa Joki</h2>
                </div>

                <div className="Jasa-Content">

                    {/* Joki paketan */}
                    <div className="Card">
                        <div className="Card-Title">
                            <h5>Jasa Joki Paket</h5>
                        </div>
                        <div className='Card-Center'>
                            <form action="#">
                                <input className='input' type="text" placeholder='Username' />
                                <div className="Server">
                                    <input className='input' type="tel" placeholder='ID' />
                                    <input className='input' type="tel" placeholder='Server' />
                                </div>
                                <div>
                                    <select value={selectedOptionPaket} onChange={handleChangePaket} className="custom-select">
                                        <option value="option1">Pilih Rank</option>
                                        <option value="option2">Master-GM</option>
                                        <option value="option3">GM-Epic</option>
                                        <option value="option4">Epic-Legend</option>
                                        <option value="option5">Legend-Mythic</option>
                                    </select>
                                </div>
                                <div className="Submit ">
                                    <button className='button-80' >Submit</button >
                                </div>
                                <button style={{ display: "none" }}>
                                    <a href="#" className='Pembayaran'>Wa</a>
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Joki per bintang */}
                    <div className="Card">
                        <div className="Card-Title">
                            <h5>Jasa Joki per Bintang</h5>
                        </div>
                        <div className='Card-Center'>
                            <form action="#">
                                <input className='input' type="text" placeholder='Username' />
                                <div className="Server">
                                    <input className='input' type="tel" placeholder='ID' />
                                    <input className='input' type="tel" placeholder='Server' />
                                </div>
                                <select value={selectedOptionBintang} style={{ marginBottom: "5px" }} onChange={handleChangeBintang} className="custom-select">
                                    <option>Pilih Rank</option>
                                    <option value="Elite">Elite</option>
                                    <option value="option3">Master</option>
                                    <option value="option4">Grandmaster</option>
                                    <option value="option5">Epic</option>
                                    <option value="option6">Legend</option>
                                    <option value="option7">Mythic</option>
                                </select>
                                <br></br>
                                <input className='input' type="tel" placeholder='Jumlah Bintang' />
                                <div className="Submit">
                                    <button className='button-80' >Submit</button >
                                </div>
                                <button style={{ display: "none" }}>
                                    <a href="#" className='Pembayaran'>Wa</a>
                                </button>
                            </form>
                        </div>
                    </div>


                </div>

            </div >
            <Footer />
        </div >
    )
}

export default Jasa