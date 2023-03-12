import s from "../scss/Header.module.scss";

export const Header = () => {
    return (
        <div className={s.root}>
            <h1>Shortify</h1>
            <p>AI-инструмент для сокращения больших объемов текста до коротких и понятных фраз, используя ограниченный
               набор символов. Получайте более четкие и легко усваиваемые высказывания без необходимости тратить много
               времени на чтение и понимание длинных текстов.</p>
        </div>
    );
};