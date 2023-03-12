import s from "../scss/Output.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Output = () => {
    const result = useSelector((state: RootState) => state.result.value);

    return (
        <div className={s.root}>
            <p className={result ? s.done : ""}>{result ? result : "Результат"}</p>
        </div>
    );
}