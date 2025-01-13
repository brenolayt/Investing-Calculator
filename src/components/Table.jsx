import { formatter } from "../utils";

export default function Table({ content }) {
    const arr = [{ tot: content["INITIAL INVESTMENT"], interest: 0, totInterest: 0 }];
    
    for (let i = 0; i < content["DURATION"]; i++){
        let inter = arr[i].tot * (content["EXPECTED RETURN"] / 100);
        let totVal = arr[i].tot + content["ANNUAL INVESTMENT"] + inter;
        let totInter = arr[i].totInterest + inter;
        arr.push({tot: totVal, interest : inter, totInterest : totInter});
    }

    return (
        <>
            <table className="text-white mt-12 w-[55vw] overflow-auto">
                <thead className="text-yellow-400 text-xl sticky top-0 bg-opacity-60 bg-gray-900">
                    <tr>
                        <th className="py-6 px-3">Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody className="text-lg">
                    {arr.map((el, index) => {
                        if (index == 0) return;
                        return (
                            <tr key={index} className="justify-self-center text-center">
                                <td>{ index }</td>
                                <td>{ formatter.format(el.tot.toFixed(0)) }</td>
                                <td>{ formatter.format(el.interest.toFixed(0)) }</td>
                                <td>{ formatter.format(el.totInterest.toFixed(0)) }</td>
                                <td>{ formatter.format(((content["INITIAL INVESTMENT"] + (content["ANNUAL INVESTMENT"] * index)).toFixed(0))) }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
