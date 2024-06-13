import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeSelection } from '../../store/slice';

import bgPure from "../../images/configurateur/modele/selection/pure.png";
import bgLegende from "../../images/configurateur/modele/selection/legende.png";

function SelecteurAlpine() {

    const dispatch = useDispatch();
    const [selectHover, setSelectHover] = useState(false);
    const selection = useSelector(state => state.alpine.selection);

    function selecteurMotion() {
        let defaultLeftMargin = 10;
        if (selectHover === 0) defaultLeftMargin = -defaultLeftMargin * 2
        else if (selectHover === 1) defaultLeftMargin = 0;
        else defaultLeftMargin = -defaultLeftMargin
        console.log(selectHover, defaultLeftMargin);
        return { left: defaultLeftMargin + "%" }
    }
    function chooseAlpine(model){
        dispatch(
            changeSelection({section: "model", value:model})
        );
    }

    return (
        <section id="choix">
            <div className="conteneur" style={selecteurMotion()}>
                <img src={bgPure} alt="Pure" />
                <img
                    src={bgLegende}
                    style={{ transform: "scaleX(-1)" }}
                    alt="Legend"
                />
            </div>
            <div className="conteneur-images">
                <div className="selecteur-card">
                    <img
                        src={bgPure}
                        onMouseEnter={() => setSelectHover(1)}
                        onMouseLeave={() => setSelectHover(false)}
                        onClick={() => chooseAlpine("pure")}
                        alt="Pure"
                    />
                </div>

                <div className="selecteur-card">
                    <img
                        src={bgLegende}
                        style={{ transform: "scaleX(-1)" }}
                        onMouseEnter={() => setSelectHover(0)}
                        onMouseLeave={() => setSelectHover(false)}
                        onClick={() => chooseAlpine("legende")}
                        alt="Legend"
                    />
                </div>
            </div>
        </section>
    )
}

export default SelecteurAlpine