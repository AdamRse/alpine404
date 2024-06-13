import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeSelection } from '../../store/slice';

import bgPure from "../../images/configurateur/modele/selection/pure.png";
import bgLegende from "../../images/configurateur/modele/selection/legende.png";

function Peinture() {

    const dispatch = useDispatch();
    const [selectHover, setSelectHover] = useState(false);
    const selection = useSelector(state => state.alpine.selection);

    // dispatch(
    //     manageActionFree(false)
    // );

    function selecteurMotion() {

    }
    function chooseAlpine(model){
        dispatch(
            changeSelection({section: "model", value:model})
        );
    }

    return (
        <section id="peinture">
            <img src="./../images/configurateur/modele/selection/pure.png" />
        </section>
    )
}

export default Peinture