import { useEffect, useState } from "react";
function UseEffectDemo() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
    return (
        <h1>The page has rendered {count} times!!</h1>
        // the page gets automatically rendered
    );

}
export default UseEffectDemo;