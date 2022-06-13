import { FormattedMessage } from "react-intl";
import Landing from "../src/components/landing";

export default function Home() {
    return (
        <>
            <div className="center h-screen w-screen max-w-screen">
                <h1>
                    <FormattedMessage id="tic-tac-toe" />
                </h1>
                <p className="w-96 text-[10px] text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <Landing />
        </>
    );
}
