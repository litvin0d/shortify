import s from "../scss/SendButton.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import axios, { AxiosResponse } from "axios";
import { setResult } from "../redux/resultSlice";

// interface ResponseData {
//
// }

export const SendButton = () => {
    const inputText = useSelector((state: RootState) => state.inputText.value);
    const [pending, setPending] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        const apiUrl = "https://158.160.42.48:2000/gpt";
        setPending(true);

        const requestData = {
            text: inputText,
        }

        axios.post(apiUrl, requestData, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response: AxiosResponse) => {
            dispatch(setResult(response.data.result))
            setPending(false);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <button className={s.root} onClick={handleButtonClick}>
            {pending ? "Ожидание..." : "Отправить"}
        </button>
    );
};