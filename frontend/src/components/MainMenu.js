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
                <div class="disc1">
                <div class="disc11">
                    <button class="knopka">
                        <p class="knopka1">ПЕРЕЙТИ</p>
                        <img src="img/Arrow 1 (2).png" alt="" class="Arrow1"/>
                    </button>
                    <p class="txt1">CREATIVITY.</p>
                    <p class="txt11">у нас такой вот сайт ахуенный мы дает возможность такуюто такуют</p>
                </div>
            </div>
            <div class="disc2">
                <div class="disc12">
                    <p class="txt2">CREATIVITY.</p>
                    <p class="txt22">у нас такой вот сайт ахуенный мы дает возможность такуюто такуют</p>
                </div>
            </div>
            <img src="img/object (3).png" alt="object1" class="object1"/>
            <img src="img/object (1).png" alt="object2" class="object2"/>
            </div>
        </div>
    );
};

export default App;
