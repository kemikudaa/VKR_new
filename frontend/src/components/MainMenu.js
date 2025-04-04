import './MainMenu.css';

const App = () => {
    return (
        <div>
            <div className="slide1">
                <div className="navbar">
                    <div className="menu">
                        <button className="menu_1">О НАС</button>
                        <button className="menu_2">КАТАЛОГ</button>
                        <button className="menu_3">КОЛЛЕКЦИИ</button>
                    </div>
                    <div className="logo">
                        <p className="logo_txt">apro__ ___tag.</p>
                    </div>
                    <button className="log-in-author">
                        <p className="Author">Я АВТОР</p>
                        <img src="/img/Arrow 1.png" alt="Arrow" className="img_line" />
                    </button>
                    <div className="linear-gradient"></div>
                </div>
            </div>

            <div className="main_info">
                <p className="txt">APROTAG</p>
                <img src="/img/Remove-bg.ai_1731065735842 1.png" alt="1" className="big_img" />
                <div className="quote">
                    <img src="/img/Group 4.png" alt="img_quote" className="img_quote" />
                    <p className="txt_quote">simple vision of future elements create your indiIndividuality</p>
                </div>
                {/* Если хочешь включить эти объекты: */}
                {/* <img src="/img/object.png" alt="object1" className="object1" />
                <img src="/img/object.png" alt="object2" className="object2" /> */}
                <div className="jewerly_info">
                    <div className="group1">
                        <p className="num1">/001</p>
                        <p className="jewl">RINGS</p>
                    </div>
                    <div className="group2">
                        <p className="num1">/002</p>
                        <p className="jewl">EARRINGS</p>
                    </div>
                    <div className="group3">
                        <p className="num1">/003</p>
                        <p className="jewl">CHAINS</p>
                    </div>
                    <div className="group4">
                        <p className="num1">/004</p>
                        <p className="jewl">CHAINS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
