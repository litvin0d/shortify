import { Header } from "./Header";
import { InputArea } from "./InputArea";
import { SendButton } from "./SendButton";
import { Output } from "./Output";
import { Footer } from "./Footer";
import s from "../scss/Wrapper.module.scss";
import { Options } from "./Options";

export const Wrapper = () => {
    return (
        <div className={s.root}>
            <Header />
            <InputArea />
            <div className={s.buttons}>
                <Options />
                <SendButton />
            </div>
            <Output />
            <Footer />
        </div>
    )
}