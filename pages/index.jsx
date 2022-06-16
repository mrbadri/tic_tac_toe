import { FormattedMessage } from "react-intl";
import Landing from "../src/components/landing";

export default function Home() {
    return (
        <>
            <div className="center flex-col h-screen w-screen max-w-screen">
                <h1>
                    <FormattedMessage id="tic-tac-toe" />
                </h1>
                <p className="w-96 text-[10px] text-justify">
                    <FormattedMessage id="lorem" />
                </p>
            </div>

            <Landing />
        </>
    );
}
