import GuessNumber from "./guessNumber/GuessNumber";
import GuessUngiven from "./guessUngiven/GuessUngiven";

export default function GuessInfo() {
    return (
        <div>
            <div className="grid grid-cols-7 gap-1 text-center">
                <GuessNumber guessCounter={1}/>
                <GuessUngiven/>
                <GuessUngiven/>
                <GuessUngiven/>
                <GuessUngiven/>
                <GuessUngiven/>
            </div>
        </div>
    )
}