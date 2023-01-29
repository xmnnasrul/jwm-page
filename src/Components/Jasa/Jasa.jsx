import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { SlClose } from 'react-icons/sl'
import Footer from './../Footer/Footer'
import './Jasa.css'

// responsive
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size
}

function Jasa() {
    const [width] = useWindowSize();

    // popup
    const [hargaPaket, setHargaPaket] = useState(false);
    const [hargaBintang, setHargaBintang] = useState(false)
    const [popupPaket, setPopupPaket] = useState(false)
    const [popupBintang, setPopupBintang] = useState(false)

    const handleClosePaket = () => {
        setPopupPaket(false)
    }
    const handleClosebintang = () => {
        setPopupBintang(false)
    }
    const handleCloseHargaPaket = () => {
        setHargaPaket(false)
        setPopupPaket(false)
    }
    const handleCloseHargaBintang = () => {
        setHargaBintang(false)
        setPopupBintang(false)
    }

    // Select option
    const [selectedOptionPaket, setSelectedOptionPaket] = useState('');
    const handleChangePaket = (e) => {
        setSelectedOptionPaket(e.target.value);
    }
    const [selectedOptionBintang, setSelectedOptionBintang] = useState('');
    const handleChangeBintang = (e) => {
        setSelectedOptionBintang(e.target.value);
    }
    // Paket sheet
    const [usernamePaket, setUseramePaket] = useState('')
    const [idPaket, setIdPaket] = useState('')
    const [serverPaket, setServerPaket] = useState('')
    const handleSubmitPaket = (e) => {
        e.preventDefault();
        setPopupPaket(true)
        const data = {
            Username: usernamePaket,
            Id: idPaket,
            Server: serverPaket,
            Rank: selectedOptionPaket
        }
        axios.post('https://sheet.best/api/sheets/457567b4-7ede-4550-88a9-119c1d03b1ae', data).then((response) => {
            // console.log(response);
            setUseramePaket('');
            setIdPaket('');
            setServerPaket('');
            setSelectedOptionPaket('');
        })
    }
    // Bintang sheet
    const [usernameBintang, setUsernameBintang] = useState('')
    const [idBintang, setIdBintang] = useState('')
    const [serverBintang, setServerBintang] = useState('')
    const [jumlahBintang, setJumlahBintang] = useState('')
    const handleSubmitBintang = (e) => {
        e.preventDefault();
        setPopupBintang(true)
        const data = {
            Username: usernameBintang,
            Id: idBintang,
            Server: serverBintang,
            Rank: selectedOptionBintang,
            Bintang: jumlahBintang
        }
        axios.post('https://sheet.best/api/sheets/86c3778b-f341-4715-91ad-8a93844b5aa2', data).then((response) => {
            setUsernameBintang('');
            setIdBintang('');
            setServerBintang('');
            setSelectedOptionBintang('');
            setJumlahBintang('');
        })
    }
    return (
        <div className='body'>
            <div className="Jasa">
                <div className="Title">
                    <h2>Jasa Joki</h2>
                </div>
                {width < 600 ? (<div className='Jasa-Mobile'>
                    <div className="Card">
                        <div className="Card-Title">
                            <h5>Jasa Joki Paket</h5>
                        </div>
                        <div className='Card-Center'>
                            <form action="#" autoComplete='off' onSubmit={handleSubmitPaket}>
                                <input className='input' type="text" placeholder='Username'
                                    onChange={(e) => setUseramePaket(e.target.value)} value={usernamePaket}
                                />
                                <div className="Server">
                                    <input className='input' type="tel" placeholder='ID'
                                        onChange={(e) => setIdPaket(e.target.value)} value={idPaket}
                                    />
                                    <input className='input' type="tel" placeholder='Server'
                                        onChange={(e) => setServerPaket(e.target.value)} value={serverPaket}
                                    />
                                </div>
                                <div>
                                    <select value={selectedOptionPaket} onChange={handleChangePaket} className="custom-select" >
                                        <option value="error">Pilih Rank</option>
                                        <option value="Master-GM">Master-GM</option>
                                        <option value="GM-Epic">GM-Epic</option>
                                        <option value="Epic-Legend">Epic-Legend</option>
                                        <option value="Legend-Mythic">Legend-Mythic</option>
                                    </select>
                                </div>
                                <div className="Submit ">
                                    <button className='button-80' onClick={() => setHargaPaket(true)} >Harga</button >
                                    <button className='button-80' onClick={() => setPopupPaket(true)}>Kirim</button >
                                </div>
                            </form>
                        </div>
                    </div>
                    {
                        popupPaket &&
                        <div>
                            <div className="popup-card">
                                <div className="popup-header">
                                    <h3>Terimakasih</h3>
                                    <button className='close' style={{ color: "black", fontSize: "25px" }} onClick={handleClosePaket}><SlClose /></button>
                                </div>
                                <div className="popup-body">
                                    <p>
                                        Terimakasih sudah melakukakan pemesanan, untuk konfirmasi lebih lanjut silahkan hubungi lewat Whatsapp.
                                    </p>
                                    <button className='button'><BsWhatsapp /> Whatsapp</button>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        hargaPaket &&
                        <div>
                            <div className="popup-card">
                                <div className="popup-header">
                                    <h3>List Harga</h3>
                                    <button className='close' style={{ color: "black", fontSize: "25px" }} onClick={handleCloseHargaPaket}><SlClose /></button>
                                </div>
                                <div className="popup-body">
                                    <ul>
                                        <li><span>Master-GM : Rp 50.000</span></li>
                                        <li><span>Gm-Epic : Rp 70.000</span></li>
                                        <li><span>Epic-Legend : Rp 125.000</span></li>
                                        <li><span>Legend-Mythic : Rp 225.000</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }

                    {/* Joki per bintang */}
                    <div className="Card">
                        <div className="Card-Title">
                            <h5>Jasa Joki per Bintang</h5>
                        </div>
                        <div className='Card-Center'>
                            <form action="#" autoComplete='off' onSubmit={handleSubmitBintang}>
                                <input className='input' type="text" placeholder='Username'
                                    onChange={(e) => setUsernameBintang(e.target.value)} value={usernameBintang} />
                                <div className="Server">
                                    <input className='input' type="tel" placeholder='ID'
                                        onChange={(e) => setIdBintang(e.target.value)} value={idBintang} />
                                    <input className='input' type="tel" placeholder='Server'
                                        onChange={(e) => setServerBintang(e.target.value)} value={serverBintang} />
                                </div>
                                <select value={selectedOptionBintang} style={{ marginBottom: "5px" }} onChange={handleChangeBintang} className="custom-select">
                                    <option value="error">Pilih Rank</option>
                                    <option value="Elite">Elite</option>
                                    <option value="Master">Master</option>
                                    <option value="Grandmaster">Grandmaster</option>
                                    <option value="Epic">Epic</option>
                                    <option value="Legend">Legend</option>
                                    <option value="Mythic">Mythic</option>
                                </select>
                                <br></br>
                                <input className='input' type="tel" placeholder='Jumlah Bintang'
                                    onChange={(e) => setJumlahBintang(e.target.value)} value={jumlahBintang} />
                                <div className="Submit">
                                    <button className='button-80' onClick={() => setHargaBintang(true)}>Harga</button >
                                    <button className='button-80' onClick={() => setPopupBintang(true)} >Kirim</button >
                                </div>
                            </form>
                        </div>
                    </div>
                    {
                        popupBintang &&
                        <div>
                            <div className="popup-card">
                                <div className="popup-header">
                                    <h3>Terimakasih</h3>
                                    <button className='close' style={{ color: "black", fontSize: "25px" }} onClick={handleClosebintang}><SlClose /></button>
                                </div>
                                <div className="popup-body">
                                    <p>
                                        Terimakasih sudah melakukakan pemesanan, untuk konfirmasi lebih lanjut silahkan hubungi lewat Whatsapp.
                                    </p>
                                    <button className='button'><BsWhatsapp /> Whatsapp</button>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        hargaBintang &&
                        <div>
                            <div className="popup-card">
                                <div className="popup-header">
                                    <h3>List Harga</h3>
                                    <button className='close' style={{ color: "black", fontSize: "25px" }} onClick={handleCloseHargaBintang}><SlClose /></button>
                                </div>
                                <div className="popup-body">
                                    <ul>
                                        <li><span>Elite : Rp 1.000</span></li>
                                        <li><span>Master : Rp 2.000</span></li>
                                        <li><span>Grandmaster : Rp 3.000</span></li>
                                        <li><span>Epic : Rp 4.000</span></li>
                                        <li><span>Legend : Rp 5.000</span></li>
                                        <li><span>Mythic : Rp 5.500</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>) : (


                    <div className="Jasa-Content">

                        {/* Joki paketan */}
                        <div className="Card">
                            <div className="Card-Title">
                                <h5>Jasa Joki Paket</h5>
                            </div>
                            <div className='Card-Center'>
                                <form action="#" autoComplete='off' onSubmit={handleSubmitPaket}>
                                    <input className='input' type="text" placeholder='Username'
                                        onChange={(e) => setUseramePaket(e.target.value)} value={usernamePaket}
                                    />
                                    <div className="Server">
                                        <input className='input' type="tel" placeholder='ID'
                                            onChange={(e) => setIdPaket(e.target.value)} value={idPaket}
                                        />
                                        <input className='input' type="tel" placeholder='Server'
                                            onChange={(e) => setServerPaket(e.target.value)} value={serverPaket}
                                        />
                                    </div>
                                    <div>
                                        <select value={selectedOptionPaket} onChange={handleChangePaket} className="custom-select" >
                                            <option value="error">Pilih Rank</option>
                                            <option value="Master-GM">Master-GM</option>
                                            <option value="GM-Epic">GM-Epic</option>
                                            <option value="Epic-Legend">Epic-Legend</option>
                                            <option value="Legend-Mythic">Legend-Mythic</option>
                                        </select>
                                    </div>
                                    <div className="Submit ">
                                        <button className='button-80' onClick={() => setHargaPaket(true)} >Harga</button >
                                        <button className='button-80' onClick={() => setPopupPaket(true)} >Kirim</button >
                                    </div>
                                </form>
                            </div>
                        </div>
                        {
                            popupPaket &&
                            <div>
                                <div className="popup-card">
                                    <div className="popup-header">
                                        <h3>Terimakasih</h3>
                                        <button className='close' style={{ color: "black", fontSize: "25px" }} onClick={handleClosePaket}><SlClose /></button>
                                    </div>
                                    <div className="popup-body">
                                        <p>
                                            Terimakasih sudah melakukakan pemesanan, untuk konfirmasi lebih lanjut silahkan hubungi lewat Whatsapp.
                                        </p>
                                        <button className='button'><BsWhatsapp /> Whatsapp</button>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            hargaPaket &&
                            <div>
                                <div className="popup-card">
                                    <div className="popup-header">
                                        <h3>List Harga</h3>
                                        <button className='close' style={{ color: "black", fontSize: "25px" }} onClick={handleCloseHargaPaket}><SlClose /></button>
                                    </div>
                                    <div className="popup-body">
                                        <ul>
                                            <li><span>Master-GM : Rp 50.000</span></li>
                                            <li><span>Gm-Epic : Rp 70.000</span></li>
                                            <li><span>Epic-Legend : Rp 125.000</span></li>
                                            <li><span>Legend-Mythic : Rp 225.000</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }

                        {/* Joki per bintang */}
                        <div className="Card">
                            <div className="Card-Title">
                                <h5>Jasa Joki per Bintang</h5>
                            </div>
                            <div className='Card-Center'>
                                <form action="#" autoComplete='off' onSubmit={handleSubmitBintang}>
                                    <input className='input' type="text" placeholder='Username'
                                        onChange={(e) => setUsernameBintang(e.target.value)} value={usernameBintang} />
                                    <div className="Server">
                                        <input className='input' type="tel" placeholder='ID'
                                            onChange={(e) => setIdBintang(e.target.value)} value={idBintang} />
                                        <input className='input' type="tel" placeholder='Server'
                                            onChange={(e) => setServerBintang(e.target.value)} value={serverBintang} />
                                    </div>
                                    <select value={selectedOptionBintang} style={{ marginBottom: "5px" }} onChange={handleChangeBintang} className="custom-select">
                                        <option value="error">Pilih Rank</option>
                                        <option value="Elite">Elite</option>
                                        <option value="Master">Master</option>
                                        <option value="Grandmaster">Grandmaster</option>
                                        <option value="Epic">Epic</option>
                                        <option value="Legend">Legend</option>
                                        <option value="Mythic">Mythic</option>
                                    </select>
                                    <br></br>
                                    <input className='input' type="tel" placeholder='Jumlah Bintang'
                                        onChange={(e) => setJumlahBintang(e.target.value)} value={jumlahBintang} />
                                    <div className="Submit">
                                        <button className='button-80' onClick={() => setHargaBintang(true)}>Harga</button >
                                        <button className='button-80' onClick={() => setPopupBintang(true)} >Kirim</button >
                                    </div>
                                </form>
                            </div>
                        </div>

                        {
                            popupBintang &&
                            <div>
                                <div className="popup-card">
                                    <div className="popup-header">
                                        <h3>Terimakasih</h3>
                                        <button className='close' style={{ color: "black", fontSize: "25px" }} onClick={handleClosebintang}><SlClose /></button>
                                    </div>
                                    <div className="popup-body">
                                        <p>
                                            Terimakasih sudah melakukakan pemesanan, untuk konfirmasi lebih lanjut silahkan hubungi lewat Whatsapp.
                                        </p>
                                        <button className='button'><BsWhatsapp /> Whatsapp</button>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            hargaBintang &&
                            <div>
                                <div className="popup-card">
                                    <div className="popup-header">
                                        <h3>List Harga</h3>
                                        <button className='close' style={{ color: "black", fontSize: "25px" }} onClick={handleCloseHargaBintang}><SlClose /></button>
                                    </div>
                                    <div className="popup-body">
                                        <ul>
                                            <li><span>Elite : Rp 1.000</span></li>
                                            <li><span>Master : Rp 2.000</span></li>
                                            <li><span>Grandmaster : Rp 3.000</span></li>
                                            <li><span>Epic : Rp 4.000</span></li>
                                            <li><span>Legend : Rp 5.000</span></li>
                                            <li><span>Mythic : Rp 5.500</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div >
            <Footer />
        </div >
    )
}

export default Jasa