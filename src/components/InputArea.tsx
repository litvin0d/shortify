import { useRef } from "react";
import type { SyntheticEvent } from "react";
import { setInputText } from "../redux/inputTextSlice";
import { useDispatch } from "react-redux";

import s from "../scss/InputArea.module.scss";


export const InputArea = () => {
    const refTextArea = useRef<HTMLTextAreaElement>(null);
    const dispatch = useDispatch();

    const onChangeHandler = (e: SyntheticEvent) => {
        const target = e.target as HTMLTextAreaElement;
        const currentText = target.value;
        if (currentText.split(" ").length >= 50) {
            dispatch(setInputText(currentText));
        } else {
            dispatch(setInputText("Слишком короткий текст!"));
        }
    };

    return (
        <textarea ref={refTextArea} className={s.root} placeholder={"Вставьте текст или перетащите документ..."}
                  onChange={onChangeHandler} />
    );
};