
import { amirtest } from '../../functions/HomepageF';

export default function HomePage() {

    return (
        <div>
            home page...
            <button onClick={() => amirtest(sessionStorage["token"])}>amir test</button>
        </div >
    )
}