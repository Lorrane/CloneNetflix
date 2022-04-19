import React from "react";
import "./styles.css";

function Header ({fundo}) {
    return (
        <header className={fundo ? 'black' : ''}>
            <div className="logo">
                <a href="/">
                    <img src="http://img.ibxk.com.br/2021/12/01/01021902421007.webp?ims=352x208" alt="Logo Netflix" />
                </a>
            </div>
            <div className="user">
                <a href="/">
                    <img src="https://pbs.twimg.com/media/Ev0Fa_MXAAAREWR.jpg" alt="Imagem do Perfil" />
                </a>
            </div>
        </header>
    );
}

export default Header;